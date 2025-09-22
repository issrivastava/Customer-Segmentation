import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import FileUpload from "@/components/FileUpload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DashboardPreview />
      <Features />
      <FileUpload />
    </div>
  );
};

export default Index;