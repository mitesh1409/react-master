# React Master > Chapter #1 Intro

Topics

1. What is React?
2. Why React?

---

## #1 What is React?

The library for web and native user interfaces.

React is a library, not a framework. React is a JavaScript library for building user interfaces for web and mobile applications. Its core purpose is to help developers create fast, interactive, and reusable UI components.

React offers the following libraries:

**React**  
npm package => react  
This is the **core library** of React.  
Its primary purpose is to provide the **declarative programming model** for building user interfaces.

**React DOM**  
npm package => react-dom  
The `react-dom` package is the **"glue"** that connects the `react` core library to the web browser's Document Object Model (DOM).  
Its main purpose is to provide the **DOM-specific methods** needed to render and update components in a web environment.

**React Native**  
React Native is a JavaScript library used for building user interfaces for native apps.  
Allows to create native apps for Android, iOS, and more using React.

React is open source project managed by [Meta](https://www.meta.com/) (previously Facebook).

---

## #2 Why React?

### The Problem with Traditional Web Development

Traditionally, when building web applications with plain JavaScript or libraries like jQuery, a key challenge arises:

* **Direct DOM Manipulation**: Whenever data changes, developers have to manually select and update the specific parts of the browser's Document Object Model (DOM). This process is slow and inefficient, especially for complex web pages with a lot of user interaction.

* **Performance Issues**: Repeatedly manipulating the DOM directly can cause the browser to do a lot of unnecessary work, leading to sluggish performance and a less responsive user experience.

* **Full Page Reloads**: In many older web applications, a change would require a full page reload, which is slow and feels clunky to the user.

These problems make it difficult to build fast, fluid, and "app-like" experiences on the web.

### React's Solution: The Virtual DOM

React solves these problems using a concept called the **Virtual DOM**.

### Real DOM vs. Virtual DOM

* **Real DOM**:
This is the actual DOM tree that exists in the browser. It's how the browser renders the web page you see. Manipulating it is slow.

* **Virtual DOM**:
It is in-memory representation of all the application components.  
It acts as a blueprint for the real DOM, meaning it is used by React
to create Real DOM Tree to render the web page.  
Whenever there is a change in data or state of the application,  
React creates an updated Virtual DOM Tree and then it uses it to apply changes to the web page.

The Virtual DOM is fundamental to how React works, and it's present from the very beginning.

### Benefits of using React ⚛️

#### 1. **Component-Based Architecture** 🧩

React's biggest advantage is that it lets you build your UI from small, isolated pieces called **components**. This approach is revolutionary because it:

* **Promotes Reusability**: You can build a component once (like a `Button` or a `UserProfileCard`) and reuse it throughout your application or even in different projects. This saves time and effort.
* **Improves Maintainability**: Since each component is self-contained and manages its own logic, it's much easier to fix bugs or make changes without affecting other parts of the application.

#### 2. **Efficient Performance with the Virtual DOM** ⚡️

As we discussed, React uses a Virtual DOM. This makes it incredibly fast and efficient.

* **Minimal DOM Updates**: Instead of reloading the entire page or manipulating the real DOM directly, React only updates the necessary parts of the page. This is a very fast operation that leads to a smooth user experience.
* **Fast Loading Times**: By minimizing DOM updates, React applications load faster and feel more responsive, which is a significant improvement over traditional web pages that can be slow and clunky.

#### 3. **Declarative UI** ✨

React uses a **declarative** style of programming. This means you simply describe **what** you want the UI to look like based on the current state, and React handles the **how**. This makes your code:

* **Easier to Understand**: The code is more predictable and easier to debug because you're not manually telling the browser what to do at every step.
* **More Stable**: Since you're not directly manipulating the DOM, you reduce the risk of introducing bugs that can break your application's UI.

#### 4. **A Thriving Ecosystem and Community** 🌐

React is maintained by Facebook and has one of the largest and most active communities in web development.

* **Vast Resources**: There are countless tutorials, articles, and courses available online.
* **Abundant Tools**: A massive ecosystem of third-party libraries and tools (like `React Router` for navigation and `Redux` for state management) are available to solve almost any problem you might encounter.
* **Strong Support**: If you run into a problem, chances are someone in the community has already solved it and shared the solution.

#### 5. **Cross-Platform Development** 📱

With your React knowledge, you can also build **native mobile applications** for iOS and Android using **React Native**. This allows you to leverage the same principles and much of the same code across both web and mobile platforms, making development faster and more consistent.

---

References:

- [https://react.dev/](https://react.dev/)
- [https://reactnative.dev/](https://reactnative.dev/)

---

## Explore

- [How Virtual DOM works?](dd-Virtual-DOM.md)
- What are native apps?
- React Router
- Redux

---

Next > Chapter #2 Installation and Setup
