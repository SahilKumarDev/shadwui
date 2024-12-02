"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const paths = usePathname() ?? "";
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              {pathNames.map((link, index) => {
                const href = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLastItem = pathNames.length === index + 1;

                return (
                  <div key={index} className="flex items-center">
                    {isLastItem ? (
                      <BreadcrumbItem className="text-foreground">
                        {link}
                      </BreadcrumbItem>
                    ) : (
                      <BreadcrumbLink
                        href={href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </BreadcrumbLink>
                    )}
                    {!isLastItem && (
                      <BreadcrumbSeparator className="text-muted-foreground ml-2" />
                    )}
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </div>
  );
};

export default BreadCrumb;
