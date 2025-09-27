1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but is used in React to describe the UI.

It allows us to write HTML-like code inside JavaScript and makes it easier to build UI components.

Why used?

Improves readability.

Helps combine UI + logic in one place.

Transpiles to plain JavaScript (React.createElement) under the hood.

Example:

const element = <h1>Hello, React!</h1>;
const element = React.createElement("h1", null, "Hello, React!");

2. Difference between State and Props
Aspect	State	Props:-

Definition	Data that is managed within a component (mutable).	Data passed from parent to child component (immutable).
Who updates it?	Component itself (via setState or useState).	Parent component only.
Mutability	Mutable (can change).	Immutable (read-only).
Usage	To handle data that changes over time (e.g., form inputs, counters).	To pass configuration or data to child components.

 Example:

// Parent
<TicketCard title="Support Ticket" />

3. What is the useState hook, and how does it work?

useState is a React Hook used to add state to a functional component.

It returns an array with two values:

The current state.

A function to update that state.

 Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial value = 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

4. How can you share state between components in React?

There are a few ways:

Lift state up: Move the state to a common parent and pass it down as props.

Context API: Share state globally without prop drilling.

State management libraries: (Redux, Zustand, Recoil, etc.) for large apps.

 Example (lifting state up):

function Parent() {
  const [data, setData] = useState("Hello");

  return (
    <>
      <Child1 data={data} />
      <Child2 setData={setData} />
    </>
  );
}

function Child1({ data }) {
  return <h1>{data}</h1>;
}

function Child2({ setData }) {
  return <button onClick={() => setData("Updated!")}>Change</button>;
}


5. How is event handling done in React?

React handles events using camelCase (e.g., onClick, onChange).

Instead of a string, we pass a function as the event handler.

 Example:

function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

<button onClick={() => handleClick("Hello")}>Click</button>
