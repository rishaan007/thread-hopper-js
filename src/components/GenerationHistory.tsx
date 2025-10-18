import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function GenerationHistory() {
  // This will be implemented later with actual history data
  return (
    <Card className="p-6 shadow-card border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-muted-foreground" />
        <h3 className="text-lg font-semibold">Recent Generations</h3>
      </div>
      <div className="text-center py-8 text-muted-foreground">
        <p>Your recent generations will appear here</p>
      </div>
    </Card>
  );
}
