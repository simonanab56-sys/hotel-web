import './Amenities.css';

function Amenities() {
  const amenities = [
    {
      title: 'Free Wi-Fi',
      description: 'High-speed internet access throughout the hotel',
      icon: '📶'
    },
    {
      title: 'Swimming Pool',
      description: 'Outdoor infinity pool with stunning views',
      icon: '🏊'
    },
    {
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment available 24/7',
      icon: '💪'
    },
    {
      title: 'Spa & Wellness',
      description: 'Rejuvenate with our premium spa treatments',
      icon: '💆'
    },
    {
      title: 'Restaurant & Bar',
      description: 'Fine dining with international and local cuisine',
      icon: '🍽️'
    },
    {
      title: 'Room Service',
      description: '24-hour in-room dining service',
      icon: '🛎️'
    },
    {
      title: 'Parking',
      description: 'Complimentary secure parking for all guests',
      icon: '🚗'
    },
    {
      title: 'Concierge',
      description: 'Dedicated staff to assist with all your needs',
      icon: '👔'
    }
  ];

  return (
    <section   className="amenities-section" id='Amenities' >
      <div className="container">
        <h2 className="section-title">World-Class Amenities</h2>
        <p className="section-subtitle">
          Enjoy a complete range of facilities designed for your comfort and convenience
        </p>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">{amenity.icon}</div>
              <h3 className="amenity-title">{amenity.title}</h3>
              <p className="amenity-description">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
