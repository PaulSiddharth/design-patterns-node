import { ISink } from "./ISink";

class StdOutSink implements ISink {
    write(message: string): void {
        console.log(`Writing to stdout: ${message}`);
    }
}