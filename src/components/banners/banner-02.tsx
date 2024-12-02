import { Card, CardContent } from "@/components/ui/card"; 
import Link from "next/link";

export default function BannerDemo() {
  return (
    <Card className="flex items-center justify-center py-4">
      <CardContent className="py-0">
        <h1>
          Get the most out of your app with real-time updates and analytics.
        </h1>

        <Link href="#" className="font-medium underline hover:no-underline">
          Upgrade
        </Link>
      </CardContent>
    </Card>
  );
}
