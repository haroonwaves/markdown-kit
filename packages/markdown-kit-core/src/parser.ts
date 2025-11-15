import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostMeta, PostData } from './types';
import { getReadingTime, slugFromFile } from './utils';

export function getAllPosts(dir: string): PostMeta[] {
	const files = fs.readdirSync(dir);

	return files
		.filter((file: string) => file.endsWith('.md'))
		.map((file: string) => {
			const full = path.join(dir, file);
			const raw = fs.readFileSync(full, 'utf8');
			const { data, content } = matter(raw);

			return {
				slug: slugFromFile(file),
				...data,
				readingTime: getReadingTime(content),
			} as PostMeta;
		})
		.sort((a: PostMeta, b: PostMeta) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(slug: string, dir: string): PostData | null {
	const filePath = path.join(dir, `${slug}.md`);
	if (!fs.existsSync(filePath)) return null;

	const raw = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(raw);

	return {
		metadata: {
			...data,
			slug,
			readingTime: getReadingTime(content),
		} as PostMeta,
		content,
	};
}
