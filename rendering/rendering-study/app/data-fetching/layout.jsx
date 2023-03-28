import React from "react";
async function Layout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#222",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
export default Layout;
