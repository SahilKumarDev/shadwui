import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible textarea components built with Tailwind CSS and Next.js.",
};

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  "textarea-06",
  "textarea-07",
  "textarea-08",
  "textarea-09",
  "textarea-10",
  "textarea-11",
  "textarea-12",
  "textarea-13",
  "textarea-14",
  "textarea-15",
  "textarea-16",
  "textarea-17",
  "textarea-18",
  "textarea-19",
];

const fileCount = [...textareaFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`All description are here ${fileCount.length}`}
    >
      {textareaFiles.map((componentName) => {
        return (
          <ComponentPage
            key={componentName}
            directory={textareaDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
