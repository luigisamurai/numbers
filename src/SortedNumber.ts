export class SortedNumber {
  private findSortedIfIsNotSort(number: number): number {
    let pow: number = 0;
    let isSortNumber: boolean = false;
    let foundNumber: number = number;

    while (!isSortNumber) {
      const index: number = foundNumber.toString().length - pow  - 1;
      const lastDigit: number = parseInt(foundNumber.toString().charAt(index), 10);
      const subtract: number = Math.pow(10, pow) * (lastDigit + 1);

      foundNumber = foundNumber - subtract;
      isSortNumber = this.isSortNumber(foundNumber);
      pow = pow + 1;
    }

    return foundNumber;
  }

  public isSortNumber(number: number): boolean {
    const digits: string[] =  number.toString().split('');

    for (let index = 0; index < digits.length - 1; index = index + 1) {
      const firstDigit: string = number.toString().charAt(index);
      const secondDigit: string = number.toString().charAt(index + 1);

      if (firstDigit > secondDigit) {
        return false;
      }
    }

    return true;
  }

  public haveTheSameDigits(number: number): boolean {
    const numberAsString: string = number.toString();
    const firstDigit: string = numberAsString.charAt(0);
    const numberToCompare: number = parseInt(firstDigit.repeat(numberAsString.length), 10);

    return number === numberToCompare;
  }

  public findSortedNumber(number: number): number {
    // const isSortNumber: boolean = this.isSortNumber(number);
    const allDigitsAreSame: boolean = this.haveTheSameDigits(number);

    if (number <= 0) {
      return undefined;
    }

    if (number < 10) {
      return number;
    }

    if (allDigitsAreSame === false && this.isSortNumber(number - 1)) {
      return number - 1;
    }

    return this.findSortedIfIsNotSort(number);
  }
}
