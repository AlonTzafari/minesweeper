import './Tile.scss';

export default function Tile({tile, superman, reveal, flag}) {
    
    const onClick = (e) => {
        if(e.shiftKey) flag();
        else reveal();
        e.preventDefault();
    }
    
    const producer = (shortCB, longCB, duration) => {
        let timer;
        const start = () => {
            timer = new Date();
        }
        const end = () => {
            const elapsedTime = new Date() - timer;
            if (elapsedTime >= duration) longCB();
            else shortCB();
        }
        return [start, end]
    }

    const [startHanlder, endHandler] = producer(reveal, flag, 400);


    return (
        <div className="tile" onClick={onClick} onTouchStart={startHanlder} onTouchEnd={endHandler}>
            <span className="content">{tile.value === 0 ? '' : tile.value}</span>
            {
                tile.state !== 'visible' ?
                    <span className={`cover ${superman ? 'transparent' : null}`}>
                        {tile.state === 'flag' ? '🚩' : null}
                    </span> :
                    null
            }
        </div>
    )
}
