export interface BlogMetadata {
	title: string;
	description: string;
	date: string;
	category?: string;
	slug: string;
	readingTime: string;
}

export interface BlogData {
	metadata: BlogMetadata;
	content: string;
	readingTime: string;
}

export interface BlogKitConfig {
	contentDirectory: string;
	blogSubdirectory?: string; // defaults to 'blog'
}
