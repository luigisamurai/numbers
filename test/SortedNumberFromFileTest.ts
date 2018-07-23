import { expect } from 'chai';
import { SortedNumber } from '../src/SortedNumber';
import { listOfNumbers } from './resource/input';

const sortedNumber: SortedNumber = new SortedNumber();

describe('Given a list of numbers from a file', () => {
  describe('when it verifies a list numbers', () => {
    listOfNumbers.forEach((list: any) => {
      it(`then the sorted number of ${list.number} should be ${list.expected}`, () => {
        expect(sortedNumber.findSortedNumber(list.number)).to.equal(list.expected);
      });
    });
  });
});
