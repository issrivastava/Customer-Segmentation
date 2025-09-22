import { Button } from "./ui/button";
import { Upload, PlayCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDemo = () => {
    // This will be implemented when we add the demo functionality
    console.log("View demo clicked");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-50" />
      
      {/* 3D decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">Unlock Customer</span>
          <br />
          <span className="bg-gradient-text text-transparent bg-clip-text">Insights</span>
          <br />
          <span className="text-foreground">from Your Data</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Transform your raw CSV data into actionable customer segments. Get powerful insights with advanced analytics, RFM analysis, and AI-powered recommendations to grow your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToUpload}
            className="group"
          >
            <Upload className="mr-2 group-hover:animate-bounce" />
            Upload Your Data
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={handleDemo}
          >
            <PlayCircle className="mr-2" />
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}