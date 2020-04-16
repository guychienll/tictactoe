import React, { Component } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Pregame from "./components/Pregame";
import Gaming from "./components/Gaming";
import ScoreBoard from "./components/ScoreBoard";
import Result from "./components/Result";
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => (props.gaming ? "#FF6D70" : "#000000")};
  justify-content: space-evenly;
`;
const Button = styled.button`
  width: 540px;
  height: 89px;
  outline: none;
  color: ${(props) => (props.gaming ? "#ffffff" : "#ff6d70")};
  cursor: pointer;
  font-size: 48px;
  line-height: 89px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  font-family: "consolas";
  border: ${(props) =>
    props.gaming ? "1px solid #ED494C" : "1px solid #ffffff"};
  background-color: ${(props) => (props.gaming ? "#ED494C" : "#ffffff")};
`;

const theResultOfWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetGame = ["", "", "", "", "", "", "", "", ""];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGaming: false,
      turn: true,
      gameState: ["", "", "", "", "", "", "", "", ""],
      crossCount: 0,
      circleCount: 0,
      winner: "",
      steps: 0,
    };
    this.handleState = this.handleState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resultChecker = this.resultChecker.bind(this);
  }
  handleState() {
    this.setState((prevState) => ({
      isGaming: !prevState.isGaming,
      gameState: resetGame,
      winner: "",
      steps: 0,
    }));
  }
  handleClick(index) {
    const newGameState = Object.assign([], this.state.gameState);
    if (newGameState[index] === "") {
      if (this.state.turn) {
        newGameState[index] = "◯";
      } else {
        newGameState[index] = "✖";
      }
      this.setState(
        (prevState) => ({
          gameState: newGameState,
          turn: !prevState.turn,
          steps: prevState.steps + 1,
        }),
        () => {
          const winner = this.resultChecker();
          if (winner === "◯") {
            this.setState((prevState) => ({
              winner: winner,
              circleCount: prevState.circleCount + 1,
              gameState: resetGame,
            }));
          } else if (winner === "✖") {
            this.setState((prevState) => ({
              winner: winner,
              crossCount: prevState.crossCount + 1,
              gameState: resetGame,
            }));
          } else if (winner === "draw") {
            this.setState({
              winner: winner,
              gameState: resetGame,
            });
          }
        }
      );
    }
  }
  resultChecker() {
    const { gameState, steps } = this.state;
    let winner;
    theResultOfWin.forEach((result) => {
      const [i, j, k] = result;
      if (steps < 9) {
        if (gameState[i] === gameState[j] && gameState[j] === gameState[k]) {
          if (
            gameState[i] !== "" &&
            gameState[j] !== "" &&
            gameState[k] !== ""
          ) {
            winner = gameState[i];
          }
        }
      } else {
        winner = "draw";
      }
    });
    return winner;
  }
  render() {
    const { isGaming, gameState, crossCount, circleCount, winner } = this.state;
    return (
      <>
        <Reset />
        {isGaming ? (
          <Container gaming>
            <ScoreBoard crossCount={crossCount} circleCount={circleCount} />
            {winner !== "" ? (
              <Result winner={winner} />
            ) : (
              <Gaming handleClick={this.handleClick} gameState={gameState} />
            )}

            <Button gaming onClick={this.handleState}>
              RESTART
            </Button>
          </Container>
        ) : (
          <Container>
            <Pregame />
            <Button onClick={this.handleState}>START</Button>
          </Container>
        )}
      </>
    );
  }
}
