import type { Game, NavItem, TopicLink } from "../types";

/** Build the public thumbnail path for a game slug. */
function img(slug: string, ext: "png" | "jpg" = "jpg"): string {
  return `/cache/data/image/game/${slug}-m184x112.${ext}`;
}

/** Every card on the live site carries the "Hot" badge, so default it on. */
function g(slug: string, title: string, rating: number, ext: "png" | "jpg" = "jpg"): Game {
  return { slug, title, rating, image: img(slug, ext), hot: true };
}

/** Horizontal rail directly under the game iframe. */
export const underGameRail: Game[] = [
  g("bottle-hop", "Bottle Hop", 3.6, "png"),
  g("tap-road", "Tap Road", 4.3, "png"),
];

/** Right sidebar of the game block (vertical list). */
export const gameBlockSidebar: Game[] = [
  g("tetrix-online", "Tetrix Online", 3.3),
  g("wacky-steps", "Wacky Steps", 3.5),
  g("cowboy-safari", "Cowboy Safari", 3.8),
  g("geo-dash", "Geo Dash", 4.1),
  g("friday-night-funkin", "Friday Night Funkin'", 5),
];

/** First sidebar grid below the article intro. */
export const descriptionSidebarA: Game[] = [
  g("poor-bunny", "Poor Bunny", 4.7, "png"),
  g("escape-road-3", "Escape Road 3", 4.3),
  g("sky-dart", "Sky Dart", 5),
  g("cheat-or-repeat", "Cheat or Repeat", 4),
  g("meowdoku", "Meowdoku", 5, "png"),
  g("brainrot-park", "Brainrot Park", 5),
  g("mall-fury", "Mall Fury", 5),
  g("stumble-race", "Stumble Race", 5),
  g("beast-clash", "Beast Clash", 5),
  g("soyjak-siege", "Soyjak Siege", 5),
  g("friday-night-funkin", "Friday Night Funkin'", 5),
  g("ragdoll-hit", "Ragdoll Hit", 5, "png"),
];

/** Lower sidebar grid (continues beside/below the article). */
export const descriptionSidebarB: Game[] = [
  g("scooby-doo-creepy-run", "Scooby Doo Creepy Run", 5),
  g("duo-defense", "Duo Defense", 5),
  g("arrow-arena", "Arrow Arena", 5),
  g("drift-frenzy", "Drift Frenzy", 5),
  g("wobbly-pets", "Wobbly Pets", 5),
  g("wurst-dash", "Wurst Dash", 5),
  g("fish-quest", "Fish Quest", 5),
  g("long-leg-master", "Long Leg Master", 5),
  g("farting-flight", "Farting Flight", 5),
  g("arcade-glide", "Arcade Glide", 3),
  g("the-archives-of-trevosa", "The Archives of Trevosa", 5),
  g("cheat-or-repeat", "Cheat or Repeat", 4),
];

/** Left vertical icon nav. Lucide icon names used for category items. */
export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "home", textOnly: true, active: false },
  { label: "History", href: "/history", icon: "history", textOnly: true },
  { label: "Random", href: "#", icon: "shuffle", textOnly: true, active: true },
  { label: "New Games", href: "/new-games", icon: "sparkles" },
  { label: "Trending Games", href: "/games/trending-games", icon: "trending-up" },
  { label: "Hot Games", href: "/hot-games", icon: "flame" },
  { label: "Block Games", href: "/games/block-games", icon: "grid-2x2" },
  { label: "Bubble Shooter", href: "/games/bubble-shooter", icon: "circle-dot" },
  { label: "Casual Games", href: "/games/casual-games", icon: "gamepad-2" },
  { label: "Puzzle Games", href: "/games/puzzle-games", icon: "puzzle" },
  { label: "Tetris Games", href: "/games/tetris-games", icon: "layout-grid" },
  { label: "Platformer games", href: "/games/platformer-games", icon: "footprints" },
  { label: "Action Games", href: "/games/action-games", icon: "zap" },
  { label: "Sport Games", href: "/games/sport-games", icon: "trophy" },
  { label: "Simulation Games", href: "/games/simulation-games", icon: "boxes" },
];

/** "Discover more" related-topic pills. */
export const discoverTopics: TopicLink[] = [
  { label: "games", href: "#" },
  { label: "Puzzle game subscription", href: "#" },
  { label: "board", href: "#" },
  { label: "Puzzles & Brainteasers", href: "#" },
  { label: "Block Games category", href: "#" },
  { label: "puzzles", href: "#" },
  { label: "Board", href: "#" },
  { label: "Play Block online", href: "#" },
  { label: "New games updates", href: "#" },
  { label: "Puzzle Video Games", href: "#" },
];

/** Footer category tags. */
export const categoryTags: { label: string; href: string }[] = [
  { label: "Block Games", href: "/games/block-games" },
  { label: "Puzzle Games", href: "/games/puzzle-games" },
  { label: "Tetris Games", href: "/games/tetris-games" },
  { label: "Casual Games", href: "/games/casual-games" },
];

/** Star rating value shown in the article header (mirrors interactions.json). */
export const RATING_VALUE = 5;
/** Vote count shown in the article header (mirrors interactions.json). */
export const RATING_VOTES = 2225;
