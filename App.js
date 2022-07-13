import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, View, SafeAreaView } from "react-native";
import Card from "./components/Card/Card";
import styled from "styled-components/native";

const StyledContainer = styled.ScrollView({
  marginTop: 50,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
});

const StyledText = styled.Text`
  font-size: 16px;
  color:aliceblue;
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
        <View>
          {data &&
            data.map((item, index) => (
              <Card key={index} index={index} item={item} />
            ))}
        </View>

        <StatusBar style="auto" />
      </StyledContainer>
    </SafeAreaView>
  );
}
