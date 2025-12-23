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

Node.js 本身是**全局安装**的，但你提到的“node”很可能是在说使用 Node.js 的包管理器（npm 或 yarn、pnpm 等）来安装第三方包（如 express、react、lodash 等）时，是应该**全局安装**（`-g`）还是**项目局部安装**。

下面详细说明两种方式的区别和推荐用法：

### 1. Node.js 运行时本身
- Node.js（node 命令）是**全局安装**在操作系统上的。
- 你通过官网下载安装包、nvm（Node Version Manager）或其他方式安装一次，全系统可用。
- 不需要也不应该为每个项目单独安装 Node.js 运行时。

### 2. npm 包的安装方式

| 安装方式          | 命令示例                          | 适用场景                                   | 推荐程度          |
|-------------------|-----------------------------------|--------------------------------------------|-------------------|
| **全局安装**      | `npm install -g <package>`<br>`npm install --global <package>` | 命令行工具（CLI）<br>例如：<br>• create-react-app（旧）<br>• vite<br>• typescript (tsc)<br>• eslint<br>• pm2<br>• nodemon<br>• yarn/pnpm 本身 | 只在必要时使用    |
| **项目局部安装**  | `npm install <package>`（默认）<br>`npm install --save-dev <package>`（开发依赖） | 绝大多数情况<br>• 项目运行时依赖（如 express、react）<br>• 开发工具（如 webpack、babel、jest），但不作为全局命令使用 | **强烈推荐**      |

### 推荐实践（现代前端/后端项目）

- **绝大部分包都应该局部安装**（即项目级安装），放入 `package.json` 的 `dependencies` 或 `devDependencies` 中。
- 原因：
  1. 不同项目可以依赖不同版本的同一个包，避免版本冲突。
  2. 团队协作时，大家安装相同的依赖（通过 `npm install`）。
  3. 便于部署（部署时只需带上 `node_modules` 或通过 `package-lock.json` 恢复）。
  4. 全局安装的包路径在不同系统可能不同，容易出问题。

- **只有提供全局命令行的工具才全局安装**，例如：
  ```bash
  npm install -g vite        # 用 vite create 项目或 vite dev
  npm install -g typescript  # 用 tsc 命令编译
  npm install -g nodemon     # 用 nodemon 启动 Node 服务
  ```

- 更好方式：即使是 CLI 工具，也可以用 **npx** 临时执行局部或远程包，避免全局安装：
  ```bash
  npx create-vite@latest my-project
  npx eslint .
  ```

### 总结建议

- Node.js 运行时 → **全局安装一次**（或用 nvm 管理多个版本）
- 第三方 npm 包 → **优先项目局部安装**（`npm install`）
- 只有必须作为全局命令使用的 CLI 工具才考虑全局安装（`-g`），或者直接用 `npx` 代替全局安装

这样你的项目更可控、可复现、团队协作更顺畅。

 Always use the ```setState()``` method to change the state object, 
it will ensure that the component knows its been updated and calls 
the ```render()``` method (and all the other lifecycle methods).

## Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate
during its three main phases.
The three phases are :Mounting, Updating, and Unmounting.

这三个阶段是：**挂载（Mounting）、更新（Updating）和卸载（Unmounting）**。

### 详细中文解释（React 生命周期常用译法）：
- **Mounting**：挂载 → 组件被创建并插入到 DOM 中的阶段。
- **Updating**：更新 → 组件因 props 或 state 变化而重新渲染的阶段。
- **Unmounting**：卸载 → 组件从 DOM 中移除的阶段。

在中文 React 文档和社区中，最常见的翻译就是“**挂载、更新、卸载**”这三个词。

## Mounting 

Mounting means putting elements into the DOM 

React has four built-in methods that gets called, in this order,when
mounting a component:
1. ```constructor()```
2. ```getDerivedStateFromProps()```
3. ```render```
4. ```componentDidMount()```

The ```render()``` method is required and will always be called,
the others are optional and will be  called if you define them.

## constructor

