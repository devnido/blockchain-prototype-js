const Block = require('./block');

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block({
            index: 0,
            timestamp: "01/01/2018",
            transaction: "Genesis block",
            previousHash: "0"
        });
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(index, timestamp, transaction) {
        const newBlock = new Block({
            index,
            timestamp,
            transaction
        });
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {

            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            } //validate block

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            } //validate chain 

        }

        return true;
    }

}


module.exports = Blockchain