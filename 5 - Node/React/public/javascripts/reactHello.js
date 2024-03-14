/*
  React uses a markup language called JSX.
  JSX looks very much like HTML. 
  JSX is a syntax extension, while React is a JavaScript library.

  https://react.dev/learn/writing-markup-with-jsx
  https://en.wikipedia.org/wiki/JSX_(JavaScript)
  https://www.w3schools.com/react/react_jsx.asp
*/

const element =(
  <h1>Hello, world!</h1>
);
// React18
const root = ReactDOM.createRoot(document.getElementById('hello'));
root.render(element);

// React17
//ReactDOM.render(element, document.getElementById('hello'));