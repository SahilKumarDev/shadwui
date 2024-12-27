import React from "react";
import { Separator } from "@/components/ui/separator";
import Code from "../Code";
import { CodeBlock } from "../CodeBloack";

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
        className="bg-zinc-950 border dark:bg-zinc-900 absolute top-8 -z-10 left-5"
      />

      {steps.map((step, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center gap-2 justify-items-start">
            <div className="rounded-full flex items-center justify-center font-orbit-max border-4 dark:border-[#0A0A0A] dark:bg-zinc-900 bg-white w-10 h-10">
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

const Next = () => {
  const componentsJsonCode = `Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes`;

  const buttonCode = `import { Button } from "@/components/ui/button"

  export default function Home() {
    return (
      <div>
        <Button>Click me</Button>
      </div>
    )
  }`;
  const steps = [
    {
      title: "Create Next.js Project",
      content: [
        <p key="1">
          Create a fresh Next.js project by running the following command to get
          the latest version:
        </p>,
      ],
      commands: [{ type: "npx", text: "create-next-app@latest" }],
    },
    {
      title: "Add Shadcn",
      content: [<p key="1">Install and initialize shadcn in your project:</p>],
      commands: [{ type: "npx", text: "shadcn@latest init" }],
    },
    {
      title: "Configure components.json",
      content: [
        <p key="1">
          You will be asked a few questions to configure components.json:
        </p>,
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "components.json",
          code: componentsJsonCode,
        },
      ],
    },
    {
      title: "Add Button component",
      content: [
        <p key="1">You can now start adding components to your project.</p>,
      ],
      commands: [{ type: "npx", text: "shadcn@latest add button" }],
    },
    {
      title: "Use Button component",
      content: [
        <p key="1">
          The command above will add the Button component to your project. You
          can then import it like this:
        </p>,
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "Home.tsx",
          highlightLines: [1, 6],
          code: buttonCode,
        },
      ],
    },
  ];

  return <SetupGuide steps={steps} />;
};

export default Next;
