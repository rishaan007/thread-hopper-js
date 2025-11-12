import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Twitter, Linkedin, MessageSquare, Instagram, Zap, Target, Wand2, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { OutputDisplay } from "@/components/OutputDisplay";
import { AnimatedOrbs } from "@/components/AnimatedOrbs";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";

interface GeneratedContent {
  twitter: string;
  linkedin: string;
  reddit: string;
  instagram: string;
}

export default function Index() {
  const [content, setContent] = useState("");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!content.trim()) {
      toast({
        title: "Content required",
        description: "Please enter some content to convert",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-social-content', {
        body: { content, tone }
      });

      if (error) throw error;

      setGeneratedContent(data);
      toast({
        title: "Content generated!",
        description: "Your social media posts are ready",
      });
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Generation failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedOrbs />
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass-panel text-sm font-medium">
                ✨ Transform your content into engaging social posts
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Transform Your Content Into
              <br />
              <span className="gradient-text">Engaging Social Posts</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Turn your blog, article, or idea into optimized posts for Twitter, LinkedIn, Reddit, and Instagram with AI-powered intelligence.
            </p>

            {/* Content Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-8 rounded-3xl max-w-3xl mx-auto mt-12 hover:shadow-glow transition-all duration-500"
            >
              <div className="space-y-6">
                <Textarea
                  placeholder="Paste your blog article or write your content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] resize-none text-base bg-background/50 border-white/10 focus:border-primary/50 rounded-2xl"
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger className="bg-background/50 border-white/10 rounded-xl h-12">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="sarcastic">Sarcastic</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    size="lg"
                    className="glow-border bg-gradient-to-r from-primary via-pink-500 to-blue-500 hover:shadow-glow transition-all hover:scale-105 active:scale-95 h-12 px-8 rounded-xl font-semibold"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate Posts
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all hover:scale-105">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-400">Twitter</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 transition-all hover:scale-105">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all hover:scale-105">
                    <MessageSquare className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-medium text-orange-400">Reddit</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 transition-all hover:scale-105">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span className="text-sm font-medium text-pink-400">Instagram</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for <span className="gradient-text">Content Creators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform your content into engaging social media posts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Zap}
              title="AI-Powered Copy"
              description="Advanced AI analyzes your content and generates platform-optimized posts that resonate with your audience."
              index={0}
            />
            <FeatureCard
              icon={Target}
              title="Smart Tone Detection"
              description="Automatically detects and adapts your content's tone to match your brand voice across all platforms."
              index={1}
            />
            <FeatureCard
              icon={Wand2}
              title="Platform Optimization"
              description="Each post is optimized for the specific requirements and best practices of Twitter, LinkedIn, Reddit, and Instagram."
              index={2}
            />
            <FeatureCard
              icon={Eye}
              title="Instant Preview"
              description="See exactly how your posts will look on each platform before you publish them."
              index={3}
            />
          </div>
        </section>

        {/* Output Display */}
        {generatedContent && (
          <section className="container mx-auto px-4 py-12">
            <OutputDisplay content={generatedContent} />
          </section>
        )}

        {/* Footer */}
        <footer className="border-t border-white/5 mt-32">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">ThreadHopper</span>
              </div>

              <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
                <a href="/pricing" className="hover:text-primary transition-colors">Pricing</a>
                <a href="/docs" className="hover:text-primary transition-colors">Docs</a>
                <a href="/about" className="hover:text-primary transition-colors">About</a>
              </div>

              <p className="text-sm text-muted-foreground">
                Made with 💜 by ThreadHopper Team
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
