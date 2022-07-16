import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header/Header";
import styled from "styled-components/native";
import Main from "./components/Main/Main";

const StyledContainer = styled.SafeAreaView({
  marginTop: 50,
  backgroundColor: "#fff",
  display: "flex",
  width: "100%",
});

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
    <StyledContainer>
      <Header />
      <Main data={data} />
      <StatusBar style="auto" />
    </StyledContainer>
  );
}
