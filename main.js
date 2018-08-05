const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

let nidoChain = new Blockchain();

nidoChain.addBlock({
    index: 1,
    timestamp: Date.now(),
    data: new Transaction({
        fromAddress: 'A',
        toAddress: 'C',
        amount: 5600
    })
});

nidoChain.addBlock({
    index: 1,
    timestamp: Date.now(),
    data: new Transaction({
        fromAddress: 'A',
        toAddress: 'B',
        amount: 5000
    })
});

nidoChain.addBlock({
    index: 1,
    timestamp: Date.now(),
    data: new Transaction({
        fromAddress: 'C',
        toAddress: 'B',
        amount: 200
    })
});

nidoChain.addBlock({
    index: 1,
    timestamp: Date.now(),
    data: new Transaction({
        fromAddress: 'C',
        toAddress: 'A',
        amount: 500
    })
});



console.log(JSON.stringify(nidoChain.chain, null, 4));