The ```constructor()``` method is called before anything else, when the component
is initiated, and it is the natural place to set up the initial ```state``` and other 
initial values.

The ```constructor()``` method is called before anything else, when the component is 
initiated, and it is the  natural place to set up the initial ```state```
and other initial values.

The ```constructor()``` method is called with the ```props```, as arguments,
and you should always start by calling the ```super(props)``` before anything 
else, this will initiate the parent's constructor method and allows
the component to inherit methods from its parent (React.Component).

## getDerivedStateFromProps
The ```getDerivedStateFromProps()``` method is called right before  rendering the 
element(S) in the DOM.

This is  the natural place to set the ```state``` object based on the initial ```props```
It takes ```state``` as an argument, and returns an object with changes to the ```state``

The example below starts with the favorite color being "red",but the ```getDerivedStateFromProps()```
method updates the favorite color based on the ```favcol``atrribute

## render
The ```render()``` method is required , and is the method that actually outputs the HTML to 
the DOM.

## componentDidMount
The ```componentDidMount()``` method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in 
the DOM.
## Updating 

The next phase in the lifeCycle is when a component is updated.
A component is updated whenever there is a change in the component's
```state``` or ```props```.
React has five built-in methods that gets called, in this order, when
a component is updated:
1.  ```getDerivedStateFromProps()```
2. ```shouldComponentUpdate()```
3. ```render()```
4. ```getSnapshotBeforeUpdate()```
5. ```componentDidUpdate()```

The ```render()``` method is required and will always be called , the others are 
optional. and will be called if you define them.


## shouldComponentUpdate
In the ```shouldComponentUpdate()``` method you can return a Boolean value that
specifies whether React should continue with the rendering or not.

The default value is ```true```
The example below shows what happens when the ```shouldComponentUpdate()``` method 
returns ```false```:

## render 
The ```render()``` method is of course called when a component gets updated, it 
has to re-render the HTML to the DOM , with the new changes.

The example below has a button that changes the favorite color to blue:


## getSnapshotBeforeUpdate
In the ```getSnapshotBeforeUpdate()``` method you have access to the ```pros``` and 
```state```before the update, meaning that event after the update, you can 
check what values were before the update.

If the ```getSnapshotBeforeUpdate()``` method is present, you should also include 
the ```componentDidUpdate()``` method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:
When the component is ***mounting**** it is  rendered with the favorite color "red"
When the component ***has been mounted***, a timer changes the state, and after one
second, the favorite color becomes "yellow"
This action triggers the ***update*** phase, and since this component 
has a ```getSnapshotBeforeUpdate()``` method, this method is executed,
and writes a message to the empty DIV 1 element.

Then the ```componentDidUpdate()``` method is executed and 
writes a message in the empty DIV2 element:

## React Props
[React Props](https://www.w3schools.com/react/react_props.asp)
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
```
props stands for properties.
```
## React Props
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes.

Add a ```brand``` attribute to the ```Car``` element:

```
createRoot(document.getElementById('root')).render(
  <Car brand="BMW" />
);
```
The component receives the argument as a ```props``` object:

The name of the objects is ```props```, but you can call it anything you want .

![alt text](image-5.png)

## Pass Multiple Properties

You can send as many properties as you want.
Every attribute is sent to the ```Car``` component as object properties.

## Different Data Types
React props can bre of any data type, including variables, numbers, strings, objects,arrays, and more.

Strings can be sent inside quotes as in the examples above, but numbers, variables,and bo
objects need to be sent inside curly brackets.\

***Note*** has to be sent inside curly brackets to be treated as numbers:

## Objects and Arrays has to be sent inside curly brackets:
![alt text](image-6.png)
## Object Props
The component treats objects like objects, and you can use the dot notation to access the 
properties.


This error means Windows cannot find the `vite` executable. When you run `npm run dev` the `dev` script typically runs `vite`; npm will look for `vite` in your project's local binaries (node_modules/.bin) — so the usual cause is that Vite isn't installed in the project, or you're not in the project folder, or your node_modules are missing/corrupted.

Quick checklist and fixes (run these in your project root D:\react_new\react_2028\my-react-app):

1) Confirm you're in the right folder and node / npm are available
```
cd D:\react_new\react_2028\my-react-app
node -v
npm -v
```

