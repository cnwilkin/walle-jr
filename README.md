# walle-jr

Monitor the block chain for transactions on whale accounts

## Setup
Activate Node LTS `nvs use node/16.14.0/x64`

Install ganache `npm i ganache -g`

Install truffle `npm i truffle -g`

Start ganache `ganache-cli --fork https://mainnet.infura.io/v3/{apikey} --unlock 0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2 -p 7545`

Start truffle `truffle console`

### TODO: 
- [x] Find 1 active account to monitor
  - FTX Exchange address: `0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2` could be interesting
- [x] Setup ganache and fork the mainnet for easier dev work
- [ ] Setup monitoring in console log
- [ ] Figure out if we can monitor mainnet directly or if we have to pay for that

### Longterm
- [ ] Setup scanner to locate active accounts over a threshold
- [ ] Store events
- [ ] Perform analysis on events
