import { parentPort, workerData } from 'worker_threads';

const num = workerData.num;
const square = num * num;

if (parentPort) {
    parentPort.postMessage(square);
}