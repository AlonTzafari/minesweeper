import createMatrix from "./createMatrix";

export default class Game {
    board;
    flagsLeft;
    minesLeft;
    superman;
    onLose;
    onWin;
    noFlags;

    constructor(config) {
        const { width, height, mines, superman } = config;

        this.flagsLeft = mines;
        this.superman = superman;
        this.minesLeft = mines;

        this.board = createMatrix(width, height, () => {
            return { state: "hidden", value: 0 };
        });
        const mineLocations = this.placeMinesRandomly(mines);
        this.calculateTileValues(mineLocations);
    }

    reveal(x, y) {
        const tile = this.board[y][x];
        if (tile.state === "visible" || tile.state === "flag") return;

        if (tile.value === "bomb") {
            tile.state = "visible";
            this.onLose();
        } else if (typeof tile.value === "number" && tile.value > 0) {
            tile.state = "visible";
        } else {
            const stack = [[x, y]];
            while (stack.length > 0) {
                const args = stack.pop();
                floodReveal(this, ...args, stack);
            }
        }

        function floodReveal(game, x, y, stack) {
            const {board} = game;
            if (x < 0 || x >= board[0].length) return;
            if (y < 0 || y >= board.length) return;

            const tile = board[y][x];

            if (tile.value === "bomb") return;
            if (tile.state === "visible") return;

            if(tile.state === 'flag') game.flagsLeft++;
            tile.state = "visible";
            stack.push([x - 1, y]);
            stack.push([x + 1, y]);
            stack.push([x, y - 1]);
            stack.push([x, y + 1]);
        }
    }

    flag(x, y) {
        const tile = this.board[y][x];
        if (tile.state === "visible") return;

        if (tile.state === "flag") {
            if (tile.value === 'bomb') this.minesLeft++;
            tile.state = "hidden";
            this.flagsLeft++;
            return;
        }

        if (this.flagsLeft === 0) {
            this.noFlags();
            return;
        }

        tile.state = "flag";
        this.flagsLeft--;

        if (tile.value === "bomb") {
            this.minesLeft--;
            if (this.minesLeft === 0) this.onWin();
        }
    }

    placeMinesRandomly(numMines) {
        const mineLocations = [];
        let minesToPlace = numMines;
        while (minesToPlace > 0) {
            const x = Math.floor(Math.random() * this.board[0].length);
            const y = Math.floor(Math.random() * this.board.length);
            const tile = this.board[y][x];
            if (tile.value === "bomb") continue;
            this.board[y][x].value = "bomb";
            minesToPlace--;
            mineLocations.push({ x, y });
        }
        return mineLocations;
    }

    calculateTileValues(mineLocations) {
        const height = this.board.length;
        const width = this.board[0].length;

        const tilesAround = [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
            { x: 1, y: -1 },
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: -1, y: 1 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
        ];

        for (const minePos of mineLocations) {
            for (const tilePos of tilesAround) {
                const x = tilePos.x + minePos.x;
                const y = tilePos.y + minePos.y;
                if (x < 0 || x >= width) continue;
                if (y < 0 || y >= height) continue;
                const tileAtPos = this.board[y][x];
                if (tileAtPos.value === "bomb") continue;
                tileAtPos.value++;
            }
        }
    }
}
