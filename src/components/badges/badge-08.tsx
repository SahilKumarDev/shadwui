"use client";

import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { X } from "lucide-react";

const BadgeDismiss = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRemove = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Badge className="rounded-full" variant={"outline"}>
        Shadwui
        <X size={16} color="red" onClick={handleRemove} className="ms-1" />
      </Badge>
    )
  );
};

export default BadgeDismiss;
