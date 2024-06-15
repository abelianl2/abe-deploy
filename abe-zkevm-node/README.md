## Deploy abe-zkevm-node

## Requirement
- docker
- docker-compose
- tar
- wget

## 部署方案
abe-zkevm-node 的部署分为两个部分，分别部署在两台服务器上
1. abe-zkevm-node-db 
2. abe-zkevm-node（不包含db）

## abe-zkevm-node-db 部署

1. 下载部署目录

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-db-deploy.tar.gz && tar -xzvf abe-zkevm-node-db-deploy.tar.gz
```

2. 启停 abe-zkevm-node-db
```
cd abe-zkevm-node-db-deploy

./start.sh

./stop.sh
```


## abe-zkevm-node 部署

1. 下载部署目录

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-deploy.tar.gz && tar -xzvf abe-zkevm-node-deploy.tar.gz
```

2. 启停 abe-zkevm-node
```
cd abe-zkevm-node-deploy

./start.sh

./stop.sh
```

## abe-zkevm-node rpc 部署

1. 下载部署目录

```
wget https://github.com/abelianl2/abe-zkevm-node/releases/download/v0.1.0/abe-zkevm-node-deploy.tar.gz && tar -xzvf abe-zkevm-node-deploy.tar.gz
```

2. 启停 abe-zkevm-node
```
cd abe-zkevm-node-deploy

./start.sh

./stop.sh
```


## abe-zkevm-node project path

learn more about indexer  , please visit
[abe-zkevm-node server](https://github.com/abelianl2/abe-zkevm-node)