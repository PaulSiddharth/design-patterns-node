import { IMessageInfo } from "../schema/message";

export interface ILoggingStrategy {
    log(messageInfo: IMessageInfo): Promise<void>;
}
