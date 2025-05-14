var x = 1;
function varExample() {
  var x = 2;
  console.log('Inside varExample():', x); // Output: 2
    if (true) {
      var x = 3; // Same variable; value is overwritten.
      console.log('Inside if block:', x); // Output: 3
    }
    console.log('Outside if block:', x); // Output: 4
  }
  console.log('Global', x); // Output: 5
  varExample();