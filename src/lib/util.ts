import type { Readable } from 'svelte/store';
import { useMediaQuery } from 'svelte-breakpoints';

export function clamp(number: number, min: number, max: number): number {
    return Math.max(min, Math.min(number, max));
}

// https://tailwindcss.com/docs/responsive-design
export const isSm: Readable<boolean> = useMediaQuery('(min-width: 640px)');
