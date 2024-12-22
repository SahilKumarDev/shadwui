import React from "react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { Badge } from "../ui/badge";

const Box = ({
  children,
  redirect,
  isAvailable,
  recentlyAdded,
}: {
  redirect?: string;
  isAvailable: boolean;
  recentlyAdded?: boolean;
  children: React.ReactNode;
}) =>
  isAvailable ? (
    <Link href={redirect || "/"}>
      <Button
        variant="outline"
        className="lg:text-lg text-base dark:text-white/80 dark:hover:text-white hover:text-black/80 font-orbit-max py-6 px-4 lg:py-8 lg:px-8 justify-between w-full rounded-sm"
      >
        {children}
        <div className="flex-center gap-2">
          {recentlyAdded ? (
            <Badge
              variant={"outline"}
              className="border-[#4afc77] text-[#2dc653] py-1 px-3"
            >
              New
            </Badge>
          ) : (
            ""
          )}
          <GoArrowRight size={24} />
        </div>
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
