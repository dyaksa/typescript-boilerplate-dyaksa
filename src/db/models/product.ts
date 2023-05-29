import database from '../db';
import sequelize from 'sequelize';

const databaseInstance = new database().database;

// define product interface
export interface ProductInterface {
  name: string;
  description: string;
  url: string;
  category: string;
  pk_name: string;
  address: string;
  phone: string;
  email: string;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

// Sequelize Model
export const Product: sequelize.Model<ProductInterface, {}> =
  databaseInstance.define<ProductInterface, {}>(
    'Product',
    {
      id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: sequelize.STRING,
        allowNull: true,
      },
      url: {
        type: sequelize.STRING,
        allowNull: true,
      },
      category: {
        type: sequelize.STRING,
        allowNull: true,
      },
      pk_name: {
        type: sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: sequelize.STRING,
        allowNull: true,
      },
      created_by: {
        type: sequelize.STRING,
        allowNull: true,
      },
      updated_by: {
        type: sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
