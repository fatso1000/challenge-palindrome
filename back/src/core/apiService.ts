import HttpStatus from "../types/httpStatusCode";
import { Response } from "express";

enum StatusCode {
  SUCCESS = "10000",
  FAILURE = "10001",
  RETRY = "10002",
}

export class ApiResponse {
  constructor(
    protected statusCode: StatusCode,
    protected status: HttpStatus,
    protected message: string
  ) {}

  protected prepare<T extends ApiResponse>(
    res: Response,
    response: T
  ): Response {
    return res.status(this.status).json(response);
  }

  public send(res: Response): Response {
    return this.prepare<ApiResponse>(res, this);
  }
}

export class SuccessResponse<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.SUCCESS, HttpStatus.CREATED, message);
  }

  send(res: Response): Response {
    return super.prepare<SuccessResponse<T>>(res, this);
  }
}

export class ErrorResponse<T> extends ApiResponse {
  constructor(message: string, private data: T) {
    super(StatusCode.FAILURE, HttpStatus.BAD_REQUEST, message);
  }

  send(res: Response): Response {
    return super.prepare<ErrorResponse<T>>(res, this);
  }
}
