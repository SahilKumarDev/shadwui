import { Separator } from "../ui/separator";
import { TheamToggler } from "./TheamToggler";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/shadwui.png";
import GithubData from "./GithubData";

function Header() {
  return (
    <>
      <div className="px-6 py-4 flex-between">
        <Link href="/" className="font-orbit-max text-2xl">
          <Image
            src={Logo.src}
            alt="Logo"
            width={100}
            height={120}
            className="h-12 object-cover"
          />
        </Link>
        <div className="flex-center gap-2 ">
          <Link href={"/components"}>
            <Button variant={"ghost"}>Components</Button>
          </Link>

          <GithubData />

          <TheamToggler />
        </div>
      </div>
      <Separator />
    </>
  );
}

export default Header;
