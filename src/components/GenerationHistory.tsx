import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function GenerationHistory() {
  // This will be implemented later with actual history data
  return (
    <Card className="p-6 shadow-card border-border/50 bg-card/70 backdrop-blur-md hover:shadow-glow transition-all duration-300 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-primary animate-float" />
        <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Recent Generations</h3>
      </div>
      <div className="text-center py-8 text-muted-foreground">
        <p className="animate-pulse">Your recent generations will appear here</p>
      </div>
    </Card>
  );
}
