const calculteTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);    
};

let cart = [
    { unitPrice: 10, quantity: 2},
    { unitPrice: 15, quantity: 1},
    { unitPrice: 8, quantity: 3}
];

let totalCost = calculteTotalCost(cart);
console.log(`Per person = ${totalCost}`);