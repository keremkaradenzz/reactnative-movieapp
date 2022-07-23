import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 0 20px 5px;
  border-radius: 5px;
  background-color: white;
  border-radius: 2px;
  width: 320px;
  height: 105px;
`;

const StyledText = styled.Text`
  color: ${(props) => (props.primary ? "white" : "#c75b39")};
  padding: 0 50px 5px 5px;
  font-weight: 600;
  font-size: 18px;
  width: 250px;
`;

const StyledImage = styled.Image`
  width: 100px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const StyledRatingText = styled.Text`
  color: '#c75b39';
  font-size: 14px;
  padding-left: 5px;
`;

const Card = ({ item }) => {
  return (
    <StyledContainer>
      <StyledImage
        source={{
          uri: "http://image.tmdb.org/t/p/w500" + item.poster_path,
        }}
      />
      <View>
        <StyledText>
          {item.original_title} {item.release_date}
        </StyledText>
        <StyledRatingText>
          <Text style={{ fontWeight: "700" }}>Imdb Rating:</Text>
          {item.vote_average}
        </StyledRatingText>
      </View>
    </StyledContainer>
  );
};

export default Card;
