const Block = require('./block');

class Blockchain {

    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock() {
        return new Block({
            index: 0,
            data: "Genesis block",
            previousHash: "0"
        });
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(index, data) {
        const newBlock = new Block({
            index: index,
            data: data
        });
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty)
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