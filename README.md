# Sorted Number

## First time setup

* _Requires `Node v6` or bigger, see [here](https://nodejs.org/en/download) how to install it_

## Running first time

* _install dependencies:_ in the root of the project (numbers), execute the following command:

```sh
> npm install
```

the folder node_modules should be created.

## Execute it

  1. Create and/or fill the input file ( it should be in .result/input) with the numbers to be evaluated.
  1. Execute the command

  ```sh
  > npm start
  ```

### Execute it with parameter

  1. Create and/or fill the input file, it should be in .result/[fileName]
  1. Execute the command with the following parameters
    - inputFileName: input file name (required)
    - outputFileName: output file name (optional)

  ```sh
  > npm start -- [inputFileName] [outputFileName]
  ```

## Execute the tests

  ```sh
  > npm test
  ```
