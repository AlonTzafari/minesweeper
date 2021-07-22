import {useContext, useRef, useState, useEffect} from 'react';
import gameContext from '../../contexts/gameContext';
import './Menu.scss';

export default function Menu() {

    const {setStart} = useContext(gameContext);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [maxMines, setMaxMines] = useState(null);
    const minesRef = useRef();
    const supermanRef = useRef();

    const submitHandler = (e) => {
        setStart(true);
        e.preventDefault();
    };

    const onWidthChange = (e) => {
        setWidth(Number(e.currentTarget.value))
    }
    const onHeightChange = (e) => {
        setHeight(Number(e.currentTarget.value))
    }

    useEffect(() => {
        setMaxMines(width*height)
    }, [width, height])

    return (
        <div data-testid="menu" className="menu page">
            <form name="menu-options" onSubmit={submitHandler}>
                <h2>Minesweeper</h2>
                <label htmlFor="width">Width</label>
                <input onChange={onWidthChange} type="number" id="width" name="width" min="4" max="300" step="1"/>
                <label htmlFor="height">Height</label>
                <input onChange={onHeightChange} type="number" id="height" name="height" min="4" max="300" step="1"/>
                <label htmlFor="mines">Mines</label>
                <input ref={minesRef} type="number" id="mines" name="mines" min="1" max={`${maxMines}`} step="1"/>
                <label htmlFor="superman">Superman Mode</label>
                <input ref={supermanRef} type="checkbox" id="superman" name="superman" />
                <div className="btnContainer">
                    <button type="submit">START</button>
                </div>
            </form>
            
        </div>
    )
}
