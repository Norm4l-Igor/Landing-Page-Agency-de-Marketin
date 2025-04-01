import React from 'react';
import { FaChartLine, FaSearch, FaPenNib, FaBullhorn } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaChartLine size={40} />,
    title: 'Social Media Management',
    description: 'Enhance your social presence with effective strategies.',
  },
  {
    icon: <FaSearch size={40} />,
    title: 'SEO',
    description: 'Optimize your website to increase online visibility.',
  },
  {
    icon: <FaPenNib size={40} />,
    title: 'Content Creation',
    description: 'High-quality content to engage your audience and boost your brand.',
  },
  {
    icon: <FaBullhorn size={40} />,
    title: 'Digital Advertising',
    description: 'Ad campaigns that convert and deliver measurable results.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services py-5">
      <div className="container">
        <h2 className="mb-4">Our Services</h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="mb-3">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
