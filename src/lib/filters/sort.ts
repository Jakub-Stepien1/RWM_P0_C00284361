// Sort an array of numbers
export function sortNum(x: number[]): number[] {
    x.sort((n1, n2) => n2 - n1);

    return x;
}