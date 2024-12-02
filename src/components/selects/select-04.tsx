import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <div className="group relative w-full">
      <Select>
        <SelectTrigger className="min-w-[180px] max-w-full">
          <SelectValue placeholder="Select Framework" />
          <SelectGroup>
            <SelectLabel className="absolute start-1 top-0 z-10 block -translate-y-1/2 bg-background px-2 text-xs font-medium text-foreground group-has-[select:disabled]:opacity-50">
              Select with overlapping label
            </SelectLabel>
          </SelectGroup>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="nextjs">Next.js</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
