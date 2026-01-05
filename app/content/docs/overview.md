---
title: Overview
description: A powerful toolkit for building blog systems with markdown
date: 2024-01-01
---

## Blog Kit

Blog Kit is a modern, TypeScript-first toolkit designed to simplify building blog systems with
markdown. Whether you're creating a personal blog, documentation site, or content platform, Blog Kit
provides the essential tools you need with minimal configuration.

### Key Features

#### Core Package

- ✅ Parse markdown files with frontmatter (using
  [gray-matter](https://github.com/jonschlinkert/gray-matter))
- ✅ Extract blog metadata (title, description, date, category)
- ✅ Calculate reading time automatically (using
  [reading-time](https://github.com/ngryman/reading-time))
- ✅ Sort blogs by date (newest first)
- ✅ TypeScript support with full type definitions
- ✅ Zero dependencies on React or UI frameworks

#### React Package

- ✅ Beautiful, customizable markdown rendering (using
  [react-markdown](https://github.com/remarkjs/react-markdown))
- ✅ Syntax highlighting for code blocks (using
  [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus))
- ✅ GitHub Flavored Markdown (GFM) support (using
  [remark-gfm](https://github.com/remarkjs/remark-gfm))
- ✅ Raw HTML rendering support (using [rehype-raw](https://github.com/rehypejs/rehype-raw))
- ✅ Automatic heading IDs for anchor links (using
  [rehype-slug-custom-id](https://github.com/valeriangalliat/rehype-slug-custom-id))
- ✅ Responsive blog card components
- ✅ Search and filter functionality via `useBlogs` hook
- ✅ Loading placeholders
- ✅ Customizable styling with Tailwind CSS classes
- ✅ TypeScript support with full type definitions
- ✅ Works with any routing library (Next.js, Remix, etc.)

### Use Cases

Blog Kit is perfect for:

- **Personal Blogs** - Share your thoughts, tutorials, and experiences
- **Documentation Sites** - Create beautiful docs with markdown
- **Portfolio Projects** - Showcase your writing and technical skills
- **Content Platforms** - Build content-driven applications
- **Technical Blogs** - Write about code with syntax highlighting
- **Company Blogs** - Professional blog systems with minimal setup

### Packages

- **[@haroonwaves/blog-kit-core](https://www.npmjs.com/package/@haroonwaves/blog-kit-core)** - Core
  utilities for parsing markdown blog files with frontmatter
- **[@haroonwaves/blog-kit-react](https://www.npmjs.com/package/@haroonwaves/blog-kit-react)** -
  React components and hooks for rendering blogs

### Live Demo

[haroonwaves.github.io/blog](https://haroonwaves.github.io/blog) - A full blog built using Blog Kit.

### Getting Started

Ready to build your blog? Get started in minutes:

1. **[Install](/docs/installation)** - Add Blog Kit to your project
2. **[Quick Start](/docs/quick-start)** - Follow our step-by-step guide
3. **[API Reference](/docs/api-reference)** - Explore all available features

Or jump straight to the [Quick Start Guide](/docs/quick-start) to see Blog Kit in action.
