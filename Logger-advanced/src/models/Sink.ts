
import { LOG_LEVEL, SINK_TYPE } from "../constants/Logger.constants";
import { IMessageInfo } from "../schema/message";

// Define the abstract class ISink
export abstract class ISink {
    constructor(public log_level: LOG_LEVEL, public sink_type: SINK_TYPE) {
        this.log_level = log_level;
        this.sink_type = sink_type;
    }

    // Abstract method to be implemented by subclasses
    abstract save(message: string, otherProps: IMessageInfo): void;

    getsink_type(): SINK_TYPE {
        return this.sink_type;
    }

    getlog_level(): LOG_LEVEL {
        return this.log_level;
    }
}
