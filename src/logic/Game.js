export default class Game {
    board;
    flagsLeft;


    constructor(config) {

        const {width, height, mines} = config;
        const board = new Array(height).map(row => new Array(width));       
        let minesToPlace = mines;
        while (minesToPlace > 0) {
            const x = Math.floor(Math.random()*width); 
            const y = Math.floor(Math.random()*height);
            if(board[y][x].value === '💣') continue;
            board[y][x] = {state: 'hidden', value:'💣'};
            minesToPlace--;
        }

        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                if(board[y][x] === '💣') continue;
                let minesAround = 0;
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