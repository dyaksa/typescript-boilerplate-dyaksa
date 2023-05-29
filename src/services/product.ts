import { Product, ProductInterface } from '../db/models/product';
import { Logger } from '../libraries/logger';
import { Request } from 'express';
import { Pagination } from '../libraries/pagination';
import ThrowError from '../libraries/throwError';

export class ProductService {
  constructor() {}

  /**
   * Read All
   * @returns List
   */

  async readAll(req: Request) {
    const logger = new Logger();
    let pagination: Pagination = {
      data: [],
      page: 0,
      total_page: 0,
    };

    try {
      const { page, limit } = req.query;
      const offset = (page - 1) * limit;
    } catch (err) {
      logger.error(err);
    }

    return pagination;
  }

  /**
   * Read One By Id
   * @returns List
   */
  async read(id: string) {
    try {
      const product = await Product.findById(id);
    } catch (err) {}
  }
}
