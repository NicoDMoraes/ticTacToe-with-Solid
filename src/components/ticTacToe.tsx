import "./ticTacToe.css";
import { createSignal, Show, For, Switch, Match } from "solid-js";

type Square = "X" | "O" | "";
// type Player = 'X' | 'O';

// function NonReactiveBoardSquare(props: { index: number, board: Square[], onClick: (index: number) => void }) {
//     const square = props.board[props.index];
//     return <button
//         class="square"
//         classList={{ 'selected': square === 'X' || square === 'O' }}
//         onClick={() => props.onClick(props.index)}
//     >{square}
//     </button>
// }

function BoardSquare(props: {
  index: number;
  board: Square[];
  onClick: (index: number) => void;
}) {
  const square = () => props.board[props.index];
  const [hoveredSquare, setHoveredSquare] = createSignal<Square>("");
  const handleMouseEnter = () => setHoveredSquare(player());
  const handleMouseLeave = () => setHoveredSquare("");
  return (
    <button
      class="square"
      classList={{ selected: square() === "X" || square() === "O" }}
      onClick={() => props.onClick(props.index)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Switch>
        <Match when={square() !== ""}>{square()}</Match>
        <Match when={square() === ""}>
          <div class="hovered-square">{hoveredSquare()}</div>
        </Match>
      </Switch>
    </button>
  );
}

const [player, setPlayer] = createSignal<"X" | "O">("X");
const [board, setBoard] = createSignal<Square[]>([
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
]);
function createBoard(): Square[] {
  return ["", "", "", "", "", "", "", "", ""];
}
const currentWinner = () => {
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
  for (const line of lines) {
    const [a, b, c] = line;
    if (board()[a] && board()[a] === board()[b] && board()[a] === board()[c]) {
      return {
        message: "the Winner is " + board()[a],
        line: line,
      };
    }
  }
  for (const square of board()) {
    if (square === "") {
      return null;
    }
  }
  return {
    message: "it's a Draw",
    line: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };
};
export function TicTacToe() {
  const onClickSquare = (index: number) => {
    if (board()[index] !== "") return;
    setBoard(board().map((square, i) => (i === index ? player() : square)));
    setPlayer(player() === "X" ? "O" : "X");
  };

  return (
    <div class="game">
      <div class="header">Tic Tac Toe</div>
      <div class="container">
        <div class="row">
          <BoardSquare index={0} board={board()} onClick={onClickSquare} />
          <BoardSquare index={1} board={board()} onClick={onClickSquare} />
          <BoardSquare index={2} board={board()} onClick={onClickSquare} />
        </div>
        <div class="row">
          <BoardSquare index={3} board={board()} onClick={onClickSquare} />
          <BoardSquare index={4} board={board()} onClick={onClickSquare} />
          <BoardSquare index={5} board={board()} onClick={onClickSquare} />
        </div>
        <div class="row">
          <BoardSquare index={6} board={board()} onClick={onClickSquare} />
          <BoardSquare index={7} board={board()} onClick={onClickSquare} />
          <BoardSquare index={8} board={board()} onClick={onClickSquare} />
        </div>
      </div>
      <div class="state">
        <Show when={currentWinner() === null}>
          <div class="turn">{player()}'s turn</div>
        </Show>
        <Show when={currentWinner() !== null}>
          <div class="winner">{currentWinner()?.message}</div>
        </Show>
        <button class="reset" onClick={() => setBoard(createBoard())}>
          Reset
        </button>
      </div>
    </div>
  );
}
