import "./App.scss";
import { useState } from "react";
import Menu from "./pages/Menu";
import Game from "./pages/Game";
import gameContext from "./contexts/gameContext";

function App() {
    const [start, setStart] = useState(false);
    const [gameConfig, setGameConfig] = useState({
        width: 8,
        height: 8,
        mines: 8,
        superman: false,
    });

    return (
        <gameContext.Provider
            value={{ start, setStart, gameConfig, setGameConfig }}
        >
            <div className="App">{start ? <Game /> : <Menu />}</div>
        </gameContext.Provider>
    );
}

export default App;