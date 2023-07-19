const calculateDiscountPercentage = (originalPrice, discountPrice) => {
    let discountAmount = originalPrice - discountPrice;
    let discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
};

let originalPrice = 100;
let discountPrice = 80;

let discountPercentage = calculateDiscountPercentage(originalPrice, discountPrice);
console.log(discountPercentage + '%');