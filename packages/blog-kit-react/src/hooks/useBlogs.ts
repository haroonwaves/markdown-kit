import { useState, useEffect } from 'react';
import type { BlogMeta } from '../types';

export function useBlogs(blogsMeta: BlogMeta[]) {
	const [filteredBlogs, setFilteredBlogs] = useState(blogsMeta);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const getBlogCategories = (blog: BlogMeta): string[] => {
		return blog.categories ?? [];
	};

	useEffect(() => {
		let filtered = blogsMeta;

		if (searchTerm) {
			filtered = filtered.filter(
				(blog) =>
					blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					blog.description.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (selectedCategory) {
			filtered = filtered.filter((blog) => {
				const blogCategories = getBlogCategories(blog);
				return blogCategories.includes(selectedCategory);
			});
		}

		setFilteredBlogs(filtered);
	}, [blogsMeta, searchTerm, selectedCategory]);

	const categories = Array.from(new Set(blogsMeta.flatMap((blog) => getBlogCategories(blog))));

	return {
		metadata: filteredBlogs,
		searchTerm,
		setSearchTerm,
		selectedCategory,
		setSelectedCategory,
		categories,
	};
}
