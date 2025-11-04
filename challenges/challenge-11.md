# React Master > Challenges

## Challenge #11

In React components, inside markup when we need to set a class for an element,
we use `className` instead of `class`. Why is that?

**Solution**
Misconception  
We think that since `class` is a reserved word in JavaScript to define classes,
we can't use it inside markup to set class attribute of an element.

This is not correct.

Actual reason why we need to use `className` is:
Because ultimately JSX code is converted to JavaScript code which creates required HTML DOM elements,
and this DOM elements have properties like `className`, `classList` etc.
So we need to use exactly those property names inside our React markup.
