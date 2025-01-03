import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const NotFound=()=> {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>404 - Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-7xl font-bold text-[#CE8745]">404</h1>
        <p className=" text-2xl m-0 font-semibold text-[#fff]">Oops! Page not found.</p>
        <p className="">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="site-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound