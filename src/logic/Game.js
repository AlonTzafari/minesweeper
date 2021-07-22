export default class Game {
    board;
    flagsLeft;


    constructor(config) {

        const {width, height, mines} = config;
        
        const rows = new Array(height).fill(0);
        const board = rows.map(row => new Array(width).fill(0));       
        let minesToPlace = mines;

        while (minesToPlace > 0) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            const tile = board[y][x]; 
            if(tile.value === '💣') continue;
            board[y][x] = {state: 'hidden', value:'💣'};
            minesToPlace--;
        }
        console.log(board);
        for(let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                const tile = board[y][x];
                if(tile.value === '💣') continue;
                let minesAround = 0;
                //TODO: prevent checking of out of bounds array values
                minesAround += board[y - 1][x - 1] === '💣' ? 1 : 0;
                minesAround += board[y - 1][x] === '💣' ? 1 : 0;
                minesAround += board[y - 1][x + 1] === '💣' ? 1 : 0;
                minesAround += board[y][x - 1] === '💣' ? 1 : 0; 
                minesAround += board[y][x + 1] === '💣' ? 1 : 0; 
                minesAround += board[y + 1][x - 1] === '💣' ? 1 : 0; 
                minesAround += board[y + 1][x] === '💣' ? 1 : 0; 
                minesAround += board[y + 1][x + 1] === '💣' ? 1 : 0;
                board[y][x] = {state: 'hidden', value: minesAround};
            }  
        }
        this.board = board;
        this.flagsLeft = mines;
    }
}