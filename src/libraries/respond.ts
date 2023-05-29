import { Response } from 'express';

export class Respond {
  constructor() {}

  /**
   * Respond
   * @param res
   * @param statusCode
   * @param msg
   * @param meta
   */
  public respond(
    res: Response,
    statusCode: any | null,
    msg: string | null,
    meta: any | null
  ) {
    res.status(statusCode).send({
      status: true,
      code: statusCode,
      message: msg,
      meta: meta,
    });
  }

  /**
   * Send Response with data
   * @param {Object} res express response object
   * @param {Number} statusCode
   * @param {string} msg message
   * @param {Object} data
   * @param {Object} meta additional data
   * @api public
   */
  public respondData(
    res: Response,
    statusCode: number,
    msg: string | null,
    data: any | null,
    meta: any | null
  ) {
    res.status(statusCode).send({
      status: true,
      code: statusCode,
      message: msg,
      data: data,
      meta: meta,
    });
  }

  /**
   *
   * @param res
   * @param statusCode
   * @param msg
   * @param err
   * @param meta
   */
  public respondError(
    res: Response,
    statusCode: number,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    if (err) {
      err = JSON.stringify(err, [
        'stack',
        'message',
        'arguments',
        'type',
        'name',
        'body',
        'status',
        'statusCode',
      ]);
      err = JSON.parse(err);
    }

    res.status(statusCode).send({
      status: false,
      code: statusCode,
      message: msg,
      error: err,
      meta: meta,
    });
  }

  /**
   * Send success response, code:200
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} meta additional data
   * @api public
   */
  public resSuccess(res: Response, msg: string, meta: any | null) {
    msg = msg !== undefined ? msg : 'Success';
    this.respond(res, 200, msg, meta);
  }

  /**
   * Send success response with data
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} data
   * @param {Object} meta additional data
   * @api public
   */
  public resSuccessData(
    res: Response,
    msg: string,
    data: any | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Success';
    if (meta !== undefined) {
      meta.count = data.length;
    }

    this.respondData(res, 200, msg, data, meta);
  }

  /**
   * Send successful created response with data
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} data
   * @param {Object} meta additional data
   * @api public
   */
  public resCreated(
    res: Response,
    msg: string,
    data: any | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Created';
    this.respondData(res, 201, msg, data, meta);
  }

  /**
   * Send successful updated response with data
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} data
   * @param {Object} meta additional data
   * @api public
   */
  public resUpdated(
    res: Response,
    msg: string | null,
    data: any | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Updated';
    this.respondData(res, 200, msg, data, meta);
  }

  /**
   * Send not found response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resBadRequest = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Bad Request';
    this.respondError(res, 400, msg, err, meta);
  };

  /**
   * Send not found response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resUnauthorized = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Unauthorized';
    this.respondError(res, 401, msg, err, meta);
  };

  /**
   * Send forbidden response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resForbidden = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Forbidden';
    this.respondError(res, 403, msg, err, meta);
  };

  /**
   * Send not found response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resNotFound = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Not found';
    this.respondError(res, 404, msg, err, meta);
  };

  /**
   * Send unprocessable entity response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resUnprocessableEntity = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Unprocessable Entity';
    this.respondError(res, 422, msg, err, meta);
  };

  /**
   * Send not found response
   * @param {Object} res express response object
   * @param {string} msg message
   * @param {Object} err
   * @param {Object} meta additional data
   * @api public
   */
  public resInternalServerError = function (
    res: Response,
    msg: string | null,
    err: string | null,
    meta: any | null
  ) {
    msg = msg !== undefined ? msg : 'Internal Server Error';
    this.respondError(res, 500, msg, err, meta);
  };

  /**
   * Send error response with data
   * @param {Object} res express response object
   * @param {Number} statusCode
   * @param {string} msg message
   * @param {Object} err err object
   * @param {Object} meta additional data
   * @api public
   */
  public respondErrorWithData = function (
    res: Response,
    statusCode: number,
    msg: string | null,
    data: any | null,
    err: any | null,
    meta: any | null
  ) {
    if (err) {
      err = JSON.stringify(err, [
        'stack',
        'message',
        'arguments',
        'type',
        'name',
        'body',
        'status',
        'statusCode',
      ]);
      err = JSON.parse(err);
    }

    res.status(statusCode).send({
      status: false,
      code: statusCode,
      message: msg,
      data: data,
      error: err,
      meta: meta,
    });
  };
}
