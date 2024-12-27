import React from "react";
import Code from "../Code";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { CodeBlock } from "../CodeBloack";
import { Badge } from "@/components/ui/badge";

const code = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
`;

const tailwindCode = `/** @type {import('tailwindcss').Config} */
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

const globalCode = `@tailwind base;
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
}
`;

const cnHelperCode = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`;

const jsonCode = `{
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
}
`;

const ManualGuide = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          1
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Add Tailwind CSS
        </h4>
      </div>

      <div className="ml-12 py-2">
        <p>
          Components are styled using Tailwind CSS. You need to install Tailwind
          CSS in your project.
        </p>
        <Link
          href={"https://tailwindcss.com/docs/installation"}
          className="underline pt-5"
        >
          Follow the Tailwind CSS installation instructions to get started.
        </Link>
      </div>

      <Separator
        orientation="vertical"
        className="bg-zinc-950 border dark:bg-zinc-900 absolute top-8 -z-10 left-4  "
      />

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          2
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Add dependencies
        </h4>
      </div>

      <div className="ml-12 py-2">
        <p>
          After Create the next.js project, add a shadcn to your project run the
          following command in your terminal
        </p>
        <Code type="npm">
          install tailwindcss-animate class-variance-authority clsx
          tailwind-merge lucide-react
        </Code>
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          3
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Configure path aliases
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <p>
          Configure the path aliases in your <code>tsconfig.json </code> file.
        </p>

        <CodeBlock
          language="tsx"
          filename="tsconfig.json"
          highlightLines={[3, 4, 5, 6]}
          code={code}
        />
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          4
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Configure tailwind.config.js
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <p>
          Here&apos;s what my <Badge>tailwind.config.js</Badge> file looks like:
        </p>

        <CodeBlock
          language="tsx"
          filename="tailwind.config.js"
          code={tailwindCode}
        />
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          5
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Configure styles
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <p>
          Add the following to your styles/globals.css file. You can learn more
          about using CSS variables for theming in the
        </p>

        <CodeBlock language="tsx" filename="global.css" code={globalCode} />
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          6
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Add a cn helper
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <CodeBlock language="tsx" filename="lib/utils.ts" code={cnHelperCode} />
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          7
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          Create a components.json file
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <p>Create a components.json file in the root of your project.</p>
        <CodeBlock language="tsx" filename="lib/utils.ts" code={jsonCode} />
      </div>

      <div className="flex items-center gap-4 justify-items-start">
        <div className="rounded-full flex-center font-orbit-max border dark:bg-zinc-900 py-4 bg-white text-base w-8 h-8">
          8
        </div>

        <h4 className="font-orbit-max text-xl underline underline-offset-4">
          That&apos;s it
        </h4>
      </div>

      <div className="ml-12 py-2 space-y-2">
        <p>You can now start adding components to your project.</p>
      </div>
    </div>
  );
};

export default ManualGuide;
