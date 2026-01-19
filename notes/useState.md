# `useState`

[useState](https://react.dev/reference/react/useState)

To manage component state.
`useState` is a React Hook that lets you add a state variable to your component.

`const [state, setState] = useState(initialState)`

Where  
state = state variable  
setState = state updater function  
initialState = value of the initial state  

The convention is to name state variables like [something, setSomething] using array destructuring.

```javascript
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...
```



Examples:  

- Click counter
- Count the number of letters in a textbox as you type

Explore:  

- What happens if we call state updater function twice?
