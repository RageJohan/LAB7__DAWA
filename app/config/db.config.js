// app/config/db.config.js
export default {
    HOST: process.env.DB_HOST || "dpg-d9h2fqq4456c738cc1o9-a.oregon-postgres.render.com",
    USER: process.env.DB_USER || "root",
    PASSWORD: process.env.DB_PASSWORD || "30Jrbtfpv7PJSVqVvhdd0dru07rqjI02",
    DB: process.env.DB_NAME || "db_3vzp",
    PORT: process.env.DB_PORT || 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};