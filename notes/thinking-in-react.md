# Thinking in React

https://react.dev/learn/thinking-in-react


While building a user interface with React,  

- break it apart into pieces called "Components"
- then describe the different visual "States" for each of your "Components"

The End-to-end Process  
UI --> Broken down into multiple Components --> Define "States" for each of the "Components" --> Connect "Components" and ensure the correct data flow

---

## Step 1: Break the UI into a component hierarchy

Component Hierarchy

SearchBar

ProductFilter

ProductsList
    FruitsSection
        Product
    VegetableSection
        Product

---

## Step 2: Build a static version in React

Pass data through props.

No state exists yet.

---

## Step 3: Find the minimal but complete representation of UI state

First identify all the pieces of data in your application.  

Which of these are state?  

Identify the ones that are not state using the following checklist:

* Remains unchanged over time
* Passed in from a parent via props
* Can be computed from an existing state or props

What’s left is probably state.

> Simple rule to identify state - State is something that changes over time

---

## Step 4: Identify where your state should live


For each piece of state in your application:

1. Identify every component that renders something based on that state.
2. Find their closest common parent component—a component above them all in the hierarchy.
3. Decide where the state should live:
  1. Often, you can put the state directly into their common parent.
  2. You can also put the state into some component above their common parent.
  3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

---

## Step 5: Add inverse data flow

Identify components that will change the state.  

Pass function to change state (like `setSomeState`) from parent to child.  

Child component will call this function to change state.