2) Try installing project dependencies (if you haven't)
```
npm install
```
After that try:
```
npm run dev
```

3) If `npm install` didn't add Vite, install Vite as a dev dependency (recommended)
```
npm install --save-dev vite
npm run dev
```

4) Quick local-run (no install) to test:
```
npx vite
# or
npm exec vite -- --version
```
If `npx vite` prints a version or starts the server, your script should work after adding the dependency.

5) Verify Vite is present locally
```
npm list vite --depth=0
# or check file
dir node_modules\.bin\vite
```
If these show nothing/missing → install Vite.

6) If your project was created with Create React App (CRA)
CRA uses `react-scripts start`, not Vite. Check your package.json scripts. If you see `"start": "react-scripts start"` then run:
```
npm start
```
If the project is supposed to be a Vite app, package.json should have:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
(If it doesn't, update it or recreate the project using the correct template.)

7) As a last resort (not recommended for most projects) you can install Vite globally:
```
npm install -g vite
```
But prefer local devDependency so the project is reproducible.

Troubleshooting tips
- If `npm install` fails, delete node_modules and package-lock.json then `npm install`.
- Ensure no antivirus/Windows policy blocks node_modules/.bin execution (rare).
- If using pnpm or yarn, use `pnpm install` / `yarn` and then `pnpm dev` / `yarn dev`.

If you paste your package.json scripts section here I can tell you exactly what to run and whether the project expects Vite or CRA.


