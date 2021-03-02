import "./styles.css";
import React, { useCallback, useMemo, useState } from "react";
import Count from "./count";
import MyButton from "./MyButton";

export default function App() {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState(26);

  const incr = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decr = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const decrAge = useCallback(() => {
    setAge(age - 1);
  }, [age]);

  // only call this when count has a change
  const getEvenOrOdd = React.useMemo(() => {
    console.log(`%c hey age func called`, "color: #bada60");
    if (count % 2 === 0) return "EVEN";
    return "ODD";
  }, [count]);

  const dummyUI = React.useMemo(() => {
    console.log("dummyUI rendered");
    return <h1>This is a big header buddy </h1>;
  }, []);

  return (
    <div className="App">
      {dummyUI}
      <Count count={count} />
      {/* these 2 will rerender only when count changes */}
      <MyButton txt={"(+) INCR"} onclick={incr} />
      <MyButton txt={"(-) DECR"} onclick={decr} />
      <span>Your count is = {getEvenOrOdd}</span>
      <hr />
      <Count count={age} />
      {/* these 2 will rerender only when age changes */}
      <MyButton txt={"(+) INCR Age"} onclick={incrAge} />
      <MyButton txt={"(-) DECR Age"} onclick={decrAge} />
      <hr />
    </div>
  );
}
