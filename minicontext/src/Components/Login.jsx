import React, { useContext } from "react";
import CounterContext from "../Context/CounterContext";

const Login = () => {
  const { no } = useContext(CounterContext);

  return <div>Login Page - Counter Value: {no}</div>;
};

export default Login;
