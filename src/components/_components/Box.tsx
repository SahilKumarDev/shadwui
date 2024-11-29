import React from "react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Box = ({
  children,
  redirect,
  isAvailable,
}: {
  children: React.ReactNode;
  redirect?: string;
  isAvailable: boolean;
}) =>
  isAvailable ? (
    <Link href={redirect || "/"}>
      <Button
        variant="outline"
        className="lg:text-lg text-base dark:text-white/80 dark:hover:text-white hover:text-black/80 font-orbit-max py-6 px-4 lg:py-8 lg:px-8 justify-between w-full rounded-sm"
      >
        {children}
        <GoArrowRight size={24} />
      </Button>
    </Link>
  ) : (
    <Button
      variant="outline"
      className="lg:text-lg text-base dark:text-white/80 dark:hover:text-white hover:text-black/80 font-orbit-max py-6 px-4 lg:py-8 lg:px-8 justify-between w-full rounded-sm"
      disabled
    >
      {children}
      <h4 className="text-white-60 text-base">Available soon..</h4>
    </Button>
  );

export default Box;
