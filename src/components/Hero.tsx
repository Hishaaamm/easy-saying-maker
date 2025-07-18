import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/hisham-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Available for Projects
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm
              <br />
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Hisham
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              <div className="mb-2">Tech Enthusiast</div>
              <div className="mb-2">Full-Stack Developer</div>
              <div>IoT Innovator</div>
            </div>

            <p className="text-lg text-white/80 mb-10 max-w-2xl">
              Computer Science Engineer from Mangalore, Karnataka, passionate about 
              building innovative solutions with cutting-edge technology. President of 
              Embed Club and Technical Lead of GLUG PACE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-accent"
                asChild
              >
                <a href="mailto:hishammohd313@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-accent"
                asChild
              >
                <a href="https://linkedin.com/in/hisham313" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-accent"
                asChild
              >
                <a href="https://github.com/hishaaamm" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-2xl" />
              
              {/* Profile image container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-glow">
                <img
                  src={profileImage}
                  alt="K Mohammad Hisham"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                  🏆 ADC Winner
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  💻 Full-Stack Dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;