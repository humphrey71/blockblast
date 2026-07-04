/**
 * Pure theme logic — no DOM dependencies, fully unit-testable.
 *
 * DOM side-effects (classList toggling, localStorage, button active-pill
 * visuals) live in `src/components/ThemeToggle.astro`'s `<script>` tag.
 */

/** The two themes the site supports. */
export type Theme = 'light' | 'dark';

/**
 * Decide which theme to apply on first paint.
 *
 * Prefers an explicitly stored choice; otherwise falls back to the user's
 * OS-level color-scheme preference.
 */
export function resolveInitialTheme(
  stored: Theme | null,
  prefersDark: boolean,
): Theme {
  if (stored) return stored;
  return prefersDark ? 'dark' : 'light';
}

/** Return the opposite of the current theme. */
export function nextTheme(current: Theme): Theme {
  return current === 'dark' ? 'light' : 'dark';
}
