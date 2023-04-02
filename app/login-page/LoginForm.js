"use client";

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addedUser,
  changeActivity,
  addUserLogged,
  userAccountLogged,
  activity,
} from "../GlobalRedux/Features/user/userSlice";
import { useRouter } from "next/navigation";

function LoginForm() {
  const users = useSelector(addedUser);
  const accountUser = useSelector(userAccountLogged);
  const dispatch = useDispatch();
  const router = useRouter();
  const emailInput = useRef();
  const passInput = useRef();

  const [username, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");
  const [accounts] = useState(users);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log(accountUser);
  }, [login]);

  const userExist = (user, pass) => {
    for (const account of accounts) {
      if (account.email == user && account.password == pass) {
        dispatch(addUserLogged(account));
        return true;
      }
    }
    return false;
  };

  const changeUserActivity = (val) => {
    dispatch(changeActivity(val));
  };

  const clearLoginInput = () => {
    emailInput.current.value = null;
    passInput.current.value = null;
  };

  function ValidateEmail() {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username.match(validRegex)) {
      return true;
    }
    return false;
  }

  function loginCondition() {
    if (username === "") {
      emailInput.current.focus();
    } else if (passWord === "") {
      passInput.current.focus();
    } else if (passWord.length < 6) {
      alert("Password must be 6 or more");
    } else if (userExist(username, passWord)) {
      alert(`Welcome ${username}, You Logged in successfully!`);
      changeUserActivity(true);
      setLogin(true);
      router.push(`/profile/${accountUser.email}`);
      clearLoginInput();
      // navigate("/user-list");
    } else if (ValidateEmail() === false) {
      alert("Invalid email address!");
    } else {
      alert("username or password must be wrong");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    loginCondition();
  };
  return (
    <form onSubmit={onSubmit} className="form-login-page">
      <input
        ref={emailInput}
        type="text"
        placeholder="Enter email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        ref={passInput}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassWord(e.target.value)}
      />
      <button
        className="disabled:bg-gray-600"
        disabled={!username || !passWord || activity}
        onClick={onSubmit}
      >
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
