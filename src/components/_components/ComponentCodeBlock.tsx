"use client";
import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const ComponentCodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <Card className="   bg-zinc-950 dark:bg-zinc-900  max-h-[20rem] overflow-y-auto">
      <CardHeader className="py-3">
        {tabsExist && (
          <div className="flex  overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-sm text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
            >
              {copied ? (
                <IconCheck size={14} className="text-green-500" />
              ) : (
                <IconCopy size={14} />
              )}
            </button>
          </div>
        )}
      </CardHeader>
      <Separator />

      <CardContent className="!pt-2 p-0">
        <SyntaxHighlighter
          language={activeLanguage}
          style={darcula}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem", // text-sm equivalent
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: activeHighlightLines.includes(lineNumber)
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
            },
          })}
          PreTag="div"
        >
          {String(activeCode)}
        </SyntaxHighlighter>
      </CardContent>
    </Card>

    // <div className="relative w-full rounded-lg bg-zinc-950 dark:bg-zinc-900 border p-4 font-mono text-sm max-h-[20rem] overflow-auto">
    // <div className="flex flex-col gap-2 border">
    //   {tabsExist && (
    //     <div className="flex  overflow-x-auto">
    //       {tabs.map((tab, index) => (
    //         <button
    //           key={index}
    //           onClick={() => setActiveTab(index)}
    //           className={`px-3 !py-2 text-xs transition-colors font-sans ${
    //             activeTab === index
    //               ? "text-white"
    //               : "text-zinc-400 hover:text-zinc-200"
    //           }`}
    //         >
    //           {tab.name}
    //         </button>
    //       ))}
    //     </div>
    //   )}
    //   {!tabsExist && filename && (
    //     <div className="flex justify-between items-center py-2">
    //       <div className="text-xs text-zinc-400">{filename}</div>
    //       <button
    //         onClick={copyToClipboard}
    //         className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
    //       >
    //         {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
    //       </button>
    //     </div>
    //   )}
    // </div>
    //   <SyntaxHighlighter
    //     language={activeLanguage}
    //     style={atomDark}
    //     customStyle={{
    //       margin: 0,
    //       padding: 0,
    //       background: "transparent",
    //       fontSize: "0.875rem", // text-sm equivalent
    //     }}
    //     wrapLines={true}
    //     showLineNumbers={true}
    //     lineProps={(lineNumber) => ({
    //       style: {
    //         backgroundColor: activeHighlightLines.includes(lineNumber)
    //           ? "rgba(255,255,255,0.1)"
    //           : "transparent",
    //         display: "block",
    //         width: "100%",
    //       },
    //     })}
    //     PreTag="div"
    //   >
    //     {String(activeCode)}
    //   </SyntaxHighlighter>
    // </div>
  );
};
