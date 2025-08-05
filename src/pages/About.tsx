import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Security First",
      description: "Every decision we make prioritizes the security and protection of our clients' digital assets."
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Client-Focused",
      description: "We build lasting relationships by delivering exceptional service and support to every client."
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Innovation",
      description: "We constantly evolve our AI technology to stay ahead of emerging cyber threats."
    },
    {
      icon: <Award className="h-12 w-12 text-secondary" />,
      title: "Excellence",
      description: "We maintain the highest standards in cybersecurity protection and service delivery."
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
              <span className="text-foreground">About</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-4">
                AI Hunter Sentinel
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Leading the future of cybersecurity with artificial intelligence and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                At AI Hunter Sentinel, we believe that cybersecurity should be intelligent, 
                proactive, and accessible to organizations of all sizes. Our mission is to 
                protect the digital world through cutting-edge artificial intelligence that 
                learns, adapts, and evolves with emerging threats.
              </p>
              <p className="text-lg text-muted-foreground">
                We're not just another cybersecurity company – we're pioneers in AI-driven 
                protection, combining advanced machine learning algorithms with real-time 
                threat intelligence to create an impenetrable digital shield for your organization.
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="bg-card border-border shadow-cyber p-8">
                <CardContent className="text-center">
                  <div className="mb-6">
                    <Shield className="h-24 w-24 text-primary mx-auto animate-glow-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    99.9% Threat Detection
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI achieves industry-leading accuracy in identifying and neutralizing cyber threats
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AI Hunter Sentinel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-cyber transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expert Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team consists of cybersecurity experts, AI researchers, and software engineers 
              who are passionate about protecting the digital world. With decades of combined 
              experience in cybersecurity and artificial intelligence, we're constantly pushing 
              the boundaries of what's possible in threat detection and prevention.
            </p>
            <div className="bg-gradient-cyber p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-background mb-4">
                Why Choose AI Hunter Sentinel?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-background/90">
                <div>
                  <h4 className="font-semibold mb-2">Advanced AI Technology</h4>
                  <p className="text-sm">Cutting-edge machine learning algorithms</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">24/7 Protection</h4>
                  <p className="text-sm">Round-the-clock monitoring and response</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proven Results</h4>
                  <p className="text-sm">Trusted by organizations worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;