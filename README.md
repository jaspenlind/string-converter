# string-converter

Converts strings to other javascript types

[![Build Status](https://travis-ci.com/jaspenlind/string-converter.svg?branch=master)](https://travis-ci.com/jaspenlind/string-converter)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ba5869054b6846d293e22022020c8b98)](https://www.codacy.com/gh/jaspenlind/string-converter/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=jaspenlind/string-converter&amp;utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Coverage Status](https://coveralls.io/repos/jaspenlind/string-converter/badge.svg?branch=master)](https://coveralls.io/r/jaspenlind/string-converter?branch=master)
![David](https://img.shields.io/david/jaspenlind/string-converter)
![GitHub](https://img.shields.io/github/license/jaspenlind/string-converter)
[![npm](https://img.shields.io/npm/v/string-converter)](https://www.npmjs.com/package/string-converter)

## Installation

```shell
npm install string-converter
```

## Usage

```js
import { convert } from "string-converter";

const numericValue = convert("42");
==> 42

const booleanValue = convert("1");
==> true

const stringValue = convert("some string");
==> "some string"

const objectWithValue = {
  value: 42,
  toString: () => value.toString()
};
const stringValue = convert(objectWithValue);
==> "42";
```

## Docs

<https://jaspenlind.github.io/string-converter>

## Test

```shell
npm test
```
