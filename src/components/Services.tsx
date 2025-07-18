import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Cpu, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Complete web application development from concept to deployment. Specializing in React, Flask, and modern JavaScript frameworks.",
      features: [
        "Responsive Web Design",
        "RESTful API Development",
        "Database Design & Integration",
        "Performance Optimization",
        "Modern UI/UX Implementation"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design Systems",
        "Mobile App Design"
      ],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Systems & IoT",
      description: "Developing smart devices and IoT solutions using Arduino, ESP32, STM32, and Raspberry Pi platforms.",
      features: [
        "IoT Device Development",
        "Sensor Integration",
        "Wireless Communication",
        "Data Analytics",
        "Hardware Prototyping"
      ],
      gradient: "bg-gradient-primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            What I Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs, from web development 
            to innovative IoT implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-background/50 backdrop-blur-sm border-0 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero text-white border-0 shadow-glow">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into innovative solutions. 
                I'm here to help you build something amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Start a Project
                  <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <a href="mailto:hishammohd313@gmail.com">
                    Send an Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;