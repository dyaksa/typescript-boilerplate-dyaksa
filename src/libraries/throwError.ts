export default class ThrowError extends Error {
  name: string;
  status: number;

  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = 500;
  }

  statusCode() {
    return this.status;
  }
}
