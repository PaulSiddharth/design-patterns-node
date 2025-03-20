import { LOG_LEVEL, LOG_LEVEL_MAP, SINK_TYPE } from "../constants/Logger.constants";
import { IMessageInfo } from "../schema/message";
import { ISink } from "./Sink";

// Define the concrete class STDOUTSink that extends ISink
export class STDOUTSink extends ISink {

    // Constructor just calls the parent constructor

    constructor(log_level: LOG_LEVEL, sink_type: SINK_TYPE) {
        super(log_level, sink_type);
    }

    // Implement the save method to log messages to the console
    save(message: string, otherProps: IMessageInfo): void {
        console.log(this.formatMessage(message, otherProps));
    }

    // format message with timestamp and loge level : 14-02-2025-12-30-00 [INFO] System started
    formatMessage(message: string, otherProps: IMessageInfo): string {
        return `${otherProps.timestamp} [${LOG_LEVEL_MAP[otherProps.logLevel]}] ${message}`;
    }


}