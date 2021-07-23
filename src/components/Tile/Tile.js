import './Tile.scss';

export default function Tile({tile, superman, reveal, flag}) {
    const onClick = (e) => {
        reveal();
    }
    return (
        <div className="tile" onClick={onClick}>
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
