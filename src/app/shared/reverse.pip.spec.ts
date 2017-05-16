import { ReversePipe } from './reverse.pipe';
describe('Reverse Pipe', () => {
  it('should create pipe', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toBeTruthy('olleh');
  });
});