import './Tile.scss';

export default function Tile({tile, superman, reveal, flag}) {
    return (
        <div className="tile">
            <span className="content">{tile.value === 0 ? '' : tile.value}</span>
            <span className={`cover ${superman ? 'transparent' : null}`} />
        </div>
    )
}
