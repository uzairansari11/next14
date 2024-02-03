import { notFound } from "next/navigation";

export default function ReviewPage({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <p>
        Review Page for Product {params?.productId} and Review Number{" "}
        {params.reviewId}
      </p>
    </div>
  );
}
