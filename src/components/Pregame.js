import React, { Component } from "react";
import styled from "styled-components";

export const Box = styled.div`
  width: 540px;
  height: 540px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 160px;
  height: 160px;
  color: white;
  font-size: 100px;
  text-align: center;
  line-height: 160px;
  font-family: "Roboto Condensed";
  font-weight: bold;
  color: ${(props) => (props.index % 4 === 0 ? "#ffffff" : "#ff6d70")};
  font-style: ${(props) => (props.index % 4 === 0 ? "italic" : "normal")};
`;
const items_contents = ["TIC", "◯", "✖", "✖", "TAC", "◯", "◯", "✖", "TOE"];
export default class Pregame extends Component {
  render() {
    return (
      <>
        <Box>
          {items_contents.map((item, index) => (
            <Item key={index} index={index}>
              {item}
            </Item>
          ))}
        </Box>
      </>
    );
  }
}
