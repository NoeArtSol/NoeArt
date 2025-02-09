const NoeArtGallery = () => {
  const artworks = [
    { id: 1, title: "L'Arbre dels Somnis", image: "https://noeartsol.github.io/NoeArt_Web/bosc.jpeg", description: "Un arbre que connecta amb l'univers." },
    { id: 2, title: "El Mirall de l'Ànima", image: "https://noeartsol.github.io/NoeArt_Web/mirall.jpeg", description: "Quan el reflex mostra més del que veiem." },
    { id: 3, title: "Herbes Encantades", image: "https://noeartsol.github.io/NoeArt_Web/estrella.jpeg", description: "Les plantes que guarden secrets." },
    { id: 4, title: "El Pont de la Vaqueta", image: "https://noeartsol.github.io/NoeArt_Web/ombres.jpeg", description: "Una vaqueta en un viatge inesperat." },
    { id: 5, title: "El Bany dels Colors", image: "https://noeartsol.github.io/NoeArt_Web/interior.jpeg", description: "L’aigua que canvia de color amb els somnis." },
    { id: 6, title: "Pluja d’Amor", image: "https://noeartsol.github.io/NoeArt_Web/pluja.jpeg", description: "Dos cors sota un mateix paraigua." },
    { id: 7, title: "La Nena dels Patins", image: "https://noeartsol.github.io/NoeArt_Web/patins.jpeg", description: "Una cursa cap a la felicitat." },
    { id: 8, title: "El Jardí dels Cors", image: "https://noeartsol.github.io/NoeArt_Web/flors.jpeg", description: "Un jardí on tot creix amb amor." },
    { id: 9, title: "Música a les Muntanyes", image: "https://noeartsol.github.io/NoeArt_Web/univers.jpeg", description: "La natura també canta." }
  ];

  const stories = [
    { id: 1, title: "El Despertar de les Estrelles", text: "Quan les estrelles cauen sobre l'arbre dels somnis, els desitjos es fan realitat." },
    { id: 2, title: "Reflexos de Vida", text: "Un mirall misteriós que revela emocions oblidades." },
    { id: 3, title: "El Secret del Bosc Màgic", text: "Entre les herbes encantades, una veu xiuxiueja antigues històries." },
    { id: 4, title: "El Viatge d’en Blanqueta", text: "Una petita vaqueta que somia travessar el pont cap a nous mons." },
    { id: 5, title: "Aventures a la Banyera", text: "Quan l’aigua es transforma en un mar de colors." },
    { id: 6, title: "Sota el Paraigua Vermell", text: "Un amor que floreix entre gotes de pluja." },
    { id: 7, title: "La Cursa dels Somriures", text: "Quan patinar és més que moure’s: és volar." },
    { id: 8, title: "Els Fruits de l’Amistat", text: "Cada fruit del jardí representa una amistat." },
    { id: 9, title: "La Melodia Perduda", text: "Una nena descobreix la música amagada entre les muntanyes." }
  ];

  return (
    <div className="container">
      <h2>NoeArt - Galeria Interactiva</h2>
      <div className="gallery">
        {artworks.map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.title} onError={(e) => e.target.style.display = 'none'} />
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
