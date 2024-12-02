import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

import { ArrowRight, Eclipse } from "lucide-react";

export default function BannerDemo() {
  return (
    <Card className="py-4">
      <CardContent className="py-0">
        <div className="flex grow gap-2">
          <Eclipse
            className="shrink-0 opacity-60 mt-1"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className=" ">
            <p>
              We just added something awesome to make your experience even
              better.
            </p>
            <Link
              href="#"
              className="group whitespace-nowrap text-sm font-medium"
            >
              Learn more
              <ArrowRight
                className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
