function divisibileby3notby2(numbers){
    for(i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 3 !==0 || num % 2===0) {
            continue;
        }
        console.log(num);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
divisibileby3notby2(numbers);