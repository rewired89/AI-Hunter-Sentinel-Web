import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/contact-form";
import { Shield, Eye, Zap, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Index = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Advanced Threat Detection",
      description: "AI-powered monitoring that identifies and neutralizes threats before they can cause damage."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Real-time Protection",
      description: "Lightning-fast response times with continuous monitoring and instant threat response."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security protocols protecting your most valuable digital assets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AI Hunter Sentinel Cybersecurity" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Protect Your</span>
                <br />
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                AI Hunter Sentinel delivers cutting-edge cybersecurity protection 
                with intelligent threat detection and real-time monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/subscription">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 animate-glow-pulse"
                  >
                    Get Protected Now
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:flex justify-center hidden">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced AI Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation cybersecurity powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-cyber transition-all duration-300 animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-muted rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section (Mobile) */}
      <section className="py-16 lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cyber">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations already protected by AI Hunter Sentinel
          </p>
          <Link to="/subscription">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-lg"
            >
              Start Your Protection
              <Shield className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
