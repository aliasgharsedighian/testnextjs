"use client";

import { ChangeEvent, useState } from "react";

function ProductsForm() {
  const [searchProduct, setSearchProduct] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (!searchProduct) return;

    // navigate(`/serach-products?term=${searchProduct}`);
  };
  return (
    <form onSubmit={handleSearch} className="search-products-input">
      <input
        className="placeholder-gray-500"
        type="text"
        value={searchProduct}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchProduct(e.target.value)
        }
        placeholder="Search Product"
      />
      <button
        className="disabled:text-gray-400"
        type="submit"
        disabled={!searchProduct}
      >
        Search
      </button>
    </form>
  );
}

export default ProductsForm;
