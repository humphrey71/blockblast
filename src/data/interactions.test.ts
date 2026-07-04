import { describe, it, expect } from 'vitest';
import data from './interactions.json';
import type { Interactions } from '../types';

describe('interactions.json', () => {
  it('satisfies Interactions shape', () => {
    const d = data as Interactions;
    expect(typeof d.rating).toBe('number');
    expect(typeof d.votes).toBe('number');
    expect(Array.isArray(d.comments)).toBe(true);
    expect(d.comments.length).toBeGreaterThan(0);
  });

  it('matches the expected article rating/votes/total', () => {
    const d = data as Interactions;
    expect(d.rating).toBe(5);
    expect(d.votes).toBe(2225);
    expect(d.total).toBe(151);
  });

  it('every comment has required fields and null avatar', () => {
    const d = data as Interactions;
    for (const c of d.comments) {
      expect(typeof c.id).toBe('number');
      expect(typeof c.author).toBe('string');
      expect(c.avatar).toBeNull();
      expect(typeof c.content).toBe('string');
      expect(typeof c.likes).toBe('number');
      expect(typeof c.dislikes).toBe('number');
      expect(typeof c.timestamp).toBe('string');
      // timestamp parses as a valid date
      expect(Number.isNaN(Date.parse(c.timestamp))).toBe(false);
    }
  });
});
