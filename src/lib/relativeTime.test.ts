import { describe, it, expect } from 'vitest';
import { formatRelative } from './relativeTime';

// Fixed "now" so assertions are deterministic. 2026-07-04T12:00:00Z.
const NOW = new Date('2026-07-04T12:00:00Z');

describe('formatRelative', () => {
  it('formats sub-minute deltas as seconds', () => {
    // 20 seconds before NOW
    expect(formatRelative('2026-07-04T11:59:40Z', NOW)).toMatch(/second/);
  });

  it('formats sub-hour deltas as minutes', () => {
    // 10 minutes before NOW
    expect(formatRelative('2026-07-04T11:50:00Z', NOW)).toMatch(/minute/);
  });

  it('formats sub-day deltas as hours', () => {
    // 4 hours before NOW
    expect(formatRelative('2026-07-04T08:00:00Z', NOW)).toMatch(/hour/);
  });

  it('formats multi-day deltas as days', () => {
    // ~14 days before NOW
    expect(formatRelative('2026-06-20T08:00:00Z', NOW)).toMatch(/day/);
  });

  it('uses past-tense "ago" wording', () => {
    expect(formatRelative('2026-06-20T08:00:00Z', NOW)).toContain('ago');
  });

  it('defaults `now` to the current wall clock when omitted', () => {
    // A timestamp clearly in the past relative to the real now should still
    // produce a string containing a unit word; we don't assert the exact unit
    // since that depends on when the test runs.
    const out = formatRelative('2020-01-01T00:00:00Z');
    expect(out).toMatch(/second|minute|hour|day|month|year/);
  });
});
