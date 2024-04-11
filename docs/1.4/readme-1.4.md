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

 ![Showcasing Greeting Component](image-12.png)
 * Every JSX Component can only return only one top level element


![Example Showcasing Greeting Component is retuning one top level element](image-13.png)

![Show casing Dev Tag](image-14.png)

if we using React Fragments, one can avoid extra div tag

![React Fragment ](image-15.png)
![Shorter Version of React Fragment](image-16.png)

![Showing with React Fragment with out having extra Div tag](image-17.png)


![Moving from Defaults Exports to export at function level](image-18.png)

![Changing the Import in App ](image-19.png)

``` import { Greeting } from './Greeting';

It is recomment to use 
``` import { Greeting } from './Greeting';
In this case Greeting Component Name is retained and incase if u want to find and replace occurances of the Greeting Component, we will have option to find and replace it

instead of 
``` import GreetingMessage from './Greeting';
    since in above we are changing the name of Greeting Component to GreetingMessage; 

![alt text](image-20.png)

![Converting into Greeting into Array Functin](image-21.png)


Lesson-1.4/my-react-app/src/GreetingWithExportsAtFunction.js
![Short form of Greeting Component](image-22.png)

![Shorter Version](image-23.png)