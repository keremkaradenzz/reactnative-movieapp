import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled.View({
  backgroundColor: "green",
  color: "white",
  display: "flex",
  flexDirection: "row",
});

const StyledText = styled.Text({
  color: "white",
  padding: 5,
});

const StyledImage = styled.Image({
  width: 50,
  height: 50,
});

const Card = ({ item }) => {
  return (
    <StyledContainer>
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
