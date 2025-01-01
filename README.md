# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by improperly setting state within the effect.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Bug Description
The problem lies in the `useEffect` hook of `MyComponent`.  Because the dependency array is empty (`[]`), the effect runs after every render.  Inside the effect, `setCount(1)` is called, which triggers a re-render, leading to an infinite cycle.

## Solution
The solution involves removing the `setCount(1)` call or adding the relevant dependencies. If the count should only be set once, consider removing the dependency array and setting it in the component's body.