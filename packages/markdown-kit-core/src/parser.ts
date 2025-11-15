import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogMetadata, BlogData, BlogKitConfig } from './types';

export function getAllBlogs(config: BlogKitConfig): BlogMetadata[] {
	try {
		const blogDirectory = path.join(config.contentDirectory, config.blogSubdirectory || 'blog');

		if (!fs.existsSync(blogDirectory)) {
			console.warn(`Blog directory not found: ${blogDirectory}`);
			return [];
		}

		const files = fs.readdirSync(blogDirectory);

		const blogs = files
			.filter((file) => file.endsWith('.md'))
			.map((file) => {
				const slug = file.replace('.md', '');
				const filePath = path.join(blogDirectory, file);
				const fileContent = fs.readFileSync(filePath, 'utf8');
				const { data, content } = matter(fileContent);

				const readingTimeText = readingTime(content).text;

				return {
					slug,
					...data,
					readingTime: readingTimeText,
				} as BlogMetadata;
			})
			.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			});

		return blogs;
	} catch (error) {
		console.error('Error reading blog directory:', error);
		return [];
	}
}

export function getBlogData(slug: string, config: BlogKitConfig): BlogData | null {
	try {
		const blogDirectory = path.join(config.contentDirectory, config.blogSubdirectory || 'blog');
		const filePath = path.join(blogDirectory, `${slug}.md`);

		if (!fs.existsSync(filePath)) {
			return null;
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		const { data, content } = matter(fileContent);

		const readingTimeText = readingTime(content).text;

		return {
			metadata: {
				...(data as Omit<BlogMetadata, 'slug'>),
				slug,
			},
			content,
			readingTime: readingTimeText,
		};
	} catch (error) {
		console.error(`Error reading blog file for slug: ${slug}`, error);
		return null;
	}
}

export function getBlogContent(slug: string, config: BlogKitConfig): string {
	const blogData = getBlogData(slug, config);
	return blogData?.content || '';
}
