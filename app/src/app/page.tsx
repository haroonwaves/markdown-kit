import Link from 'next/link';
import { BookOpen, Zap, Code2, Palette, ArrowRight, Github } from 'lucide-react';

export default function HomePage() {
	return (
		<div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
			{/* Hero Section */}
			<section className="relative overflow-hidden px-6 pt-20 pb-16 md:pt-32 md:pb-24">
				{/* Animated background gradient */}
				<div className="absolute inset-0 -z-10 opacity-30">
					<div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse delay-1000" />
				</div>

				<div className="mx-auto max-w-5xl text-center">
					{/* Logo */}
					<div className="mb-8 flex justify-center animate-fade-in-up">
						<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
							<BookOpen className="h-10 w-10 text-primary-foreground" />
						</div>
					</div>

					{/* Heading */}
					<h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl animate-fade-in-up delay-100">
						<span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
							Blog Kit
						</span>
					</h1>

					{/* Subheading */}
					<p className="mb-12 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto animate-fade-in-up delay-200">
						A modern, TypeScript-first toolkit for building markdown-based blog systems with minimal
						configuration.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
						<Link
							href="/docs"
							className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
						>
							Get Started
							<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
						<a
							href="https://github.com/haroonwaves/blog-kit"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
						>
							<Github className="h-5 w-5" />
							View on GitHub
						</a>
					</div>
				</div>
			</section>

			{/* Use Cases Section */}
			<section className="px-6 py-16 md:py-24 bg-muted/30">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Perfect For</h2>
					<p className="mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
						Whether you&apos;re building for yourself or your team, Blog Kit adapts to your needs
					</p>

					<div className="grid gap-6 md:grid-cols-3">
						{/* Use Case 1 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:scale-105">
							<div className="mb-4 text-4xl">📝</div>
							<h3 className="mb-3 text-xl font-semibold">Personal Blogs</h3>
							<p className="text-muted-foreground">
								Share your thoughts, tutorials, and experiences with a beautiful, fast blog
								that&apos;s easy to maintain.
							</p>
						</div>

						{/* Use Case 2 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:scale-105">
							<div className="mb-4 text-4xl">📚</div>
							<h3 className="mb-3 text-xl font-semibold">Documentation Sites</h3>
							<p className="text-muted-foreground">
								Create comprehensive documentation for your projects with organized navigation and
								search.
							</p>
						</div>

						{/* Use Case 3 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:scale-105">
							<div className="mb-4 text-4xl">🚀</div>
							<h3 className="mb-3 text-xl font-semibold">Content Platforms</h3>
							<p className="text-muted-foreground">
								Build scalable content platforms with TypeScript safety and modern tooling.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="px-6 py-16 md:py-24">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Why Choose Blog Kit?</h2>
					<p className="mb-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
						Skip the complexity of markdown parsing, syntax highlighting, and UI components. Blog
						Kit handles it all for you.
					</p>

					<div className="grid gap-6 md:grid-cols-3">
						{/* Feature 1 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 animate-fade-in-up delay-400">
							<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Zap className="h-7 w-7" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Zero Configuration</h3>
								<p className="text-muted-foreground">
									Works out of the box with sensible defaults. Start building immediately without
									complex setup.
								</p>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 animate-fade-in-up delay-500">
							<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Code2 className="h-7 w-7" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">TypeScript First</h3>
								<p className="text-muted-foreground">
									Full type safety and IntelliSense support for a superior developer experience.
								</p>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl hover:scale-105 animate-fade-in-up delay-600">
							<div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
							<div className="relative">
								<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Palette className="h-7 w-7" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Production Ready</h3>
								<p className="text-muted-foreground">
									Battle-tested components with dark mode support and polished user experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer CTA */}
			<section className="px-6 py-16 md:py-24">
				<div className="mx-auto max-w-4xl text-center">
					<div className="rounded-3xl border border-border bg-linear-to-br from-card to-muted/20 p-12 shadow-xl">
						<h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
						<p className="mb-8 text-lg text-muted-foreground">
							Explore the documentation and start building your next blog or documentation site
							today.
						</p>
						<Link
							href="/docs"
							className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
						>
							Browse Documentation
							<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
