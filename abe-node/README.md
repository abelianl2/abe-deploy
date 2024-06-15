## Deploy abe-node

## Requirement
- docker
- docker-compose
- tar
- wget

## 下载部署文件
```
wget https://github.com/abelianl2/abe-node/releases/download/v0.1.0/abe-node-deploy.tar.gz && tar -xzvf abe-node-deploy.tar.gz
```


## 替换配置文件中的私钥
```
cd abe-node-deploy

vim init.sh

# 将init.sh文件中这4个key对应的密钥替换为自己的私钥
deploykey
sequencerkey
aggregatorkey
committerkey
```

## 生成配置文件和数据目录
```
cd abe-node-deploy

./init.sh
```

## docker启停单节点
```
docker-compose up -d node0

docker-compose down
```

## abe-node project path

learn more about indexer  , please visit
[abe-node server](https://github.com/abelianl2/abe-node)