import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <div className="w-full relative rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
      <SelectGroup>
        <SelectLabel className="block px-3 pt-2 text-xs font-medium text-foreground">
          Select with inset label
        </SelectLabel>
      </SelectGroup>
      <Select>
        <SelectTrigger
          id="select-29"
          className="border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0"
        >
          <SelectValue placeholder="Select framework" />
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
