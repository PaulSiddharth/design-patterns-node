
import { Logger } from "../models/Logger";
import { IMessageInfo } from "../schema/message";
import { ILoggingStrategy } from "./ILoggerStrategy";

export class AsyncLoggingStrategy implements ILoggingStrategy {
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    async log(messageInfo: IMessageInfo): Promise<void> {
        // check the buffer size
        if (this.logger.buffer.length <= this.logger.buffer_size) {
            this.logger.buffer.push(messageInfo.message);
            this.logger.publishMessage(messageInfo.message, messageInfo);
        }
        return;
    }
}
