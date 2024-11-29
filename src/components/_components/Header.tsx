import { FaGithub } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { TheamToggler } from "./TheamToggler";
import { StarSvg } from "@/utils/IconSvg";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="px-6 py-4 flex-between">
        <Link href="/" className="font-orbit-max text-2xl">
          UiComponents
        </Link>
        <div className="flex-center gap-2 hidden lg:flex">
          <Link href={"/components"}>
            <Button variant={"ghost"}>Components</Button>
          </Link>

          <Link href={"/"}>
            <Badge className="rounded-full text-sm space-x-1">
              <FaGithub size={20} className="text-white dark:text-black/70" />
              <StarSvg fill="fill-zinc-600" />
              <span>3.3k</span>
            </Badge>
          </Link>

          <TheamToggler />
        </div>
      </div>
      <Separator />
    </>
  );
}

export default Header;
