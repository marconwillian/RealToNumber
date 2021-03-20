export interface OptionsRealToFloat {
  decimal: number;
}

export interface OptionsRealToInt {
  useDecimal: boolean;
}

export const realToFloat = (
  real: string,
  options?: OptionsRealToFloat
): number => {
  let number = real;

  number = number.replace(/[^0-9,-]+/g, '');
  number = number.replace(/,/g, '.');

  return parseFloat(parseFloat(number).toFixed(options?.decimal || 2));
};

export const realToInt = (real: string, options?: OptionsRealToInt): number => {
  let number: string = real;
  let integer: number;

  if (!options?.useDecimal) {
    number = number.replace(/[^0-9,-]+/g, '');
    number = number.replace(/,/g, '.');
    integer = parseFloat(number);
    integer = Math.round(integer);
    number = `${integer}`;
  } else {
    number = number.replace(/[^0-9,-]+/g, '');
    number = number.replace(/,/g, '.');
    number = parseFloat(number).toFixed(2);
    number = `${number}`.replace(/[^0-9-]+/g, '');
  }

  return parseInt(number, 10);
};
