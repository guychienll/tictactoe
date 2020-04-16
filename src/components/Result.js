import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 540px;
  height: 540px;
  font-size: 154px;
  font-style: italic;
  text-align: center;
  color: #ff6d70;
  line-height: 540px;
  font-family: "Roboto Condensed";
  -webkit-text-stroke: 4px white;
`;

export default class Result extends Component {
  render() {
    let winner;
    switch (this.props.winner) {
      case "◯":
        winner = <Box>WINNER!</Box>;
        break;
      case "✖":
        winner = <Box>WINNER!</Box>;
        break;
      default:
        winner = <Box>DRAW!</Box>;
        break;
    }
    return <>{winner}</>;
  }
}
