<br>
<a href='#'>
<p align="center">
   <img width="100" src="./reactjs-logo.png">
</p>
</a>

<h1 align='center'>React JS Notes</h1>

<h6 align='center'>Notes that I made while learning to code in <ul><b>React JS</b></ul></h6>
<br>

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.

### 🔴 1. Installation

```bash
npx create-react-app my-app
cd my-app
npm start
```

### 🔴 2. JSX

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX converts HTML tags into react elements.

```jsx
const element = <h1>Hello, world!</h1>;
```

### 🔴 3. Components

- Components are independent and reusable bits of code.
- They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.
- Components come in two types, Class components and Function components.

```jsx
// Function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- We use function components more often than class components.
- We use class components when we need to use state or lifecycle methods.

### 🔴 4. Props

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- Props are immutable.

```jsx
<Welcome name="Aditya" />
```

### 🔴 5. React hook

- Hooks are functions that let you use state and other React features in functional components.
- Hooks don’t work inside classes.
- Hooks allow you to reuse stateful logic without changing your component hierarchy.

```jsx
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 🔴 6. useState()

- useState() is a Hook that lets you add React state to function components.
- It returns an array with two elements. The first element is the current state value and the second element is a function that lets you update it.

```jsx
const [state, setState] = useState(initialState);
```

### 🔴 7.
