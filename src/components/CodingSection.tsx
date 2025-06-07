
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

const CodingSection = () => {
  const codingCategories = [
    {
      title: "Frontend Development",
      description: "Master modern web development with React, Vue, and Angular",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      technologies: ["React", "Vue.js", "Angular", "TypeScript"]
    },
    {
      title: "Backend Development",
      description: "Build robust server-side applications and APIs",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      technologies: ["Node.js", "Python", "Java", "Go"]
    },
    {
      title: "Mobile Development",
      description: "Create native and cross-platform mobile applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "DevOps & Cloud",
      description: "Deploy and scale applications with modern DevOps practices",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      title: "Data Science",
      description: "Analyze data and build machine learning models",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Python", "R", "TensorFlow", "Pandas"]
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and data from security threats",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      technologies: ["Ethical Hacking", "Penetration Testing", "Security Analysis", "Cryptography"]
    }
  ];

  return (
    <section id="coding" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gradient">Learning Paths</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive coding tutorials and hands-on projects across all major programming domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-gradient game-card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ninja-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Code className="w-6 h-6 text-primary glow-pulse" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gradient">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full flame-gradient text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="flame-gradient text-white font-bold px-8 py-4 text-lg ninja-glow hover:scale-105 transition-transform duration-300">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodingSection;
