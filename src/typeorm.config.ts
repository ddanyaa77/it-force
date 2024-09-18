import { DataSource, DataSourceOptions } from 'typeorm';

import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [`${__dirname}/migrations/*.ts`],
};

export const AppDataSource = new DataSource(config);

AppDataSource.initialize()
  .then(() => console.log(`Connected to Data Source!`))
  .catch((err) => {
    throw err;
  });
