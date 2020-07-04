export interface OptionsRealToFloat {
    decimal: number;
}

export interface OptionsRealToInt {
    useDecimal: boolean;
}
  
export const realToFloat = (real: string, {decimal}: OptionsRealToFloat): Number => {
    let number = real;

    number = number.replace(/[^0-9,-]+/g,"");
    number = number.replace(/,/g,".");
    
    return parseFloat(parseFloat(number).toFixed(decimal));
};

export const realToInt = (real: string, {useDecimal}: OptionsRealToInt): Number => {
    let number: string = real;
    let integer: number;

    if(!useDecimal){
        number = number.replace(/[^0-9,-]+/g,"");
        number = number.replace(/,/g,".");
        integer = parseFloat(number);
        integer = Math.round(integer);
        number = `${integer}`;
    } else {
        number = number.replace(/[^0-9,-]+/g,"");
        number = number.replace(/,/g,".");
        integer = parseFloat(parseFloat(number).toFixed(2));
        number = `${integer}`.replace(/[^0-9-]+/g,"");
    }

    return parseInt(number);
};