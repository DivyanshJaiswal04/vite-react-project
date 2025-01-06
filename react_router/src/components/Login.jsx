import React from "react";
import { useParams } from "react-router-dom";
const Login = () => {
  let { username = "Guest" } = useParams();
  return (
    <>
      <div className="flex justify-center">
        <div>hello {username}</div>
      </div>
    </>
  );
};

export default Login;
