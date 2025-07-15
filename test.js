const add = require('./index');

if (add(10, 5) === 15) {
  console.log('✅ Test Passed');
  process.exit(0);
} else {
  console.log('❌ Test Failed');
  process.exit(1);
}
