import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import React from "react";

const BadgeDemo = () => {
  return (
    <Badge variant={"outline"} className="rounded-full">
      <Award size={16} />
    </Badge>
  );
};

export default BadgeDemo;
