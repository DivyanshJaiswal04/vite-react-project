import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";
const Login = () => {
  const { no } = useContext(CounterContext);
  return <div>login page {no}</div>;
};

export default Login;
