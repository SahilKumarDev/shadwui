import GridPageLayout from "@/components/_components/GridPageLayout";
import ComponentPage from "@/page/ComponentPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Input and Textarea Components - composts ui",
  description:
    "A collection of beautiful and accessible slider components built with Tailwind CSS and Next.js.",
};

const sliderDir = "sliders";
const sliderFiles = [
  "slider-01",
  "slider-02",
  "slider-03",
  "slider-04",
  "slider-05",
  "slider-06",
  "slider-07",
  "slider-08",
  "slider-09",
  "slider-10",
  "slider-11",
  "slider-12",
  "slider-13",
  "slider-14",
  "slider-15",
  "slider-16",
  "slider-17",
  "slider-18",
  "slider-19",
  "slider-20",
  "slider-21", 
  "slider-22",
  "slider-23", 
   
];

const fileCount = [...sliderFiles];

export default function Page() {
  return (
    <GridPageLayout
      heading="Inputs"
      description={`All description are here ${fileCount.length}`}
    >
      {sliderFiles.map((componentName) => {
        return (
          <ComponentPage
          className=""
            key={componentName}
            directory={sliderDir}
            componentName={componentName}
          />
        );
      })}
    </GridPageLayout>
  );
}
