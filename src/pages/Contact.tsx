import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      content: "info@aihuntersentinel.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Address",
      content: "San Francisco, CA",
      description: "Our headquarters location"
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Business Hours",
      content: "Mon-Fri 9AM-6PM PST",
      description: "We're here when you need us"
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
              <span className="text-foreground">Contact</span>
              <span className="bg-gradient-cyber bg-clip-text text-transparent ml-4">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our cybersecurity experts and let us protect your digital future
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have questions about our AI cybersecurity solutions? We'd love to hear from you. 
                  Send us a message and we'll respond as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ready to enhance your cybersecurity? Our team is here to help you understand 
                  how AI Hunter Sentinel can protect your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-cyber transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-muted rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about AI Hunter Sentinel cybersecurity solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How does AI threat detection work?
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI uses machine learning algorithms to analyze patterns and behaviors 
                    in real-time, identifying potential threats before they can cause damage.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    What makes AI Hunter Sentinel different?
                  </h3>
                  <p className="text-muted-foreground">
                    We combine advanced AI technology with cybersecurity expertise to provide 
                    proactive protection that learns and adapts to new threats.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Is there 24/7 support available?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, our cybersecurity monitoring operates 24/7, and our support team 
                    is available during business hours with emergency contact options.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    How quickly can I get started?
                  </h3>
                  <p className="text-muted-foreground">
                    Setup is typically completed within 24-48 hours after subscription. 
                    Our team will guide you through the entire process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;