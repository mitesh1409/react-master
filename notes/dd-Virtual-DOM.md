# React Master > Deep Dive - Virtual DOM

Topics

- What is Virtual DOM?
- How the Virtual DOM Works?

---

## What is Virtual DOM?

It is in-memory representation of all the application components.  
It acts as a blueprint for the real DOM, meaning it is used by React
to create Real DOM Tree to render the web page.  
Whenever there is a change in data or state of the application,  
React creates an updated Virtual DOM Tree and then it uses it to apply changes to the web page.

The Virtual DOM is fundamental to how React works, and it's present from the very beginning.

---

## How the Virtual DOM Works?

### When the Virtual DOM is Created?

The Virtual DOM comes into existence right from the start. When your React application first loads, React takes your component code (written in JSX) and creates the initial **Virtual DOM tree**. This is an in-memory blueprint of what your UI should look like. React then uses this blueprint to perform the first-ever render and create the actual **Real DOM** that the user sees in their browser.

This happens when you tell React to render your application into a specific part of your HTML file, usually with a command like `ReactDOM.createRoot().render()`.

### When the Virtual DOM is Updated?

The Virtual DOM is updated whenever a component's **state** or **props** change. Here's the sequence of events:

1. **State/Props Change**: A user action (like a click) or new data (from an API) causes a component's state or props to update.

2. **New Virtual DOM**: React creates a **new Virtual DOM tree** that reflects this change.

3. **Diffing**: React compares the new Virtual DOM with the previous one. This super-fast comparison process is called **diffing**. It's an algorithm that quickly finds exactly what has changed.

4. **Reconciliation**: The entire process of diffing and updating the real DOM is known as **reconciliation**.

5. **Efficient Real DOM Update**: Finally, React makes a single, batched set of updates to the **real DOM**, applying only the changes that were identified during the diffing process. It never re-renders the entire page.

This efficient, selective updating is the core reason why React applications feel so fast and responsive. It avoids the costly operation of re-rendering the entire page by only touching the parts of the DOM that actually need to change.

### How the updated copy is used?

Here is a simplified breakdown of the process and how the updated copy is used:

#### 1. The Updated Copy is the New Baseline

When a state or prop change occurs and triggers a re-render:

* React generates a **new Virtual DOM tree** (V-DOM). This is the V-DOM that reflects the latest state/props.
* React performs the **Diffing** process, comparing the *New V-DOM* with the *Previous V-DOM* (the one from the last successful render).
* The differences found are used to update the **Real DOM**.
* Crucially, once the Real DOM has been updated, the **New V-DOM becomes the new "Previous V-DOM"** (the internal reference copy) for the next time an update occurs.

#### 2. The Cycle Continues

React always maintains **one single, current Virtual DOM tree** that perfectly matches the last successful render of the Real DOM.

| Event | Action Taken by React | Virtual DOM State |
| :--- | :--- | :--- |
| **Initial Load** | Create V-DOM $\rightarrow$ Create Real DOM | The V-DOM is stored. |
| **State/Props Change** | 1. Create a **New V-DOM** | React now has two copies: **New** and **Stored** (Old). |
| | 2. **Diff** the two copies. | |
| | 3. Update the **Real DOM**. | |
| | 4. **Replace** the Stored V-DOM with the New V-DOM. | The **New V-DOM** becomes the **Stored V-DOM** for the next change. |

This continuous replacement ensures that React always has the correct baseline (the exact copy of what the user is seeing) for its next comparison, making the diffing process accurate and efficient.
