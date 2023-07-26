function maxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),

    };
}

const array = [3, 6, 8, 4, 5, 9];
console.log(maxMin(array));