import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count < 0) setCount(0);
    if (count > 5) setMessage("You passed 5!");
    else setMessage("");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Website: NotHome</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      {message && <p style={{ color: "green", marginTop: "20px" }}>{message}</p>}
    </div>
  );
};

export default NotHome;
