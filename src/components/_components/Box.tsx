import React from "react";
import { Button } from "../ui/button"; 
import { GoArrowRight } from "react-icons/go";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant={"outline"} className="text-xl font-orbit-max py-6 justify-between">
      {children} <GoArrowRight size={24}/>
    </Button>
  );
};

export default Box;
