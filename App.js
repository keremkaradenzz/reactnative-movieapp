import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header/Header";
import styled from "styled-components/native";
import Main from "./components/Main/Main";
import { getData } from "./api";

const StyledTextInput = styled.TextInput`
  padding: 10px;
  width: 97%;
  border: 0.5px solid gray;
  border-radius: 5px;
  margin-left: 5px;
`;

const StyledContainer = styled.SafeAreaView({
  marginTop: 50,
  backgroundColor: "#fff",
  display: "flex",
  width: "100%",
});

export default function App() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState({
    data: [],
    value: "",
  });

  // TODO : CHANGED API because we have reached the limit.
  useEffect(() => {
    const parsedData = getData("3/movie/top_rated");
    setData(parsedData.results);
    console.log(newData);
  }, []);

  const handleChangeMovie = (text) => {
    setSearchData((prev) => ({ ...prev, value: text }));
  };

  // TODO : CHANGED API because we have reached the limit.
  const handleSearch = async () => {
    const response = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/k_7k44vs59/${searchData.value}`
    );
    const mov = await response.json();
    if (Array.isArray(data)) setSearchData((prev) => ({ ...prev, data: mov }));
  };
  console.log(searchData);
  return (
    <StyledContainer>
      <Header />
      <StyledTextInput
        placeholder="Search Movie"
        onChangeText={(text) => handleChangeMovie(text)}
        onSubmitEditing={() => handleSearch()}
      />
      <Main data={data} />
      <StatusBar style="auto" />
    </StyledContainer>
  );
}
