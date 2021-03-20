import { realToInt } from '../src';

describe('testing convert realToInt without decimal', () => {
  it('can convert and round up', async () => {
    const price = 'R$ 123.543,20';

    const intPrice = realToInt(price);

    expect(intPrice).toEqual(123543);
  });
  it('can convert and round down', async () => {
    const price = 'R$ 165.853,51';

    const intPrice = realToInt(price);

    expect(intPrice).toEqual(165854);
  });
  it('can convert and round', async () => {
    const price = 'R$ 165.853,50';

    const intPrice = realToInt(price);

    expect(intPrice).toEqual(165854);
  });
});

describe('testing convert realToInt with decimal', () => {
  it('can convert and round up', async () => {
    const price = 'R$ 123.543,205';

    const intPrice = realToInt(price, { useDecimal: true });

    expect(intPrice).toEqual(12354321);
  });
  it('can convert and round down', async () => {
    const price = 'R$ 165.853,5176';

    const intPrice = realToInt(price, { useDecimal: true });

    expect(intPrice).toEqual(16585352);
  });
  it('can convert and round', async () => {
    const price = 'R$ 165.853,50143';

    const intPrice = realToInt(price, { useDecimal: true });

    expect(intPrice).toEqual(16585350);
  });
});
