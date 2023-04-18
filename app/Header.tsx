"use client";

import "../styles/Navbar.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: 1, href: "/", text: "Home" },
  { id: 2, href: "/products", text: "Products" },
  { id: 3, href: "/portfolio", text: "Portfolio" },
  { id: 4, href: "#", text: "About" },
  { id: 5, href: "#", text: "Contact" },
];

function Header() {
  const path = usePathname();

  const dispatch = useDispatch();
  const router = useRouter();
  const userActivity = useSelector<boolean>(activity);
  const userAccount = useSelector(userAccountLogged);
  const items = useSelector(selectItems);

  const [sidebar, setSidebar] = useState<boolean>(false);

  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e: FormEvent<HTMLDivElement>) => {
      if (menuRef?.current && !menuRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef, sidebar]);

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
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ delay: 0.35 }}
        className="navbar"
        ref={menuRef}
      >
        <div
          className={sidebar ? "navbar-open-menu active" : "navbar-open-menu"}
        >
          {links.map((link) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={link.id}
              className={`${
                link.href === path
                  ? "navbar-link-selected active"
                  : "navbar-link-selected"
              }`}
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.65 }}
          className="logo-area"
        >
          <Bars3Icon onClick={openMenuHandle} className="bar-header-icon" />
          <img src="images/Navbar/Logo.PNG" alt="" />

          {/* <DarkModeButton /> */}
        </motion.div>
        <div className="navbar-link-area">
          {links.map((link) => (
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45 }}
              key={link.id}
              className={`${
                link.href === path
                  ? "navbar-link-selected active"
                  : "navbar-link-selected"
              }`}
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ x: 450 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.65 }}
          className="login-area"
        >
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
          <motion.button
            whileHover={{ scale: 1.05 }}
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
            {userActivity ? "Log out" : "Log in"}
          </motion.button>
          {userActivity ? (
            <span>{`Hello, ${userAccount.firstname}`}</span>
          ) : (
            <button className="free-button">Start free trial</button>
          )}
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;
