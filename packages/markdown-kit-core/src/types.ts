export interface PostMeta {
	title: string;
	description: string;
	date: string;
	category?: string;
	slug: string;
	readingTime: string;
}

export interface PostData {
	metadata: PostMeta;
	content: string;
}
