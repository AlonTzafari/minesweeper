import React from 'react'

export default function Menu() {
    return (
        <div data-testid="menu" className="menu">
            <form name="menu-options">
                <label htmlFor="width">Width</label>
                <input type="number" id="width" name="width" />
                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height" />
                <label htmlFor="mines">Mines</label>
                <input type="number" id="mines" name="mines" />
                <label htmlFor="superman">Superman Mode</label>
                <input type="checkbox" id="superman" name="superman" />
                <button type="submit">START</button>
            </form>
            
        </div>
    )
}
