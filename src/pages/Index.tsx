import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Sparkles, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { OutputDisplay } from "@/components/OutputDisplay";
import { GenerationHistory } from "@/components/GenerationHistory";

export default function Index() {
  const [content, setContent] = useState("");
  const [tone, setTone] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
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
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center animate-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              ThreadHopper
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl font-bold tracking-tight">
              Transform Your Content Into
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary-glow bg-clip-text text-transparent">
                Engaging Social Posts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Paste your blog article or write freeform content, and watch it transform into perfectly crafted posts for Twitter, LinkedIn, and Reddit
            </p>
          </div>

          {/* Input Section */}
          <Card className="p-8 shadow-card animate-slide-up border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Content</label>
                <Textarea
                  placeholder="Paste your blog article or write your content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[200px] resize-none text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium">Tone</label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                      <SelectItem value="sarcastic">Sarcastic</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all"
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
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <span className="text-sm text-muted-foreground">Generate for:</span>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <Twitter className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">Twitter</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/20">
                    <Linkedin className="w-4 h-4 text-blue-700" />
                    <span className="text-sm font-medium text-blue-700">LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                    <MessageSquare className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-orange-500">Reddit</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Output Display */}
          {generatedContent && (
            <OutputDisplay content={generatedContent} />
          )}

          {/* History */}
          <GenerationHistory />
        </div>
      </main>
    </div>
  );
}
