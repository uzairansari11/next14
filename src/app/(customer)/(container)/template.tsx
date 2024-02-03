"use client";
import Link from "next/link";
import { useState } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <input />
      <Link href={"/help"}>Help</Link>
      <Link href={"/support"}>Support</Link>
      <p>this is from layout</p>
      <p>{count}</p>
      <div></div>
      <p></p>
      
      <button onClick={() => setCount(count + 1)}>click</button>
      {children}
    </div>
  );
}
