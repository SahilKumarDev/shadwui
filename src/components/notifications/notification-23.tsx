import { Button } from "@/components/ui/button";

export default function NotificationDemo() {
  return (
    <div className="z-[100] rounded-lg border border-border bg-background px-4 py-3 shadow-lg shadow-black/5">
      <div className="space-y-2">
        <p className="text-sm">
          We use cookies to improve your experience and
          show personalized content.
        </p>
        <div className="flex gap-2 max-md:flex-wrap">
          <Button size="sm">Accept</Button>
          <Button variant="outline" size="sm">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
}
