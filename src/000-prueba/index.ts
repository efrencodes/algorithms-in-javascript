// Given an array of integers, find the sum of its elements.
export const simpleArraySum = (ar: number[]): number => {
    let sum = 0;
    ar.map((number) => (sum += number));
    return sum;
};
