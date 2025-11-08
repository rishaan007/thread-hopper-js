import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const team = [
	{
		name: "Rishaan",
		role: "Founder & Lead Developer",
		avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Rishaan",
	},
	{
		name: "Nandan",
		role: "AI Engineer",
		avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Nandan",
	},
	{
		name: "Aarav",
		role: "UI/UX Designer",
		avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Aarav",
	},
	{
		name: "Priya",
		role: "Digital Marketer",
		avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=Priya",
	},
];

export default function About() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
			{/* Animated floating background orbs */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.3 }}
				transition={{ duration: 1 }}
				className="absolute inset-0 z-0 pointer-events-none"
			>
				<motion.div
					animate={{ y: [0, 30, 0] }}
					transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
					className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary to-pink-500 rounded-full blur-3xl animate-pulse"
				/>
				<motion.div
					animate={{ y: [0, -30, 0] }}
					transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
					className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl animate-pulse"
				/>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="max-w-3xl w-full glass-panel p-10 rounded-3xl shadow-lg text-center z-10 border-2 border-gradient-to-br from-primary to-pink-500"
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex items-center justify-center gap-3 mb-6"
				>
					<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center animate-spin-slow shadow-lg">
						<Sparkles className="w-6 h-6 text-white" />
					</div>
					<span className="text-3xl font-bold gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
						ThreadHopper
					</span>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-4xl font-bold mb-4 gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
				>
					About Us
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-lg text-muted-foreground mb-8"
				>
					ThreadHopper is an AI-powered platform designed to help content creators
					transform their ideas, blogs, and articles into engaging social media
					posts for Twitter, LinkedIn, Reddit, and Instagram. Our mission is to
					empower creators with smart tools that save time and maximize impact.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mb-8"
				>
					<h2 className="text-2xl font-semibold mb-2 gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
						Our Story
					</h2>
					<p className="text-base text-muted-foreground">
						Founded by a passionate team of developers and marketers, ThreadHopper
						was born out of the need to simplify social media content creation. We
						believe in the power of AI to unlock creativity and help everyone share
						their voice with the world.
					</p>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
					className="mb-8"
				>
					<h2 className="text-2xl font-semibold mb-4 gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
						Meet the Team
					</h2>
					<div className="flex flex-wrap justify-center gap-6">
						{team.map((member, i) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
								whileHover={{
									scale: 1.09,
									boxShadow: "0 0 24px 4px #ec4899",
								}}
								className="bg-card/80 border-2 border-gradient-to-br from-primary to-pink-500 rounded-2xl p-4 w-48 flex flex-col items-center shadow-md hover:shadow-glow transition-all glass-panel"
							>
								<img
									src={member.avatar}
									alt={member.name}
									className="w-16 h-16 rounded-full mb-2 border-2 border-primary shadow-lg"
								/>
								<span className="font-semibold text-lg gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent mb-1">
									{member.name}
								</span>
								<span className="text-sm text-muted-foreground">
									{member.role}
								</span>
							</motion.div>
						))}
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
				>
					<h2 className="text-2xl font-semibold mb-2 gradient-text bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
						Contact & Community
					</h2>
					<p className="text-base text-muted-foreground mb-4">
						Having questions or feedback? Connect with us on social media or join
						our community to stay updated and collaborate with fellow creators.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener"
							className="px-4 py-2 rounded-full bg-blue-500/10 border-2 border-blue-500/40 text-blue-500 font-medium hover:bg-blue-500/20 hover:scale-105 transition-all shadow-md"
						>
							Twitter
						</a>
						<a
							href="https://linkedin.com/"
							target="_blank"
							rel="noopener"
							className="px-4 py-2 rounded-full bg-blue-600/10 border-2 border-blue-600/40 text-blue-600 font-medium hover:bg-blue-600/20 hover:scale-105 transition-all shadow-md"
						>
							LinkedIn
						</a>
						<a
							href="https://instagram.com/"
							target="_blank"
							rel="noopener"
							className="px-4 py-2 rounded-full bg-pink-500/10 border-2 border-pink-500/40 text-pink-500 font-medium hover:bg-pink-500/20 hover:scale-105 transition-all shadow-md"
						>
							Instagram
						</a>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

// Add this to your CSS for slow spin animation:
// .animate-spin-slow { animation: spin 4s linear infinite; }
