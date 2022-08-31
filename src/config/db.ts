import mysql from 'promise-mysql';
const DB_HOST="localhost"
const DB_PORT="3306"
const DB_USER="ci_jest_user"
const DB_PASSWORD="ci_jest_password"
const DB_NAME="ci_jest_db"


/**
 * Initialise the MySQL connection pool
 */
export const openConnection = async () => {
    return mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        port: Number(DB_PORT),
        password: DB_PASSWORD,
        database: DB_NAME,
    });
};
