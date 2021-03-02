import React from "react";
const Count = ({ count }) => {
  console.log("count rendered");
  return <div>count: {count}</div>;
};

export default React.memo(Count);
