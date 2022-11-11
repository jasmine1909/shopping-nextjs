import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const checkout = () => {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);

  const createCheckoutSection = async () => {
    const checkoutSession = await axios.post("/api/create-checkout-section", {
      items: items,
      email: session.user.email,
    });
  };
  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-lg  mx-auto my-6">
        {/* Left side  */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col space-y-10 bg-white ">
            <h1 className="text-3xl border-b p-6">
              {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}{" "}
            </h1>
            <div className="p-8">
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  rating={item.rating}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap my-6 ml-3">
                {" "}
                Subtotal: ({items.length}) :
                <span className="font-bold">$ {total}</span>
              </h2>

              <button
                role="link"
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "bg-gradient-to-r  from-gray-300 to-gray-500 text-gray-300 border-gray-200 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed To Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
