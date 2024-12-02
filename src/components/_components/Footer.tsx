import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import OwnerImg from "@/public/owner.png";

const Footer = () => {
  return (
    <div className="flex-center gap-2 pt-10 pb-4 text-white-60 font-orbit-max text-sm tracking-wider underline underline-offset-4">
      Developed For You By
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"https://sahilkumardev.netlify.app"} target="_blank">
              <Avatar className="h-7 w-7 bg-opacity-25">
                <AvatarImage
                  src={OwnerImg.src}
                  alt="@owner"
                  className="opacity-50 hover:opacity-100 bg-slate-600 bg-center"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sahil Kumar dev</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Footer;
