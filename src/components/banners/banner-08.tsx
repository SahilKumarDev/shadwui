"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, X } from "lucide-react";
import { useState } from "react";

export default function BannerDemo() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="py-4">
      <CardContent className="py-0 flex">
        <div className="flex grow gap-3">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5"
            aria-hidden="true"
          >
            <Rocket className="opacity-80" size={16} strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <div className="space-y-0.5">
              <p>Boost your experience</p>
              <p className="text-sm text-muted-foreground">
                The new feature is live! Try it out and let us know what you
                think.
              </p>
            </div>
            <div className="flex gap-2 max-md:flex-wrap">
              <Button size="sm" className="text-sm">
                Try now
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
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
