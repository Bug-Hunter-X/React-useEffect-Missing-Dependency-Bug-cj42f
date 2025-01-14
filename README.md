# React useEffect Missing Dependency Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incomplete dependency array, leading to unexpected behavior and potentially difficult-to-debug issues.

The `bug.js` file showcases the erroneous code, while `bugSolution.js` provides the corrected version.

## Understanding the Bug

The `useEffect` hook in React allows for performing side effects based on changes in component props or state.  A crucial part of `useEffect` is its second argument: the dependency array. This array lists variables that the effect depends on.  If a variable used within the effect is not included in this array, the effect will not re-run when that variable changes, leading to unexpected and potentially incorrect results.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the behavior in both the buggy and the corrected examples.

## Solution

The solution involves correctly specifying all variables used within the `useEffect` callback in the dependency array.  By doing this, you ensure the effect runs only when necessary, preventing unexpected side effects and ensuring data consistency.