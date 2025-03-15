import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  export interface Request {
    user?: JwtPayload | string | object; // Tipo genérico para o payload do JWT
  }
}