## React Lists 
[React Lists](https://www.w3schools.com/react/react_lists.asp)

## avaScript Array map()
[array Map](https://www.w3schools.com/react/react_es6_array_map.asp)

The ```map()``` method creates a new array with the results of calling a function
for every array element.
## Map() in React 
The ```map()``` method is commonly used in React to render lists of elements:
Note: when using ```map()``` in React to create list items, each item needs a unique ```key``` prop.

## Map with Object
[Map with Object](https://www.w3schools.com/react/react_es6_array_map.asp)

## map() Parameters
the ```map()``` method takes three parameters:
-```currentValue``` - The current element being prcessed
-```index``` the index of the current element(optitional)
-```array``` The array that map was called upon (optional)


## React Lists
In React, you will render lists with some type of loop.
The JavaScript ```map()``` array method is genereally the preferred method.

## Keys in React Lists
Keys allow React to keep track of elements.This way, if an item is updated or removed,
only that item will be re-rendered instead of the entire list.

Keys must be unique among siblings, but they don't have to be unique across the 
entire application.

## React ES6 Destructuring
[React ES6 Destructuring](https://www.w3schools.com/react/react_es6_destructuring.asp)

Destrucring is a JavaScript feature that allows you to extract values from objects or arrays into 
distinct variables. In React, it's commonly used with props, hooks, and state management.

Note:Destructing makes React code cleaner and more readable by reducing repetitive object and 
array access.

## Destructing Arrays
```
Note: When destructuring arrays, the order that variables are declared is important.
```
destructing om


## React Forms 
[React Forms](https://www.w3schools.com/react/react_forms.asp)

这段代码是一个使用 React 框架编写的简单网页表单示例。它试图创建一个输入框，让用户输入姓名，并实时显示当前输入的值。下面我一步步解释代码的功能、结构和潜在问题（因为代码中存在一个小 bug，我也会提到）。

### 整体概述
- 这是一个 React 应用的基本结构。
- 它导入 React 的必要模块，定义一个函数组件 `Myform`，该组件使用状态（state）来管理输入框的值。
- 然后，通过 `createRoot` 将组件渲染到 HTML 页面的 `#root` 元素中。
- 功能：显示一个表单，输入框初始值为 "Charles"，用户输入时实时更新下方显示的 "Current value"。

如果直接运行这段代码，会报错，因为组件名的大小写不一致（React 组件名必须以大写字母开头，且使用时要匹配）。我会在解释中指出如何修复。

### 逐行/逐部分解释

1. **导入语句**：
   ```
   import {createRoot} from 'react-dom/client'
   import {useState} from 'react'
   ```
   - `createRoot` 来自 `react-dom/client`，用于在 React 18+ 版本中创建根渲染器，将 React 组件挂载到 DOM 中（取代旧版的 `ReactDOM.render`）。
   - `useState` 来自 `react`，这是一个 React Hook，用于在函数组件中管理状态（state）。它允许组件“记住”数据，并在数据变化时重新渲染。

2. **组件定义**：
   ```
   function Myform(){
       const [name,setName]=useState("Charles");
       return (
           <form>
               <label>
                   Enter your name:
                   <input
                   type="text"
                   value={name}
                   onChange={(e) =>setName(e.target.value)}
                   />
                
               </label>
           
           <p>Current value: {name}</p>

           </form>
           
       )

   }
   ```
   - `function Myform()`：定义一个函数组件，名为 `Myform`。**注意：这里有 bug**！React 要求自定义组件名以大写字母开头（例如 `MyForm`），否则会被视为 HTML 标签，导致渲染失败。应该改为 `function MyForm()`。
   - `const [name, setName] = useState("Charles");`：
     - 使用 `useState` Hook 初始化状态。`name` 是当前状态值，初始为 "Charles"。
     - `setName` 是一个函数，用于更新 `name` 的值。当 `setName` 被调用时，组件会重新渲染。
   - `return (...)`：返回 JSX（React 的 HTML-like 语法），描述组件的 UI。
     - `<form>`：一个 HTML 表单元素。
     - `<label>`：标签，包含文本 "Enter your name:" 和输入框。
     - `<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`：
       - `type="text"`：文本输入框。
       - `value={name}`：输入框的值绑定到状态 `name`，实现“受控组件”（controlled component），即输入框的值由 React 状态控制。
       - `onChange={(e) => setName(e.target.value)}`：当输入变化时触发的事件处理函数。`e.target.value` 获取用户输入的新值，并通过 `setName` 更新状态，从而实时更新 UI。
     - `<p>Current value: {name}</p>`：一个段落，显示当前 `name` 的值。`{name}` 是 JSX 中的表达式，会插入状态值。

3. **渲染组件**：
   ```
   createRoot(document.getElementById('root')).render(
       <MyForm />
   )
   ```
   - `document.getElementById('root')`：获取 HTML 页面中 ID 为 "root" 的元素（通常在 index.html 中定义，如 `<div id="root"></div>`）。
   - `createRoot(...).render(<MyForm />)`：创建根渲染器，并将 `<MyForm />` 组件渲染到该元素中。
   - **注意 bug**：这里使用 `<MyForm />`（大写 F），但组件定义是 `Myform`（小写 f）。JavaScript 是区分大小写的，所以 `MyForm` 未定义，会导致错误。修复方法：将组件定义改为 `MyForm`，或渲染时改为 `<Myform />`（但推荐大写，以符合 React 规范）。

### 代码运行流程
1. 页面加载时，组件渲染，输入框显示 "Charles"，下方 p 标签也显示 "Current value: Charles"。
2. 用户在输入框中键入文字（例如 "Alice"），`onChange` 事件触发，`setName` 更新状态为 "Alice"。
3. React 检测到状态变化，重新渲染组件。现在输入框和 p 标签都显示 "Alice"。
4. 这是一个“受控输入”的经典示例，展示了 React 的单向数据流：UI 由状态驱动。

### 潜在问题和改进建议
- **Bug 修复**：如上所述，将 `Myform` 改为 `MyForm`。
- **完整性**：代码缺少严格模式（如 `<StrictMode>`），但对于简单示例可选。
- **最佳实践**：
  - 添加 `key` 属性如果有列表（这里没有）。
  - 对于表单，考虑添加提交按钮和处理函数（例如 `onSubmit`）。
  - 确保在 React 项目环境中运行（需要安装 React 和 React DOM，通常通过 Create React App 或 Vite 创建项目）。
- **运行环境**：这需要在浏览器中运行，支持 React 的 JavaScript 环境。HTML 文件需有 `<div id="root"></div>`。

如果这是你提供的代码片段，并且你有具体的疑问（如为什么报错或如何扩展），可以提供更多细节，我可以进一步解释！

## React SubMit
[React SubMit](https://www.w3schools.com/react/react_forms_submit.asp)

You can control the submit acton by adding an event handler in the ```onSunbmit``` attribute for the 
```<form>```
## 
## React Forms -Textarea
[react Forms](https://www.w3schools.com/react/react_forms_textarea.asp)


The textarea element in React is slightly different from ordinary HTML.
In HTML the value of a textarea is the text between the start tag ```<textarea>``` and the end
tag </textarea>
```
<textarea>
Content of the textarea.
</textarea>
```
In React the value of a textarea is placed in a value attribute, just like with the input element.
We'll use the ```useState``` Hook to manage the value of the textarea.

## React forms-Select
[React Form](https://www.w3schools.com/react/react_forms_select.asp)


## Select 
A drop down list, or a select box, in React is also a bit different from HTML .
In HTML, the selected value in the drop down list is defined with the ```selected ```
attribute:

```
<select>
 <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>
```

In react, the selected value is defined with a ```value```attribute on the ```select```

## React Forms - Multiple Input Fields
[React form](https://www.w3schools.com/react/react_forms_multiple_inputs.asp)

## Handling Multipe Inputs
When you have multiple controlled input fields in a form, you can manage
their state either by:
1.Using a separate useState call for each input.
2. Using a single useState call with an object to hold all form field values.
We will use the second approach, as it is more common for forms.
Make sure each input field has a unique name attribute.
Also, when initializing the state, use an object instead a string, if the 
input fields has no initial value, use an empty objec.

## Initial Values
To add initial values to the input fields. in the example above, add the proper keys and 
values to the ```useState``` object:

## React Forms - Checkbox
[React Checkbox](https://www.w3schools.com/react/react_forms_checkbox.asp)


## Checkbox
For checkboxes,use the ```checked```attribute instead of ```value``` to control its state.

We'll use the ```useState```Hook to manage the value of the textarea:
In the ```handleChange``` function, use the ```e.target.type``` property check if the current 
input is a checkbox or not.
## React Forms - Radio
[Radio](https://www.w3schools.com/react/react_forms_radio.asp)

Radio buttons are typically used in groups where only one option can be selected.
All radio buttons in a group should share the same name attribute.
You control radio buttons based on whether the radio button's value matches the 
selected value in your state.


## react  CSS
[react CSS ](https://www.w3schools.com/react/react_css_js.asp)

What is CSS-in-JS

CSS-in-JS is  a styling technique where you can write CSS directly in 
your JavaScript code.
This approach allows you to:
- Write CSS using JavaScript
- Create component-scoped style
- Use dynamic styles based on props
- Avoid CSS class name conflicts.
```
In this turorial, we'll use the popular ```styled-components``` library.
```

## Getting Started
CSS-in-JS is not a part of the React core library, but can be installed using many 
React build tools, like Vite, Webpack, or Create React App.
To install```styled-components```run the following command:
```
npm install styled-components
```

![alt text](image-12.png)
Without CSS-in-JS, you would have to either:
- Write CSS in a separate .css file and import it into your React components
- Use inline styles.
## Notice that:
- We use the ```styled``` object create components
- Styles are written inside template literals(backticks)
- You can use regular CSS Syntax
## Props in Styled Components
[Props in styled Components](https://www.w3schools.com/react/react_css_js.asp)

Another powerful feature of CSS-in-JS is the ability to use props to make style dynamic,
Let's create an example where we have two buttons, one primary and one secondary.
We want to base their background color on the value of the ```btntype``` prop:

## Extending Styles

Another way of letting multiple elements have the same styles is ot extend existing styled components.



For example, we can create a PrimaryButton and SuccessButton that both have the same styles as the Button component, but they also have separate background colors:

![alt text](image-13.png)

## Global Styles
You can also create global styles, which will be given normal class name and will be available for all components:
You can also create global styles, which will be given normal class name and will be available for all components:

## React Router
[React Router](https://www.w3schools.com/react/react_router.asp)

## Install React Router
In the command line, navigate to your project directory and run 
the following command to install the package:
```
npm install react-router-dom
```
## Wrap Your App with BrowserRouter
Your application must be wrapped with the ```BrowserRouter``` component to enable routing:
```
function App(){
  return(
    <BrowserRouter>
    {/*Your app content */}
  );
}
```
## Create Views
To demonstrate routing , we'll create three pages (or views ) in our application: HOme 
 About , and Contact:
 We will create all three views in the same file for simplicity, but 
 you can of courser split them into separate files.

 ## Basic Routing 
 React Router uses three main components for basic routing:
 - Link: Creates navigation links that update the URL
 - Routes: A container for all your route definitions
 - Route: Defines a mapping between a URL path and a component

 Let's add navigation links and routes for each link:

 ![alt text](image-14.png)

 - BrowserRouter wraps your app and enables routing functionality
 - Link components create navigation links
 - Routes and Route define your routing configuration

 ##  Nested Routes
 You can have a ```Route``` inside another ```Route```,this is called 
 nested routes.
 Nested routes allow you change parts of the page when you navigate to a n
 new  URL, while other parts is not changed or 
 reloaded, almost like having a page within a page.

 Let's use the example above ,and add two new components that
 will be rendered inside the ```Products``` component.
 One called ``` CarProducts``` and one called ```BikeProduds```

 ## Style Active Links
 [Style Active Links](https://www.w3schools.com/react/react_router.asp)

 ## URL Parameters 
 [URL Parameters](https://www.w3schools.com/react/react_router.asp)

 ## What is use Transition?
  The ```useTransition``` hook helps you keep your React app responsive during headvy
  updates.

  It lets you mark some state updates as "non-urgent", allowing other, more urgent
  updates to happen first.

  ## When to Use Transitions?
  Use transitions when you have :
  - A slow operation that might freeze the UI
  - Updates that aren't immediately critical
  - Search results that take time to. display

  ## React forwardRef
  [React forwardRef](https://www.w3schools.com/react/react_forward_ref.asp)
  ## What is forwardRef?
  ```forwardRef``` lets your component pass a reference to one of its 
  children. It's  like giving a direct reference to a DOM element inside
  your component.
  Common uses for "forwardRef":
  - Focusing input elements
  - Triggering animations
  - Measuring DOM elements
  - Integrating with third-party libraries
  ![alt text](image-15.png)
  In this example:
  - We wrap our input component with ```forwardRef```
  - The component receives a ```ref``` as its second parameter
  - The parent can now control the input element directly
  **Note**: Onlu use ```forwardRef``` when you need direct access to a 
  DOM element. For most cases, you can use props and state instead.
  ## React Higher Order Components
  [React Higher Order Components](https://www.w3schools.com/react/react_hoc.asp)

  ## What is a Higher Order Component?
  A Higher Order Component(HOC) is like a wrapper that adds extra features
  to your React components. Think of it like putting a case on your phone - the case adds new features(like water protection) without changing the  phone itself.

  **Note**: HOCs are functions that take a component and return an enhanced version of that component.
  ## Example: Adding a Border
  To demonstrate how HOCs work, let's create a simple example-adding a border to any component:

  Create a function that adds a border around whatever component you pass 
  to it:

  ## React Saas Styling
  [React Saas Styling](https://www.w3schools.com/react/react_sass_styling.asp)

  ## What is Saas?
  Saas is a CSS pre-processor.
  Sass files are executed on the server and sends CSS to the browser.
  Sass adds extra features to css like variables, nesting ,mixins, and more.
  

  ## Create a Sass file
  Create a Sass file the same way as your create CSS files, but Sass files  have the file extension ```.scss```

## Sass Modules
Sass has many Built-in Modules that you can use to mainpulate colors,math, strings,etc.
One example is the ```sass:color``` Module.
It has a function to make a color darket or lighter, just by giving it a 
percentage:

## React Hooks
[React Hook](https://www.w3schools.com/react/react_hooks.asp)

React Hooks allow  functions to have access to state and other React features
without using calsses.
They proviede a more direct API to React concepts like props, state,context, refs  and lifecycle.
## What is a Hook?
Hooks are functions that let you "hook into" React state and lifeCycle features from functional components.

## Hook Rules
- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a components.
- Hooks cannot be conditional
## Note: Hooks will not work in React class components.

## React useState Hook
[useState](https://www.w3schools.com/react/react_usestate.asp)

The React ```useState``` Hook allows us to track state in a function component.
State generally refers to data or properies that need to be tracking in an application.

## Import ```useState```
To use the ```useState``` Hook, we first need to ```import```it  into our componet.

At the top of your componet, ```import``` the useStateHook;


```
import {useState} from "react";
```
NOtice ,we are destructuring ```useState``` Hook.

## Initialize ```useState```
We initialize our state by calling ```useState``` in our function component.
```useState``` accepts an initial state and returns two values:
- The current state.
- A function that updates the state.

```
import {useState} from "react";
function FavoriteColor(){
  const [color,setColor]= useState("red");
}
```

## Notice we are destructuring the returned values from ```useState```
The first value, ```color```, is our current state.
The second value,```setColor``` ,is the function that is used to update our state.
```
These names are variables that can be named anything you would like.
```
Lastly, we set the initial state to "red":```useState("red")```

## wHAT CAN STATE Hold?
The ```useState``` Hook can be used to keep track of strings,numbers,
booleans,arrays, objects, and any combination of these!

We could create multiple state Hooks to tract individul values.

## Updating Objects and Arrays in State
When state is updtated, the entire state gets overwritten.
What if we only want to update the color of our car?

## React useEffect Hooks
The ````useEffect ``` Hook allows you to perform side effects in your components.
Some examples of side. effects are: fetching data, directly updating the DOM, and timers.
```useEffect``` accepts two arguments. The second argument is opional.
```useEffect(<function>,<dependency>)```

If there are multiple dependencies, they should be included in the 
```useEffect``` dependency array.

## Effect Cleanup
Some effects require cleanup to reduce memory  leaks.
Timeouts, subscriptions, event listeners, and other effects  that
no longer needed should be disposed.
We do this by including a return function at the end of the ```useEffect``` Hook.

## React useContext Hook
[React useContext Hook](https://www.w3schools.com/react/react_usecontext.asp)
## React Context
React Context is a way to manage state globally.
It can be used together with the ```useState``` Hook to share 
state between deeply nested components more easily than
with ```useState``` alone.

## The problem 
State should be held by the highest parent component
in the stack that requires access to the state.
To illustrate, we have many nested components.
The component at the top and bottom of the stack need 
access to the state.
To do this without Context,we will need to pass the state
as "props" through each nested component. This is called
"prop drilling".

## The Solution
The solution is to create context.
## Creat Context
To create context, you must import ```createContext``` and initialize it:
```
import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();
```

## React ```useRef``` Hook
[React useRef Hook](https://www.w3schools.com/react/react_useref.asp)

The ```useRef``` Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

## Does Not Cause Re-renders

## Accessing DOM Elements
The ```useRef``` Hook is often used to access DOM elements directly.
First, we create a ref using the ```useRef``` Hook:```const inputElement =useRef();```
Then, we attach the ref to a Dom element using the ref attribute in JSX:```<input
type="text" ref={inputElement} />```
Finally, we can access the DOM element using the ```current``` property:```inputElement.current.```

