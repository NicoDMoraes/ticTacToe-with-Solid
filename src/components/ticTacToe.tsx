import "./ticTacToe.css";
import { createSignal } from "solid-js";

type Square = 'X' | 'O' | '';

export function TicTacToe() {
    const [player, setPlayer] = createSignal('X');
    const [board, setBoard] = createSignal<Square[]>(
        ['', '', '', '', '', '', '', '', '']
    );

    const onClick = (index: number) => {
        setPlayer(player() === 'X' ? 'O' : 'X');
    };

    return (
        <div class="game">
            <div class="container">
                <div class="row">
                    <button class="square"
                        onClick={() => onClick(0)}
                    >{board()[0]}</button>
                    <button class="square"
                        onClick={onClick(1)}
                    >{player()}</button>
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                </div>
                <div class="row">
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                    <button class="square"
                        onClick={() => setPlayer('X')}
                    >{player()}</button>
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                </div>
                <div class="row">
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                    <button class="square"
                        onClick={onClick}
                    >{player()}</button>
                </div>
            </div>
            <div class="turn">{player()}'s turn</div>
        </div>
    );
}