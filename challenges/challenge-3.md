# React Master > Challenges

## Challenge #3

Create your very first custom React component!
Call it "MainContent", and have it return a simple
h1 element that says "React is great!"
Afterward, render it.

**Solution**  
MainContent.jsx component file:

```jsx
function MainContent() {
    return (
        <h1>React is great :)</h1>
    );
}

export default MainContent;
```

Rendering this component:

```jsx

// any other existing code...
import MainContent from './MainContent';
// any other existing code...

// any other existing code...
<MainContent />
// any other existing code...

```
