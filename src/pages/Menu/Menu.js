import "./Menu.scss";
import { useContext, useRef, useState, useEffect } from "react";
import Loader from '../../components/Loader';
import gameContext from "../../contexts/gameContext";

export default function Menu() {
    const { setStart, gameConfig, setGameConfig } = useContext(gameContext);
    const [width, setWidth] = useState(gameConfig.width);
    const [height, setHeight] = useState(gameConfig.height);
    const [maxMines, setMaxMines] = useState(16);
    const [loading, setLoading] = useState(false);
    const widthRef = useRef();
    const heightRef = useRef();
    const minesRef = useRef();
    const supermanRef = useRef();

    const submitHandler = (e) => {
        const config = {
            width,
            height,
            mines: Number(minesRef.current.value),
            superman: supermanRef.current.checked,
        };
        setGameConfig(config);
        setLoading(true);
        e.preventDefault();
    };

    const onWidthChange = (e) => {
        setWidth(Number(e.currentTarget.value));
    };
    const onHeightChange = (e) => {
        setHeight(Number(e.currentTarget.value));
    };

    useEffect(() => {
        setWidth(gameConfig.width);
        setHeight(gameConfig.height);
        widthRef.current.value = gameConfig.width;
        heightRef.current.value = gameConfig.height;
        minesRef.current.value = gameConfig.mines;
        supermanRef.current.checked = gameConfig.superman;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setMaxMines(width * height);
    }, [width, height]);

    useEffect(() => {
        if(loading) setStart(true);
    }, [loading, setStart])

    return (
        <div data-testid="menu" className="menu page">
            <form name="menu-options" onSubmit={submitHandler}>
                <h2>Minesweeper</h2>
                <label htmlFor="width">Width</label>
                <input
                    ref={widthRef}
                    onChange={onWidthChange}
                    type="number"
                    id="width"
                    name="width"
                    min="4"
                    max="300"
                    step="1"
                    required
                />
                <label htmlFor="height">Height</label>
                <input
                    ref={heightRef}
                    onChange={onHeightChange}
                    type="number"
                    id="height"
                    name="height"
                    min="4"
                    max="300"
                    step="1"
                    required
                />
                <label htmlFor="mines">Mines</label>
                <input
                    ref={minesRef}
                    type="number"
                    id="mines"
                    name="mines"
                    min="1"
                    max={`${maxMines}`}
                    step="1"
                    required
                />
                <label htmlFor="superman">Superman Mode</label>
                <input
                    ref={supermanRef}
                    type="checkbox"
                    id="superman"
                    name="superman"
                />
                <div className="btnContainer">
                    {
                        loading ? <Loader/> :
                        <button type="submit">START</button>
                    }
                </div>
            </form>
            <div className="tutorial">
                <p>to place a flag</p>
                <p>keyboard: shift+leftClick</p>
                <p>mobile: long press</p>
            </div>
        </div>
    );
}
