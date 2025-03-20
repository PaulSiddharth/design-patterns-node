import { LOG_LEVEL, LOGGER_TYPE, SINK_TYPE } from "../constants/Logger.constants";

export interface IConfiguration {
    ts_format: string;
    log_level: LOG_LEVEL;
    logger_type: LOGGER_TYPE;
    buffer_size: number;
    sink_type: SINK_TYPE;
}