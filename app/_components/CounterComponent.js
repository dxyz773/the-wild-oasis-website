"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <div>
      <p>There are {users.length} users so far!</p>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>
    </div>
  );
}
