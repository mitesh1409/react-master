# React Master > Challenges

## Challenge #2

Set up a React app from scratch.
This time, try rendering an unordered list with 2-3 list items inside
with why you are excited to be learning React.

**Solution**  
WhyReact.jsx component file:

```jsx
function WhyReact() {
    const benefitsListItems = [
        {
            key: 1,
            description: 'Component-Based Architecture',
        },
        {
            key: 2,
            description: 'Efficient Performance with the Virtual DOM',
        },
        {
            key: 3,
            description: 'Declarative UI',
        },
        {
            key: 4,
            description: 'A Thriving Ecosystem and Community',
        },
        {
            key: 5,
            description: 'Cross-Platform Development',
        }
    ].map(benefit => <li key={benefit.key}>{benefit.description}</li>);

    return (
        <>
            <h2>Benefits of React OR Why React?</h2>
            <ul>
                {benefitsListItems}
            </ul>
        </>
    );
}

export default WhyReact;
```
