const customer = {
    name: "anshul",
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Depoosit of ${amount} successful. New balance: ${this.balance}`);
    },
    withdrawal: function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`)
        }
    }
};


customer.deposit(500);
customer.withdrawal(200);
customer.withdrawal(2000);