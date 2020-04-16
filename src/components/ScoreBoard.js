import React, { Component } from "react";
import styled from "styled-components";

const BoardMiddle = styled.div`
  width: 70px;
  height: 71px;
  background-color: black;
  text-align: center;
  line-height: 71px;
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border-radius: 8px 8px 0 0;
`;
const BoardSide = styled.div`
  width: 175px;
  height: 60px;
  border: 4px solid black;
  background-color: white;
  color: black;
  box-sizing: border-box;
  text-align: center;
  line-height: 56px;
  font-size: 48px;
  font-family: "Roboto Condensed";
  font-weight: bold;
`;
const BoardRole = styled.div`
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: solid black;
  border-width: ${(props) => {
    switch (props.turn) {
      case "cross":
        return "4px 0 4px 4px";
      case "circle":
        return "4px 4px 4px 0";
      default:
        break;
    }
  }};
  border-radius: ${(props) => {
    switch (props.turn) {
      case "cross":
        return "8px 0 0 8px";
      case "circle":
        return "0 8px 8px 0";
      default:
        break;
    }
  }};
  background-color: ${(props) => {
    switch (props.turn) {
      case "cross":
        return "#ed494c";
      case "circle":
        return "#000000";
      default:
        break;
    }
  }};
  text-align: center;
  line-height: 56px;
  font-size: 36px;
  color: white;
`;

export default class ScoreBoard extends Component {
  render() {
    const { crossCount, circleCount } = this.props;
    return (
      <>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <BoardRole turn="cross">✖</BoardRole>
          <BoardSide>{crossCount}</BoardSide>
          <BoardMiddle>VS</BoardMiddle>
          <BoardSide>{circleCount}</BoardSide>
          <BoardRole turn="circle">◯</BoardRole>
        </div>
      </>
    );
  }
}
