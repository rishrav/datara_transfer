import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Image, Bot, ArrowRight, ExternalLink } from "lucide-react";

const ActionsSection = () => {
  const actions = [
    {
      icon: Database,
      title: "View Dataset with Annotations",
      description: "Explore comprehensive robotics datasets with detailed annotations for training",
      href: "/datasets/annotated",
      variant: "default" as const,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Image,
      title: "View Dataset (Images Only)",
      description: "Access raw image datasets for computer vision model training",
      href: "/datasets/images",
      variant: "secondary" as const,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bot,
      title: "View AI Robotics System",
      description: "Explore our advanced AI robotics training and deployment platform",
      href: "/robotics-system",
      variant: "premium" as const,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Quick Actions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access your robotics training data and AI systems with one click
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{action.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{action.description}</p>
              </div>
              
              <Button 
                variant={action.variant} 
                className="w-full group-hover:scale-105 transition-transform duration-300" 
                size="lg"
              >
                <span>Access Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Links Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="group">
              API Documentation
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button variant="outline" className="group">
              Research Papers
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button variant="outline" className="group">
              Community Forum
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button variant="outline" className="group">
              Enterprise Solutions
              <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;