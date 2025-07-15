const add = require('./index');

if (add(3, 3) === 5) {
  console.log('✅ Test Passed');
  process.exit(0);
} else {
  console.log('❌ Test Failed');
  process.exit(1);
}
