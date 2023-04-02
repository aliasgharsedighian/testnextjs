"use client";

import "../styles/Navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "./GlobalRedux/Features/basket/basketSlice";
import {
  activity,
  userAccountLogged,
  addUserLogged,
  changeActivity,
} from "./GlobalRedux/Features/user/userSlice";
import DarkModeButton from "./DarkModeButton";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userActivity = useSelector(activity);
  const userAccount = useSelector(userAccountLogged);
  const items = useSelector(selectItems);

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="logo-area">
          <img src="images/Navbar/Logo.PNG" alt="" />
          {/* <DarkModeButton /> */}
        </div>
        <div className="navbar-link-area">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="login-area">
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center mr-5"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-[35px]" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
          <button
            className={userActivity ? "logout-button" : "login-button"}
            onClick={() => {
              if (userActivity == false) {
                router.push("/login-page");
              } else {
                dispatch(changeActivity(false));
                dispatch(addUserLogged([]));
              }
            }}
          >
            {userActivity ? "log out" : "log in"}
          </button>
          {userActivity ? (
            <span>{`Hello, ${userAccount.firstname}`}</span>
          ) : (
            <button className="free-button">Start free trial</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
