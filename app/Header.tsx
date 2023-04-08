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
import { Bars3Icon } from "@heroicons/react/20/solid";
import DarkModeButton from "./DarkModeButton";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userActivity = useSelector(activity);
  const userAccount = useSelector(userAccountLogged);
  const items = useSelector(selectItems);

  const [sidebar, setSidebar] = useState(false);

  const openMenuHandle = () => {
    // setOpenMenu((prev) => !prev);
    setSidebar(!sidebar);
    // if (navbarBgChange === false) {
    //   setNavbarBgChange(true);
    // }
    // if (navbarBgChange === true && window.scrollY < 80) {
    //   setNavbarBgChange(false);
    // }
  };

  return (
    <header className="navbar-container">
      <div className="navbar">
        <div
          className={sidebar ? "navbar-open-menu active" : "navbar-open-menu"}
        >
          <div className="navbar-open-menu-item">
            <Link href="/">Home</Link>
          </div>
          <div className="navbar-open-menu-item">
            <Link href="/products">Products</Link>
          </div>
          <div className="navbar-open-menu-item">
            <Link href="#">Pricing</Link>
          </div>
          <div className="navbar-open-menu-item">
            <Link href="#">About</Link>
          </div>
          <div className="navbar-open-menu-item">
            <Link href="#">Contant</Link>
          </div>
        </div>

        <div className="logo-area">
          <div>
            <Bars3Icon onClick={openMenuHandle} className="bar-header-icon" />
          </div>
          <div>
            <img src="images/Navbar/Logo.PNG" alt="" />
          </div>
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
