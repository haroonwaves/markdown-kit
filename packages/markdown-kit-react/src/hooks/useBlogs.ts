import { useState, useEffect } from 'react';
import type { BlogMetadata } from '../types';

export function useBlogs(blogs: BlogMetadata[]) {
	const [filteredBlogs, setFilteredBlogs] = useState(blogs);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	useEffect(() => {
		let filtered = blogs;

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
	}, [blogs, searchTerm, selectedCategory]);

	const categories = Array.from(
		new Set(blogs.map((blog) => blog.category).filter(Boolean))
	) as string[];

	return {
		blogs: filteredBlogs,
		searchTerm,
		setSearchTerm,
		selectedCategory,
		setSelectedCategory,
		categories,
	};
}
