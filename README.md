# QDay deploy 
how does deploy QDay chain (abelianL2) 

## Prerequirement

os: centos 7.9

cpu: amd64

docker :20.10

docker-compose


## Usage 
The deployment of QDay chain is performed as follows

0. ### account

Enter the [account](https://github.com/abelianl2/abe-deploy/tree/main/account) module
Execute the following command

```shell
npm i
node wallets.js | tee wallets.txt

```
If it is executed normally, the wallets.txt file will be generated, which contains the account required for deployment

1. ### abe-node

[abe-node](https://github.com/abelianl2/abe-deploy/blob/main/abe-node/README.md) deployment manual

Wait for the node deployment to complete and observe whether the deployment is successful. If the deployment is successful, you can proceed to the next step

2. ### contract

- zkevm-contracts deployment

How to use? Please read [zkevm-contracts](https://github.com/abelianl2/abe-deploy/blob/main/contract/zkevm-contracts/README.md)

After successfully executing the relevant operations, save the two generated files (deploy_output.json, genesis.json) as the basis for the next deployment

3. ### qday node

[QDay node deployment](https://github.com/abelianl2/abe-deploy/blob/main/abe-zkevm-node/README.md)

*The output of step 2 is the dependency of the relevant configuration of this step, which requires special attention*

Note that the genesis file adds the following elements in the header

``````
"l1Config": {
"chainId": 9000,
"polygonZkEVMAddress": "0xdde8f57d008D36C9476c5DF5525F7C5B52B03647",
"maticTokenAddress": "0x68715d6F60e00c55cb43EFC223D1D38b4BDb9638",
"polygonZkEVMGlobalExitRootAddress": "0xE593b85fc5351b1CF9051012110B35F79C36F2E4"
},
"genesisBlockNumber": 32,
``````

4. ### bridge contract

[bridge contract deployment](https://github.com/abelianl2/abe-deploy/blob/main/contract/bridge/README.md)

*This operation consists of 2 parts: Deploy contracts, transfer assets*

5. ### committer and indexer

- indexer

[indexer User Manual](https://github.com/abelianl2/abe-deploy/blob/main/indexer/README.md)

The following fields are frequently changed:
```
indexer.toml
database-source

bitcoin.toml
network-name
rpc-host
rpc-user
rpc-pass
indexer-listen-address

eth-rpc-url
eth-priv-key
contract-address
aa-b2-api
```
For the use of other fields, refer to [Configuration Instructions](https://github.com/abelianl2/abe-indexer/tree/release-0.1.0/docs)

- committer

[committer [Configuration Instructions](https://github.com/abelianl2/abe-deploy/blob/main/commiter/README.md)

7. ### bridge

[Bridge Deployment Instructions](https://github.com/abelianl2/abe-deploy/blob/main/bridge/README.md)

- Bridge service includes two parts, front-end and back-end

- This service depends on https certificates and domain names

8. ### check

- Check balance, you can use EVM-compatible wallet [metamask](https://metamask.io/download/)

- Deploy block browser, EVM-compatible browser [blockscout](https://github.com/0xPolygonHermez/blockscout)
