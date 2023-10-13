import "./App.css";
import Game from "./Game.js";
function App() {
  return (
    <div className="app">
      <div className="title">
        <img src="pngwing.com.png" alt="icon"></img>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <Game />
      <div className="attribute">
        <span>
          By <a href="https://github.com/aswanthabam">Aswanth V C</a>
        </span>
      </div>
    </div>
  );
}

export default App;
