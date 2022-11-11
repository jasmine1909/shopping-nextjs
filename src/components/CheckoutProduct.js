import React from "react";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //remove items from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div>
      <div className=" p-8 flex   flex-col  w-8/12">
        <Image src={image} width={120} height={120} />

        <div className="grid-col col-span-3 my-5">
          <h4 className="font-weight-bold">{title}</h4>

          <p className="text-xs line-clamp-3  text-left">{description}</p>
          <p> $ {price}</p>
          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img loading="lazy" src="" className="w-12" />
              <div className="text-xs text-gray-500"> Free shipping </div>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-2 my-auto justify-self-end">
          <button className="button" onClick={addItemToBasket}>
            {" "}
            Add To Basket{" "}
          </button>
          <button className="button" onClick={removeItemFromBasket}>
            {" "}
            Remove From Basket{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
