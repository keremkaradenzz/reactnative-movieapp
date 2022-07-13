import React from "react";
import styled from "styled-components";

const StyledContainer = styled.View`
  color: white;
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop === 0 ? "15px" : 0)};
  margin-bottom: 20px;
`;

const StyledText = styled.Text`
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 5px;
`;

const StyledImage = styled.Image({
  width: 50,
  height: 50,
});

const Card = ({ item, index }) => {
  return (
    <StyledContainer marginTop={index}>
      <StyledImage
        source={{
          uri: item.image,
        }}
      />
      <StyledText>
        {item.title} {item.year}
      </StyledText>
    </StyledContainer>
  );
};

export default Card;
