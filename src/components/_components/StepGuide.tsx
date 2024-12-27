import React from "react";
import { Separator } from "@/components/ui/separator";
import Code from "./Code";
import { CodeBlock } from "./CodeBloack";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
  code: string;
};

type Step = {
  title: string;
  content: React.ReactNode[];
  commands?: Array<{
    type: string;
    text: string;
  }>;
  codeBlocks?: CodeBlockProps[];
};


const SetupGuide = ({ steps }: { steps: Step[] }) => {
  return (
    <div className="relative">
      <Separator
        orientation="vertical"
        className="bg-zinc-950 border dark:bg-zinc-900 absolute top-8 -z-10 left-4"
      />

      {steps.map((step, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center gap-4 justify-items-start">
            <div className="rounded-full flex items-center justify-center font-orbit-max border dark:bg-zinc-900 bg-white w-8 h-8">
              {index + 1}
            </div>
            <h4 className="font-orbit-max text-xl">{step.title}</h4>
          </div>

          <div className="ml-12 py-2">
            {step.content.map((content, i) => (
              <div key={i} className="mb-2">
                {content}
              </div>
            ))}

            {step.commands?.map((command, i) => (
              <Code key={i} {...command} />
            ))}

            {step.codeBlocks?.map((codeBlock, i) => (
              <CodeBlock key={i} {...codeBlock} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetupGuide;
