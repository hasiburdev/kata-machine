export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let index = jumpAmount;
    for (; index < breaks.length; index += jumpAmount) {
        if (breaks[index]) break;
    }
    index -= jumpAmount;

    for (let j = 0; j <= jumpAmount; j++, index++) {
        if (breaks[index]) return index;
    }

    return -1;
}
