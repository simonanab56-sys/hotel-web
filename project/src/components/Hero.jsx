import './Hero.css';

function Hero() {
  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Big Astom Hotel</h1>
        <p className="hero-tagline">Where Luxury Meets Comfort</p>
        <p className="hero-description">
          Experience world-class hospitality in the heart of the city. Your journey to excellence begins here.
        </p>
        <button className="hero-button" onClick={scrollToRooms}>
          Book Your Stay
        </button>
      </div>
    </section>
  );
}

export default Hero;
