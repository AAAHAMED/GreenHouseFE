import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import WeatherCards from '../../components/weather/WeatherCards.js';
import styled from 'styled-components';

const SensorContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Sensor = () => {
  return (
    <SensorContainer>
      <Navbar />
      <Content>
        <h1>Welcome to Sensor Page</h1>
        <WeatherCards />
      </Content>
    </SensorContainer>
  );
};

export default Sensor;
