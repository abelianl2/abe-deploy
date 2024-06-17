# deploy simpleBridge contract

## Requirements
- node v16.14.0
- npm v7.24.2
- hardhat
- curl
- nvm

## Install
```shell
[install nvm & node]
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 16.14.0
nvm use 16.14.0

[install npm]
npm install npm@7.24.2 -g
```

[install deps]
```shell
git clone https://github.com/abelianl2/abe-contracts.git
cd abe-contracts
npm install
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
npx hardhat clean
npx hardhat compile
```

3. deploy simplebridge
```shell
npx hardhat deploySimpleBridge --network zkNode
```

4. transfer zknode's native tokens to simplebridge
> contract address is the address obtained from deploying the contract above
> Amount suggests 10000000
```shell
npx hardhat transferToSimpleBridge --amount <amount> --address <contract address>  --network zkNode
```

## Project path
learn more about contract  , please visit
[simple bridge contract](https://github.com/abelianl2/abe-contracts)