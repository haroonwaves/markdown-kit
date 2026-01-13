---
title: Blog Kit Core Package
description: Blog Kit's Core utilities for parsing markdown blog files and calculating reading time.
date: 2024-01-04
---

## Core Package

The `@haroonwaves/blog-kit-core` package provides essential utilities for parsing markdown blog
files with frontmatter metadata and automatically calculating reading time. It works in both
server-side (Node.js) and client-side (browser) environments, making it flexible for various use
cases.

### Basic Usage

#### Server-Side (SSR/SSG)

For server-side rendering (Next.js, Node.js scripts, etc.):

```typescript
import { getAllBlogsMeta, getBlog } from '@haroonwaves/blog-kit-core';

const config = {
	contentDirectory: './content',
	blogSubdirectory: 'blog', // optional, defaults to 'blog'
};

// Get all blog metadata
const blogsMeta = getAllBlogsMeta(config);

// Get a specific blog post
const blog = getBlog('my-blog-post', config);
```

#### Client-Side

For client-side usage (when you have markdown content as strings):

```typescript
import { extractBlogMeta, extractBlog } from '@haroonwaves/blog-kit-core';

// Extract metadata from markdown content
const blogMeta = extractBlogMeta(markdownContent, 'my-blog-post');

// Extract full blog data from markdown content
const blog = extractBlog(markdownContent, 'my-blog-post');
```

### Blog File Format

Your markdown files should include frontmatter:

```markdown
---
title: My Blog Post
description: A brief description of the post
date: 2024-01-15
categories:
  - Technology
  - Web Development
---

# My Blog Post

Your markdown content here...
```

**Required frontmatter fields:**

- `title` (string): The blog post title
- `description` (string): A brief description/summary
- `date` (string): Publication date (ISO format recommended: YYYY-MM-DD)

**Optional frontmatter fields:**

- `categories` (string[]): Array of categories/tags for the post

The parser automatically extracts this frontmatter and calculates reading time based on the content
length.
