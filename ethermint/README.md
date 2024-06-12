## deploy ethermint node

## Requirement
- docker
- docker-compose
- tar
- wget

## github仓库
https://github.com/abelianl2/abe-node

## 分支
git checkout bridge-genesis


```
wget https://github.com/abelianl2/abe-node/releases/download/v0.1.0/abe-node-deploy.tar.gz && tar -xzvf abe-node-deploy.tar.gz
```

# 生成配置文件和数据目录
cd abe-node-deploy
./init.sh

## docker启停单节点
docker-compose up -d node0

docker-compose down


## 自定义genesis
