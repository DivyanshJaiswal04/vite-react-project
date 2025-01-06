import React from "react";
import { LoaderCircle } from "lucide-react";
const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Website Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-3xl font-bold">MyWebsite</h1>
        <LoaderCircle className="h-9 w-9 animate-spin text-primary" />
      </div>
    </div>
  );
};

export default PageLoader;
