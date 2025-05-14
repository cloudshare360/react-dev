### Create React APP using vite.  
      npm create vite@4.1.0  
      Step 1: Asked to enter the project name: reactpro    
      Step 2: Select a framework: react. 
      Step 3: Select a variant: javascript  
      Step 4: To change to react folder and execute command ```npm install & npm run dev```.  

```

cd reactpro  &. 
npm install & npm run dev. 

```
### add vite.config.js

```
server: {
    allowedHosts: true
  }
```

How to define a simple jsx component.  
```
export default function Fruit() {
  return <div>Fruit Works</>
}