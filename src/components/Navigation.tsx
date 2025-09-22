import { Button } from "./ui/button";
import { BarChart3 } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Cluster</span>
        </div>
        <Button variant="hero" size="default">
          Get Started
        </Button>
      </div>
    </nav>
  );
}