// Content type definitions for the Block Blast Astro clone.

/** A playable game card shown in thumbnail grids/rails. */
export interface Game {
  /** URL slug, e.g. "bottle-hop" — also the link href segment. */
  slug: string;
  /** Display title. */
  title: string;
  /** Average rating, e.g. 4.3. */
  rating: number;
  /** Public path to the 184x112 thumbnail (under public/). */
  image: string;
  /** Show the "Hot" badge. Every card on the live site shows it. */
  hot?: boolean;
}

/** Left vertical navigation rail item. */
export interface NavItem {
  label: string;
  href: string;
  /** Icon name for category items; null/omitted for text-only items (Home/History/Random). */
  icon?: string | null;
  /** Text-only pill style vs icon+label. */
  textOnly?: boolean;
  active?: boolean;
}

/** Related-topic pill under "Discover more". */
export interface TopicLink {
  label: string;
  href: string;
}

/** A user comment in the Discuss section (supports threaded replies). */
export interface Comment {
  id: number;
  author: string;
  /** Avatar image URL. Null in the static dataset; the UI renders an initial/gradient instead. */
  avatar: null;
  content: string;
  likes: number;
  dislikes: number;
  /** ISO 8601 timestamp; the UI converts this to a relative "time ago" string. */
  timestamp: string;
  /** Optional threaded replies (same shape). */
  replies?: Comment[];
}

/** Aggregated rating + discussion data shown beside/under the article. */
export interface Interactions {
  /** Average star rating (0–5). */
  rating: number;
  /** Number of votes backing the rating. */
  votes: number;
  /** Total comment count shown in the Discuss header (may exceed comments.length). */
  total: number;
  comments: Comment[];
}
