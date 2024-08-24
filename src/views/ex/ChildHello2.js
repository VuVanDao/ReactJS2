import React from "react";
const ChildHello2 = (props) => {
  let { name } = props;
  return (
    <div>
      <h1>Hello ChildHello2 {name}</h1>
    </div>
  );
};
export default ChildHello2;
