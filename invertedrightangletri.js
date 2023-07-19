function printinvertedtri(i) {
    for(let row = i; row>=1; row--) {
        console.log( '*'.repeat(row));
    }
}

const i =6;
printinvertedtri(i);