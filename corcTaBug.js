function doubleCartQuantities(cart) {
    for(let i = 0; i<cart.length; i++) {
        cart[i] *=2;
    } 
    return cart;
}

let cart=[1, 2, 3, 4, 5];
cart = doubleCartQuantities(cart);
console.log(cart);