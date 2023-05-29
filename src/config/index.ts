import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('file .env not found');
}

export default {
  port: parseInt(process.env.PORT, 10),
  logs: {
    morgan: process.env.MORGAN || 'dev',
  },
  postgres: {
    host: process.env.DB_HOST || 'localhost',
    name: process.env.DB_NAME || 'db_name',
    user: process.env.DB_USER || 'db_user',
    pass: process.env.DB_PASS || '',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    maxPool: parseInt(process.env.DB_MAX_POOL, 10) || 10,
    minPool: parseInt(process.env.DB_MIN_POOL, 10) || 0,
  },
  jwt: {
    key: process.env.JWT_KEY,
    salt: process.env.SALT,
  },
  minio: {
    endpoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT, 10),
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
    bucket: process.env.MINIO_BUCKET,
    publicUrl: process.env.MINIO_PUBLIC_URL,
  },
};
