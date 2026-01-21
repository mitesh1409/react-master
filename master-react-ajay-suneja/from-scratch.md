# Module #1: Getting Started with React

## Writing Code from Scratch

Topics

- Write main.jsx file from scratch

---

For example when we create a React app using Vite,  
by default main.jsx looks like below:  

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Lets go through each line one by one to understand how it works.

Line #1: `import { StrictMode } from 'react'`

Imports `StrictMode` component from the `react` package.

Line #2: `import { createRoot } from 'react-dom/client'`

Imports `createRoot` component from the `react-dom/client` package.

Line #3: `import './index.css'`

Imports index.css.

Line #4: `import App from './App.jsx'`

Imports `App` component - root component of the application.

Line #5:  

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`createRoot` creates root to display React components inside a Browser DOM node.
