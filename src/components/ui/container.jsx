// src/components/ui/container.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Container = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    />
  );
});

Container.displayName = "Container";

export { Container };
