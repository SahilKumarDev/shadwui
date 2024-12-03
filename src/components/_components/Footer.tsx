import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex-center gap-2 pt-10 pb-4 text-white-60 font-orbit-max text-sm tracking-wider">
      Developed For You By
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"https://sahilkumardev.netlify.app"} target="_blank">
              <h2 className="hover:no-underline hover:text-white/95 underline underline-offset-4">Sahil Kumar Dev</h2>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sahil Kumar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Footer;
