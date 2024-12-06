import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Lightbulb } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Écrire du code maintenable et évolutif.",
    },
    {
      icon: Palette,
      title: "Design Moderne",
      description: "Créer des interfaces belles et intuitives.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Trouver des solutions élégantes à des problèmes complexes.",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">À propos</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground">
            Forte de 3 années d'expérience en développement web et de 5 années d'expérience en marketing digital, je suis capable d'allier le meilleur des deux mondes pour un résultat optimal.
            Freelance depuis Juillet 2023, je mène mes projets de façon autonome et résiliente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="text-primary mb-4">
                  <feature.icon className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}