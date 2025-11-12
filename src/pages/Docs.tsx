import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const categories = [
	{ name: "Professional", color: "bg-blue-500/10 border-blue-500/20 text-blue-500" },
	{ name: "Casual", color: "bg-green-500/10 border-green-500/20 text-green-500" },
	{ name: "Friendly", color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500" },
	{ name: "Enthusiastic", color: "bg-pink-500/10 border-pink-500/20 text-pink-500" },
	{ name: "Sarcastic", color: "bg-purple-500/10 border-purple-500/20 text-purple-500" },
	{ name: "Humorous", color: "bg-orange-500/10 border-orange-500/20 text-orange-500" },
];

export default function Docs() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="max-w-4xl w-full glass-panel p-10 rounded-3xl shadow-lg text-left"
			>
				<div className="flex items-center gap-3 mb-8">
					<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
						<Sparkles className="w-6 h-6 text-white" />
					</div>
					<span className="text-3xl font-bold gradient-text">ThreadHopper Docs</span>
				</div>
				<h1 className="text-4xl font-bold mb-6">Documentation</h1>
				<p className="text-lg text-muted-foreground mb-8">
					Welcome to the ThreadHopper documentation! Here you'll find everything you need to get started, integrate, and make the most of our platform.
				</p>
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-2">Content Categories</h2>
					<div className="flex flex-wrap gap-4 mb-4">
						{categories.map((cat) => (
							<div
								key={cat.name}
								className={`px-4 py-2 rounded-xl border font-medium shadow-sm hover:scale-105 transition-all ${cat.color}`}
							>
								{cat.name}
							</div>
						))}
					</div>
					<p className="text-base text-muted-foreground">
						Choose from a variety of tones to match your brand and audience. Each category tailors your content for maximum engagement.
					</p>
				</section>
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
					<ul className="list-disc pl-6 text-base text-muted-foreground">
						<li>Sign up and create your account.</li>
						<li>Paste your content or blog to generate social posts.</li>
						<li>Choose your preferred tone and platform.</li>
						<li>Review and copy your generated posts.</li>
					</ul>
				</section>
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-2">API Reference</h2>
					<p className="text-base text-muted-foreground mb-2">
						Integrate ThreadHopper with your own apps using our API:
					</p>
					<ul className="list-disc pl-6 text-base text-muted-foreground">
						<li>
							Endpoint:{" "}
							<code className="bg-card px-2 py-1 rounded">/api/generate-social-content</code>
						</li>
						<li>
							Method: <code className="bg-card px-2 py-1 rounded">POST</code>
						</li>
						<li>
							Parameters: <code className="bg-card px-2 py-1 rounded">content, tone</code>
						</li>
						<li>
							Response:{" "}
							<code className="bg-card px-2 py-1 rounded">Generated posts for each platform</code>
						</li>
					</ul>
				</section>
				<section className="mb-10">
					<h2 className="text-2xl font-semibold mb-2">FAQs & Support</h2>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="faq1">
							<AccordionTrigger>How do I generate posts for multiple platforms?</AccordionTrigger>
							<AccordionContent>
								Simply paste your content, select the platforms, and click generate. ThreadHopper will create optimized posts for each platform.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="faq2">
							<AccordionTrigger>Can I customize the tone and style?</AccordionTrigger>
							<AccordionContent>
								Yes! Choose from our content categories to match your desired tone and style for every post.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="faq3">
							<AccordionTrigger>Where can I get help or report issues?</AccordionTrigger>
							<AccordionContent>
								Reach out via our support page or join the community for assistance and feedback.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<p className="text-base text-muted-foreground mt-4">
						For more help, contact our support team or join the community.
					</p>
				</section>
			</motion.div>
		</div>
	);
}
