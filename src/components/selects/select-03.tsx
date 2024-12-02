import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select disabled>
      <SelectTrigger className="min-w-[180px] max-w-full">
        <SelectValue placeholder="Simple select" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="nextjs">Next.js</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
      </SelectContent>
    </Select>
  );
}
