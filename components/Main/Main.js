import React from "react";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";

const Main = ({data}) => {
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={Card}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Main;
