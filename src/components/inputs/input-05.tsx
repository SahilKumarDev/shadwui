import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
  return (
    <div
      className="space-y-2"
      style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
    >
      <Label htmlFor="input-05">Input with colored border and ring</Label>
      <Input id="input-05" placeholder="Email" type="email" />
    </div>
  );
}
