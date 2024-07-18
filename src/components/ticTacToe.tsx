import "./ticTacToe.css";


export function TicTacToe() {
    return (
        <div class="container">
            <div class="row">
                <button class="square"></button>
                <button class="square"></button>
                <button class="square"></button>
            </div>
            <div class="row">
                <button class="square"></button>
                <button class="square"></button>
                <button class="square"></button>
            </div>
            <div class="row">
                <button class="square">X</button>
                <button class="square"></button>
                <button class="square"></button>
            </div>
        </div>
    );
}