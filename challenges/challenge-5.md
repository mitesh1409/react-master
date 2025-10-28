# React Master > Challenges

## Challenge #5

What will be the output of the following code?

```jsx
  // JSX element is actually a JavaScript object that React can understand and render on the web page.
  console.log(<h1>Hello React :)</h1>);
```

**Solution**
In the context of pure JavaScript (or other than React), it gives an error.

```javascript
  // In the context of pure JavaScript (or other than React), this will give an error.
  // Uncaught SyntaxError: Unexpected token '<'
  console.log(<h1>Hello React :)</h1>);
```

In the context of React it works.

```jsx
  // JSX element is actually a JavaScript object that React can understand and render on the web page.
  // This will print a JavaScript object in the console.
  console.log(<h1>Hello React :)</h1>);
```
