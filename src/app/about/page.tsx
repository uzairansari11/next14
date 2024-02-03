"use client";

import { useEffect, useState } from "react";

const metadata = {
  title: "About",
  description: "This is about page of  product",
};

export default function About() {
  const [data, setData] = useState<[]>([]);

  const getDataFromApi = () => {
    fetch("https://dummyjsodn.com/user")
      .then((res) => res.json())
      .then(console.log)
      .catch((error) => {
       
        throw new Error("something went wrong");
      });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}
