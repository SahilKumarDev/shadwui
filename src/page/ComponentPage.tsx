import { ComponentCodeBlock } from "@/components/_components/ComponentCodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const capitalizeComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  return (
    <Tabs defaultValue="preview" className="relative">
      <TabsList className="absolute top-1 right-4 bg-transparent">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className={cn("group/item relative", className)}>
          <Component />
        </div>
      </TabsContent>
      <TabsContent value="code">
        <ComponentCodeBlock
          code={source || ""}
          filename={capitalizeComponentName}
          language="tsx"
        />
      </TabsContent>
    </Tabs>
  );
};

export default ComponentPage;
