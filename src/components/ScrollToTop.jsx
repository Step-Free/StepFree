import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white shadow-lg hover:bg-primary/80"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-8 h-8 text-white" />
    </Button>
  );
};
