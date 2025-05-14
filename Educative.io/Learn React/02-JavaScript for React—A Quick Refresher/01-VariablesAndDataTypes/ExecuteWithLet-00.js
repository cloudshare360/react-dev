//console.log("Global Scope event before defining=>y", y); // gives an error  as "y is not defined"
function letExample() {
  let y = 1;
  if (true) {
    let y = 2; // Different variable; block-scoped.
    console.log('Inside if block:', y); // Output: 2
  }
  console.log('Outside if block:', y); // Output: 1
}

letExample();