# @haroonwaves/blog-kit-react

Beautiful React components and hooks for rendering markdown blogs. Includes markdown renderer with
syntax highlighting, blog cards, lists, and search functionality.

> **Need to parse markdown files?** Check out
> [@haroonwaves/blog-kit-core](https://www.npmjs.com/package/@haroonwaves/blog-kit-core) for parsing
> utilities.

## Installation

```bash
npm install @haroonwaves/blog-kit-react
# or
pnpm add @haroonwaves/blog-kit-react
# or
yarn add @haroonwaves/blog-kit-react
```

**Note:** This package requires React 18+ as a peer dependency.

## Quick Start

```tsx
import { MarkdownRenderer } from '@haroonwaves/blog-kit-react';

function BlogPost({ content }) {
	return <MarkdownRenderer content={content} />;
}
```

## Components

### MarkdownRenderer

Render markdown content with syntax highlighting and beautiful styling:

```tsx
import { MarkdownRenderer } from '@haroonwaves/blog-kit-react';

function BlogPost({ content }) {
	return <MarkdownRenderer content={content} />;
}
```

**Props:**

- `content` (string, required): Markdown content to render
- `className` (string, optional): Additional CSS classes
- `components` (object, optional): Custom component overrides

### BlogCard

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

**Props:**

- `blog` (BlogMetadata, required): Blog metadata object
- `basePath` (string, optional): Base path for blog links (default: '/blog')
- `renderLink` (function, optional): Custom link renderer (useful for Next.js Link)
- `className` (string, optional): Additional CSS classes
- `showCategory` (boolean, optional): Show category badge (default: true)
- `showReadingTime` (boolean, optional): Show reading time (default: true)
- `showDate` (boolean, optional): Show publication date (default: true)

### BlogList

Display a list of blog posts:

```tsx
import { BlogList } from '@haroonwaves/blog-kit-react';

function BlogListExample({ blogs }) {
	return <BlogList blogs={blogs} basePath="/blog" emptyMessage="No posts found." />;
}
```

**Props:**

- `blogs` (BlogMetadata[], required): Array of blog metadata
- `basePath` (string, optional): Base path for blog links (default: '/blog')
- `renderLink` (function, optional): Custom link renderer
- `className` (string, optional): Additional CSS classes
- `emptyMessage` (string, optional): Message when no blogs (default: 'No blog posts found.')
- `cardProps` (object, optional): Props to pass to each BlogCard

### BlogPlaceholder

Show loading placeholders while blogs are loading:

```tsx
import { BlogPlaceholder } from '@haroonwaves/blog-kit-react';

function LoadingBlogs() {
	return <BlogPlaceholder count={3} />;
}
```

**Props:**

- `count` (number, optional): Number of placeholder cards (default: 3)
- `className` (string, optional): Additional CSS classes

## Hooks

### useBlogs

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

**Returns:**

- `blogs` (BlogMetadata[]): Filtered blog posts
- `searchTerm` (string): Current search term
- `setSearchTerm` (function): Update search term
- `selectedCategory` (string | null): Selected category filter
- `setSelectedCategory` (function): Update category filter
- `categories` (string[]): Available categories from blogs

## Complete Example

Here's a complete example using both packages:

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

## Next.js Integration

For Next.js projects, use a custom link renderer:

```tsx
import Link from 'next/link';
import { BlogCard } from '@haroonwaves/blog-kit-react';

function NextBlogCard({ blog }) {
	return (
		<BlogCard
			blog={blog}
			basePath="/blog"
			renderLink={(href, children) => <Link href={href}>{children}</Link>}
		/>
	);
}
```

## Styling

The components use Tailwind CSS classes. Make sure you have [Tailwind CSS](https://tailwindcss.com/)
configured in your project.

The package also includes Prism.js CSS for syntax highlighting. Import it in your app:

```tsx
import '@haroonwaves/blog-kit-react/dist/index.css';
```

Or if you're using a bundler that supports CSS imports, it will be included automatically.

## Features

- ✅ Beautiful, customizable markdown rendering
- ✅ Syntax highlighting for code blocks (Prism.js)
- ✅ GitHub Flavored Markdown (GFM) support
- ✅ Responsive blog card components
- ✅ Search and filter functionality via `useBlogs` hook
- ✅ Loading placeholders
- ✅ Customizable styling with Tailwind CSS classes
- ✅ TypeScript support with full type definitions
- ✅ Works with any routing library (Next.js, Remix, etc.)

## Requirements

- React 18+
- Tailwind CSS (for styling)

## License

ISC

## Related Packages

- [@haroonwaves/blog-kit-core](https://www.npmjs.com/package/@haroonwaves/blog-kit-core) - Core
  utilities for parsing markdown files
