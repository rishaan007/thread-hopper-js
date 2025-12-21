import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Twitter,
  Linkedin,
  MessageSquare,
  Edit2,
  Instagram,
} from "lucide-react";
// Import the new reusable component
import { ClipboardButton } from "@/components/ClipboardButton";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

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
    <div className="glass-panel p-8 rounded-3xl max-w-5xl mx-auto hover:shadow-glow transition-all duration-300">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold gradient-text">Generated Posts</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="hover:scale-105 transition-transform bg-background/50 border-white/10"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {isEditing ? "Done Editing" : "Edit"}
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 p-1 bg-background/50 border border-white/10">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <Icon className={`w-4 h-4 ${platform.color}`} />
                  {platform.name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent
              key={platform.id}
              value={platform.id}
              className="space-y-4 animate-fade-in"
            >
              <div
                className={`p-6 rounded-2xl border ${platform.borderColor} ${platform.bgColor} backdrop-blur-sm transition-all`}
              >
                {isEditing ? (
                  <Textarea
                    value={
                      editedContent[platform.id as keyof typeof editedContent]
                    }
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
                {/* Replaced the hardcoded button with our new reusable component */}
                <ClipboardButton
                  textToCopy={
                    editedContent[platform.id as keyof typeof editedContent]
                  }
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
