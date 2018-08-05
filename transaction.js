class Transaction {

    constructor({
        fromAddress,
        toAddress,
        amount
    }) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.date = Date.now();
    }

}

module.exports = Transaction;