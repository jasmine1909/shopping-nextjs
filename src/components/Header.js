import React from "react";
import Image from "next/image";
import { BsSearch, BsFillBasket2Fill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Logo from "../.././public/logo.png";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);
  return (
    <header>
      <div className="flex items-center justify-between  text-black bg-[#1373E5] p-1  py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src={Logo}
            width={150}
            height={60}
          />
        </div>

        <div className="hover:bg-yellow-500  items-center  rounded-md bg-yellow-400 h-10 hidden sm:flex">
          <input
            type="text"
            className="h-full w-2/3 flex-grow p-2 flex-shrink rounded-l-md outline-none"
          />
          <BsSearch className="bg-yellow-400 rounded-r-md w-8 " />
        </div>
        <div className="text-white flex items-center space-x-6 text-xs mx-6">
          <div onClick={!session ? signIn : signOut} className=" link">
            <p>{session ? `Hello, ${session.user.name} ` : "Sign In"} </p>
            <p className="font-extrabold">Account and Lists</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            <BsFillBasket2Fill className="mr-2 text-lg  " />
            <div>
              <span className="absolute  -top-5 -right-2 p-1 rounded-full bg-yellow-400 hover:bg-yellow-600 text-black text-bold">
                {items.length}
              </span>
              <p className="font-extrabold">Baskets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[#0441AB] p-2 pl-6 text-white space-x-3">
        <p className="link flex items-center">
          <FiMenu className="mr-2" /> All
        </p>
        <p className="link">Business</p>
        <p className="link">Video</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Health & Pesonal Care</p>
      </div>
    </header>
  );
};

export default Header;
