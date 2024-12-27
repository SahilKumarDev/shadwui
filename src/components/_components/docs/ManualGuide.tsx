import React from "react";
import { Separator } from "@/components/ui/separator"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Code from "../Code";
import { CodeBlock } from "../CodeBloack";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
  code: string;
};

type StepContent = {
  text?: React.ReactNode;
  link?: {
    href: string;
    text: string;
    isButton?: boolean;
  };
  command?: string;
  code?: CodeBlockProps;
};

type Step = {
  title: string;
  contents: StepContent[];
};

const SetupGuide = ({ steps }: { steps: Step[] }) => (
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
          <h4 className="font-orbit-max text-xl underline underline-offset-4">
            {step.title}
          </h4>
        </div>

        <div className="ml-12 py-2 space-y-2">
          {step.contents.map((content, i) => (
            <div key={i} className="space-y-2">
              {content.text}
              {content.command && <Code text={content.command} type="npm" />}
              {content.code && <CodeBlock {...content.code} />}
              {content.link && (
                <Link href={content.link.href} className="block mt-4">
                  {content.link.isButton ? (
                    <Button variant="outline">{content.link.text}</Button>
                  ) : (
                    <span className="underline">{content.link.text}</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ManualGuide = () => {
  const tsConfigCode = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`;

  const tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: \`var(--radius)\`,
        md: \`calc(var(--radius) - 2px)\`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

  const globalCssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;
    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;
    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;
    --border: 216 34% 17%;
    --input: 216 34% 17%;
    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;
    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --ring: 216 34% 17%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}`;

  const utilsCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

  const componentsJsonCode = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "zinc",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}`;

  const steps: Step[] = [
    {
      title: "Add Tailwind CSS",
      contents: [
        {
          text: (
            <p>
              Components are styled using Tailwind CSS. You need to install
              Tailwind CSS in your project.
            </p>
          ),
          link: {
            href: "https://tailwindcss.com/docs/installation",
            text: "Follow the Tailwind CSS installation instructions to get started.",
          },
        },
      ],
    },
    {
      title: "Add dependencies",
      contents: [
        {
          text: (
            <p>
              After Create the next.js project, add a shadcn to your project run
              the following command in your terminal
            </p>
          ),
          command:
            "install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react",
        },
      ],
    },
    {
      title: "Configure path aliases",
      contents: [
        {
          text: <p>Configure the path aliases in your tsconfig.json file.</p>,
          code: {
            language: "tsx",
            filename: "tsconfig.json",
            highlightLines: [3, 4, 5, 6],
            code: tsConfigCode,
          },
        },
      ],
    },
    {
      title: "Configure tailwind.config.js",
      contents: [
        {
          text: (
            <p>
              Here&apos;s what my tailwind.config.js file looks
              like:
            </p>
          ),
          code: {
            language: "tsx",
            filename: "tailwind.config.js",
            code: tailwindConfigCode,
          },
        },
      ],
    },
    {
      title: "Configure styles",
      contents: [
        {
          text: (
            <p>
              Add the following to your styles/globals.css file. You can learn
              more about using CSS variables for theming in the
            </p>
          ),
          code: {
            language: "tsx",
            filename: "global.css",
            code: globalCssCode,
          },
        },
      ],
    },
    {
      title: "Add a cn helper",
      contents: [
        {
          code: {
            language: "tsx",
            filename: "lib/utils.ts",
            code: utilsCode,
          },
        },
      ],
    },
    {
      title: "Create a components.json file",
      contents: [
        {
          text: (
            <p>Create a components.json file in the root of your project.</p>
          ),
          code: {
            language: "tsx",
            filename: "components.json",
            code: componentsJsonCode,
          },
        },
      ],
    },
    {
      title: "That's it",
      contents: [
        {
          text: <p>You can now start adding components to your project.</p>,
          link: {
            href: "https://ui.shadcn.com/docs/components/accordion",
            text: "Get started",
            isButton: true,
          },
        },
      ],
    },
  ];

  return <SetupGuide steps={steps} />;
};

export default ManualGuide;
