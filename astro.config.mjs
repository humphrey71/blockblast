import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.github.io', // Task 13 填实际 GitHub 用户名
  base: '/blockblast/',
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});
