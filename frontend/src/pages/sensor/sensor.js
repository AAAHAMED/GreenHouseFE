import React from 'react';
import styled from 'styled-components';

const SensorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Sensor = () => {
  return (
    <SensorContainer>
      <h1>Welcome to Sensor Page</h1>
    </SensorContainer>
  );
};

export default Sensor;
