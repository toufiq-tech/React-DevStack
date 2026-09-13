Name of the Project - DevStack

it is a developer learning and productivity tool designed to help programmers. It is not just a showcase - it is interactive, educational, and practical. Its purpose is to help developers explore, select, and manage different technologies to build their own personalized development stack.


Technologies that are used-
1. React
2. Typescript
3. Tailwind CSS
4. Vite
5. React-toastify


Key Features:
* Explore Technologies
* Build Your Own Stack
* Manage Stack


Q&A --

Q. What is JSX, and why is it used in React?
Answer - JSX is basically a special syntax that looks like HTML but works inside JavaScript. JSX = JavaScript + XML (HTML‑like code).

Q. What is the difference between props and state?
Answer - Props are for passing data in → like giving a gift to a component.
State is for managing data inside → like the component’s own memory that it can update whenever needed.

Q. What does the useState hook do, and where did you use it in this project?
Answer - The useState hook in React is used to create and manage state inside a functional component. Think of it as giving your component a “memory” so it can remember values between renders and update them when needed.
In my  DevStack project, I have used useState for Stack Management.

Q. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer - The useEffect hook in React is used to run side effects in your components — things that happen outside the normal rendering flow, like fetching data, setting up subscriptions, or updating the DOM.
I needed useEffect because without useEffect, the fetch would run during every render, causing infinite loops or performance issues.

Q. Why does every item in a .map() list need a unique key prop?
Answer - Every item in a .map() list needs a unique key prop for
1. Identify items 2. Efficient updates 3. Avoid bugs

Q. What is conditional rendering? Show one place you used it (example: the empty stack message).
Answer - Conditional rendering in React means showing different UI elements depending on certain conditions. Instead of always displaying the same thing, React checks a condition (like whether data exists, or a user is logged in) and decides what to render.
Simple Example :

   {stack.length === 0 ? (
    <p>Your stack is empty. Add some technologies!</p>
   ) : (
   <StackList items={stack} />
   )}

Q. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer - I pass data from a parent component to a child component using props.But A child cannot directly change the parent’s data. Instead, the parent passes down a callback function as a prop.
Parent → Child: Pass data using props.
Child → Parent: Call a function (passed as a prop) to send data back.
