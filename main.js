const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

let nidoChain = new Blockchain();

console.log("Mining block 1...");
nidoChain.addBlock(1, new Transaction({
    fromAddress: 'A',
    toAddress: 'C',
    amount: 5000
}));

console.log("Mining block 2...");
nidoChain.addBlock(2, new Transaction({
    fromAddress: 'A',
    toAddress: 'B',
    amount: 5000
}));

console.log("Mining block 3...");
nidoChain.addBlock(3, new Transaction({
    fromAddress: 'B',
    toAddress: 'C',
    amount: 5000
}));

console.log("Mining block 4...");
nidoChain.addBlock(4, new Transaction({
    fromAddress: 'C',
    toAddress: 'A',
    amount: 5000
}));



//console.log(JSON.stringify(nidoChain.chain, null, 4)); //blockchain data

//console.log('Is blockchain valid ? ' + nidoChain.isChainValid()) //true

//nidoChain.chain[1].data.amount = 33;

//console.log('Is blockchain valid ? ' + nidoChain.isChainValid()) //false