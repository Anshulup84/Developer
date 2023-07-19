function removeDuplicates(cart) {
    const uniqcart = [];

    cart.forEach((item) => {
        if (!uniqcart.includes(item)) {
            uniqcart.push(item);
        }
    });
    return uniqcart;
}

const item = [];

for (let i = 0; i < 5; i++) {
    const customercart = prompt(`Enter items ${i + 1}:`);
    item.push(customercart)
}

const items = removeDuplicates(item);
console.log(items)
alert(`unique items ${items}`)
