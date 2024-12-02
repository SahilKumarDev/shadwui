"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BannerDemo() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <Card className="py-4 bg-muted">
      <CardContent className="py-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <p className="text-sm line-clamp-1 text-center">
          <span className="font-medium">v2.1.0</span>
          <span className="mx-2 text-muted-foreground">•</span>
          New features and bug fixes are available.
        </p>
        <Button
          size="sm"
          variant="outline"
          disabled={isDownloading}
          onClick={handleDownload}
          className="min-w-24 text-sm"
        >
          {isDownloading ? (
            <>
              <LoaderCircle
                className="-ms-0.5 animate-spin"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Updating...
            </>
          ) : (
            <>
              <Download size={16} className="-ms-0.5" aria-hidden="true" />
              Update now
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
