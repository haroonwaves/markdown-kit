import { getAllBlogsMeta, getBlog } from '@haroonwaves/blog-kit-core';
import { BlogRenderer } from '@haroonwaves/blog-kit-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
	const blogsMeta = getAllBlogsMeta({
		contentDirectory: './content',
		blogSubdirectory: 'docs',
	});
	return blogsMeta.map((meta) => ({ slug: meta.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;

	const blog = getBlog(slug, {
		contentDirectory: './content',
		blogSubdirectory: 'docs',
	});

	if (!blog) {
		return {
			title: 'Documentation Not Found',
			description: 'The requested documentation page could not be found.',
		};
	}

	const baseKeywords = [
		'blog kit documentation',
		'build a blog',
		'markdown blog',
		'blog tutorial',
		'create blog',
		'blog framework',
		'TypeScript blog',
	];

	return {
		title: `${blog.metadata.title} - Blog Kit Documentation`,
		description:
			blog.metadata.description ||
			`Learn how to ${blog.metadata.title.toLowerCase()} with Blog Kit. Complete guide for building your own blog with markdown and TypeScript.`,
		keywords: [...baseKeywords, blog.metadata.title.toLowerCase()],
		openGraph: {
			title: `${blog.metadata.title} - Blog Kit Documentation`,
			description:
				blog.metadata.description ||
				`Learn how to ${blog.metadata.title.toLowerCase()} with Blog Kit.`,
			type: 'article',
			publishedTime: blog.metadata.date,
			url: `https://blog-kit.haroonwaves.com/docs/${slug}`,
			siteName: 'Blog Kit',
		},
		twitter: {
			card: 'summary',
			title: `${blog.metadata.title} - Blog Kit`,
			description:
				blog.metadata.description ||
				`Learn how to ${blog.metadata.title.toLowerCase()} with Blog Kit.`,
		},
		alternates: {
			canonical: `https://blog-kit.haroonwaves.com/docs/${slug}`,
		},
	};
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const blog = getBlog(slug, {
		contentDirectory: './content',
		blogSubdirectory: 'docs',
	});

	if (!blog) notFound();

	return (
		<article className="space-y-8">
			<BlogRenderer
				content={blog.content}
				metadata={blog.metadata}
				showDate={false}
				showReadingTime={false}
				showCategory={false}
			/>
		</article>
	);
}
