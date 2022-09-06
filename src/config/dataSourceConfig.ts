import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";

// TODO: Env var file
const DB_HOST="localhost"
const DB_PORT="3306"
const DB_USER="ci_jest_db_user"
const DB_PASSWORD="ci_jest_db_password"
const DB_NAME="ci_jest_db"

export class DataSource {

    static getConfig(cli = false): MysqlConnectionOptions {
        let dbName = DB_NAME;
        let skipMigrations = false;

        if (process.env.JEST_WORKER_ID) {
            skipMigrations = true;
            dbName += `_${process.env.JEST_WORKER_ID}`;
        }
        const entitiesStr = cli
            ? 'src/models/**/*.entity{.ts,.js}'
            : 'dist/models/**/*.entity.js';
        let migrations = cli
            ? ['src/migration/*.ts']
            : ['dist/migration/*.js'];

        if(skipMigrations){
            migrations = []
        }

        return {
            type: 'mysql',
            host: DB_HOST,
            port: Number(DB_PORT),
            username: DB_USER,
            password: DB_PASSWORD,
            database: dbName,
            synchronize: false,
            entities: [entitiesStr],
            migrationsTableName: 'migration',
            migrations,
            cli: {
                migrationsDir: 'src/migration',
            },
            charset: 'utf8mb4'
        };
    }

}
