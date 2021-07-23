export default class Game {
    board;
    flagsLeft;
    minesLeft;
    superman;
    onLose;
    onWin;
    noFlags;

    constructor(config) {

        const {width, height, mines, superman} = config;
        
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

        //calculate values of empty tiles
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
        this.board = board;
        this.flagsLeft = mines;
        this.superman = superman;
        this.minesLeft = mines;
    }

    reveal(x, y) {

        const tile = this.board[y][x];
        if (tile.state === 'visible' || tile.state === 'flag') return;

        if (tile.value === '💣') {
            tile.state = 'visible';
            this.onLose();  
        } else if (typeof tile.value ===  'number' && tile.value > 0) {
            tile.state = 'visible';
        } else {
            floodReveal(this.board, x, y);
        } 

        function floodReveal(board, x, y) {
            if (x < 0 || x >= board[0].length) return;
            if (y < 0 || y >= board.length) return;
            const tile = board[y][x]; 
            if (tile.value === '💣') return;
            if (typeof tile.value ===  'number' && tile.value > 0) {
                tile.state = 'visible';
                return;
            }
            if(tile.state === 'visible') return;
            tile.state = 'visible';
            floodReveal(board, x - 1, y);
            floodReveal(board, x + 1, y);
            floodReveal(board, x, y - 1);
            floodReveal(board, x, y + 1);
        }
        
    }

    flag(x, y) {

        const tile = this.board[y][x];
        if (tile.state === 'visible') return;
        if (tile.state === 'flag') {
            tile.state = 'hidden';
            this.flagsLeft++;
            return;
        }
        if (this.flagsLeft === 0) {
            this.noFlags();
            return;
        }
        tile.state = 'flag';
        this.flagsLeft--;
        if (tile.value === '💣') {
            this.minesLeft--;
            if(this.minesLeft === 0) this.onWin();
        }

        
    }
    
}