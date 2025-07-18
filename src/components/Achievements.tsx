import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize - ADC 2024",
      description: "Won first place at IIIT Bangalore for Nirbhaya - IoT-based women's safety device",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      year: "2024",
      category: "Competition",
      highlight: true
    },
    {
      title: "Runner-up - HackSummit 2024",
      description: "Second place for innovative Wish Web App at national-level hackathon",
      icon: <Medal className="w-8 h-8 text-gray-400" />,
      year: "2024", 
      category: "Hackathon",
      highlight: true
    },
    {
      title: "RC Car Race Winner",
      description: "First place in remote-controlled car racing competition during first year",
      icon: <Star className="w-8 h-8 text-blue-500" />,
      year: "2022",
      category: "Technical Event",
      highlight: false
    },
    {
      title: "Embed Design Challenge Winner",
      description: "Won embedded systems design challenge in second year of engineering",
      icon: <Award className="w-8 h-8 text-green-500" />,
      year: "2023",
      category: "Design Competition", 
      highlight: false
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Recognition</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Awards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for technical excellence and innovative solutions in various competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 ${
                achievement.highlight ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20' : ''
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-soft">
                  {achievement.icon}
                </div>
                
                <Badge variant="secondary" className="mb-3 text-xs">
                  {achievement.category} • {achievement.year}
                </Badge>
                
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;