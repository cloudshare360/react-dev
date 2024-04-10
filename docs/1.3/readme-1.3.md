![Write your first JSX file](image.png)
![App JSX File](image-1.png)
![Refering APP JSX Component in index.js](image-2.png)
![Creating a TodoList Commonent and refering in index.js](image-3.png)

As of now that component does'nt exists

To display differnt greeting on the page based on the time

![alt text](image-4.png)
```
let isMorning = (new Date()).getHours() < 12;
let greetingElement = isMorning?
                        <h3> Good Morning! </h3>
                        : <h3> Good Evening! </h3>
```


just to create app in Lession-1.3 folder

  npx create-react-app my-react-app --use-npm

  ![Inserting Element Variable in JSX Component](image-5.png)
   {greetingElement}

   ![JSX using ClassName instead of class keyword for displaying css class names](image-6.png)

   ![alt text](image-7.png)

   ![define variable adjective](image-8.png)

   ![inserting variable in jsx page](image-9.png)

   ![App with Good Evening! or Good Morning! Based on your time](image-10.png)

   ![alt text](image-11.png)

   ![Defining variable URL and replacing ](image-12.png)