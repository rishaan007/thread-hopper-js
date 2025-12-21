import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ClipboardButtonProps {
  textToCopy: string;
  className?: string;
}

export function ClipboardButton({
  textToCopy,
  className,
}: ClipboardButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      // Reset back to "Copy" icon after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={cn(
        "flex-1 hover:scale-105 active:scale-95 transition-transform bg-background/50 border-white/10",
        className
      )}
    >
      {isCopied ? (
        <>
          <Check className="w-4 h-4 mr-2 text-green-500 animate-pulse" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          Copy to Clipboard
        </>
      )}
    </Button>
  );
}
