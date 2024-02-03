import { IParams } from "@/utils/types";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params.productId);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: IParams) {
  return (
    <div>
      <p>Product Details Page {params?.productId}</p>
    </div>
  );
}
