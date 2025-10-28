# React Master > Challenges

## Challenge #1

Create a Hello React app, don't use any docs/help.

**Solution**  
`npm create vite@latest app-name -- --template react`
OR
`npm create vite@latest`

Load React application into a root element on the page.

```jsx
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root'))
    .render(<h1>Hello React :)</h1>);
```
