import { Sequelize } from 'sequelize';
import config from '../config';

export default class Database {
  db: string;
  user: string;
  password: string;
  host: string;
  port: number;
  maxPool: number;
  minPool: number;
  database: Sequelize;

  constructor() {
    this.db = config.postgres.name;
    this.user = config.postgres.user;
    this.password = config.postgres.pass;
    this.host = config.postgres.host;
    this.port = config.postgres.port;
    this.maxPool = config.postgres.maxPool;
    this.minPool = config.postgres.minPool;

    this.database = new Sequelize(this.db, this.user, this.password, {
      host: this.host,
      dialect: 'postgres',
      dialectOptions: {
        encrypt: true,
      },
      port: this.port,
      logging: false,
      pool: {
        max: this.maxPool,
        min: this.minPool,
        acquire: 30000,
        idle: 10000,
      },
    });

    this.database
      .authenticate()
      .then(() => {
        console.log('Database connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });

    this.database.sync({});
  }
}
