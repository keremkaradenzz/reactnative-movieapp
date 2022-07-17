import React from "react";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10;
`;

const Main = ({ data }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <StyledText>Top 10 Movies</StyledText>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={Card}
          keyExtractor={(item) => item.id}
        />
      </View>

      
    </View>
  );
};

export default Main;
