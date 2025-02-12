import { MoonIcon1 } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

const ThemeToggle = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-1 bg-none border-none size-12 [&_svg]:size-full flex-shrink-0 [&_svg]:flex-shrink-0 cursor-pointer",
        className
      )}
      type="button"
      {...props}
    >
      <MoonIcon1 />
    </button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
