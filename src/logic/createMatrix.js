export default function createMatrix(width, height, fillValue) {
    return new Array(height).fill(0).map( () => {
        const widthArr = new Array(width).fill(0);
        return widthArr.map(() => {
            return fillValue();
        });
    });
}