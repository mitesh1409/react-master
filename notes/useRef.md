# useRef

[useRef](https://react.dev/reference/react/useRef)

useRef is a React Hook that lets you reference a value that’s not needed for rendering.

`const ref = useRef(initialValue)`

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.
