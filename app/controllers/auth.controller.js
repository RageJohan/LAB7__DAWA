// Importa el objeto de modelos (User, Role, etc.) desde la carpeta models
import db from "../models/index.js";

// Importa la librería jsonwebtoken para generar tokens JWT
import jwt from "jsonwebtoken";

// Importa bcryptjs para encriptar y comparar contraseñas
import bcrypt from "bcryptjs";

// Importa la configuración del secreto JWT desde un archivo de configuración
import authConfig from "../config/auth.config.js";

// Extrae los modelos User y Role desde el objeto db
const { user: User, role: Role } = db;

// Controlador para el registro de usuarios
export const signup = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;

        // Encripta la contraseña
        const hashedPassword = await bcrypt.hash(password, 8);

        // Crea el nuevo usuario
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        // Asignación de roles personalizados si se envían en el body
        if (roles && roles.length > 0) {
            const foundRoles = await Role.findAll({
                where: {
                    name: roles,
                },
            });

            await user.setRoles(foundRoles);
        } else {
            // Rol por defecto: "user"
            const userRole = await Role.findOne({ where: { name: "user" } });
            await user.setRoles([userRole]);
        }

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error en signup:", error);
        res.status(500).json({ message: error.message });
    }
};

// Controlador para el inicio de sesión
export const signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Busca el usuario por nombre de usuario e incluye sus roles
        const user = await User.findOne({
            where: { username },
            include: {
                model: Role,
                as: "roles",
            },
        });

        if (!user) {
            return res.status(404).json({ message: "User Not found." });
        }

        // Verifica la contraseña
        const passwordIsValid = await bcrypt.compare(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({
                accessToken: null,
                message: "Invalid Password!",
            });
        }

        // Genera el token JWT
        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 86400, // 24 horas
        });

        // Extrae los roles en formato "ROLE_ADMIN", "ROLE_USER", etc.
        const authorities = user.roles.map(role => `ROLE_${role.name.toUpperCase()}`);

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token,
        });
    } catch (error) {
        console.error("Error en signin:", error);
        res.status(500).json({ message: error.message });
    }
};
