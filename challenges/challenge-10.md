# React Master > Challenges

## Challenge #10

What's wrong with the following code?

```jsx
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React Logo" />
        </header>
    );
}

root.render(
    Header() // this works
);
```

**Solution**
The problem is with how we used Header component,
we should use HTML element like syntax to display/use a React component.
So instead of calling it like a function `Header()`,
we should use `<Header />` syntax.

```jsx
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React Logo" />
        </header>
    );
}

root.render(
    <Header />
);
```
