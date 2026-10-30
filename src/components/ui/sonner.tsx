"use client";

import React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-[#D4FF24]" />,
        info: <InfoIcon className="size-4 text-[#1558C9]" />,
        warning: <TriangleAlertIcon className="size-4 text-[#D4FF24]" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin text-[#D4FF24]" />,
      }}
      style={
        {
          "--normal-bg": "#101218",
          "--normal-text": "#F5F5F5",
          "--normal-border": "#292D36",
          "--border-radius": "0.75rem",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
