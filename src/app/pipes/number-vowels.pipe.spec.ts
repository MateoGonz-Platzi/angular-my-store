import { NumberVowelsPipe } from './number-vowels.pipe';

describe('NumberVowelsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberVowelsPipe();
    expect(pipe).toBeTruthy();
  });
});
