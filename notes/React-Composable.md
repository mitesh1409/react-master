# React Master > React is Composable

When we say React is **composable**, it means you can **build complex UIs by combining small, independent pieces called components**. It's like building with LEGO bricks. 🧱

## Simple Explanation of Composability

Composability is the idea that you can take small, self-contained components and **nest them inside one another** to create a complete and functional application. Each component is focused on one thing, and when you put them together, they form a bigger whole.

* **Self-Contained**: Each component manages its own appearance and behavior.
* **Reusable**: You can use the same component multiple times in different parts of your application.
* **Easier Maintenance**: Because everything is separated, fixing a bug in one small component won't break the entire application.

---

## Examples of Composability

### Example 1: The LEGO Analogy (UI Structure)

Imagine you are building an e-commerce page:

| Small Component (LEGO Brick) | Medium Component (Section) | Large Component (Page) |
| :--- | :--- | :--- |
| **`<Button>`** (e.g., "Add to Cart") | **`<ProductCard>`** (Contains an image, title, price, and a `<Button>`) | **`<ProductList>`** (Contains multiple `<ProductCard>` components) |
| **`<Avatar>`** (User image) | **`<Comment>`** (Contains an `<Avatar>`, username, and text) | **`<Post>`** (Contains a header, an image, and multiple `<Comment>` components) |

The final page is a composition of these smaller, reusable blocks.

### Example 2: Component Nesting in Code

In React code, composability is demonstrated by placing one component inside another using JSX:

```jsx
// 1. Smallest Component
function Button({ label }) {
  return <button>{label}</button>;
}

// 2. Medium Component (composes the Button)
function UserProfileCard({ name }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Developer</p>
      {/* Composing the Button component inside the Card */}
      <Button label="View Profile" /> 
    </div>
  );
}

// 3. Large Component (composes the UserProfileCard)
function App() {
  return (
    <div className="app-container">
      <h1>Team Members</h1>
      {/* Composing the UserProfileCard component */}
      <UserProfileCard name="Alice" /> 
      <UserProfileCard name="Bob" />
      {/* ... and so on */}
    </div>
  );
}
```

In this example, the `App` component is **composed** of two `UserProfileCard` components, and each `UserProfileCard` is, in turn, **composed** of a `Button` component. This hierarchical structure is what makes React composable.
