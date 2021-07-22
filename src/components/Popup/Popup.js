import './Popup.scss';

export default function Popup({children, close}) {
    return (
        <div className="popup">
            <button onClick={close} className="closePopup">X</button>
            <main>
                {children}
            </main>
        </div>
    );
}