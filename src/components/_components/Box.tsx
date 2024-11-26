import React from "react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Box = ({
  children,
  redirect,
}: {
  children: React.ReactNode;
  redirect?: string;
}) => {
  return (
    <Link href={redirect || "/"}>
      <Button
        variant={"outline"}
        className="text-xl font-orbit-max py-8 px-8 justify-between w-full"
      >
        {children} <GoArrowRight size={24} />
      </Button>
    </Link>
  );
};

export default Box;
