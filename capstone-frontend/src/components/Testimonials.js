import React from 'react';

const testimonialsData = [
  {
    name: 'Client A',
    quote: 'The agency completely transformed our digital marketing strategy!',
  },
  {
    name: 'Client B',
    quote: 'Professional and creative. I highly recommend them!',
  },
  {
    name: 'Client C',
    quote: 'Amazing results in a very short period of time.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials bg-light py-5">
      <div className="container">
        <h2 className="mb-4">Testimonials</h2>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"{testimonial.quote}"</p>
                  <h6 className="card-subtitle text-muted">- {testimonial.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
