import "./ticTacToe.css";
import { createSignal } from "solid-js";

export function TicTacToe() {
    const [player, setPlayer] = createSignal('X');



    return (
        <div class="game">
            <div class="container">
                <div class="row">
                    <button class="square 1"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                    <button class="square 2"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                    <button class="square 3"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                </div>
                <div class="row">
                    <button class="square 4"
                        classList={{ selected: player() === 'X' }}
                        onClick={() => setPlayer('X')}
                    >{player()}</button>
                    <button class="square 5"
                        classList={{ selected: player() === 'X' }}
                        onClick={() => setPlayer('X')}
                    >{player()}</button>
                    <button class="square 6"
                        classList={{ selected: player() === 'X' }}
                        onClick={() => setPlayer('X')}
                    >{player()}</button>
                </div>
                <div class="row">
                    <button class="square 7"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                    <button class="square 8"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                    <button class="square 9"
                        classList={{ selected: player() === 'O' }}
                        onClick={() => setPlayer('O')}
                    >{player()}</button>
                </div>
            </div>
            <div class="turn">{player()}'s turn</div>
        </div>
    );
}