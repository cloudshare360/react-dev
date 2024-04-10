1.4 Create React Components
https://learning.oreilly.com/videos/react-zero-to/9780137611676/9780137611676-LRMW_01_01_04/

![Create React Components](image.png)
![Components are React's units of Organizations](image-1.png)
![Todo List](image-2.png)
Todo List Showcasing 
* Text Box to enter todolist item 
* Submit button
* List of items

Components
* Component with Text Box and Submit Botton
* Component with Item1 (List)
![Showcasing Multiple Components](image-3.png)

![Where we left in previous session](image-4.png)

![Recent way of creating components](image-5.png)

``` 
class App extends React.Component {

}
``` 
Modren way is use to use functional component sytaxt 

functions which retun JSX are functional compoments,
The example we saw is App component which retuns the Logo and
where we included Good morning!/Good Evening

![App Component which is retuning JSX](image-6.png)
![App Component returning JSX Continuation .. ](image-7.png)
![Good Morning!/Good Evening! ](image-8.png)

Convert Good Morning/Good Evening into a Greeting Component

then we import and display in App Component

npx create-react-app my-react-app --use-npm
![Creating a new File Greeting.js](image-9.png)


Creating New File Greeting.js

![Creating Greeting Component in Greeting.js](image-10.png)

 * define a function Greeting
 * return the JSX String or the variable
 * import React from 'react';
 * export Greeting Component using ``` export default Greeting; ```

 In App.js

 ![Importing Greeting Component](image-11.png)

 import Greeting from './Greeting';

