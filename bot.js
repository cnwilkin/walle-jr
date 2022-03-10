const Web3 = require('web3')
const web3 = new Web3('ws://127.0.0.1:7545')

const monitorAddress = '0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2'

const main = async () => {

    const transactionsSub = web3.eth.subscribe('pendingTransactions')

    transactionsSub.subscribe((error, result) => {
        if (error) console.log(error)
    })
    .on('data', async (txnHash) => {
        const web3Http = new Web3('http://127.0.0.1:7545')

        const txn = await web3Http.eth.getTransaction(txnHash)

        //const valid = ValidateTransaction(transactionHash)

        //console.log(transaction)
        console.log(txn.from + ' -> ' + txn.to + ' | ' + web3.utils.fromWei(txn.value))

    });

}

main()
