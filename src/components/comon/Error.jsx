import React from "react";

function Error({ msg }) {
  return (
    <div className="error">
      <span>There is a problem getting information</span>
      <span>{msg}</span>
    </div>
  );
}

export default Error;
