import React from "react";
import { Product } from "../../../typing";

type PageProps = {
  params: {
    productId: number;
  };
};

const fetchProduct = async (productId: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await res.json();
  return product;
};

async function ProductPage({ params: { productId } }: PageProps) {
  const product: Product = await fetchProduct(productId);
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div className="mx-auto flex flex-col items-center justify-center max-w-2xl">
      <img className="w-[100px] h-[100px]" src={image} alt="" />
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <p>rating: {product.rating.rate}</p>
    </div>
  );
}

export default ProductPage;
