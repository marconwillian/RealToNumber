import { realToFloat } from '../src';

describe('testing convert realToFloat with 2 decimal', () => {
  it('can convert and round up', async () => {
    const price = 'R$ 12.345,6754';

    const intPrice = realToFloat(price);

    expect(intPrice).toEqual(12345.68);
  });
  it('can convert and round down', async () => {
    const price = 'R$ 165.853,5131';

    const intPrice = realToFloat(price);

    expect(intPrice).toEqual(165853.51);
  });
  it('can convert and round', async () => {
    const price = 'R$ 165.853,505';

    const intPrice = realToFloat(price);

    expect(intPrice).toEqual(165853.51);
  });
});

describe('testing convert realToFloat with personal decimal', () => {
  it('can convert and round up', async () => {
    const price = 'R$ 12.345,123198237123';

    const intPrice = realToFloat(price, { decimal: 8 });

    expect(intPrice).toEqual(12345.12319824);
  });
  it('can convert and round down', async () => {
    const price = 'R$ 165.853,5176';

    const intPrice = realToFloat(price, { decimal: 4 });

    expect(intPrice).toEqual(165853.5176);
  });
  it('can convert and round', async () => {
    const price = 'R$ 165.853,50143';

    const intPrice = realToFloat(price, { decimal: 4 });

    expect(intPrice).toEqual(165853.5014);
  });
});
