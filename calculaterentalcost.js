function calculateRentalCost(daysRented,carType){
    let rentalCost =0;

    switch(carType){
        case 'Economy':
            rentalCost = 4000;
            break;
        case 'Midsize':
            rentalCost = 10000;
            break
        case 'Luxury':
            rentalCost = 20000;
            break

        default:
            console.log("Invalid car choice");
            return 0;
    }
    
    const totalCost = rentalCost * daysRented;
    return totalCost;
}

const daysRented = 7;
const cartype = 'Luxury'

const totalCost = calculateRentalCost(daysRented,cartype);
console.log('Total Rental Cost:', totalCost);