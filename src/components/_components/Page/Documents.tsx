import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManualGuide from "@/components/_components/docs/ManualGuide";
import Next from "@/components/_components/docs/Next";
import Vite from "@/components/_components/docs/Vite";
import { TbManualGearbox } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";

const TAB_ITEMS = [
  {
    value: "manual",
    icon: TbManualGearbox,
    label: "Manual",
    content: ManualGuide,
  },
  {
    value: "vite",
    icon: FaReact,
    label: "Vite",
    content: Vite,
  },
  {
    value: "nextjs",
    icon: RiNextjsLine,
    label: "Nextjs",
    content: Next,
  },
];

const Documents = () => (
  <div className="  px-1 lg:px-10">
    <div>
      <h4 className="py-2 text-2xl font-bold dark:text-white">Documentation</h4>
      <Tabs defaultValue="vite" className="space-y-3">
        <TabsList>
          {TAB_ITEMS.map(({ value, icon: Icon, label }) => (
            <TabsTrigger key={value} value={value} className="gap-2">
              <Icon className="text-white-60" size={18} />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TAB_ITEMS.map(({ value, content: Content }) => (
          <TabsContent key={value} value={value}>
            <Content />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </div>
);

export default Documents;
