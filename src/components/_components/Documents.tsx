import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManualGuide from "@/components/_components/docs/ManualGuide";
import Vite from "@/components/_components/docs/Vite";
import { FaReact } from "react-icons/fa6";
import Next from "./docs/Next";
import { RiNextjsLine } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";

const Documents = () => {
  return (
    <div className="flex-center px-1 lg:px-10">
      <div className="">
        <h1>Instruction</h1>

        <Tabs defaultValue="nextjs">
          <TabsList className=" ">
            <TabsTrigger value="manual" className="gap-2">
              <TbManualGearbox className="text-white-60" size={18} />
              Manual
            </TabsTrigger>
            <TabsTrigger value="vite" className="gap-2">
              <FaReact className="text-white-60" size={18} />
              Vite
            </TabsTrigger>
            <TabsTrigger value="nextjs" className="gap-2">
              <RiNextjsLine className="text-white-60" size={18} />
              Nextjs
            </TabsTrigger>
          </TabsList>
          <TabsContent value="manual">
            <ManualGuide />
          </TabsContent>
          <TabsContent value="nextjs">
            <Next />
          </TabsContent>
          <TabsContent value="vite">
            <Vite />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Documents;
