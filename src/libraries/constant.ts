import config from '../config';

export const SUC001 = 'Data has been saved successfully';
export const SUC002 = 'Data has been updated successfully';
export const SUC003 = 'Data has been deleted successfully';
export const SUC004 = 'Data has been retrieved successfully';

export const ERR000 = 'Oops..';
export const ERR001 = 'Failed to save data';
export const ERR002 = 'Failed to update data';
export const ERR003 = 'Failed to delete data';
export const ERR004 = 'Failed to retrieved data';

export const MINIO_ENDPOINT = config.minio.endpoint;
export const MINIO_PORT = config.minio.port;
export const MINIO_ACCESS_KEY = config.minio.accessKey;
export const MINIO_SECRET_KEY = config.minio.secretKey;
export const MINIO_BUCKET = config.minio.bucket;
export const MINIO_PUBLIC_URL = config.minio.publicUrl;

export const JWT_KEY = config.jwt.key;
export const SALT: string | undefined = config.jwt.salt;
