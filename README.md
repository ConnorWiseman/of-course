# of-course

[![npm](https://img.shields.io/npm/v/of-course.svg?style=flat-square)](https://www.npmjs.com/package/of-course)
![Node.js](https://img.shields.io/badge/node.js-%3E=_6.4.0-blue.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/ConnorWiseman/of-course/master.svg?style=flat-square)](https://travis-ci.org/ConnorWiseman/of-course) [![Coverage](https://img.shields.io/codecov/c/github/ConnorWiseman/of-course.svg?style=flat-square)](https://codecov.io/gh/ConnorWiseman/of-course)
[![Dependencies Status](https://david-dm.org/ConnorWiseman/of-course/status.svg?style=flat-square)](https://david-dm.org/ConnorWiseman/of-course)
[![devDependencies Status](https://david-dm.org/ConnorWiseman/of-course/dev-status.svg?style=flat-square)](https://david-dm.org/ConnorWiseman/of-course?type=dev)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ConnorWiseman/of-course/blob/master/LICENSE)

> Promise-based input prompting in the terminal.

## Installation
```shell
npm install --save of-course
```


## Usage
```javascript
const prompt = require('of-course');

(async () => {
  let username = await prompt.string('Username: ');
  let password = await prompt.password('Password: ');
  let verify   = await prompt.password('Password (check): ');

  console.log({ username, password, verify });
})();
```

## API
### &#35;string
Prompts for a string.
```javascript
prompt.string('Username: ').then((username) {
  console.log(username);
});
```

### &#35;password
Prompts for a string, obscuring input.
```javascript
prompt.password('Password: ').then((password) {
  console.log(password);
});
```
