import { expect } from 'chai';
import { SortedNumber } from '../src/SortedNumber';

const sortedNumber: SortedNumber = new SortedNumber();

describe('Given a list of ordered numbers', () => {
  it('then all the numbers should be Ok', () => {
    expect(sortedNumber.isSortNumber(0)).to.equal(true);
    expect(sortedNumber.isSortNumber(8)).to.equal(true);
    expect(sortedNumber.isSortNumber(11)).to.equal(true);
    expect(sortedNumber.isSortNumber(56789)).to.equal(true);
    expect(sortedNumber.isSortNumber(199)).to.equal(true);
    expect(sortedNumber.isSortNumber(12345678)).to.equal(true);
    expect(sortedNumber.isSortNumber(9999999)).to.equal(true);
  });
});

describe('Given a lis of messy numbers', () => {
  it('then all the numbers should be NOk', () => {
    expect(sortedNumber.isSortNumber(10)).to.equal(false);
    expect(sortedNumber.isSortNumber(21)).to.equal(false);
    expect(sortedNumber.isSortNumber(312)).to.equal(false);
    expect(sortedNumber.isSortNumber(14563)).to.equal(false);
    expect(sortedNumber.isSortNumber(1111111110)).to.equal(false);
    expect(sortedNumber.isSortNumber(101)).to.equal(false);
  });
});

describe('Given a lis of messy numbers', () => {
  it('then all the numbers should be NOk', () => {
    expect(sortedNumber.findSortedIfIsNotSort(11111110)).to.equal(9999999);
    expect(sortedNumber.findSortedIfIsNotSort(20)).to.equal(19);
    expect(sortedNumber.findSortedIfIsNotSort(132)).to.equal(129);
  });
});
