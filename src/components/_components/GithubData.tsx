import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa6";
import { StarSvg } from "@/utils/IconSvg";
import Link from "next/link";
import React from "react";

const GithubData = async () => {
  const res = await fetch(
    "https://api.github.com/repos/sahilkumardev/shadwui",
    {
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  const data = await res.json();

  const starCount = data.stargazers_count;
  return (
    <Link
      target="_blank"
      href={"https://github.com/SahilKumarDev/shadwui"}
      className="hidden md:block"
    >
      <Badge className="rounded-full text-sm space-x-1 py-1">
        <FaGithub size={20} className="text-white dark:text-black/70" />
        <StarSvg fill="fill-yellow-300 dark:fill-yellow-400" />
        <span>0.{starCount}K</span>
      </Badge>
    </Link>
  );
};

export default GithubData;
