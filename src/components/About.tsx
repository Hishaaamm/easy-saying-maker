import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Education",
      description: "Computer Science Engineer from P.A. College of Engineering"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Leadership",
      description: "President of Embed Club & Technical Lead of GLUG PACE"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      description: "Based in Mangalore, Karnataka, India"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Achievements",
      description: "National-level wins and multiple awards in tech competitions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get to know me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, I strive to create solutions 
            that make a difference in the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Building the Future with Code</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm K Mohammad Hisham, a passionate Computer Science Engineer from Mangalore, 
                Karnataka, with a deep interest in full-stack development, embedded systems, 
                and emerging technologies. My journey in tech is driven by curiosity and 
                the desire to solve real-world problems through innovative solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the President of the Embed Club and Technical Lead of GLUG PACE at 
                P.A. College of Engineering, I've had the opportunity to lead teams, 
                mentor peers, and drive technological initiatives that impact the 
                student community.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">What Drives Me</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Creating innovative IoT solutions for real-world problems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Building scalable web applications with modern technologies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Leading and mentoring in technical communities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Continuous learning and adapting to emerging technologies
                </li>
              </ul>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Leadership Roles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;