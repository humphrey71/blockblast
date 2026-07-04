import { describe, it, expect } from 'vitest';
import { resolveInitialTheme, nextTheme } from './theme';
import type { Theme } from './theme';

describe('resolveInitialTheme', () => {
  it('uses stored theme when present', () => {
    expect(resolveInitialTheme('dark', false)).toBe('dark');
    expect(resolveInitialTheme('light', true)).toBe('light');
  });

  it('falls back to prefers-color-scheme when no stored', () => {
    expect(resolveInitialTheme(null, true)).toBe('dark');
    expect(resolveInitialTheme(null, false)).toBe('light');
  });
});

describe('nextTheme', () => {
  it('toggles between light and dark', () => {
    expect(nextTheme('light' as Theme)).toBe('dark');
    expect(nextTheme('dark' as Theme)).toBe('light');
  });
});
