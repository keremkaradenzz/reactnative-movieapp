import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
const StyledContainer = styled.View`
  color: white;
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop === 0 ? "15px" : 0)};
  margin-bottom: 20px;
  padding-left: 5px;
`;

const StyledText = styled.Text`
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 0 50px 5px 5px;
  font-size: 18px;

`;

const StyledImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const StyledRatingText = styled.Text`
  color: black;
  font-size: 14px;
  padding-left: 5px;

`;

const Card = ({ item, index }) => {
  return (
    <StyledContainer marginTop={index}>
      <StyledImage
        source={{
          uri: item.image,
        }}
      />
      <View>
        <StyledText>
          {item.title} {item.year}
        </StyledText>
        <StyledRatingText>
          <Text style={{ fontWeight: "700" }}>Imdb Rating:</Text>
          {item.imDbRating}
        </StyledRatingText>
      </View>
    </StyledContainer>
  );
};

export default Card;
