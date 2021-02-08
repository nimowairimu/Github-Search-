import { DatePipePipe } from './date-pipe.pipe';

describe('Date=pipePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipePipe();
    expect(pipe).toBeTruthy();
  });
});
