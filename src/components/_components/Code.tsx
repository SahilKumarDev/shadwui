"use client";

import React, { useState } from "react";
import { HiOutlineClipboardList, HiCheck } from "react-icons/hi";

const Code = ({ children, type }: { children: string; type: string }) => {
  const [copied, setCopied] = useState(false);
  const codeText = `${type} ${children}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <code className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900 flex items-center justify-between px-4">
      <div className="space-x-2">
        <span className="text-purple-500">{type}</span>
        <span className="text-blue-500">{children}</span>
      </div>

      <button
        onClick={handleCopy}
        className="text-white hover:text-gray-300 transition-colors"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <HiCheck className="text-green-500" />
        ) : (
          <HiOutlineClipboardList />
        )}
      </button>
    </code>
  );
};

export default Code;
