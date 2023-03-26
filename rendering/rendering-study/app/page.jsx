"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("Hello World");
  useEffect(() => {
    setMessage("Deneme");
    console.log("Vay be");
  }, []);
  console.log("Rendering Page");
  return <div>Rendering Page {message}</div>;
}
