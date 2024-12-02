"use client";

import { ArrowRight, TriangleAlert, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="bg-amber-400 bg-opacity-20 py-4 text-amber-700 dark:bg-opacity-10 dark:text-amber-600">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-3">
          <TriangleAlert
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="space-y-2">
            <p className="text-sm">
              There&lsquo;s something that might require your action. Please
              review the details.
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
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent hover:text-current focus-visible:outline-current"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X
            size={16}
            strokeWidth={2}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  );
}

// <div className=" px-4 py-3 ">
//   <div className="flex gap-2">

//   </div>
// </div>
