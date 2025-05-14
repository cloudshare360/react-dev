var x;
console.log('Global=Declared Variable but not assigned value', x); // Output: 5
x = 1;
console.log('Global=Declared Variable with  assigned value', x); // Output: 5

function varExample() {
  console.log('Inside varExample():', x); // Output: 2
    if (true) {
      console.log('Inside if block:', x); // Output: 3
    }
    console.log('Outside if block:', x); // Output: 4
  }
  console.log('Global', x); // Output: 5
  varExample();