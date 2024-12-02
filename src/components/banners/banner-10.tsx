import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Card className="py-4">
      <CardContent className="py-0 flex">
        <p className="text-center text-sm">
          <span className="mr-1 leading-none">📫</span> Subscribe to our
          newsletter and get 10% off your first order!
          <span className="mx-1 text-muted-foreground">·</span>
          <Link
            href="#"
            className="font-medium underline hover:no-underline underline-offset-4"
          >
            Subscribe
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
