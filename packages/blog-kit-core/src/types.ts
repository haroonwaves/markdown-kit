export interface BlogMeta {
	title: string;
	description: string;
	date: string;
	category?: string;
	slug: string;
	readingTime: string;
}

export interface Blog {
	metadata: BlogMeta;
	content: string;
}

export interface BlogConfig {
	contentDirectory: string;
	blogSubdirectory?: string; // defaults to 'blog'
}
