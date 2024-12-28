import React from "react";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "../CodeBloack";
import Code from "../Code";

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
            <div className="rounded-full flex items-center justify-center font-orbit-max border-4 dark:border-[#0A0A0A] dark:bg-zinc-900 bg-white w-10 h-10 ">
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

const ViteSetup = () => {
  const indexCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... */`;

  const tailwindCode = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  const tsConfigCode = `{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

  const tsConfigAppCode = `{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}`;

  const viteConfigTsCode = `import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;

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
      title: "Create project",
      content: [
        <p key="1">Start by creating a new React project using vite:</p>,
      ],
      commands: [{ type: "npm", text: "create vite@latest" }],
    },
    {
      title: "Add Tailwind and its configuration",
      content: [
        <p key="1">
          Install tailwindcss and its peer dependencies, then generate your
          tailwind.config.js and postcss.config.js files:
        </p>,
      ],
      commands: [
        { type: "npm", text: "install -D tailwindcss postcss autoprefixer" },
        { type: "npx", text: "tailwindcss init -p" },
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "src/index.css",
          highlightLines: [1, 2, 3],
          code: indexCode,
        },
      ],
    },
    {
      title: "Tailwind configuration",
      content: [
        <p key="1">
          Configure the tailwind template paths in tailwind.config.js:
        </p>,
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "tailwind.config.js",
          highlightLines: [3],
          code: tailwindCode,
        },
      ],
    },
    {
      title: "Edit tsconfig.json file",
      content: [
        <p key="1">
          The current version of Vite splits TypeScript configuration into three
          files, two of which need to be edited. Add the baseUrl and paths
          properties to the compilerOptions section of the tsconfig.json and
          tsconfig.app.json files:
        </p>,
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "tsconfig.json",
          highlightLines: [11, 12, 13, 14, 15, 16],
          code: tsConfigCode,
        },
      ],
    },
    {
      title: "Edit tsconfig.app.json file",
      content: [
        <p key="1">
          Add the following code to the tsconfig.app.json file to resolve paths,
          for your IDE:
        </p>,
      ],
      codeBlocks: [
        {
          language: "tsx",
          filename: "tsconfig.app.json",
          highlightLines: [4, 5, 6, 7, 8, 9],
          code: tsConfigAppCode,
        },
      ],
    },
    {
      title: "Update vite.config.ts",
      content: [
        <p key="1">
          Add the following code to the vite.config.ts so your app can resolve
          paths without error:
        </p>,
      ],
      commands: [{ type: "npm", text: "install -D @types/node" }],
      codeBlocks: [
        {
          language: "tsx",
          filename: "vite.config.ts",
          code: viteConfigTsCode,
        },
      ],
    },
    {
      title: "Run the CLI",
      content: [
        <p key="1">Run the shadcn-ui init command to setup your project:</p>,
      ],
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

export default ViteSetup;
