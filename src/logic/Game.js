export default class Game {
    board;
    flagsLeft;


    constructor(config) {

        const {width, height, mines} = config;
        
        //create a matrix with all cells at state hidden & value 0
        const board = new Array(height).fill(0).map( () => {
            const widthArr = new Array(width).fill(0);
            return widthArr.map(() => {
                return {state:'hidden', value: 0}
            });
        });
    
        //place mines randomly
        let minesToPlace = mines;
        while (minesToPlace > 0) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            const tile = board[y][x]; 
            if(tile.value === '💣') continue;
            board[y][x] = {state: 'hidden', value:'💣'};
            minesToPlace--;
        }

        for(let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                const tile = board[y][x];
                if(tile.value === '💣') continue;
                let minesAround = 0;
                const tilesAround = [
                    {x: x - 1, y: y - 1},
                    {x: x, y: y - 1},
                    {x: x + 1, y: y - 1},
                    {x: x - 1, y: y},
                    {x: x + 1, y: y},
                    {x: x - 1, y: y + 1},
                    {x: x, y: y + 1},
                    {x: x + 1, y: y + 1},
                ];
                for (const tilePos of tilesAround) {
                    if (tilePos.x < 0 || tilePos.x >= width) continue;
                    if (tilePos.y < 0 || tilePos.y >= height) continue;
                    minesAround += board[tilePos.y][tilePos.x].value === '💣' ? 1 : 0;
                }
                board[y][x].value = minesAround;
            }  
        }
        console.log(board);
        this.board = board;
        this.flagsLeft = mines;
    }
}