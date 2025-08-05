import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Zap, Crown } from "lucide-react";

const Subscription = () => {
  const plans = [
    {
      name: "Basic Protection",
      price: "$4.99",
      period: "/month",
      description: "Essential AI cybersecurity for small businesses",
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: [
        "AI Threat Detection",
        "Real-time Monitoring",
        "Email Alerts",
        "Basic Reporting",
        "5 Devices Coverage"
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional Shield",
      price: "$14.99",
      period: "/month",
      description: "Advanced protection for growing businesses",
      icon: <Zap className="h-8 w-8 text-secondary" />,
      features: [
        "Everything in Basic",
        "Advanced AI Analytics",
        "24/7 Phone Support",
        "Custom Reports",
        "25 Devices Coverage",
        "Priority Response"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise Fortress",
      price: "$49.99",
      period: "/month",
      description: "Complete cybersecurity suite for enterprises",
      icon: <Crown className="h-8 w-8 text-primary" />,
      features: [
        "Everything in Professional",
        "Dedicated AI Analyst",
        "Custom Integration",
        "Unlimited Devices",
        "White-label Reporting",
        "SLA Guarantee",
        "On-site Training"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Choose Your</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-4">
                Protection Level
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Flexible cybersecurity plans powered by AI to fit your organization's needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card border-border hover:shadow-cyber transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-glow-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-muted rounded-lg">
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-lg text-muted-foreground ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow-primary' 
                        : 'bg-gradient-secondary hover:shadow-glow-secondary'
                    } transition-all duration-300`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why AI Hunter Sentinel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI cybersecurity features that adapt and evolve with emerging threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                99.9% Detection Rate
              </h3>
              <p className="text-muted-foreground">
                Industry-leading AI accuracy in threat identification
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Zap className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Real-time Response
              </h3>
              <p className="text-muted-foreground">
                Instant threat neutralization and protection
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Crown className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Enterprise Grade
              </h3>
              <p className="text-muted-foreground">
                Scalable solutions for organizations of all sizes
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Check className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Trusted by thousands of organizations worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cyber">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Start Your Protection Today
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Don't wait for a cyber attack. Protect your organization with AI Hunter Sentinel starting at just $4.99/month
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 shadow-lg"
          >
            Get Started Now
            <Shield className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;