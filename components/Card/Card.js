import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{
        uri:item.image
      }} />
      <Text style={styles.text}>{item.title} {item.year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    color:'white',
    display: "flex",
    flexDirection:'row',
  },
  text:{
    color:'white',
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
  }
});

export default Card;
