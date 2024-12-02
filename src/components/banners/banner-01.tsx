import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Link href="#">
      <Card className="px-8 py-4 flex items-center justify-center ">
        <span className="line-clamp-1">
          ✨ Introducing transactional and marketing emails
        </span>
        <ArrowRight
          className="ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
          size={16}
          strokeWidth={2}
          aria-hidden="true"
        />
      </Card>
    </Link>
  );
}
