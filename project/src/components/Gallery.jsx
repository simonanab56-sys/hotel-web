import './Gallery.css';

function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hotel Lobby'
    },
    {
      url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Luxury Pool Area'
    },
    {
      url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant Dining'
    },
    {
      url: 'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Spa & Wellness'
    },
    {
      url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hotel Exterior'
    },
    {
      url: 'https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Rooftop Lounge'
    }
  ];

  return (
    <section className="gallery-section" id='Gallery' >
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Explore our stunning facilities and beautiful spaces
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
