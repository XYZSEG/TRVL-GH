import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { useToast } from "../ui/use-toast";
import { Mail } from "lucide-react";

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: string;
}

const NewsletterSection = ({
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with the latest travel experiences and exclusive offers from Ghana.",
  buttonText = "Subscribe Now",
  backgroundImage = "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f",
}: NewsletterSectionProps) => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email validation and submission
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="relative w-full py-16 bg-background">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <Card className="bg-background/95 backdrop-blur">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">{title}</CardTitle>
            <p className="text-muted-foreground">{description}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    {buttonText}
                  </Button>
                </motion.div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
