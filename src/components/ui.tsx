import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-white rounded-xl shadow-sm border border-gray-100 p-6", className)}>
    {children}
  </div>
);

export const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={cn("block text-sm font-medium text-gray-700 mb-1", className)}>
    {children}
  </label>
);

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border-gray-300 border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 shadow-sm transition-colors",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-lg border-gray-300 border px-3 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500 shadow-sm transition-colors bg-white",
        className
      )}
      {...props}
    />
  )
);
Select.displayName = "Select";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
