function convertToRupees(pricesInDollar) {
    const exchangeRate = 80;

    const pricesInRupees = pricesInDollar.map((item) => {
        const convertedPrice = item.price * exchangeRate;
        return { ...item, price: convertedPrice };
    });
    return pricesInRupees
}

const items = [
    { name: "Parle g", price: 5 },
    { name: "Mom's magic", price: 10},
    { name: "Oreo", price: 20},
];

const pricesInRupees = convertToRupees(items);
console.log(pricesInRupees);