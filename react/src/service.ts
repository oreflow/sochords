import {PickInstruction} from '../gen/proto/messages_pb';

export class SchordService {

  constructor() {}

  getInstruction(): PickInstruction {
    return new PickInstruction();
  }

}
