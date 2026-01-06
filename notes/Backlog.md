
A JSX element is a combination of JavaScript code and HTML tags that describes what you’d like to display.

Reference: https://react.dev/learn/tutorial-tic-tac-toe

---

```javascript
export default function Square() {
  return <button className="square">X</button><button className="square">X</button>;
}
```

You’ll get this error:

/src/App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX Fragment <>...</>?

React components need to return a single JSX element and not multiple adjacent JSX elements like two buttons. To fix this you can use Fragments (<> and </>) to wrap multiple adjacent JSX elements like this:

```javascript
export default function Square() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```

Reference: https://react.dev/learn/tutorial-tic-tac-toe

---



Why we must set a key attribute while rendering lists in a React Component.
[Rendering lists](https://react.dev/learn#rendering-lists)

