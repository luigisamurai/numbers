import { Main } from './Main';

const inputFileName: string = process.argv[2] || 'input';
const outputFileName: string = process.argv[3] || 'output';
const main: Main = new Main();

main.findSortNumberFromFile(inputFileName, outputFileName);
