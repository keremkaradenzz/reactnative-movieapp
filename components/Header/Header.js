import React from "react";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-align: center;
`;
const Header = () => {
  return <StyledText>Movie App</StyledText>;
};

export default Header;
