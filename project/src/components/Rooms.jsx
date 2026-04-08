import { useState } from 'react';
import { rooms } from '../data/rooms';
import './Rooms.css';

function Rooms() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Standard', 'Deluxe', 'Suite'];

  const filteredRooms = selectedCategory === 'All'
    ? rooms
    : rooms.filter(room => room.category === selectedCategory);

  const handleBooking = (roomName) => {
    const message = encodeURIComponent(`I want to book ${roomName}`);
    window.open(`https://wa.me/233243259182?text=${message}`, '_blank');
  };

  return (
    <section id="rooms" className="rooms-section">
      <div className="container">
        <h2 className="section-title">Our Rooms & Suites</h2>
        <p className="section-subtitle">
          Discover your perfect sanctuary from our collection of elegantly designed accommodations
        </p>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="rooms-grid">
          {filteredRooms.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image-container">
                <img src={room.image} alt={room.name} className="room-image" loading="lazy" />
                <div className="room-category-badge">{room.category}</div>
              </div>

              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-price">GHS {room.price}<span>/night</span></p>
                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <span key={index} className="amenity-tag">{amenity}</span>
                  ))}
                </div>

                <button
                  className="book-btn"
                  onClick={() => handleBooking(room.name)}
                >
                  Book via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
