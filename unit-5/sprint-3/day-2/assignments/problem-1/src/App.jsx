import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <h2>Count: {count}</h2>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div style={{ marginTop: "20px" }}>
        <h3>Stringified State</h3>
        <pre>{JSON.stringify({ count }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
