"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handlePlacedOrder = () => {
    console.log("Placed order");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <div>
      <p>Order Product Page</p>

      <button onClick={handlePlacedOrder}>Place Order</button>
    </div>
  );
}
