import "./ticTacToe.css";
import { createSignal } from "solid-js";

type Square = 'X' | 'O' | '';
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

function BoardSquare(props: { index: number, board: Square[], onClick: (index: number) => void }) {
    const square = () => props.board[props.index];
    return <button
        class="square"
        classList={{ 'selected': square() === 'X' || square() === 'O' }}
        onClick={() => props.onClick(props.index)}
    >{square()}
    </button>
}

export function TicTacToe() {
    const [player, setPlayer] = createSignal<'X' | 'O'>('X');
    const [board, setBoard] = createSignal<Square[]>(
        ['', '', '', '', '', '', '', '', '']
    );

    const onClickSquare = (index: number) => {
        if (board()[index] !== '') return;
        setBoard(board().map((square, i) => i === index ? player() : square));
        setPlayer(player() === 'X' ? 'O' : 'X');
    };

    return (
        <div class="game">
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
            <div class="turn">{player()}'s turn</div>
        </div>
    );
}