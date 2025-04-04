import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate('/');
  };

  return (
    <AboutWrapper>
      <Content>
        <Title>About Us</Title>
        <Subtitle>Empowering Your Digital Success</Subtitle>
        <Text>
          Welcome to our digital marketing agency, where creativity meets strategy. Our mission is to empower businesses with innovative digital solutions that drive success in today's dynamic online environment.
        </Text>
        <Text>
          Our team of dedicated professionals is passionate about delivering creative strategies that capture attention and convert leads into loyal customers. We take a personalized approach—tailoring each campaign to meet your unique needs.
        </Text>
        <Specialization>
          <h3>Our Specializations</h3>
          <ul>
            <li>Social Media Management</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Content Creation and Marketing</li>
            <li>Digital Advertising</li>
            <li>Brand Strategy and Identity</li>
          </ul>
        </Specialization>
        <Text>
          We are committed to transparency, excellence, and measurable results. Our goal is to help you build a strong online presence, engage your audience, and grow your business in a competitive market.
        </Text>
        <CallToAction onClick={handleCTA}>
          Let's Create Something Amazing Together!
        </CallToAction>
      </Content>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background: url('https://via.placeholder.com/1600x800') center/cover no-repeat;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  position: relative;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 30px;
  font-weight: 500;
  color: #ccc;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Specialization = styled.div`
  margin: 40px 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 1.125rem;
      margin-bottom: 8px;
    }
  }
`;

const CallToAction = styled.button`
  background-color: #ff6b6b;
  border: none;
  padding: 12px 30px;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background-color: #ff5252;
  }
`;

export default About;
