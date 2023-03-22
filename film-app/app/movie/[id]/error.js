'use client'
import React from 'react'
import Link from "next/link";

function Error() {
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
    <h1>We couldn't find what you are looking for.</h1>
    <Link
      href="/"
      style={{ textDecoration:"underline", fontSize: 20, marginTop: 8 }}
    >
      Go Home?
    </Link>
  </div>
  )
}

export default Error