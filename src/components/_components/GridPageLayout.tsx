import React from "react";

interface GridPageLayoutProps {
  heading: string;
  description: string;
  layout?: "page-grid-layout" | "page-grid-layout-two";
  children: React.ReactNode;
}

const GridPageLayout = ({
  description,
  children,
  heading,
  layout,
}: GridPageLayoutProps) => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-1 lg:space-y-2 font-orbit-max">
        <h1 className="lg:text-6xl text-4xl underline underline-offset-8 decoration-[#FF7700]">
          {heading}
        </h1>
        <p className="lg:text-xl text-base dark:text-white-60 tracking-wide text-black/70">
          {description}
        </p>
      </div>

      <div className="px- sm:px-6">
        <div className="mx-auto  w-full max-w-8xl">
          <div className={layout || "page-grid-layout"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridPageLayout;
