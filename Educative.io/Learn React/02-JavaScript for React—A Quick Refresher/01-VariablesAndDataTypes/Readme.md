- The var keyword#
  - The var keyword, used in older JavaScript versions, declares variables with function scope, meaning they are accessible throughout the entire function in which they are defined. Furthermore, variables declared with var can be redeclared within the same scope.

  ```
  function varExample() {
  var x = 1;
  if (true) {
    var x = 2; // Same variable; value is overwritten.
    console.log('Inside if block:', x); // Output: 2
  }
  console.log('Outside if block:', x); // Output: 2
}

varExample();
```

Here is the extracted text from the image:

---

### **Key differences between `var`, `let`, and `const`**

Below is a comparison table highlighting the key differences between `var`, `let`, and `const` in JavaScript to help us understand their usage and scope.

| **Keyword** | **Scope**       | **Re-declaration** | **Re-assignment** | **Hoisting**                     |
|-------------|------------------|--------------------|-------------------|-----------------------------------|
| `var`       | Function/Global  | Allowed            | Allowed           | Hoisted and initialized as `undefined` |
| `let`       | Block            | Not allowed        | Allowed           | Hoisted but remains uninitialized |
| `const`     | Block            | Not allowed        | Not allowed       | Hoisted but remains uninitialized |

---

This table summarizes the key differences in scope, re-declaration, re-assignment, and hoisting behavior for the three keywords (`var`, `let`, and `const`) in JavaScript.

Type coercion and conversion  

Understanding how JavaScript handles different data types during operations is important, particularly for React too.  

Type coercion (implicit conversion). 
JavaScript automatically converts data types when necessary.

```
// String and Number
let result1 = '5' + 3; // '53' (Number 3 is coerced to String)
console.log(result1); // Output: '53'

// Number and String with subtraction
let result2 = '5' - 2; // 3 (String '5' is coerced to Number)
console.log(result2); // Output: 3

// Boolean and Number
let result3 = true + 2; // 3 (true is coerced to 1)
console.log(result3); // Output: 3

```