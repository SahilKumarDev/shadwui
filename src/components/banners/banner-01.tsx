import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Link href="#">
      <Card className="py-4 flex items-center justify-center">
        <CardContent className="flex items-center gap-2 py-0">
          <h1 className="line-clamp-1">
            ✨ Introducing transactional marketing email templates.
          </h1>
          <ArrowRight
            className="inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
        </CardContent>
      </Card>
    </Link>
  );
}
