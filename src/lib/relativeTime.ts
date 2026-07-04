/**
 * Pure relative-time formatter (no DOM access).
 *
 * Used by:
 *   - `src/lib/relativeTime.test.ts` (unit tests, fixed `now`)
 *   - `src/components/Comments.astro` client island (replaces SSR ISO strings
 *     in <time> elements with "x minutes ago"-style text on the client).
 *
 * Why a pure function (TDD):
 *   - Deterministic given an explicit `now`, so tests don't depend on the
 *     wall clock.
 *   - Deploy-safe: the relative string is computed in the client island after
 *     hydration, so it never goes stale in a statically-built HTML file. The
 *     server always emits the ISO timestamp as the fallback (no-JS) text.
 */
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

/** Unit + its size in seconds (largest first). */
const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['year', 365 * 24 * 3600],
  ['month', 30 * 24 * 3600],
  ['day', 24 * 3600],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

/**
 * Format an ISO 8601 timestamp as a relative "time ago" string using
 * `Intl.RelativeTimeFormat` (e.g. "3 days ago", "20 seconds ago").
 *
 * @param iso  ISO 8601 timestamp (e.g. "2026-06-27T08:00:00Z").
 * @param now  Reference "now"; defaults to the current wall clock. Pass an
 *             explicit value in tests for determinism.
 */
export function formatRelative(iso: string, now: Date = new Date()): string {
  const diffSec = (new Date(iso).getTime() - now.getTime()) / 1000;
  for (const [unit, secs] of UNITS) {
    if (Math.abs(diffSec) >= secs) {
      return rtf.format(Math.round(diffSec / secs), unit);
    }
  }
  // Sub-second difference: "now".
  return rtf.format(0, 'second');
}
