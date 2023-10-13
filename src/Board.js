import Square from "./Square.js";
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  let overlay;
  if (winner) {
    status = "Winner: " + winner;
    overlay = (
      <div className="overlay">
        <span className={"winner player-" + winner}>{winner}</span>
        <span>Won!</span>
      </div>
    );
  } else {
    status = (
      <>
        Next player:{" "}
        <span className={"player-" + (xIsNext ? "X" : "O")}>
          {xIsNext ? "X" : "O"}
        </span>
      </>
    );
  }

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div style={{ display: "flex", position: "relative" }}>
        {overlay}
        <div className="row-help">
          <div>R/C</div>
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
        <div className="board-buttons">
          <div className="column-help">
            <div>0</div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="board-row">
            <Square
              value={
                <span className={"player-" + squares[0]}>{squares[0]}</span>
              }
              onSquareClick={() => handleClick(0)}
            />
            <Square
              value={
                <span className={"player-" + squares[1]}>{squares[1]}</span>
              }
              onSquareClick={() => handleClick(1)}
            />
            <Square
              value={
                <span className={"player-" + squares[2]}>{squares[2]}</span>
              }
              onSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="board-row">
            <Square
              value={
                <span className={"player-" + squares[3]}>{squares[3]}</span>
              }
              onSquareClick={() => handleClick(3)}
            />
            <Square
              value={
                <span className={"player-" + squares[4]}>{squares[4]}</span>
              }
              onSquareClick={() => handleClick(4)}
            />
            <Square
              value={
                <span className={"player-" + squares[5]}>{squares[5]}</span>
              }
              onSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="board-row">
            <Square
              value={
                <span className={"player-" + squares[6]}>{squares[6]}</span>
              }
              onSquareClick={() => handleClick(6)}
            />
            <Square
              value={
                <span className={"player-" + squares[7]}>{squares[7]}</span>
              }
              onSquareClick={() => handleClick(7)}
            />
            <Square
              value={
                <span className={"player-" + squares[8]}>{squares[8]}</span>
              }
              onSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
      </div>
    </div>
  );
          }
