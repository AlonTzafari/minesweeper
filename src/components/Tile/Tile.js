import "./Tile.scss";

export default function Tile({ tile, superman, reveal, flag }) {
    const onClick = (e) => {
        if (e.shiftKey) flag();
        else reveal();
        e.preventDefault();
    };

    const producer = (shortCB, longCB, duration) => {
        let timer;
        let isCancel;
        const start = () => {
            isCancel = false;
            timer = new Date();
        };
        const end = () => {
            const elapsedTime = new Date() - timer;
            if (isCancel) {
            } else if (elapsedTime >= duration) longCB();
            else shortCB();
        };
        const cancel = () => {
            isCancel = true;
        };
        return [start, end, cancel];
    };

    const [startHandler, endHandler, moveHandler] = producer(reveal, flag, 400);

    const tileDisplay = (tileValue) => {
        if (tileValue === 0) return "";
        if (tileValue === "bomb") return "💣";
        if (typeof tileValue === "number" && tileValue > 0) return tileValue;
    };

    return (
        <div
            className="tile"
            onClick={onClick}
            onTouchStart={startHandler}
            onTouchEnd={endHandler}
            onTouchMove={moveHandler}
        >
            <span className="content">{tileDisplay(tile.value)}</span>
            {tile.state !== "visible" ? (
                <span className={`cover ${superman ? "transparent" : null}`}>
                    {tile.state === "flag" ? "🚩" : null}
                </span>
            ) : null}
        </div>
    );
}
