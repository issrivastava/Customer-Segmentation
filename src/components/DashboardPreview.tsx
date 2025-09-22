import { useEffect, useRef } from "react";

export default function DashboardPreview() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add floating animation to decorative elements
    const elements = canvasRef.current?.querySelectorAll('.float-element');
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative" ref={canvasRef}>
          {/* Decorative 3D elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-secondary rounded-full blur-3xl opacity-30 float-element animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-20 float-element animate-pulse" />
          
          {/* Dashboard preview card */}
          <div className="relative bg-gradient-card backdrop-blur-glass rounded-3xl p-1 shadow-card">
            <div className="bg-card/50 backdrop-blur-glass rounded-3xl p-8">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary" />
                  <div>
                    <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                    <div className="h-3 w-24 bg-muted/50 rounded mt-2 animate-pulse" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-20 h-8 bg-primary/20 rounded-lg animate-pulse" />
                  <div className="w-20 h-8 bg-muted rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Mock stats grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Total Customers", value: "1,238,265.25", color: "bg-gradient-secondary" },
                  { label: "Conversion Rate", value: "15.82%", color: "bg-primary/20" },
                  { label: "Churn Rate", value: "2013", color: "bg-secondary/20" },
                ].map((stat, index) => (
                  <div key={index} className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className={`h-2 ${stat.color} rounded-full mt-4 animate-pulse`} />
                  </div>
                ))}
              </div>

              {/* Mock chart area */}
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-border/30">
                <div className="h-64 flex items-center justify-center">
                  <div className="space-y-4 w-full">
                    <div className="flex items-end justify-around h-48">
                      {[60, 80, 45, 90, 70, 85, 55, 75].map((height, index) => (
                        <div
                          key={index}
                          className="w-8 bg-gradient-secondary rounded-t animate-pulse"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="h-px bg-border/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}