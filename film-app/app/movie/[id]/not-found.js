import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>An Error Has Occured :/ Please Try Again!.</h1>
      <Link
        href="/"
        style={{ textDecoration:"underline", fontSize: 20, marginTop: 8 }}
      >
        Go Home?
      </Link>
    </div>
  );
}

export default Movie404;
