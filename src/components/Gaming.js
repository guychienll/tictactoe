import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "./Pregame";
const Item = styled.div`
  width: 180px;
  height: 180px;
  box-sizing: border-box;
  color: white;
  font-size: 100px;
  text-align: center;
  line-height: 160px;
  font-family: "Roboto Condensed";
  font-weight: bold;
  color: black;
  border-color: #ed494c;
  border-style: solid;
  stroke-linecap: round;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 100px #ed494c;
  }
  border-width: ${(props) => {
    switch (props.index) {
      case 0:
      case 2:
      case 6:
      case 8:
        return "0px";
      case 1:
      case 7:
        return "0px 8px";
      case 3:
      case 5:
        return "8px 0px";
      case 4:
        return "8px";
      default:
        return "8px solid #ed494c";
    }
  }};
`;
export default class Gaming extends Component {
  render() {
    const { handleClick, gameState } = this.props;
    return (
      <Box>
        {gameState.map((item, index) => (
          <Item
            onClick={handleClick.bind(this, index)}
            key={index}
            index={index}
          >
            {item}
          </Item>
        ))}
      </Box>
    );
  }
}
