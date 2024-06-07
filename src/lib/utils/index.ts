// lib/utils/index.ts

export function cn(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
  }
  