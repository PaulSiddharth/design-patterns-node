import { ISink } from "./ISink";
import { LOG_LEVEL } from "./LogLevel";

class Logger {


    // singleton instance
    private static instance: Logger;
    sinks: ISink[] = [];
    logLevel: LOG_LEVEL = LOG_LEVEL.INFO;

    // private constructor
    private constructor() { }

    // static method to get singleton instance
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }

        return Logger.instance;
    }

    addSink(sink: ISink) {
        this.sinks.push(sink);
    }

    log(message: string, logLevel: LOG_LEVEL) {
        // check log level
        if (LOG_LEVEL[logLevel] < LOG_LEVEL[this.logLevel]) {
            return;
        }
        this.sinks.forEach(sink => sink.write(message));
    }

    format(message: string): string {
        return `(${new Date().toISOString()}) | [${this.logLevel}] | ${message}`;
    }
}

