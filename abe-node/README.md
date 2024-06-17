## Deploy abe-node

## Requirement
- docker
- docker-compose
- tar
- jq
- wget

## Download deploy file
```
wget https://github.com/abelianl2/abe-node/releases/download/v0.1.0/abe-node-deploy.tar.gz && tar -xzvf abe-node-deploy.tar.gz && rm -rf abe-node-deploy.tar.gz
```

## Replace private key of config file with yourself
```
cd abe-node-deploy

vim init.sh

# Replace private key of init.sh
deploykey
sequencerkey
aggregatorkey
committerkey
```

## Generate config file
```
cd abe-node-deploy

./init.sh
```

## Update config file

[config](https://github.com/abelianl2/abe-node/tree/release/v0.1.0/docs/config) 

## docker start or stop single node
```
docker-compose up -d node0

docker-compose down
```

## abe-node project path

learn more about indexer  , please visit
[abe-node server](https://github.com/abelianl2/abe-node)