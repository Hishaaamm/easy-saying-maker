import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Calendar, Users, ShoppingCart, MessageCircle, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Nirbhaya",
      description: "IoT-based women's safety device with real-time tracking, emergency alerts, and smart monitoring system.",
      longDescription: "Award-winning IoT solution for women's safety featuring GPS tracking, emergency SOS, health monitoring, and real-time alerts to emergency contacts.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Arduino", "ESP32", "IoT", "GPS", "Sensors", "Mobile App"],
      category: "IoT & Hardware",
      status: "🏆 ADC 2024 Winner",
      year: "2024",
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Playtone",
      description: "Comprehensive turf booking platform with real-time availability, payment integration, and booking management.",
      longDescription: "Full-stack web application for sports facility bookings with user authentication, real-time availability, payment processing, and admin dashboard.",
      icon: <Calendar className="w-6 h-6" />,
      technologies: ["React", "Flask", "Python", "SQLite", "Payment API"],
      category: "Web Development",
      status: "Live Platform",
      year: "2024",
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "ConversAI",
      description: "Intelligent chatbot powered by Llama 2 model with natural language processing and contextual responses.",
      longDescription: "AI-powered conversational chatbot built using Llama 2 and Streamlit, featuring natural language understanding and context-aware responses.",
      icon: <MessageCircle className="w-6 h-6" />,
      technologies: ["Python", "Llama 2", "Streamlit", "NLP", "AI/ML"],
      category: "AI & Machine Learning",
      status: "In Development",
      year: "2024",
      featured: true,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Smart Store",
      description: "E-commerce platform with modern UI, product management, and secure payment processing.",
      longDescription: "Complete e-commerce solution developed during internship featuring product catalog, shopping cart, user authentication, and payment integration.",
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      category: "Web Development",
      status: "Completed",
      year: "2023",
      featured: false,
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Wish Web App",
      description: "Interactive wish-sharing platform that connects people through shared dreams and aspirations.",
      longDescription: "Social platform for sharing and discovering wishes, featuring user interactions, categorized wishes, and community engagement features.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["React", "Flask", "SQLite", "WebSocket"],
      category: "Web Development",
      status: "🥈 HackSummit Runner-up",
      year: "2024",
      featured: false,
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-background/50 backdrop-blur-sm border-0 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                {project.status.includes('🏆') || project.status.includes('🥈') ? (
                  <Badge className="mb-3 bg-gradient-secondary text-accent-foreground">
                    <Trophy className="w-3 h-3 mr-1" />
                    {project.status}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mb-3">
                    {project.status}
                  </Badge>
                )}

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                    {project.status.includes('🥈') && (
                      <Badge className="bg-gradient-secondary text-accent-foreground">
                        <Trophy className="w-3 h-3 mr-1" />
                        Runner-up
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-glow">
            <CardContent className="p-8">
              <Github className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Explore More on GitHub</h3>
              <p className="text-white/90 mb-6">
                Check out my complete portfolio of projects, contributions, and open-source work
              </p>
              <Button 
                variant="hero" 
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="https://github.com/hishaaamm" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
