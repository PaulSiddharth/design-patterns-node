import { LOG_LEVEL } from "../constants/Logger.constants";

export interface IMessageInfo {
    message: string;
    timestamp: string;
    logLevel: LOG_LEVEL;
}