import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg border border-border shadow-cyber">
      <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
        Leave us a message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px] resize-none bg-input border-border focus:border-primary focus:ring-primary"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
        >
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;