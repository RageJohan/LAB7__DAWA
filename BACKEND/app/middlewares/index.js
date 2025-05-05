//Importa todo lo exportado desde 'authJwt.js' como un objeto llamado 'authJwt'
//Esto incluye funciones como verifyToken, isAdmin, isModerator, etc., si estan exportadas desde ese archivo
import * as authJwt from "./authJwt.js";

//Importa directamente las funciones 'checkDuplicateUsernameOrEmail' y 'checkRolesExisted'
//desde el archivo 'verifySignUp.js' estas funciones probablemente validan datos del usuario durante el registro.
import { checkDuplicateUsernameOrEmail, checkRolesExisted } from "./verifySignUp.js";

//Rexxporta los middlewares importados para que puedas ser accedidos facilmente desde otros archivos
//por ejemplo puedes hacer: `import {authJwt, checkDuplicateUsernameOrEmail } from "./middlewares/index.js"
export { authJwt, checkDuplicateUsernameOrEmail, checkRolesExisted };