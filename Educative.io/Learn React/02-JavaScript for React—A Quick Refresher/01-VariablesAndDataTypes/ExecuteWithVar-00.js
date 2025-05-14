function varExample() {
    var x = 1;
    console.log('Inside Function varExample:', x); // Output: 2
    if (true) {
      var x = 2; // Same variable; value is overwritten.
      console.log('Inside if block:', x); // Output: 2
    }
    console.log('Outside if block:', x); // Output: 2
  }
  //console.log('Global', x); // Output: 3 // will not be avaialble
  varExample();