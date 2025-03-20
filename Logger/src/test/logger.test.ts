// write test for FileSink

import { FileSink } from '../FileSink';
import * as fs from 'fs';

describe('FileSink', () => {
  let fileSink: FileSink;
  let writeSpy: jest.SpyInstance;

  beforeEach(() => {
    fileSink = new FileSink();
    writeSpy = jest.spyOn(fs, 'appendFileSync');
  });

  afterEach(() => {
    writeSpy.mockRestore();
  });

  it('should write to file', () => {
    fileSink.write('test');
    expect(writeSpy).toHaveBeenCalledWith('log.txt', 'test');
  });
});

