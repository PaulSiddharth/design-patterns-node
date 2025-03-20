import { LOG_LEVEL, LOGGER_TYPE } from "../constants/Logger.constants";
import { Logger } from "../models/Logger";
import { ISink } from "../models/Sink";
import { IConfiguration } from "../schema/logger";
import moment from "moment";
import { IMessageInfo } from "../schema/message";
import { ILoggingStrategy } from "../strategy/ILoggerStrategy";
import { AsyncLoggingStrategy } from "../strategy/AsyncLogging";
import { SyncLoggingStrategy } from "../strategy/SyncLogging";



export class LoggerHandler {
    logerInstance: Logger;
    loggerStrategy: ILoggingStrategy; 

    constructor(config: IConfiguration) {
        this.logerInstance = Logger.getInstance();
        this.logerInstance.setConfiguration(config);
        this.loggerStrategy = this.logerInstance.logger_type === LOGGER_TYPE.ASYNC ?
         new AsyncLoggingStrategy(this.logerInstance) : new SyncLoggingStrategy(this.logerInstance);
    }

    setConfiguration(config: IConfiguration) {
        this.logerInstance.setConfiguration(config);
    }

    // add sink
    addSink(sink: ISink) {
        this.logerInstance.addSink(sink);
    }
    

    async info(message: string) {
        return this.processLog(message, LOG_LEVEL.INFO);
    }

    debug(message: string) {
        return this.processLog(message, LOG_LEVEL.DEBUG);
    }

    warn(message: string) {
        return this.processLog(message, LOG_LEVEL.WARN);
    }

    error(message: string) {
        return this.processLog(message, LOG_LEVEL.ERROR);
    }


    async processLog(message: string, logLevel: LOG_LEVEL) {

        // get message info
        const messageInfo: IMessageInfo = {
            message,
            timestamp: moment().format(this.logerInstance.ts_format),
            logLevel
        }

        // check if can process log
        if (this.logerInstance.canProcessLog(message, logLevel)) {
            return this.loggerStrategy.log(messageInfo);
        }
    }

}