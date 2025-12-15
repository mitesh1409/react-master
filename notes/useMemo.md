# useMemo

[useMemo](https://react.dev/reference/react/useMemo)

useMemo is a React Hook that lets you memoize a value.

`const memoizedValue = useMemo(() => computeValue(), dependencies)`

`useMemo` returns a memoized value.  
It only re-computes the value when one of the dependencies has changed.

The memoized value is persisted across renders, so it avoids recomputing the value unless the dependencies have changed.
