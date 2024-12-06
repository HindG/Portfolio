import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "WattValue",
      description: "Plateforme de gestion des contrats de fourniture d'électricité et de gaz pour des clients professionnels.",
      image: "/Portfolio/wattvalue-1.png",
      technologies: ["React.js"],
      liveUrl: "https://www.wattunity.com/",
    },
    {
      title: "Plateforme Collective",
      description: "Site vitrine pour une ressourcerie de mobilier professionnel.",
      image: "/Portfolio/plateforme-collective.png",
      technologies: ["WordPress"],
      liveUrl: "https://plateforme-collective.org/",
    },
    {
      title: "Laura Beauté Paris",
      description: "Site ecommerce pour une marque de produits pour cheveux.",
      image: "/Portfolio/laura_beaute.png",
      technologies: ["Prestashop"],
      liveUrl: "https://www.laurabeauteparis.com/fr/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="border-none shadow-lg overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Accéder au projet
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}