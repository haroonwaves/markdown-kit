# Markdown Kit

A powerful toolkit for building blog systems with markdown. Consists of two packages: a core Node.js
library for parsing markdown blog files and a React component library for rendering beautiful blog
UIs.

## Packages

- **[@haroonwaves/blog-kit-core](./packages/blog-kit-core)** - Core utilities for parsing markdown
  blog files with frontmatter
- **[@haroonwaves/blog-kit-react](./packages/blog-kit-react)** - React components and hooks for
  rendering blogs

## Installation

### Core Package

```bash
npm install @haroonwaves/blog-kit-core
# or
pnpm add @haroonwaves/blog-kit-core
# or
yarn add @haroonwaves/blog-kit-core
```

### React Package

```bash
npm install @haroonwaves/blog-kit-react
# or
pnpm add @haroonwaves/blog-kit-react
# or
yarn add @haroonwaves/blog-kit-react
```

**Note:** The React package requires React 18+ as a peer dependency.

## Usage

### Core Package

The core package provides utilities to parse markdown blog files with frontmatter and calculate
reading time.

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

#### Blog File Format

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

### React Package

#### MarkdownRenderer

Render markdown content with syntax highlighting and beautiful styling:

```tsx
import { MarkdownRenderer } from '@haroonwaves/blog-kit-react';

function BlogPost({ content }) {
	return <MarkdownRenderer content={content} />;
}
```

#### BlogCard

Display a single blog post card:

```tsx
import { BlogCard } from '@haroonwaves/blog-kit-react';

function BlogCardExample({ blog }) {
	return (
		<BlogCard
			blog={blog}
			basePath="/blog"
			showCategory={true}
			showReadingTime={true}
			showDate={true}
		/>
	);
}
```

#### BlogList

Display a list of blog posts:

```tsx
import { BlogList } from '@haroonwaves/blog-kit-react';

function BlogListExample({ blogs }) {
	return <BlogList blogs={blogs} basePath="/blog" emptyMessage="No posts found." />;
}
```

#### useBlogs Hook

Filter and search through blog posts:

```tsx
import { useBlogs } from '@haroonwaves/blog-kit-react';

function BlogSearch({ blogs }) {
	const {
		blogs: filteredBlogs,
		searchTerm,
		setSearchTerm,
		selectedCategory,
		setSelectedCategory,
		categories,
	} = useBlogs(blogs);

	return (
		<div>
			<input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search blogs..."
			/>
			<select
				value={selectedCategory || ''}
				onChange={(e) => setSelectedCategory(e.target.value || null)}
			>
				<option value="">All Categories</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<BlogList blogs={filteredBlogs} />
		</div>
	);
}
```

#### BlogPlaceholder

Show loading placeholders while blogs are loading:

```tsx
import { BlogPlaceholder } from '@haroonwaves/blog-kit-react';

function LoadingBlogs() {
	return <BlogPlaceholder count={3} />;
}
```

#### Complete Example

Here's a complete example combining everything:

```tsx
import { useState, useEffect } from 'react';
import { getAllBlogs, getBlogData } from '@haroonwaves/blog-kit-core';
import { MarkdownRenderer, BlogList, useBlogs } from '@haroonwaves/blog-kit-react';

function BlogPage() {
	const [blogs, setBlogs] = useState([]);
	const { blogs: filteredBlogs, searchTerm, setSearchTerm } = useBlogs(blogs);

	useEffect(() => {
		const allBlogs = getAllBlogs({
			contentDirectory: './content',
		});
		setBlogs(allBlogs);
	}, []);

	return (
		<div>
			<input
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				placeholder="Search..."
			/>
			<BlogList blogs={filteredBlogs} basePath="/blog" />
		</div>
	);
}

function BlogPostPage({ slug }) {
	const [blog, setBlog] = useState(null);

	useEffect(() => {
		const blogData = getBlogData(slug, {
			contentDirectory: './content',
		});
		setBlog(blogData);
	}, [slug]);

	if (!blog) return <div>Loading...</div>;

	return (
		<article>
			<h1>{blog.metadata.title}</h1>
			<p>{blog.metadata.description}</p>
			<MarkdownRenderer content={blog.content} />
		</article>
	);
}
```

## Features

### Core Package

- ✅ Parse markdown files with frontmatter
- ✅ Extract blog metadata (title, description, date, category)
- ✅ Calculate reading time automatically
- ✅ Sort blogs by date (newest first)
- ✅ TypeScript support

### React Package

- ✅ Beautiful, customizable markdown rendering
- ✅ Syntax highlighting for code blocks (Prism.js)
- ✅ GitHub Flavored Markdown (GFM) support
- ✅ Responsive blog card components
- ✅ Search and filter functionality
- ✅ Loading placeholders
- ✅ Customizable styling with Tailwind CSS classes
- ✅ TypeScript support

## API Reference

### Core Package

#### `getAllBlogs(config: BlogKitConfig): BlogMetadata[]`

Returns an array of all blog metadata sorted by date (newest first).

**Parameters:**

- `config.contentDirectory` (string): Path to your content directory
- `config.blogSubdirectory` (string, optional): Subdirectory for blog files (defaults to 'blog')

**Returns:** Array of `BlogMetadata` objects

#### `getBlogData(slug: string, config: BlogKitConfig): BlogData | null`

Returns the full blog data including content for a specific slug.

**Parameters:**

- `slug` (string): The blog post slug (filename without .md)
- `config.contentDirectory` (string): Path to your content directory
- `config.blogSubdirectory` (string, optional): Subdirectory for blog files (defaults to 'blog')

**Returns:** `BlogData` object or `null` if not found

#### Types

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

### React Package

#### Components

- `MarkdownRenderer` - Renders markdown content
- `BlogCard` - Single blog post card
- `BlogList` - List of blog cards
- `BlogPlaceholder` - Loading placeholder

#### Hooks

- `useBlogs(blogs: BlogMetadata[])` - Provides search and filter functionality

See the [Usage](#usage) section for detailed examples of each component and hook.

## Styling

The React components use Tailwind CSS classes. Make sure you have Tailwind CSS configured in your
project. The components also include a Prism.js CSS file for syntax highlighting.

## Development

This is a monorepo managed with pnpm workspaces.

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
