import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Play } from "lucide-react";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Llum Interior", image: "/art1.jpg", description: "Un viatge a la pròpia llum." },
  { id: 2, title: "Somnis Fragmentats", image: "/art2.jpg", description: "Quan la realitat es trenca en colors." }
];

const stories = [
  { id: 1, title: "El Mirall de Llum", audio: "/story1.mp3", text: "Un conte sobre la recerca de la pròpia llum." },
  { id: 2, title: "El Bosc dels Somnis", audio: "/story2.mp3", text: "Un viatge oníric a través d'un bosc màgic." }
];

export default function NoeArtGallery() {
  const [ratings, setRatings] = useState({});

  const rateArtwork = (id) => {
    setRatings((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">NoeArt - Galeria Interactiva</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {artworks.map((art) => (
          <motion.div key={art.id} whileHover={{ scale: 1.05 }}>
            <Card className="overflow-hidden shadow-lg">
              <img src={art.image} alt={art.title} className="w-full h-64 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{art.title}</h2>
                <p className="text-gray-600">{art.description}</p>
                <div className="flex items-center mt-4 space-x-2">
                  <Button onClick={() => rateArtwork(art.id)} className="flex items-center space-x-1">
                    <Heart className="text-red-500" />
                    <span>{ratings[art.id] || 0}</span>
                  </Button>
                  <Button className="flex items-center space-x-1">
                    <Star className="text-yellow-500" />
                    <span>Valorar</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center mt-10 mb-4">Contes Inspirats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <motion.div key={story.id} whileHover={{ scale: 1.05 }}>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{story.title}</h3>
                <p className="text-gray-600">{story.text}</p>
                <Button className="mt-4 flex items-center space-x-1">
                  <Play className="text-blue-500" />
                  <span>Escoltar</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
