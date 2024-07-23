import "./ticTacToe.css";
import { createSignal } from "solid-js";

type Square = 'X' | 'O' | '';
// type Player = 'X' | 'O';

export function TicTacToe() {
    const [player, setPlayer] = createSignal<'X' | 'O'>('X');
    const [board, setBoard] = createSignal<Square[]>(
        ['', '', '', '', '', '', '', '', '']
    );

    const onClick = (index: number) => {
        if (board()[index] !== '') return;
        setBoard(board().map((square, i) => i === index ? player() : square));
        setPlayer(player() === 'X' ? 'O' : 'X');
    };

    return (
        <div class="game">
            <div class="container">
                <div class="row">
                    <button class="square"
                        classList={{ 'selected': board()[0] === 'X' || board()[0] === 'O' }}
                        onClick={() => onClick(0)}
                    >{board()[0]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[1] === 'X' || board()[1] === 'O' }}
                        onClick={() => onClick(1)}
                    >{board()[1]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[2] === 'X' || board()[2] === 'O' }}
                        onClick={() => onClick(2)}
                    >{board()[2]}</button>
                </div>
                <div class="row">
                    <button class="square"
                        classList={{ 'selected': board()[3] === 'X' || board()[3] === 'O' }}
                        onClick={() => onClick(3)}
                    >{board()[3]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[4] === 'X' || board()[4] === 'O' }}
                        onClick={() => onClick(4)}
                    >{board()[4]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[5] === 'X' || board()[5] === 'O' }}
                        onClick={() => onClick(5)}
                    >{board()[5]}</button>
                </div>
                <div class="row">
                    <button class="square"
                        classList={{ 'selected': board()[6] === 'X' || board()[6] === 'O' }}
                        onClick={() => onClick(6)}
                    >{board()[6]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[7] === 'X' || board()[7] === 'O' }}
                        onClick={() => onClick(7)}
                    >{board()[7]}</button>
                    <button class="square"
                        classList={{ 'selected': board()[8] === 'X' || board()[8] === 'O' }}
                        onClick={() => onClick(8)}
                    >{board()[8]}</button>
                </div>
            </div>
            <div class="turn">{player()}'s turn</div>
        </div>
    );
}