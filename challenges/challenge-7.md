# React Master > Challenges

## Challenge #7

What's wrong with this code:

```jsx
root.render(
    <h1>Hello React :)</h1>
    <h2>Hello Vite :)</h2>
);
```

**Solution**
Editor highlights this code with the following message:
> JSX expressions must have one parent element.

And build will give the following error:
> Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

```jsx
root.render(
    <h1>Hello React :)</h1>
    <h2>Hello Vite :)</h2>
);
```

Your component can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.

So to solve this you need to wrap all elements inside a single parent element.
For that you can use any suitable HTML elements like `<div>`, `<section>` etc. OR
use `<React.Fragment>...</React.Fragment>` OR
use `<>...</>`.

`<>...</>` is shorthand for `<React.Fragment>...</React.Fragment>`.
It groups multiple sibling elements without creating an extra DOM node, so your component can return a single root while avoiding a wrapper `<div>`.

Fixed code is as below:

```jsx
root.render(
    <>
        <h1>Hello React :)</h1>
        <h2>Hello Vite :)</h2>
    </>
);
```
