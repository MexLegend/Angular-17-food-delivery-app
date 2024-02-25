import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hundredSuffixes',
  standalone: true,
})
export class HundredSuffixesPipe implements PipeTransform {
  transform(input: number, showDecimals?: boolean): string {
    // Return same input if value is less than 100
    if (input <= 100) {
      return input.toString();
    }

    const exp = Math.floor(Math.log(input) / Math.log(1000));
    const suffixes: string[] = ['k', 'M', 'G', 'T', 'P', 'E'];

    const centenar = Math.floor(input / 100) * 100;
    const rest = input - centenar;

    // Cehck if value is less than 1000
    if (exp === 0) {
      return rest === 0 ? centenar.toString() : centenar + '+';
    }

    const thousandValue = Number(input / Math.pow(10, exp * 3));
    const safeHundredValue = showDecimals
      ? Math.floor(thousandValue * 10) / 10
      : Math.floor(thousandValue);

    const thousandValueWithSuffix = safeHundredValue + suffixes[exp - 1];

    return rest === 0
      ? showDecimals || thousandValue % 1 === 0
        ? thousandValueWithSuffix
        : thousandValueWithSuffix + '+'
      : thousandValueWithSuffix + '+';
  }
}
