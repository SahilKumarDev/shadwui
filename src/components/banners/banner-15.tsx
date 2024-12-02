"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="py-4 bg-blue-400 bg-opacity-20 text-blue-700 dark:bg-opacity-10 dark:text-blue-600">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-3">
          <Info
            className="mt-0.5 shrink-0 opacity-60"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="space-y-2">
            <p className="text-sm">
              Your request was completed without any issues. Great job!
            </p>
            <a href="#" className="group whitespace-nowrap text-sm font-medium">
              Learn more
              <ArrowRight
                className="-mt-0.5 ms-1 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
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
