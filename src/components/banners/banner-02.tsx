import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Card className="py-4">
      <CardContent className="py-0">
        <p>
          Get the most out of your app with real-time updates and analytics.
        </p>

        <Link href="#" className="font-medium underline hover:no-underline">
          Upgrade
        </Link>
      </CardContent>
    </Card>
  );
}
