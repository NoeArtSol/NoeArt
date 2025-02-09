const NoeArtGallery = () => {
  const artworks = [
    { id: 1, title: "Llum Interior", image: "https://via.placeholder.com/300", description: "Un viatge a la pròpia llum." },
    { id: 2, title: "Somnis Fragmentats", image: "https://via.placeholder.com/300", description: "Quan la realitat es trenca en colors." }
  ];

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2>NoeArt - Galeria Interactiva</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {artworks.map((art) => (
          <div key={art.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "300px" }}>
            <img src={art.image} alt={art.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoeArtGallery;
