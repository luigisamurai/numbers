import { integer, engines } from 'random-js';
import { expect } from 'chai';
import { SortedNumber } from '../src/SortedNumber';

const sortedNumber: SortedNumber = new SortedNumber();

describe('Given a list of numbers to verify', () => {
  describe('when it verifies a list of sorted numbers', () => {
    const listOfSortedNumbers: number[] = [
      0,
      8,
      11,
      56789,
      555,
      199,
      888,
      12345678,
      9999999,
      556
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then ${number} should be sorted`, () => {
        expect(sortedNumber.isSortNumber(number)).to.equal(true);
      });
    });
  });

  describe('when it verifies a list of not sorted numbers', () => {
    const listOftSortedNumbers: number[] = [
      10,
      21,
      1000,
      1111111110,
      3045
    ];

    listOftSortedNumbers.forEach((number: number) => {
      it(`then ${number} should be not sorted`, () => {
        expect(sortedNumber.isSortNumber(number)).to.equal(false);
      });
    });
  });

  describe('when it verifies a list numbers that contains the same digits', () => {
    const listOfSortedNumbers: number[] = [
      1,
      11,
      33,
      55,
      99,
      111,
      1111,
      222,
      2222,
      99999,
      88888
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then ${number} should have the same digits`, () => {
        expect(sortedNumber.haveTheSameDigits(number)).to.equal(true);
      });
    });
  });

  describe('when it verifies a list numbers that not contains the same digits', () => {
    const listOfSortedNumbers: number[] = [
      12,
      30,
      58,
      97,
      101,
      1917,
      422,
      2122,
      99199,
      88818,
      888881
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then ${number} should not have the same digits`, () => {
        expect(sortedNumber.haveTheSameDigits(number)).to.equal(false);
      });
    });
  });

  describe('when it finds the sorted number of a list of not sorted numbers', () => {
    const listOfNotSortedNumbers: any[] = [
      { number: 20, expected: 19 },
      { number: 132, expected: 129 },
      { number: 312, expected: 299 },
      { number: 14563, expected: 14559 },
      { number: 11111110, expected: 9999999 },
      { number: 101, expected: 99 },
      { number: 998, expected: 899 },
      { number: 1000, expected: 999 },
      { number: 556, expected: 555 }
    ];

    listOfNotSortedNumbers.forEach((list: any) => {
      it(`then the sorted number of ${list.number} should be ${list.expected}`, () => {
        expect(sortedNumber.findSortedNumber(list.number)).to.equal(list.expected);
      });
    });
  });

  describe('when it finds the sorted number of a list of sorted numbers', () => {
    const listOfSortedNumbers: any[] = [
      { number: 0 },
      { number: 9, expected: 9 },
      { number: 234, expected: 233 },
      { number: 266, expected: 259 },
      { number: 888, expected: 799 },
      { number: 555, expected: 499 },
      { number: 1578, expected: 1577 }
    ];

    listOfSortedNumbers.forEach((list: any) => {
      it(`then the sorted number of ${list.number} should be ${list.expected}`, () => {
        expect(sortedNumber.findSortedNumber(list.number)).to.equal(list.expected);
      });
    });
  });

  describe('when it finds the sorted number of a list of numbers less that 10', () => {
    const listOfSortedNumbers: any[] = [
      integer(1, 9)(engines.nativeMath),
      integer(1, 9)(engines.nativeMath),
      integer(1, 9)(engines.nativeMath)
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then the found number should be equal`, () => {
        const foundNumber: number = sortedNumber.findSortedNumber(number);
        const isSortedNumber: boolean = sortedNumber.isSortNumber(foundNumber);

        expect(foundNumber).to.be.equal(number);
        expect(isSortedNumber).to.equal(true);
      });
    });
  });

  describe('when it finds the sorted number of a list of random numbers', () => {
    const listOfSortedNumbers: any[] = [
      integer(10, 99)(engines.nativeMath),
      integer(100, 999)(engines.nativeMath),
      integer(1000, 9999)(engines.nativeMath),
      integer(10000, 99999)(engines.nativeMath),
      integer(100000, 999999)(engines.nativeMath),
      integer(1000000, 9999999)(engines.nativeMath)
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then the found number should be less that ${number} and sorted`, () => {
        const foundNumber: number = sortedNumber.findSortedNumber(number);
        const isSortedNumber: boolean = sortedNumber.isSortNumber(foundNumber);

        expect(foundNumber).to.be.lessThan(number);
        expect(isSortedNumber).to.equal(true);
      });
    });
  });

  describe('when it finds the sorted number of a list of limit numbers', () => {
    const listOfSortedNumbers: any[] = [
      10,
      100,
      1000,
      10000,
      100000,
      1000000
    ];

    listOfSortedNumbers.forEach((number: number) => {
      it(`then the found number should be less that ${number} and sorted`, () => {
        const foundNumber: number = sortedNumber.findSortedNumber(number);
        const isSortedNumber: boolean = sortedNumber.isSortNumber(foundNumber);

        expect(foundNumber).to.be.lessThan(number);
        expect(isSortedNumber).to.equal(true);
      });
    });
  });
});
