import React from "react";

export const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return response.json();
};

export const getOtherData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  return response.json();
};

export const getOtherData2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  return response.json();
};

async function DataFetching() {
  const data = getData();
  const data2 = getOtherData();
  const data3 = getOtherData2();
  const [dataRes,dataRes2 ,dataRes3] = await Promise.all([data, data2, data3]);

  console.log({dataRes,dataRes2 ,dataRes3})

  return <div>DataFetching</div>;
}

export default DataFetching;
