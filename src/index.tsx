/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import { TicTacToe } from "./components/ticTacToe";

const root = document.getElementById("root");

render(() => <TicTacToe />, root!);
