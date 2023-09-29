# isenv

[![Maintainability](https://api.codeclimate.com/v1/badges/4311d3f7eac5313191cd/maintainability)](https://codeclimate.com/github/nitra/parse-phone/maintainability)

## Installation

```bash
$ npm install @nitra/parse-phone --save
```

or

```bash
$ yarn add @nitra/parse-phone
```

## Usage

```javascript
"use strict";

import { parsePhone } from "@nitra/parse-phone";

{
  /* ... */
  const phone = parsePhone("+7 913 065 89 17");
  if (phone) {
    /* ... */
  }
}
```

## License

This software is released under the [MIT License](https://github.com/nitra/parse-phone/blob/master/LICENSE).
