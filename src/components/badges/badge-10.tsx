import { Badge } from "@/components/ui/badge";
import { BadgeAlert } from "lucide-react";
import React from "react";

const BadgeDemo = () => {
  return (
    <Badge variant={"destructive"} className="rounded-full">
      <BadgeAlert size={16} />
    </Badge>
  );
};

export default BadgeDemo;
