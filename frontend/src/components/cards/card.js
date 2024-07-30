import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  flex: 1;
  text-align: center;
  min-width: 150px;
`;

const CardHeader = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const CardSubHeader = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;

const CardFooter = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`;

const Card = ({ bgColor, header, subHeader, footer }) => {
  return (
    <CardContainer bgColor={bgColor}>
      <CardHeader>{header}</CardHeader>
      <CardSubHeader>{subHeader}</CardSubHeader>
      <CardFooter>{footer}</CardFooter>
    </CardContainer>
  );
};

export default Card;
