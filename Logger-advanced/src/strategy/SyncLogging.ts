
import { Logger } from "../models/Logger";
import { IMessageInfo } from "../schema/message";
import { ILoggingStrategy } from "./ILoggerStrategy";

export class SyncLoggingStrategy implements ILoggingStrategy {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    // check the buffer size then only publish message
    async log(messageInfo: IMessageInfo): Promise<void> {
        this.logger.publishMessage(messageInfo.message, messageInfo);
    }
}
