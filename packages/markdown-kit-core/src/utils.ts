import readingTime from 'reading-time';

export const getReadingTime = (content: string): string => {
	return readingTime(content).text;
};

export const slugFromFile = (file: string): string => file.replace(/\.md$/, '');
