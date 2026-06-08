import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const iconMap = Icons as unknown as Record<string, ComponentType<LucideProps>>;
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }

  return <IconComponent className={className} />;
}
