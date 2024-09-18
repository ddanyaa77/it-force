import { Request } from 'express';
export declare const GlobalResponseError: (statusCode: number, message: string, code: string, request: Request) => IResponseError;
export interface IResponseError {
    statusCode: number;
    message: string;
    code: string;
    timestamp: string;
    path: string;
    method: string;
}
