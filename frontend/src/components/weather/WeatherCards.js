import React from 'react';
import styled from 'styled-components';
import Card from '../cards/card';

const WeatherCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const WeatherCards = () => {
  return (
    <WeatherCardsContainer>
      <Card
        bgColor="#d4f1f9"
        header="+24°C"
        subHeader="Air Temp"
        footer="Good"
      />
      <Card
        bgColor="#f5f7d4"
        header="72%"
        subHeader="Soil Moisture"
        footer="High"
      />
      <Card
        bgColor="#d4f4d7"
        header="-2mm"
        subHeader="Precipitation"
        footer="Low"
      />
    </WeatherCardsContainer>
  );
};

export default WeatherCards;
