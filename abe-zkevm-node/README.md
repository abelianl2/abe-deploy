## Deploy abe-zkevm-node

## Requirement
- docker
- docker-compose
- tar
- wget


## The deployment of abe-zkevm-node is divided into two parts, each deployed on separate servers
1. abe-zkevm-node-db 
2. abe-zkevm-node（without db）

## abe-zkevm-node-db deploy

1. Download Deploy file

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-db-deploy.tar.gz && tar -xzvf abe-zkevm-node-db-deploy.tar.gz
```

2. Update config file

    [config.json](https://github.com/abelianl2/abe-zkevm-node/blob/release/v0.1.0/config/environments/testnet/postgresql.conf)


2. Start or stop abe-zkevm-node-db
```
cd abe-zkevm-node-db-deploy

./start.sh

./stop.sh
```


## abe-zkevm-node deploy

1. Download deploy file

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-deploy.tar.gz && tar -xzvf abe-zkevm-node-deploy.tar.gz
```

2. Update config file

    [config.json](https://github.com/abelianl2/abe-zkevm-node/blob/release/v0.1.0/test/config/test.node.config.toml)


3. Replace Sequencer and aggregator address with yourself
```
[SequenceSender]
L2Coinbase = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"

[Aggregator]
SenderAddress = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
```

3. Start or stop abe-zkevm-node
```
cd abe-zkevm-node-deploy

./start.sh

./stop.sh
```

## abe-zkevm-node-rpc Deploy

1. Download deploy file

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-rpc-deploy.tar.gz && tar -xzvf abe-zkevm-node-rpc-deploy.tar.gz
```


2. Update config file

[config.json](https://github.com/abelianl2/abe-zkevm-node/tree/release/v0.1.0/config/environments/testnet)


3. Start or stop abe-zkevm-node-rpc
```
cd abe-zkevm-node-rpc-deploy

./start.sh

./stop.sh
```


## abe-zkevm-node project path

learn more about indexer  , please visit
[abe-zkevm-node server](https://github.com/abelianl2/abe-zkevm-node)