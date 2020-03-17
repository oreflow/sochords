import { Action, DocumentSnapshot } from '@angular/fire/firestore';

export enum ErrorType {
  UNKNOWN_ERROR_TYPE,
  NOT_FOUND,
  UNAUTHORIZED,
}

export class SoChordError extends Error  {
  type: ErrorType;
  message: string
  constructor(type: ErrorType, message: string) {
    super(message);
    this.type = type;
  }
}

export class NotFoundError extends SoChordError {
  constructor(message: string) {
    super(ErrorType.NOT_FOUND, message);
  }
}

export class UnauthorizedError extends SoChordError {
  constructor(message: string) {
    super(ErrorType.UNAUTHORIZED, message);
  }
}

export abstract class Errors {
  static checkExists(snapshot: Action<DocumentSnapshot<any>>, message: string) {
    if (!snapshot || !snapshot.payload.exists) {
      throw new NotFoundError(message);
    }
  }

  static getErrorType(error: Error): any {
    if (error instanceof SoChordError) return ErrorType.NOT_FOUND;
    if (error.message.indexOf('Missing or insufficient permissions') >= 0)
      return ErrorType.UNAUTHORIZED;
    return ErrorType.UNKNOWN_ERROR_TYPE;
  }
}

