import CopyButton from "@/components/_components/CopyButton";
import { readComponentSource } from "@/lib/readComponentSource";
import { cn } from "@/lib/utils";
import React from "react";

const ComponentPage = async ({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) => {
  const Component = (await import(`@/components/${directory}/${componentName}`))
    .default;
  const source = await readComponentSource(directory, componentName);

  return (
    <div className={cn("group/item relative", className)}>
      <Component />
      <CopyButton componentSource={source || ""} />
    </div>
  );
};

export default ComponentPage;
