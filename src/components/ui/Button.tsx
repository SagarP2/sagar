import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "cobalt" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ActionButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: undefined;
  };

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ActionButtonProps | AnchorButtonProps;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D4FF24] text-[#030407] border border-[#D4FF24] font-bold hover:bg-[#F5F5F5] hover:border-[#F5F5F5] active:translate-y-[1px]",
  secondary:
    "bg-[#101218] text-[#F5F5F5] border border-[#292D36] font-semibold hover:border-[#D4FF24] hover:text-[#D4FF24] active:translate-y-[1px]",
  cobalt:
    "bg-[#1558C9] text-[#F5F5F5] border border-[#1558C9] font-semibold hover:bg-[#030407] hover:border-[#D4FF24] hover:text-[#D4FF24] active:translate-y-[1px]",
  ghost:
    "bg-transparent text-[#B4B8C3] border border-transparent hover:text-[#D4FF24] hover:border-[#292D36] hover:bg-[#101218]",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[11px] tracking-wider",
  md: "px-5 py-3 text-xs tracking-widest",
  lg: "px-7 py-4 text-xs tracking-widest",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 font-mono uppercase transition-all duration-200 cursor-pointer select-none",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...anchorRest } = rest as Omit<
      AnchorButtonProps,
      keyof BaseButtonProps
    >;
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ActionButtonProps, keyof BaseButtonProps>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

