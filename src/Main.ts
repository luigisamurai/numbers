import * as mkdirp from 'mkdirp';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { SortedNumber } from './SortedNumber';
import * as readline from 'readline';

export class Main {
  private readonly directory: string = `${process.cwd()}/result`;

  private createDirectorNotExist() {
    if (!existsSync(this.directory)) {
      mkdirp.sync(this.directory);
    }
  }

  public findSortNumberFromFile(inputFileName: string, outputFileName: string) {
    this.createDirectorNotExist();
    const readlineInterface = readline.createInterface({
      input: createReadStream(`${this.directory}/${inputFileName}`)
    });
    const sortedNumber: SortedNumber = new SortedNumber();
    const writeStream = createWriteStream(`${this.directory}/${outputFileName}`);
    let index: number = 1;

    readlineInterface.on('line', (number: string) => {
      const foundNumber: number = sortedNumber.findSortedNumber(parseInt(number, 10));
      const newLine: string = `Caso ${index}: N=${number}, Sorted Number=${foundNumber}\n`;
      index = index + 1;
      writeStream.write(newLine);
    });
  }
}
