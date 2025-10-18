import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Check, Twitter, Linkedin, MessageSquare, Edit2, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OutputDisplayProps {
  content: {
    twitter: string;
    linkedin: string;
    reddit: string;
    instagram: string;
  };
}

export function OutputDisplay({ content }: OutputDisplayProps) {
  const [activeTab, setActiveTab] = useState("twitter");
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPlatform(platform);
      toast({
        title: "Copied!",
        description: `${platform} post copied to clipboard`,
      });
      setTimeout(() => setCopiedPlatform(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const platforms = [
    {
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-700/20",
    },
    {
      id: "reddit",
      name: "Reddit",
      icon: MessageSquare,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
  ];

  return (
    <Card className="p-8 shadow-card animate-slide-up border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Generated Posts</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {isEditing ? "Done Editing" : "Edit"}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 p-1">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="flex items-center gap-2"
                >
                  <Icon className={`w-4 h-4 ${platform.color}`} />
                  {platform.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent key={platform.id} value={platform.id} className="space-y-4">
              <div className={`p-6 rounded-lg border ${platform.borderColor} ${platform.bgColor}`}>
                {isEditing ? (
                  <Textarea
                    value={editedContent[platform.id as keyof typeof editedContent]}
                    onChange={(e) =>
                      setEditedContent({
                        ...editedContent,
                        [platform.id]: e.target.value,
                      })
                    }
                    className="min-h-[200px] resize-none"
                  />
                ) : (
                  <div className="whitespace-pre-wrap text-base leading-relaxed">
                    {editedContent[platform.id as keyof typeof editedContent]}
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() =>
                    copyToClipboard(
                      editedContent[platform.id as keyof typeof editedContent],
                      platform.name
                    )
                  }
                  className="flex-1"
                  variant="outline"
                >
                  {copiedPlatform === platform.name ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Card>
  );
}
