import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('file .env not found');
}

export default {
  port: parseInt(process.env.PORT, 10),
};
