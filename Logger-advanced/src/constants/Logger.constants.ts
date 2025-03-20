// export enum logger_type as ASYNC and SYNC;

export enum LOGGER_TYPE {
    ASYNC,
    SYNC
}

// export const sink types as STDOUT,  database, file;

export enum SINK_TYPE {
    STDOUT,
    DATABASE,
    FILE
}

// export const log levels as DEBUG < INFO < WARN < ERROR with values 0, 1, 2, 3 respectively
export enum LOG_LEVEL {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

// reverse mapping for log levels
export const LOG_LEVEL_MAP = {
    0: "DEBUG",
    1: "INFO",
    2: "WARN",
    3: "ERROR"
}