import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';

import './prism.css';

export interface MarkdownRendererProps {
	content: string;
	className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
	return (
		<div className={`prose prose-slate max-w-none ${className}`}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw, rehypePrismPlus]}
				components={{
					h1: (props) => <h1 className="text-4xl font-bold mb-4 mt-8" {...props} />,
					h2: (props) => <h2 className="text-3xl font-bold mb-3 mt-6" {...props} />,
					h3: (props) => <h3 className="text-2xl font-semibold mb-2 mt-4" {...props} />,
					p: (props) => <p className="mb-4 leading-7" {...props} />,
					code: ({ inline, className, children, ...props }: any) => {
						if (inline) {
							return (
								<code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm" {...props}>
									{children}
								</code>
							);
						}
						return (
							<code className={className as string} {...props}>
								{children}
							</code>
						);
					},
					pre: (props) => <pre className="mb-4 rounded-lg overflow-x-auto" {...props} />,
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
