// app/config/db.config.js
export default {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "db",
    PORT: 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};