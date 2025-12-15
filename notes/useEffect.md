# `useEffect`

`useEffect` is a React Hook that lets you synchronize a component with an external system.

`useEffect(setup, dependencies?)`

**setup**  
The function with your Effect’s logic.  
Your setup function may also optionally return a cleanup function.  

When it is run?  
When your "component commits", React will run your setup function.  
After every commit with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values.  
After your component is removed from the DOM, React will run your cleanup function.

**dependencies (optional)**  
The list of all reactive values referenced inside of the setup code.

`useEffect` returns `undefined`.

---

`useEffect(setup, dependencies?)`

What happens if dependencies = [] and why?

In React, the behavior of `useEffect(setup, dependencies)` is determined by how React evaluates the dependency array across renders.

---

## Case: `dependencies = []`

```jsx
useEffect(() => {
  // setup logic
}, []);
```

### What happens?

* The `setup` function runs **only once**, **after the component is mounted**.
* It does **not** run again on re-renders.
* The cleanup function (if returned) runs **only when the component unmounts**.

---

## Why does it run only once?

React compares the dependency array between renders.

* The dependency array is **empty**
* There are **no values to track for change**
* Since nothing can change, React has **no reason to re-run the effect**

Internally, React’s logic is effectively:

> “Run this effect after the first render. On subsequent renders, check dependencies.
> There are none, so nothing has changed → skip the effect.”

---

## Mental model

| Dependency array | When `useEffect` runs                    |
| ---------------- | ---------------------------------------- |
| Omitted          | After **every** render                   |
| `[]`             | **Once** (on mount)                      |
| `[a, b]`         | On mount and whenever `a` or `b` changes |

---

## Why this is useful

An empty dependency array is commonly used for:

* Initial data fetching
* Setting up subscriptions
* Initializing timers or event listeners

It behaves similarly to `componentDidMount` in class components.

---

## Important note (React 18 + StrictMode)

In **development mode**, React may **invoke the effect twice** on mount to detect side effects.
This does **not** happen in production and does **not** mean the effect runs twice logically.

---

### One-line interview answer

> When `dependencies = []`, `useEffect` runs only once after the initial render because there are no dependencies for React to watch for changes, so the effect never needs to re-run.
