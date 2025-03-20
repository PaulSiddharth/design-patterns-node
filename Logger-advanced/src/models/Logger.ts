import { LOGGER_TYPE, LOG_LEVEL, SINK_TYPE } from "../constants/Logger.constants";
import { IConfiguration } from "../schema/logger";
import { IMessageInfo } from "../schema/message";
import { ISink } from "./Sink";



export class Logger {

    // default configuration
    public ts_format: string = 'YYYY-MM-DD HH:mm:ss.SSS';
    protected log_level: LOG_LEVEL = LOG_LEVEL.INFO;
    public logger_type: LOGGER_TYPE = LOGGER_TYPE.SYNC;
    public buffer_size: number = 10;
    public buffer: string[] = [];
    protected sink_type: SINK_TYPE = SINK_TYPE.STDOUT;
    private sinks: ISink[] = [];


    // create singleton instance
    protected static instance: Logger;
    private constructor() { }
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // set configuration
    public setConfiguration(config: IConfiguration) {
        this.ts_format = config.ts_format;
        this.log_level = config.log_level;
        this.logger_type = config.logger_type;
        this.buffer_size = config.buffer_size;
        this.sink_type = config.sink_type;
    }

    // update log level
    public updateLogLevel(log_level: LOG_LEVEL) {
        this.log_level = log_level;
    }

    // add sink
    public addSink(sink: ISink) {
        this.sinks.push(sink);
    }

    // get log level
    public getLogLevel(): LOG_LEVEL {
        return this.log_level;
    }

    // process message
    public canProcessLog(message: string, logLevel: LOG_LEVEL) {
        // check if log level is greater than or equal to the configured log level
        if (logLevel >= this.log_level) {
            // log the message
            return true
        }
    }


    public publishMessage(message: string, otherProps: IMessageInfo) {
        this.sinks.forEach(sink => {
            sink.save(message, otherProps);
        });
    }

}