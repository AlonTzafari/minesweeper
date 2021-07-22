import {useContext} from 'react';
import gameContext from '../../contexts/gameContext';
import './Menu.scss';

export default function Menu() {

    const {setStart} = useContext(gameContext);

    const submitHandler = (e) => {
        setStart(true);
        e.preventDefault();
    };

    return (
        <div data-testid="menu" className="menu page">
            <form name="menu-options" onSubmit={submitHandler}>
                <h2>Minesweeper</h2>
                <label htmlFor="width">Width</label>
                <input type="number" id="width" name="width" />
                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height" />
                <label htmlFor="mines">Mines</label>
                <input type="number" id="mines" name="mines" />
                <label htmlFor="superman">Superman Mode</label>
                <input type="checkbox" id="superman" name="superman" />
                <div className="btnContainer">
                    <button type="submit">START</button>
                </div>
            </form>
            
        </div>
    )
}
