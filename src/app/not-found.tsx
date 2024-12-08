import { Card, CardContent } from "@/components/ui/card";
import { TbArrowBack } from "react-icons/tb";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-96 overflow-hidden flex-center">
      <Card className="py-4 max-w-96">
        <CardContent className="py-0 flex">
          <p className="text-center text-sm">
            <span className="mr-1 leading-none">🤷‍♂️</span>
            <span className="mx-1 text-muted-foreground">
              Could not find the requested resource·
            </span>
            <Link
              href="/"
              className="font-medium underline hover:no-underline underline-offset-4 whitespace-nowrap flex-center gap-2"
            >
              Go Back <TbArrowBack size={18} />
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
