import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
      <div>
        <div className=" ">
          <h1 className="ml-6 text-2xl font-semibold"> Best Seller</h1>
          <div className="grid md:grid-cols-2">
            {products.slice(6, products.length).map((product) => (
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeed;
