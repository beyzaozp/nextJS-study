import React from "react";

function HakkimizdaLayout({ children, ...rest }) {
  console.log(rest)
  return (
    <div>
      <h2> Ben HakkimizdaLayout'uyum</h2>
      <div>{children}</div>
    </div>
  );
}

export default HakkimizdaLayout;
