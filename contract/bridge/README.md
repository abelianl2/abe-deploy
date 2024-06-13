# deploy simpleBridge contract

## Requirements
- node v16.14.0
- hardhat
- curl
- nvm

## Install
[set node env]
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16.14.0
nvm use 16.14.0
```

[install deps]
```shell
git clone https://github.com/abelianl2/abe-contracts.git
cd abe-contracts
npm install --save-dev hardhat
```

## Usage

1. config
> need to set below config
```shell
[vim .env]
ZK_PRIVATE_KEY=<private key>
```

[change config in hardhat.config.js]
- zkNode: url and chainId


2. Compile
```shell
npx hardhat compile
```

3. deploy simpleBridge on zkNode and transfer token to it
> This script will deploy simplebridge
> and transfer zknode's native tokens to simplebridge at the same time
```shell
npx hardhat deploySimpleBridgeAndTransfer --amount <amount> --network zkNode
```

## Project path
learn more about contract  , please visit
[simple bridge contract](https://github.com/abelianl2/abe-contracts)