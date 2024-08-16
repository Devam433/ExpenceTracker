import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <HeroSection>
        <HeroText>
          <h1 className=' text-[2rem] border rounded-sm px-5 py-3 font-bold'>Track Your Expenses Effortlessly</h1>
          <p>Manage your budget, track your spending, and save more with ease.</p>
          <Button onClick={()=>{navigate('/signup')}}>Get Started</Button>
        </HeroText>
        {/* <HeroImage src="https://images.unsplash.com/photo-1506748686214-e9df14f20e8d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNjU1NjZ8MHwxfGFsbHwxfHx8fHx8fDE2NzAxNTU4&ixlib=rb-1.2.1&q=80&w=1080" alt="Expense Tracker" /> */}
      </HeroSection>
      <FeaturesSection>
        <Feature>
          {/* <FeatureIcon src="https://images.unsplash.com/photo-1506748686214-e9df14f20e8d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNjU1NjZ8MHwxfGFsbHwxfHx8fHx8fDE2NzAxNTU4&ixlib=rb-1.2.1&q=80&w=1080" alt="Easy Tracking" /> */}
          <FeatureTitle>Easy Tracking</FeatureTitle>
          <FeatureDescription>Keep track of all your expenses with just a few clicks.</FeatureDescription>
        </Feature>
        <Feature>
          {/* <FeatureIcon src="https://images.unsplash.com/photo-1586741077513-b924bfb74955?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNjU1NjZ8MHwxfGFsbHwxfHx8fHx8fDE2NzAxNTU4&ixlib=rb-1.2.1&q=80&w=1080" alt="Smart Insights" /> */}
          <FeatureTitle>Smart Insights</FeatureTitle>
          <FeatureDescription>Get insights and trends on your spending habits.</FeatureDescription>
        </Feature>
        <Feature>
          {/* <FeatureIcon src="https://images.unsplash.com/photo-1564579776-fb1b55b0d25d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyNjU1NjZ8MHwxfGFsbHwxfHx8fHx8fDE2NzAxNTU4&ixlib=rb-1.2.1&q=80&w=1080" alt="Secure & Reliable" /> */}
          <FeatureTitle>Secure & Reliable</FeatureTitle>
          <FeatureDescription>Your data is secure and always available when you need it.</FeatureDescription>
        </Feature>
      </FeaturesSection>
      <Footer>
        <p>&copy; 2024 ExpenseTracker. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default LandingPage;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const Button = styled.button`
  background: #fff;
  color: #ff7e5f;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #f4f4f4;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-top: 20px;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #f4f4f4;
`;

const Feature = styled.div`
  width: 300px;
  text-align: center;
  margin-bottom: 20px;
`;

const FeatureIcon = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;
