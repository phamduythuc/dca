import { CurrencyUsdPipe } from './currency-usd.pipe';

describe('CurencyUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
