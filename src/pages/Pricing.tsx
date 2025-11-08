import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const plans = [
	{
		name: "Go",
		price: "₹399",
		currentPrice: "₹0",
		description:
			"Get started with AI-powered social content creation for all major platforms.",
		features: [
			"Generate posts for X (Twitter), Instagram, LinkedIn, and Reddit",
			"Basic AI content transformation",
			"Choose from multiple tones",
			"Preview posts before sharing",
			"Access to standard templates",
			"Community support",
		],
		button: "Your current plan",
		highlight: false,
		subtext: "until Nov 4, 2026",
	},
	{
		name: "Plus",
		price: "₹1,999",
		currentPrice: null,
		description:
			"Unlock advanced features for content creators and marketers.",
		features: [
			"Advanced AI for optimized posts",
			"Platform-specific formatting and hashtags",
			"Save and manage multiple drafts",
			"Priority support",
			"Access to premium templates",
			"Analytics for post performance",
			"Team collaboration tools",
		],
		button: "Get Plus",
		highlight: true,
		subtext: null,
	},
	{
		name: "Pro",
		price: "₹19,900",
		currentPrice: null,
		description:
			"Maximize productivity for agencies and businesses.",
		features: [
			"Bulk content generation for campaigns",
			"Custom AI models for your brand",
			"Advanced analytics and reporting",
			"Dedicated account manager",
			"API access for automation",
			"Early access to new features",
			"Enterprise-level security",
			"Priority onboarding and training",
		],
		button: "Get Pro",
		highlight: false,
		subtext: null,
	},
];

export default function Pricing() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="max-w-6xl w-full glass-panel p-10 rounded-3xl shadow-lg text-center"
			>
				<div className="flex items-center justify-center gap-3 mb-8">
					<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
						<Sparkles className="w-6 h-6 text-white" />
					</div>
					<span className="text-3xl font-bold gradient-text">
						ThreadHopper Pricing
					</span>
				</div>
				<h1 className="text-4xl font-bold mb-6">Upgrade your plan</h1>
				<div className="flex justify-center gap-8 flex-wrap">
					{plans.map((plan, idx) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
							className={`flex-1 min-w-[300px] max-w-[350px] bg-card/80 border-2 rounded-2xl p-8 shadow-lg glass-panel ${
								plan.highlight
									? "border-pink-500"
									: "border-white/10"
							}`}
						>
							<div className="mb-4">
								<span className="text-2xl font-bold gradient-text">
									{plan.name}
								</span>
							</div>
							<div className="flex items-baseline gap-2 mb-2">
								{plan.currentPrice ? (
									<>
										<span className="text-lg line-through text-muted-foreground">
											{plan.price}
										</span>
										<span className="text-3xl font-bold text-green-500">
											{plan.currentPrice}
										</span>
									</>
								) : (
									<span className="text-3xl font-bold text-primary">
										{plan.price}
									</span>
								)}
							</div>
							{plan.subtext && (
								<div className="text-xs text-muted-foreground mb-2">
									{plan.subtext}
								</div>
							)}
							<div className="font-medium mb-4">{plan.description}</div>
							<ul className="text-left mb-6 space-y-2">
								{plan.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-sm text-muted-foreground"
									>
										<span className="text-pink-500">✦</span> {feature}
									</li>
								))}
							</ul>
							<button
								className="w-full py-2 rounded-xl font-semibold transition-all bg-gradient-to-r from-primary via-pink-500 to-blue-500 text-white shadow-glow hover:scale-105"
								disabled={!!plan.currentPrice}
							>
								{plan.button}
							</button>
						</motion.div>
					))}
				</div>
				<div className="text-xs text-muted-foreground mt-8">
					Only available in certain regions.{" "}
					<a href="#" className="underline">
						Limits apply
					</a>
				</div>
			</motion.div>
		</div>
	);
}
