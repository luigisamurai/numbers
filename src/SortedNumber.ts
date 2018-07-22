export class SortedNumber {
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

  public findSortedIfIsNotSort(number: number): number {
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

  public findSortedNumber(number: number): number {
    const isSortNumber: boolean = this.isSortNumber(number);
    let sortedNumber: number;

    if (isSortNumber) {
      sortedNumber = number - 1;
    } else {
      sortedNumber = this.findSortedIfIsNotSort(number);
    }

    return sortedNumber;
  }
}
