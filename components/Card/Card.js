import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px 5px;
  border-radius: 5px;
  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
  width: 320px;
  height: 105px;
`;

const StyledText = styled.Text`
  color: ${(props) => (props.primary ? "white" : "red")};
  padding: 0 50px 5px 5px;
  font-size: 18px;
  width: 250px;
`;

const StyledImage = styled.Image`
  width: 100px;
  margin-left: 1px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const StyledRatingText = styled.Text`
  color: black;
  font-size: 14px;
  padding-left: 5px;
`;

const Card = ({ item }) => {
  return (
    <StyledContainer>
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
