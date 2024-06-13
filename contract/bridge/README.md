# deploy simpleBridge contract

## Requirements
```shell
node v16.14.0
```

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

## config
> need to set below config
```shell
[vim .env]
ZK_PRIVATE_KEY=<private key>
```

[change config in hardhat.config.js]
- zkNode: url and chainId


## Compile
```shell
npx hardhat compile
```

## deploy simpleBridge on zkNode and transfer token to it
> This script will deploy simplebridge
> and transfer zknode's native tokens to simplebridge at the same time
```shell
npx hardhat deploySimpleBridgeAndTransfer --amount <amount> --network zkNode
```

## project address
-[1]:https://github.com/abelianl2/abe-contracts