import { ISink } from './ISink';
import * as fs from 'fs';


export class FileSink implements ISink {
  write(message: string): void {
    fs.appendFileSync('log.txt', message);
  }
}