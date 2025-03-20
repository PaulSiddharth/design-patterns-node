import { LOG_LEVEL, LOGGER_TYPE, SINK_TYPE } from "./constants/Logger.constants";
import { STDOUTSink } from "./models/STDOUTSink";
import { LoggerHandler } from "./service/loggerHandler";
import { Worker } from 'worker_threads';
const worker = new Worker('./worker', {workerData: {num: 5}});
worker.on('message', (result: string) => {
console.log('square of 5 is :', result);
})
worker.on("error", (msg: string) => {
    console.log(msg);
 });


async function main(){

    // create logger handler
    const logger = new LoggerHandler({
        ts_format: "YYYY-MM-DD HH:mm:ss",
        log_level: 1,
        logger_type: LOGGER_TYPE.SYNC,
        buffer_size: 5,
        sink_type: 1
    });

    // create stdout sink
    const stdoutSink = new STDOUTSink(LOG_LEVEL.INFO, SINK_TYPE.STDOUT);
    
    logger.addSink(stdoutSink);
    // logger.info("Hello World");
    
    // for(let i=0; i< 10; i++){
    //     logger.info(`${i} - Hello World`)
    // }

    // concurrent log using promise all
    const promises = [];
    // for(let i=0; i< 10; i++){
    //     promises.push(logger.info(`${i} - Hello World`))
    // }

    
    
}

main()