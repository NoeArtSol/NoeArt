const NoeArtGallery = () => {
  const artworks = [
    { id: 1, title: "Llum Interior", image: "https://noeartsol.github.io/NoeArt_Web/interior.jpeg", description: "Un viatge a la pròpia llum." },
    { id: 2, title: "Somnis Fragmentats", image: "https://noeartsol.github.io/NoeArt_Web/bosc.jpeg", description: "Quan la realitat es trenca en colors." },
    { id: 3, title: "El Camí de les Ombres", image: "https://noeartsol.github.io/NoeArt_Web/ombres.jpeg", description: "Un viatge entre llum i foscor." },
    { id: 4, title: "Univers Interior", image: "https://noeartsol.github.io/NoeArt_Web/univers.jpeg", description: "Els misteris de la ment i l’espai." },
    { id: 5, title: "Flors en la Tempesta", image: "https://noeartsol.github.io/NoeArt_Web/flors.jpeg", description: "La bellesa enmig del caos." }
  ];

  const stories = [
    { id: 1, title: "El Mirall de Llum", text: "Un conte sobre la recerca de la pròpia llum." },
    { id: 2, title: "El Bosc dels Somnis", text: "Un viatge oníric a través d'un bosc màgic." }
  ];

  return (
    <div className="container">
      <h2>NoeArt - Galeria Interactiva</h2>
      <div className="gallery">
        {artworks.map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.title} />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
            <button className="like-btn">❤️ M'agrada</button>
          </div>
        ))}
      </div>

      <h2>📖 Contes Inspirats</h2>
      <div className="stories">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <h3>{story.title}</h3>
            <p>{story.text}</p>
            <button className="read-btn">📖 Llegeix</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoeArtGallery;

