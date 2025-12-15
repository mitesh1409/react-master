# `useContext`

[useContext](https://react.dev/reference/react/useContext)

useContext is a React Hook that lets you read and subscribe to context from your component.

`const value = useContext(SomeContext)`

Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

`useContext` reads and subscribes to a context.

If React can’t find any providers of that particular context in the parent tree, the context value returned by useContext() will be equal to the default value that you specified when you created that context:

const ThemeContext = createContext(null);
The default value never changes.
