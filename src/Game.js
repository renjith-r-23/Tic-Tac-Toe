import Board from "./Board.js";
import { useState } from "react";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    console.log(history);
    console.log(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move >";
    } else {
      return <></>;
    }
    var chindex = -1;
    for (let i = 0; i < history[move].length; i++) {
      if (history[move][i] !== history[move - 1][i]) {
        chindex = i;
        break;
      }
    }
    var stm = (
      <>
        <span className={"player-" + history[move][chindex]}>
          {history[move][chindex]} at {parseInt(chindex / 3)}/{chindex % 3}
        </span>
      </>
    );
    return (
      <li key={move}>
        {stm} - <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div
          onClick={() => {
            setHistory([Array(9).fill(null)]);
            jumpTo(0);
          }}
          class="header"
        >
          New Game
        </div>
        <div class="moves">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
  }
