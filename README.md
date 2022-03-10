# walle-jr

Monitor the block chain for transactions on whale accounts

## Setup
Activate Node LTS `nvs use node/16.14.0/x64`

Install ganache `npm i ganache -g`

Install truffle `npm i truffle -g`

Start ganache `ganache-cli --fork https://mainnet.infura.io/v3/{apikey} --unlock 0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2 -p 7545`

Start truffle `truffle console`

Send transaction
```
account = '0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2'

web3.eth.accounts.create()

dest = ''

await web3.eth.sendTransaction({ from: account, to: dest, value: web3.utils.toWei('1', 'Ether')})

```

### TODO: 
- [x] Find 1 active account to monitor
  - FTX Exchange address: `0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2` could be interesting
- [x] Setup ganache and fork the mainnet for easier dev work
- [x] Setup monitoring in console log
- [ ] Finish TODO items
- [ ] Figure out if we can monitor mainnet directly or if we have to pay for that
- [ ] Store events


### Longterm
- [ ] Setup scanner to locate active accounts over a threshold
- [ ] Perform analysis on events
