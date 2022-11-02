import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

const checkout = () => {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100 ">
      <Header />
      <main className="lg:flex max-w-screen-2xl  mx-auto">
        {/* Left side  */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2095&q=80"
            height={250}
            width={2029}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10 bg-white ">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is empty" : "Shopping Basket"}{" "}
            </h1>
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
        <div className="flex flex-col">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                {" "}
                Subtotal: ({items.length}) :
                <span className="font-bold">$ {total}</span>
              </h2>

              <button
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
