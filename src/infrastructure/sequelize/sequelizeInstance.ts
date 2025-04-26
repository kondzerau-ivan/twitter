import { Sequelize } from 'sequelize';

const DB_NAME = 'twitter';
const DB_USER = 'master';
const DB_PASSWORD = 'master123';
const DB_HOST = 'localhost';
const DB_PORT = 5432;

export const sequelizeInstance = new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD as string,
  {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: 'postgres',
    logging: false
  }
);
