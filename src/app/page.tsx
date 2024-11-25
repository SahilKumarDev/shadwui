import Box from "@/components/_components/Box";
import Code from "@/components/_components/Code";
import Guide from "@/components/_components/Guide";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarSvg } from "@/utils/IconSvg";

const Home = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl py-10  space-y-3">
        <Badge
          variant={"secondary"}
          className="rounded-full gap-2 py-1 px-3 text-sm"
        >
          <StarSvg fill="fill-yellow-400" />
          <h1>New releases every week</h1>
        </Badge>
        <h1 className="font-orbit-max text-7xl font-extrabold">
          Beautiful UI components built with Tailwind CSS and Shadcn Ui.
        </h1>
        <p className="text-xl text-white-60 tracking-wide font-orbit-max ">
          Components UI is an Huge collection of copy and paste components for
          quickly building app, webs UI using tailwind css and shadcn ui for the
          faster building of UI. It‘s free, open-source, and ready to drop into
          your projects.
        </p>
        <div className="flex gap-2">
          <Button>Explore Components</Button>
          <Button variant={"outline"}>Rate on Github</Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Box>Alert</Box>
          <Box>Toggle</Box>
          <Box>Box</Box>
          <Box>Box</Box>
        </div>

        <Code type="npm">chi tapak dam dam</Code>

        <Guide />
      </div>
    </>
  );
};

export default Home;
