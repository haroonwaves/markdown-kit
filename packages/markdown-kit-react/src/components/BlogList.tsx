import { BlogCard, BlogCardProps } from './BlogCard';
import type { BlogMetadata } from '../types';

export interface BlogListProps {
	blogs: BlogMetadata[];
	basePath?: string;
	renderLink?: BlogCardProps['renderLink'];
	className?: string;
	emptyMessage?: string;
	cardProps?: Omit<BlogCardProps, 'blog' | 'basePath' | 'renderLink'>;
}

export function BlogList({
	blogs,
	basePath = '/blog',
	renderLink,
	className = '',
	emptyMessage = 'No blog posts found.',
	cardProps,
}: BlogListProps) {
	if (blogs.length === 0) {
		return <div className={`text-center text-gray-500 py-12 ${className}`}>{emptyMessage}</div>;
	}

	return (
		<div className={`space-y-6 ${className}`}>
			{blogs.map((blog) => (
				<BlogCard
					key={blog.slug}
					blog={blog}
					basePath={basePath}
					renderLink={renderLink}
					{...cardProps}
				/>
			))}
		</div>
	);
}
