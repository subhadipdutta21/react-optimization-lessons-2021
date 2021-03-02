import React from "react";

const MyButton = ({ onclick, txt }) => {
  console.log("button rendered");
  return (
    <div>
      <button onClick={onclick}>{txt}</button>
    </div>
  );
};

export default React.memo(MyButton);
