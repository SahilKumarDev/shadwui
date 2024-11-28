import React from "react";
import Code from "./Code";
import { Separator } from "../ui/separator";

const Guide = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          1
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Create a Next.js Project
        </h4>
      </div>

      <div className="ml-12 py-2">
        <p>
          Create a fresh next.js project by run the following command. To begin
          using this open-source component library, project. Run the following
          command to get the latest version of Next.js set up:
        </p>
        <Code type="npx">create-next-app@latest</Code>
      </div>

      <Separator
        orientation="vertical"
        className="bg-zinc-950 border dark:bg-zinc-900 absolute top-8 -z-10 left-4  h-[30rem] lg:h-80"
      />

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          2
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Add Shadcn to the project of Next.js.
        </h4>
      </div>

      <div className="ml-12 py-2">
        <p>
          After Create the next.js project, add a shadcn to your project run the
          following command in your terminal
        </p>
        <Code type="npx">shadcn@latest init</Code>
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          3
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Choose and Integrate UI Components
        </h4>
      </div>

      <div className="ml-12 py-2">
        <p>
          Browse the collection of components in this library and select the
          ones that best fit your project.
        </p>
        <ul className="list-disc ml-4">
          <li>Navigate to the component of your choice.</li>
          <li>Copy the component&apos;s code.</li>
          <li>Paste it directly into your project.</li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;
