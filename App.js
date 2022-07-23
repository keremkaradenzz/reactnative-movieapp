import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header/Header";
import styled from "styled-components/native";
import Main from "./components/Main/Main";
import { getData } from "./api";
import { View } from "react-native";
const StyledTextInput = styled.TextInput`
  padding: 10px;
  width: 97%;
  border: 0.5px solid gray;
  border-radius: 5px;
  margin-left: 5px;
  background-color: white;
  margin-top: 10;
`;

const StyledContainer = styled.SafeAreaView({
  marginTop: 50,
  display: "flex",
  width: "100%",
});

export default function App() {
  const [topRated, setTopRated] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [searchData, setSearchData] = useState({
    data: [],
    value: "",
  });

  // TODO : CHANGED API because we have reached the limit.
  useEffect(() => {
    const fetchDataTopRated = async () => {
      const parsedData = await getData("3/movie/top_rated");
      setTopRated(parsedData.results.slice(0, 10));
    };
    fetchDataTopRated();

    const fetchDataUpComing = async () => {
      let response = await getData("3/movie/upcoming");
      setUpComingMovie(response.results);
    };
    fetchDataUpComing();

    const fetchDataLatest = async () => {
      let response = await getData("3/movie/popular");
      setPopularMovie(response.results);
    };
    fetchDataLatest();
  }, []);

  const handleChangeMovie = (text) => {
    setSearchData((prev) => ({ ...prev, value: text }));
  };

  // TODO : CHANGED API because we have reached the limit.
  const handleSearch = async () => {
    // const response = await fetch(
    //   `https://imdb-api.com/en/API/SearchMovie/k_7k44vs59/${searchData.value}`
    // );
    // const mov = await response.json();
    // if (Array.isArray(data)) setSearchData((prev) => ({ ...prev, data: mov }));
  };

  return (
    <View style={{backgroundColor:"#c30000"}}>
    <StyledContainer>
      <Header />
      <StyledTextInput
        placeholder="Search Movie"
        onChangeText={(text) => handleChangeMovie(text)}
        onSubmitEditing={() => handleSearch()}
      />
      <Main data={topRated} title={"Top 10 Movies"} />
      <Main data={upComingMovie} title={"Upcoming Movies"} />
      <Main data={popularMovie} title={"Populer Movies"} />
      <StatusBar style="auto" />
    </StyledContainer>
    </View>
  );
}
