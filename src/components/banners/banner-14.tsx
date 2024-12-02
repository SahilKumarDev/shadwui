"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="py-4 bg-emerald-400 bg-opacity-20 text-emerald-700 dark:bg-opacity-10 dark:text-emerald-600">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-3">
          <CircleCheck
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="space-y-2">
            <p className="text-sm">
              Your request was completed without any issues. Great job!
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
