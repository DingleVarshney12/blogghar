import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        "container max-w-11/12 w-full mt-10 md:px-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
