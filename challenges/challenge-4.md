# React Master > Challenges

## Challenge #4

Imperative vs Declarative style of coding.

```jsx
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <h1>Hello, React!</h1>
)
```

Recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.

**Solution**  
Following is React code and it is Declarative.

```jsx
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

root.render(
    <h1>Hello, React!</h1>
)
```

Following is JavaScript code and it is Imperative.

index.html file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello JavaScript :)</title>
</head>
<body>
    <div id="root"></div>

    <script src="app.js"></script>
</body>
</html>
```

app.js file:

```javascript
const rootElement = document.getElementById('root');

const h1Element = document.createElement('h1');
const textNode = document.createTextNode('Hello JavaScript :)');
h1Element.appendChild(textNode);
h1Element.setAttribute('class', 'header');

rootElement.appendChild(h1Element);
```
