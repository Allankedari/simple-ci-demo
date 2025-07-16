// test.js
const assert = require('assert');
const add = require('./index');

assert.strictEqual(add(3, 4), 7); // <-- change values from (2, 3) to (3, 4)
console.log("Test passed");
