import { useState, useEffect } from 'react';
import type { BlogMeta } from '../types';

export function useBlogs(blogsMeta: BlogMeta[]) {
	const [filteredBlogs, setFilteredBlogs] = useState(blogsMeta);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
			filtered = filtered.filter((blog) => blog.category === selectedCategory);
		}

		setFilteredBlogs(filtered);
	}, [blogsMeta, searchTerm, selectedCategory]);

	const categories = Array.from(
		new Set(blogsMeta.map((blog) => blog.category).filter(Boolean))
	) as string[];

	return {
		metadata: filteredBlogs,
		searchTerm,
		setSearchTerm,
		selectedCategory,
		setSelectedCategory,
		categories,
	};
}
