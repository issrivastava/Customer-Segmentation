import { Users, TrendingUp, Brain } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "Automatically categorize customers based on behavior, demographics, and purchase patterns",
  },
  {
    icon: TrendingUp,
    title: "RFM Analysis",
    description: "Recency, Frequency, Monetary analysis to identify your most valuable customers",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get actionable recommendations to improve customer retention and growth",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl border border-border/50 backdrop-blur-glass bg-card/30 hover:shadow-card transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}