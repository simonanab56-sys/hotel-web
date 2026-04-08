import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Kwame Mensah',
      location: 'Accra, Ghana',
      rating: 5,
      text: 'Outstanding service and luxurious rooms! The staff went above and beyond to make our stay memorable. Highly recommend the Executive Suite.'
    },
    {
      name: 'Aisha Mohammed',
      location: 'Kumasi, Ghana',
      rating: 5,
      text: 'A perfect blend of elegance and comfort. The restaurant serves amazing local and international dishes. Will definitely be returning!'
    },
    {
      name: 'John Doe',
      location: 'Lagos, Nigeria',
      rating: 5,
      text: 'Best hotel experience in Ghana! From check-in to check-out, everything was seamless. The pool area is absolutely stunning.'
    },
    {
      name: 'Sarah Williams',
      location: 'London, UK',
      rating: 5,
      text: 'Exceptional hospitality and attention to detail. The spa treatments were heavenly. A true five-star experience!'
    },
    {
      name: 'Kofi Asante',
      location: 'Takoradi, Ghana',
      rating: 5,
      text: 'Wonderful stay for our anniversary. The staff made us feel special with thoughtful touches. The Presidential Suite exceeded expectations!'
    },
    {
      name: 'Emma Chen',
      location: 'Singapore',
      rating: 5,
      text: 'Incredible location and beautiful facilities. The concierge helped plan our entire trip. Best decision we made was staying here.'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>
        <p className="section-subtitle">
          Real experiences from our valued guests
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
