"use client";

import { Button } from "@/components/ui/button";
import { Mail, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "guessoushind[@]gmail.com",
    },
    {
      icon: Calendar,
      label: "Programmez un appel",
      value: "Créneau de 30 minutes sur Google Meet",
      action: (
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => window.open("https://calendly.com/guessoushind/30min", "_blank")}
        >
          Choisir un créneau
        </Button>
      ),
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Marseille, France",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Prenez contact</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                    {info.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}