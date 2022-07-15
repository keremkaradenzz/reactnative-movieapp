import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, FlatList } from "react-native";
import Card from "./components/Card/Card";
import styled from "styled-components/native";

const StyledContainer = styled.SafeAreaView({
  marginTop: 50,
  backgroundColor: "#fff",
  display: "flex",
  width: "100%",
});

const StyledText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 700;
  text-align: center;
`;

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_7k44vs59",
        {
          method: "GET",
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      );
      const json = await response.json();
      let newData = json.items.splice(0, 10);
      setData(newData);
    })();
  }, []);

  return (
    <SafeAreaView>
      <StyledContainer>
        <StyledText>IMDB Movie List</StyledText>
        <View style={{ flexDirection: "row", width: "100%" }} >
          <FlatList
            horizontal={true}
            data={data}
            renderItem={Card}
            keyExtractor={(item) => item.id}
          />
        </View>
        <StatusBar style="auto" />
      </StyledContainer>
    </SafeAreaView>
  );
}
