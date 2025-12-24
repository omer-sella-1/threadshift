"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface BrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "primary" | "danger";
  fullWidth?: boolean;
}

export default function BrutalButton({
  children,
  variant = "default",
  fullWidth = false,
  className = "",
  ...props
}: BrutalButtonProps) {
  const baseClasses = "border-2 border-black font-bold uppercase tracking-wider transition-all duration-100 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    default: "bg-white text-black hover:bg-black hover:text-white shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1",
    primary: "bg-cyan-400 text-black hover:bg-black hover:text-cyan-400 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1",
    danger: "bg-red-500 text-white hover:bg-black hover:text-red-500 shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
