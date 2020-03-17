import { Action, DocumentSnapshot } from '@angular/fire/firestore';

export enum ErrorType {
  NOT_FOUND,
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

export abstract class Errors {
  static checkExists(snapshot: Action<DocumentSnapshot<any>>, message: string) {
    if (!snapshot || !snapshot.payload.exists) {
      throw new NotFoundError(message);
    }
  }
}

