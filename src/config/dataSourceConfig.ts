import { DataSourceOptions} from 'typeorm';

// TODO: Env var file
const DB_HOST="localhost"
const DB_PORT="3306"
const DB_USER="root"
const DB_PASSWORD="ci_jest_password"
const DB_NAME="ci_jest_db"

export class Config{


getDataSourceConfig(cli = false): DataSourceOptions {

    const entitiesStr = cli
        ? 'src/models/**/*.entity{.ts,.js}'
        : 'dist/src/models/**/*.entity.js';
    const migrationsStr = cli
        ? 'src/migration/*.ts'
        : 'dist/src/migration/*.js';

    return {
        type: 'mysql',
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        synchronize: false,
        entities: [entitiesStr],
        migrationsTableName: 'migration',
        migrations: [migrationsStr],
    };
}

}
