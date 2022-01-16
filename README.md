# must-be-err

[![Build Status](https://github.com/mgenware/must-be-err/workflows/Build/badge.svg)](https://github.com/mgenware/must-be-err/actions)
[![npm version](https://img.shields.io/npm/v/must-be-err.svg?style=flat-square)](https://npmjs.com/package/must-be-err)
[![Node.js Version](http://img.shields.io/node/v/must-be-err.svg?style=flat-square)](https://nodejs.org/en/)

Error type assertion for TypeScript 4.4+ unknown errors in `catch` clause.

## Installation

```sh
npm i must-be-err
```

## Usage

```ts
import mustBeErr from 'must-be-err';

try {
  // ...
} catch (err) {
  // `err` is unknown in TypeScript 4.4+
  mustBeErr(err); // It throws if `err` is not an `Error`.
  // `err` is now an `Error`.
  console.error(err.message);
}

const notAnError = 123;
mustBeErr(notAnError);
// Error: The argument `err` is not an `Error`, got 123.
```

## Source

```ts

```
