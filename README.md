# ReactLearning

- [React Start](https://react.dev/learn)
- [React Tutorial](https://www.w3schools.com/REACT/DEFAULT.ASP)
- [Vite](https://vite.dev/)
- [node.js](https://nodejs.org/en)

## React Tutorial
[React Tutorial](https://www.w3schools.com/react/default.asp)

- React is a JavaScript library for building user interfaces.
- React is used to build single-page applications.
- React allows us to create reusable UI components
## React Introduction
[React Introduction](https://www.w3schools.com/react/react_intro.asp)

## Your First React App
[Your First React App](https://www.w3schools.com/react/react_first_app.asp)

## React Render HTML
[React Render HTML](https://www.w3schools.com/react/react_render.asp)

React's goal is in many ways to render HTML in a web page.
React renders HTML to the web page via a container, and a function called ```createRoot()```

## The Container
Typically, this container is a ```<div id="root"></div>``` element in the ```index.html``` file.

## The createRoot Function
The ```createRoot``` function is located in the main.jsx file in the ```src``` folder, and is a 
built-in function that is used to create a root node for a React application.

```
main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
    </StrictMode>
  )  

```
The createRoot()function takes one argument, an HTML element.
THe purpose of the function is do define the HTML element where a React component should be displayed.

## The render Method

The ```render``` method defines what to render in the HTML container

The result is displayed in the <div id="root"> element.

![alt text](image.png)

Note: the element id does not have to be "root ", but this is the standard convention.

## The HTML Code
[The HTML Code](https://www.w3schools.com/react/react_render.asp)
## The Root Node
The root node is the HTML element where you want to display the result.
It is like a container for content, managed by React.
It does NOT have to be a ```<div>``` element and it does NOT have to have the ```id="root" ```:

## Upgrade React
[Upgrade React](https://www.w3schools.com/react/react_upgrade.asp)

## React ES6
[React ES6](https://www.w3schools.com/react/react_es6.asp)

## What should i Learn Es6
- Classes
- Arrow Functions
- Variables(let,const,var)
- Array Methods like .map()
- Destructuring
- Modules
- Ternary Operator
- Spread Operator
## React ES6 Classe
A class  is  a type of function, but instead of using the keyword ```function``` to initiate it,
we use the keyword ```class```, and the properties are assigned inside a constructor() method.

## Note constructor function is called automatically when the object is initialized.

## Method in Classes
You can add your own methods in a class:
the object's method name followed by parentheses(parameters would og inside the parentheses).
## Class Inheritance
 TO  create a class inheritance, use the ```extends ``` keyword.
 A class created with a class inheritance inherits all the methods
 from another class:
![alt text](image-1.png)

## The super() method refers to the parents class.
By calling the ```super()``` method in the constructor method,
we call the parent's constructor method and get access to 
the parent's properties and methods.
## Arrow Functions 
Arrow functions allow us to write shorter function syntax:

## What about this?
In short, with arrow functions there is no binding of ```this```

**Notice** In regular functions the ```this``` keyword represented the 
object that  called the function, which could be the window, the 
document, a button or whatever.

With arrow functions, the ```this ``` keyword always represents the object 
tht defined the arrow function.

## Remember these differences when you are working with functions.

Sometimes the behavior of regular functions is what you wants,
if not, use arrow functions.

## React ES6 Variables

```
var x =5.6
```

Notice:```var``` has a function scope, not a block scope.
- If you use ```var``` outside of a function, it belongs to the global scope.
- If you use ```var``` inside of a function, it belongs to that function.
- If you use ```var``` inside of a block, i.e. a for loop, the variable is still
available outside of that block.

```
let x=5.6
```

```let``` is the block  scoped version of ```var```, and is limited to the block
(or expression ) where it is defined .
If you use ```let ``` inside of a block, i.e. a for loop, the variable is only
available inside of that loop.
```
let has  a block scop.
```

```const``` is a variable that once it has been created, its value can never change.
```
const has a block scope.
```
The keyword ```const``` is a bit misleading.
It does not define a constant value. It defines a ```constant reference``` to a value.

Because of this you can NOT:
- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But you CAN:
- Change the elements of constant array
- Change the properties of constant object.

## JavaScript Array map()
[JavaScript Array Map](https://www.w3schools.com/react/react_es6_array_map.asp)

The map() Method
THe map() method creates a new array with the results of calling a function for every array  element.


## map() in React
The map() method is commonly used in React to render lists of elements:

Note:When using map() in React to create list items, 
each item needs a unique ```key`` prop.

## map() with Objects
You can also map() with arrays of objects:

## map() Parameters
[map() Parameter](https://www.w3schools.com/react/react_es6_array_map.asp)

The map() method takes three parameters:
    - currentValue -The current element being processed
    - index -The index of the current  element (optional)
    - array -The array that map was called upon(optional)

## Note:
The map() method always returns a new array. It does not 
modify the original array.

## React ES6 Destructuring
[React destructuring](https://www.w3schools.com/react/react_es6_destructuring.asp)

Destructing is a JavaScript feature that allows you to extract values from objects
or arrays into distinct variables.In React,it's commonly used with **props**, **hooks**, and 
state management.

Note:Destructuring makes React code cleaner and more readable by reducing repetitive object
and array access.

## Destructing Arrays
**Notice**  When destructuring arrays, the order that variables are declared is important.

If we only want the car and suv we can simply leave out the truck but keep the comma:
```
const vehicles=['Tesla','BMW','Benz'];
const [car,,suv]=vehicles;

```

Destructuring comes in handy when a function returns an array.

## Destructuring Objects
[Destructuring Objects](https://www.w3schools.com/react/react_es6_destructuring.asp)
You can use destructing to  extract the values from an object.

**For objects**, the order of the properties does not matter:

## Destructuring in React Components
Destructuring is particularly useful in React
for working with props, hooks, and API responses.
It help make your code more concise and easier to read.

## Props Destructuring
When a component receives props, you can use destructuring to  extract the values you need.
## useState Hook Destructuring
When a component uses the useState hook, we use destructuring to extract the values from it.

## React ES6 Spread Operator
[Spread Operator](https://www.w3schools.com/react/react_es6_spread.asp)
## Spread Operator
The JavaScript spread operator(...) allows us to quickly copy all or part of 
an existing array or object into another array or object.

The spread operator is often used in combination with destructuring.

Assign the first and second items from ```numbers``` to variables and put the rest in an array:

## React ES6 Modules
[React ES6](https://www.w3schools.com/react/react_es6_modules.asp)

## Modules
JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.
ES Modules rely on the ```import``` and ```export``` statements.

## Export 
You can export a function or variable from any file.
Let us create a file named ```person.js``` and  fill it with the 
things we want to export.
There are two types of exports:Named and Default.
## Named Exports

You can create named exports two ways:

## Default Exports

Notice: You can **only have one default export** in a file.

## Import 
YOu can import modules into a file in two ways, based on if they are named **exports**
or **default exports**.

**Named exports** must be **destructured**using **curly braces**. ***Default exports do not*** .

## React ES6 Ternary Operator
[React ES6](https://www.w3schools.com/react/react_es6_ternary.asp)

The ternary operator is a simplified conditional operator like  ```if /else.```
Syntax: ``` condition ? <expression if true> :<expression if false> ```

Here is an example using ```if/else```

## React ES6 Template Strings
[template String](https://www.w3schools.com/react/react_es6_template_strings.asp)

## Template Strings

Template strings allow you to write strings that **span multiple lines and include embedded expressions**.


Template strings use backticks (`) instead of quotes and can include:
- Multiple lines without  \n
- Expressions inside ${}
- Quotes without escaping

**NOte**:The indentation in multi-line strings becomes part of the string.

## HTML can eat \n

## Tagged Templates

You can also use template strings with a function (called a tag) to modify the output.
**Note** Tagged templates are an advanced feature. You might ont need 
them in most cases.
The function takes the text and the  expression(s) as arguments.

![alt text](image-2.png)

## React JSX
[React JSX](https://www.w3schools.com/react/react_jsx.asp)

What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

## Coding JSX

JSX allows us to write HTML elements in JavaScript and place them in
the DOM without any createElement() and /or appendChild() methods.

JSX converts HTML tags into react elements.

Note:
```
You are not required to use JSX, but JSX makes it easier to write React 
applications.
```

非常好的問題！在現代 React 專案（尤其是用 Vite 或 Create React App）裡，你一定會看到這兩個檔案：

```
src/
  ├── main.jsx     ← 啟動檔案（入口）
  └── App.jsx      ← 你的主要畫面（根組件）
```

它們的角色完全不一樣，簡單用「人體比喻」來說：

| 檔案         | 比喻              | 責任（做什麼事）                                                                 | 可不可以刪？ |
|---------------|-------------------|----------------------------------------------------------------------------------|--------------|
| `main.jsx`    | 身體 + 心臟       | 把 React 「啟動」、把 `<App />` 掛到 HTML 的 `<div id="root">` 上                  | 不行！刪了整個網站不會動 |
| `App.jsx`     | 你真正的臉＋衣服   | 放你的所有畫面、路由、佈局（navbar、footer、全站內容）                              | 可以改名，但一定要有一個根組件 |

### 詳細內容對比（用 Vite 專案為例）

#### `main.jsx`（或 main.js）
```jsx
// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

它只做三件事：
1. 匯入 `App` 組件
2. 找到 HTML 裡的 `<div id="root"></div>`
3. 把 `<App />` 塞進去，啟動整個 React 應用

→ 這個檔案幾乎永遠不用動，99% 的專案長這樣就夠了。

#### `App.jsx`
```jsx
// src/App.jsx
function App() {
  return (
    <div className="App">
      <h1>Hello 世界！</h1>
      <p>這裡是你全部畫面的起點</p>
      {/* 路由、導覽列、頁面內容都在這邊寫 */}
    </div>
  )
}

export default App
```

它是你的「根組件（Root Component），所有畫面都從這裡開始：
- 放 `<BrowserRouter>`（如果有路由）
- 放全站共用的 `<Navbar />`、`<Footer />`
- 顯示當前頁面

### 實際專案常見結構

```
src/
├── main.jsx              ← 啟動程式（永遠差不多）
├── App.jsx              ← 根組件（放路由、全站佈局）
├── routes/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Dashboard.jsx
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
└── assets/
    └── logo.svg
```

這時候 `App.jsx` 通常會長這樣：
```jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
```

### 總結表（背起來就對了！）

| 問題                     | main.jsx 還是 App.jsx？ | 答案           | 原因                                                                 |
|--------------------------|--------------------------|----------------------------------------------------------------------|
| 哪個是 React 啟動點？     | main.jsx                | 它呼叫 ReactDOM.render / createRoot                                          |
| 哪個放畫面、路由、Navbar？| App.jsx                 | 這是你真正寫網頁內容的地方                                                  |
| 哪個可以改名？            | App.jsx                 | 可以改成 Layout.jsx、Root.jsx 都行，只要 main.jsx 匯入對就好了                |
| 哪個絕對不能刪？        | main.jsx                | 刪了整個 React 不會跑                                                        |
| 哪個通常會很大？          | App.jsx                 | 因為放全站結構                                                               |

一句話記住：

> `main.jsx` 是「啟動器」  
> `App.jsx` 是「你的網站內容」

把這兩個角色分清楚，以後看到任何 React 專案都不會迷失了！

JSX is an extension of the JavaScript language based on ES6, and 
is translated into regular JavaScript at runtime.

## Expression in JSX
With JSX you can write expressions inside curly braces {}.
The expression can be a React variable, or property, or any other valid JavaScript 
expression. JSX will execute the expressioin.JSX will execute the expression
and return the result:

## inserting a Large Block of HTML
To write HTML on Multiple lines, pur the HTML inside parentheses.

## One Top Level Element
[one Top Level Element](https://www.w3schools.com/react/react_jsx.asp)

The HTML code must be wrapped in ONE top level element.
So if you like to write two paragraphs, you must put them inside a parent element,
like a  ```<div>```

**Notice**: JSX will  throw an error if the HTML is not correct, or if the HTML misses a parent element.

Alternatively,you can use a **"fragment"** to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.\

A fragment looks like an empty HTML tag: <></>

## Elements Must be Closed
[Elements Must be Closed](https://www.w3schools.com/react/react_jsx.asp)

JSX follows XML rules, and therefore HTML elements must be properly closed.

JSX will throw an error if the HTML is not properly closed.

## Attribute class =className
The  ```class``` attribute is a much used attribute in HTML, but since JSX is rendered as 
JavaScript, and the ```class``` keyword is a reserved word in JavaScript, you are not
allowed to use it in JSX.

```
Use attribute className instead.

```
remember class =className

JSX solved this by using ```className``` instead. When JSX is rendered, it translates 
```className``` attributes into ```class``` attributes.


在 HTML 中，**`class` 属性**（class attribute）是最常用、最重要的属性之一，它的主要作用是**给 HTML 元素添加一个或多个分类标签（类名）**，方便用 CSS 和 JavaScript 来选中并操作这些元素。

### class 属性的基本用法
```html
<p class="important">这是一段重要文字</p>
<div class="card highlight big">这是一个卡片</div>
<span class="btn primary large">按钮</span>
```

### class 的主要用途

1. **用于 CSS 样式（最常见）**
   ```css
   /* 选中 class 为 important 的所有元素 */
   .important {
       color: red;
       font-weight: bold;
   }

   /* 同时有 card 和 highlight 类的元素 */
   .card.highlight {
       background: yellow;
   }

   /* 选中 class 包含 btn 的元素 */
   .btn {
       padding: 10px 20px;
       border: none;
       cursor: pointer;
   }
   ```

2. **用于 JavaScript 操作元素**
   ```javascript
   // 获取所有 class 为 item 的元素
   document.querySelectorAll('.item');

   // 获取第一个 class 包含 btn 的元素
   document.querySelector('.btn');

   // 添加或移除 class
   element.classList.add('active');
   element.classList.remove('disabled');
   element.classList.toggle('hidden');
   ```

3. **一个元素可以有多个 class（用空格分隔）**
   ```html
   <div class="user-card vip online">张三</div>
   ```
   这个 div 同时具有三个类：`user-card`、`vip`、`online`，可以被这三个类分别或组合选中。

4. **常用于前端框架和组件库**
   - Bootstrap：`<button class="btn btn-primary">`
   - Tailwind CSS：`<div class="bg-blue-500 text-white p-4 rounded">`
   - Vue/React 中动态绑定 class：
     ```vue
     <div :class="{ active: isActive, 'text-red': hasError }">动态 class</div>
     ```

### class 和 id 的区别（重点！）

| 属性  | class                  | id                     |
|-------|------------------------|------------------------|
| 可重复 | 可以给多个元素用同一个 class   | 页面内必须唯一（理论上）     |
| 选择器  | .classname             | #idname                |
| 用途    | 样式复用、批量操作           | 唯一标识（如锚点、JS 选中特定元素） |
| 优先级  | 比标签选择器高，但比 id 低     | CSS 优先级最高             |

### 总结一句话：
**`class` 属性就是给 HTML 元素打“标签”，让 CSS 和 JavaScript 能够通过这些标签快速找到并美化或操作对应的元素，是前端开发中最核心的钩子（hook）之一。**

几乎所有现代网页开发都离不开大量使用 class，没有 class，CSS 和 JS 就几乎无法精准控制页面了。

## Comments in JSX

Comments in JSX are written with {/* */}

## JSX in React  Components
React uses components to build UIs. Components are independent and reusable bits of 
code.

React components are like JavaScript functions, and return HTML.
JSX works perfect inside React components.

## React JSX Expressions
[React JSX Expressions](https://www.w3schools.com/react/react_jsx_expressions.asp)

One of the most  powerful features of JSX is the ability to embed JavaScript  expressions directly within your markup.

React will **evaluate the expression** and render the result in the DOM.
## Variables
[variables](https://www.w3schools.com/react/react_jsx_expressions.asp)
Variables are also valid expressions. Insert variables in JSX by wrapping it in curly  braces {}.

## Function Calls 
Function calls are valid expressions.Insert function calls in JSX by wrapping it in curly braces{}

## Object Properties
Access object properties within JSX:
## React JSX Attributes
[React JSX Attributes](https://www.w3schools.com/react/react_jsx_attributes.asp)
JSX allows you to insert attributes into HTML elements, but there are a few important 
differences.

## class=className
The ```class``` attribute is a much used attribute in HTML, but since JSX is rendered as 
JavaScript , and the ```class``` keyword is a reserved word
in JavaScript, you are not allowed to use it in JSX.

JSX solved this by using ```className``` instead.
When JSX is rendered, it translates ```className``` attributes into 
```class``` attributes.

## Expressions as Attributes
[Expressions as Attributes](https://www.w3schools.com/react/react_jsx_attributes.asp)

You can also use JavaScript expressions as attribute values.
This is very useful for dynamic attributes.

![alt text](image-3.png)

Note that the attribute values is not wrapped in quotes, this is 
important when using expressions (JavaScript variables) as 
attribute values. If you use quotes, JSX will treat it as a 
string literals and not a JavaScript expression.

camelCase Event attributes
Event attributes in JSX are written in camelCase.

## Boolean Attributes 

[Boolean Attributes](https://www.w3schools.com/react/react_jsx_attributes.asp)

If you pass no value for an attribute, JSX treats it as true. To pass false, you must specify
it as an expression.

## The style Attribute
The style attribute in JSX only accepts a JavaScript object with
camelCased CSS  property names, rather than a CSS string(as in HTML).

## Notice two things about the example above.
1- The styles are stored in an object.
2- Style properties are written in camelCase, e.g. ```fontSize```, instead of ```font-size```

This is an important difference between HTML and JSX.
You will learn more about CSS and styling in 

## React JSX If Statements
[React JSX](https://www.w3schools.com/react/react_jsx_if_statements.asp)

## Conditions-if statements
React supports ```if``` statements, but not inside JSX

To be able to use conditional statements in JSX, you should put the ```if```
statements outside of the JSX,or use a ternary expression instead:

Option1:
Write ```if```statements outside of the JSX code:
Option2: Use ternary expressions instead:

***Note*** that in order to embed a JavaScript expression inside JSX, the 
JavaScript must be wrapped with curly braces,{}.
## React Components
[React Components](https://www.w3schools.com/react/react_components.asp)

Components are like functions that return HTML elements.

## React Components
Components are independent and reusable bits of code. They serve the same purpose as 
JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and function
components, in this tutorial we will concentrate on Function 
components.

## Create Your First Component
When creating a React component, the component's name Must start with 
and upper case letter.
React components returns HTML code.

Create a Function component called ```Car```
```
function Car(){
  return(
    <h2>Hi, I am a Car!</h2>
  );
}
```
## Rendering a Component
Now your React application has a component called ```Car```, which returns an <h2> element.
To use this component in your application , refer to it like this : <Car />

## Props =properties.
Arguments can be passed into a component as ```props```, which stands for properties.
You send the arguments into the component as HTML attributes.
You will learn more about ```Props``` in our

## Components in Components
We can refer to components inside other components:

## Rendering a Component Twice
We can render a component multiple times:

## Components in Files
[components in Files](https://www.w3schools.com/react/react_components.asp)
React is all about re-using code, and it can be a good idea to split
your components into separate files.
To do that, crate a new file in the ```src``` folder with a ```.jsx`` file extension and 
put the code inside it:

```
Note that the filename must start with an uppercase character.
```
To be able to use the ```Car``` component,you have to import the ```Vehicle.jsx``` file in 
your application.

![alt text](image-4.png)

## React Class Components
[React Class Componenets](https://www.w3schools.com/react/react_class.asp)
## Create a Class Component
[Create a Class Component](https://www.w3schools.com/react/react_class.asp)
 When creating a React component, the component's name must start with an upper case letter.

 The component has to include the ``` extends Rect.Component ``` statement, this statement
 creates an inheritance to React. Component, and gives your component access to React.
 Component's functions.
 The component also requires a ``` render()``` method, this method returns HTML
 ```
 class Car extends React.Component{
  render(){
    return <h2> Hi,I am a Car!</h2>;
  }
 }
 ```
 ## Component Constructor

 if there is a ```constructor()``` function in your component,this function willbe 
 called  when the component gets initiated.

 The  constructor function is where you initiate the component's properties.

 In React, component properties should be kept **in an object** called ```state```

 You will learn more about ```state``` later in this tutorial

The constructor function is also where you honor the inheritance of the 
parent component by including the ```super()``` statement, which executes the parent
component's constructor function, and your component has access to all the functions
of the parent component(```React.Component```)

## Props

Another way of handling component properties is by using ```props```.
Props are like function arguments, and you send them into the component as 
attributes.
You will learn more about ```pros``` in the next chapter.

## Props in the Constructor
If your component has a constructor function, the pros should 
always be passed to the ```constructor``` and also to the ```React.Component``` via 
the ```super()``` method

## Components in Components
We can refer to components inside other components:
## Components in Files
React is all about re-using code, and it can be smart to insert some of your 
components in separate files.
To do that, create a new file with a ``` .jsx``` file extension and put the code 
inside it:

Note that the file must start by importing React (as before),and it has to 
end with the statement ```export default Car```
## React Class Component State

React Class components have a built-in ```state``` object.
The ```state``` object is where you **store property values** that belongs to the component.

When the ```state``` object changes, the component re-renders.

## Creating the state Object

The ```state``` object is initialized in the ```constructor```:

[state Object](https://www.w3schools.com/react/react_class.asp)

## the ```state``` Object can contain as many properties as you like:
Specify all the properies your component need:

```
class Car extends React.Component {
  constructor(props){
    super(props);
    this.state={
      brand:"Tesla",
      model:"model 3",
      color:"balck",
      year:2025
    };
  }
  render(){
    return(
      <div>
      <h1>My Car </h1>
      </div>
    );
  }
}
```
Changing the ```state``` Object

To change a value in the ```state``` object , use the ```this.setState() ```method.

When  a value in the ```state``` object changes, the component will re-render , meaning that the output will change according to