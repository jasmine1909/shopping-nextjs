import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineLaptop, AiOutlineStar } from "react-icons/ai";
import CurrencyFormat from "react-currency-format";
const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative  flex flex-col m-5 bg-white p-10 ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-600">
        {" "}
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiOutlineStar className="h-5" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2"> {description}</p>
      <div className="mb-5">
        <CurrencyFormat value={price} prefix={"$"} />
      </div>
      <div className="mb-4">
        {hasPrime && <p className="text-blue-500 text-sm"> Free Shipping</p>}
      </div>
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
