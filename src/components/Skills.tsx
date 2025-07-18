import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Cpu, Users, Lightbulb, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, category: "Languages" },
    { name: "JavaScript", level: 85, category: "Languages" },
    { name: "Java", level: 80, category: "Languages" },
    { name: "C/C++", level: 85, category: "Languages" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "HTML/CSS", level: 92, category: "Frontend" },
    { name: "Flask", level: 80, category: "Backend" },
    { name: "Node.js", level: 75, category: "Backend" },
  ];

  const tools = [
    "Arduino", "ESP32", "STM32", "Raspberry Pi", "Figma", "Canva", 
    "Android Studio", "PowerApps", "Salesforce", "Git", "Docker", "VS Code"
  ];

  const softSkills = [
    { skill: "Leadership", icon: <Users className="w-5 h-5" /> },
    { skill: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
    { skill: "Teamwork", icon: <Target className="w-5 h-5" /> },
    { skill: "Adaptability", icon: <Code className="w-5 h-5" /> },
    { skill: "Communication", icon: <Palette className="w-5 h-5" /> },
    { skill: "Innovation", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            My Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <Badge variant="secondary" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {softSkills.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Cpu className="w-6 h-6 mr-2 text-primary" />
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specializations */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="text-center group hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end web application development with modern frameworks
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">
                Creating intuitive and beautiful user experiences
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">IoT & Embedded Systems</h3>
              <p className="text-sm text-muted-foreground">
                Building smart devices and innovative hardware solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;