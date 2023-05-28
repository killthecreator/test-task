import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* Custom function to merge Tailwind styles */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
