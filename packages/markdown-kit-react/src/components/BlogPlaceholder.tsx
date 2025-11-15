export interface BlogPlaceholderProps {
	count?: number;
	className?: string;
}

export function BlogPlaceholder({ count = 3, className = '' }: BlogPlaceholderProps) {
	return (
		<div className={`space-y-6 ${className}`}>
			{Array.from({ length: count }).map((_, i) => (
				<div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
					<div className="h-4 bg-gray-200 rounded mb-3"></div>
					<div className="h-6 bg-gray-200 rounded mb-2"></div>
					<div className="h-4 bg-gray-200 rounded w-3/4"></div>
				</div>
			))}
		</div>
	);
}
