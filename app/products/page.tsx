import React, { memo } from "react";
import ProductsForm from "./ProductsForm";
import Products from "./Products";
import PageWrapper from "../pageWrapper";

const ProductsPage = memo(() => {
  return (
    <>
      <PageWrapper>
        <ProductsForm />
        <div className="products-title-filter">
          <div className="products-title">
            <h2>Our Products</h2>
            <span className="dark:bg-slate-100"></span>
          </div>
          <div className="products-filter">
            <div className="products-category">
              <p>All Products</p>
              <p>Men</p>
              <p>Women</p>
              <p>clothes</p>
              <p>electric</p>
            </div>
            <div className="products-filter-button">
              <button className="dark:border-gray-100">Filter</button>
            </div>
          </div>
        </div>
        {/* {products} */}
        <Products />
        <div className="products-load-more">
          <button>Load More</button>
        </div>
      </PageWrapper>
    </>
  );
});

export default ProductsPage;
