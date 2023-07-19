function calculateBill(dishes,numPeople) {
    let totalCost = Object.values(dishes).reduce((acc, curr) => acc + curr, 0);
    let billPerPerson = totalCost / numPeople;
    return {
        totalBill: totalCost,
        billPerPerson: billPerPerson
    };
}

let dishes = {
    dish1: 10,
    dish2: 15,
    dish3: 8
};

let numPeople = 4;

let result = calculateBill(dishes, numPeople);
console.log(result);