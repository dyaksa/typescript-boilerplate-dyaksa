import fs from 'fs';
import Path from 'path';
import Util from 'util';
import mime from 'mime';
const dir = './tmp';
const ReadFile = Util.promisify(fs.readFile);
const Minio = require('minio');

export class StoreIo {
  async upload(file: any, path: string, filename: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    await file.mv('tmp/' + file.md5);

    let endpoint = process.env.MINIO_ENDPOINT;
    let port = process.env.MINIO_PORT;
    let accessKey = process.env.MINIO_ACCESS_KEY;
    let secretKey = process.env.MINIO_SECRET_KEY;
    let bucket = process.env.MINIO_BUCKET;
    let public_url = process.env.MINIO_PUBLIC_URL;

    const mc = new Minio.Client({
      endPoint: endpoint,
      useSSL: true,
      port: port,
      accessKey: accessKey,
      secretKey: secretKey,
    });

    const contentType = mime.getType(filename);
    var metadata = { 'Content-Type': contentType };

    await mc.fPutObject(
      bucket,
      `${path}/${filename}`,
      `tmp/${file.md5}`,
      metadata
    );
    let uploaded = {
      extension: file.name.substr(file.name.lastIndexOf('.') + 1),
      url: `${public_url}/${bucket}/${path}/${filename}`,
    };

    return uploaded;
  }

  async uploadFromBuffer(
    file: any,
    path: string,
    filename: string,
    metadata: string
  ) {
    let endpoint = process.env.MINIO_ENDPOINT;
    let port = process.env.MINIO_PORT;
    let accessKey = process.env.MINIO_ACCESS_KEY;
    let secretKey = process.env.MINIO_SECRET_KEY;
    let bucket = process.env.MINIO_BUCKET;
    let public_url = process.env.MINIO_PUBLIC_URL;

    const minioClient = new Minio.Client({
      endPoint: endpoint,
      useSSL: true,
      port: port,
      accessKey: accessKey,
      secretKey: secretKey,
    });

    if (metadata) {
      await minioClient.putObject(
        bucket,
        path + '/' + filename,
        file,
        metadata
      );
    } else {
      await minioClient.putObject(bucket, path + '/' + filename, file);
    }

    let uploaded = {
      extension: filename.substr(filename.lastIndexOf('.') + 1),
      url: `${public_url}/${bucket}/${path}/${filename}`,
    };

    return uploaded;
  }
}
