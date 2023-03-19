import React from "react";

function BlogLayout({ children }) {
  return (
    <div>
      <h1>Ben BlogLayoutuyum</h1>
      <div>{children}</div>
    </div>
  );
}

export default BlogLayout;
