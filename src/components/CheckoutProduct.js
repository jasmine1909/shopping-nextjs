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
      <div className="grid grid-cols-3">
        <Image src={image} width={200} height={200} />

        <div className="col-span-3 mx-5">
          <h4 className="font-weight-bold">{title}</h4>

          <p className="text-xs line-clamp-3 my-2">{description}</p>
          <p> $ {price}</p>
          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img loading="lazy" src="" className="w-12" />
              <p className="text-xs text-gray-500"> Free shipping </p>
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
