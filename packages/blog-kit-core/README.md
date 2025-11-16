# @haroonwaves/blog-kit-core

Core utilities for parsing markdown blog files with frontmatter. Extract metadata, calculate reading
time, and manage blog content in Node.js applications.

> **Looking for React components?** Check out
> [@haroonwaves/blog-kit-react](https://www.npmjs.com/package/@haroonwaves/blog-kit-react) for
> beautiful blog UI components.

## Installation

```bash
npm install @haroonwaves/blog-kit-core
# or
pnpm add @haroonwaves/blog-kit-core
# or
yarn add @haroonwaves/blog-kit-core
```

## Quick Start

```typescript
import { getAllBlogs, getBlogData } from '@haroonwaves/blog-kit-core';

const config = {
	contentDirectory: './content',
	blogSubdirectory: 'blog', // optional, defaults to 'blog'
};

// Get all blog metadata
const blogs = getAllBlogs(config);

// Get a specific blog post
const blog = getBlogData('my-blog-post', config);
```

## Blog File Format

Your markdown files should include frontmatter:

```markdown
---
title: My Blog Post
description: A brief description of the post
date: 2024-01-15
category: Technology
---

# My Blog Post

Your markdown content here...
```

**Required frontmatter fields:**

- `title` (string): The blog post title
- `description` (string): A brief description/summary
- `date` (string): Publication date (ISO format recommended: YYYY-MM-DD)

**Optional frontmatter fields:**

- `category` (string): Category/tag for the post

The parser automatically extracts this frontmatter and calculates reading time based on the content
length.

## API Reference

### `getAllBlogs(config: BlogKitConfig): BlogMetadata[]`

Returns an array of all blog metadata sorted by date (newest first).

**Parameters:**

- `config.contentDirectory` (string): Path to your content directory
- `config.blogSubdirectory` (string, optional): Subdirectory for blog files (defaults to 'blog')

**Returns:** Array of `BlogMetadata` objects

**Example:**

```typescript
const blogs = getAllBlogs({
	contentDirectory: './content',
	blogSubdirectory: 'posts', // optional
});

// blogs is an array of BlogMetadata objects
blogs.forEach((blog) => {
	console.log(blog.title, blog.slug, blog.readingTime);
});
```

### `getBlogData(slug: string, config: BlogKitConfig): BlogData | null`

Returns the full blog data including content for a specific slug.

**Parameters:**

- `slug` (string): The blog post slug (filename without .md)
- `config.contentDirectory` (string): Path to your content directory
- `config.blogSubdirectory` (string, optional): Subdirectory for blog files (defaults to 'blog')

**Returns:** `BlogData` object or `null` if not found

**Example:**

```typescript
const blog = getBlogData('my-blog-post', {
	contentDirectory: './content',
});

if (blog) {
	console.log(blog.metadata.title);
	console.log(blog.content); // markdown content
	console.log(blog.readingTime);
}
```

## Types

```typescript
interface BlogMetadata {
	title: string;
	description: string;
	date: string;
	category?: string;
	slug: string;
	readingTime: string;
}

interface BlogData {
	metadata: BlogMetadata;
	content: string;
	readingTime: string;
}

interface BlogKitConfig {
	contentDirectory: string;
	blogSubdirectory?: string;
}
```

## Features

- ✅ Parse markdown files with frontmatter (using
  [gray-matter](https://github.com/jonschlinkert/gray-matter))
- ✅ Extract blog metadata (title, description, date, category)
- ✅ Calculate reading time automatically (using
  [reading-time](https://github.com/ngryman/reading-time))
- ✅ Sort blogs by date (newest first)
- ✅ TypeScript support with full type definitions
- ✅ Zero dependencies on React or UI frameworks

## Usage with React

This package works great with
[@haroonwaves/blog-kit-react](https://www.npmjs.com/package/@haroonwaves/blog-kit-react) for a
complete blog solution:

```typescript
import { getAllBlogs, getBlogData } from '@haroonwaves/blog-kit-core';
import { MarkdownRenderer, BlogList } from '@haroonwaves/blog-kit-react';

// In your Next.js API route or server component
const blogs = getAllBlogs({ contentDirectory: './content' });

// Render with React components
<BlogList blogs={blogs} basePath="/blog" />
```

## Requirements

- Node.js 18+ (uses Node.js `fs` module)
- TypeScript 4.5+ (for TypeScript projects)

## License

ISC

## Related Packages

- [@haroonwaves/blog-kit-react](https://www.npmjs.com/package/@haroonwaves/blog-kit-react) - React
  components for rendering blogs
