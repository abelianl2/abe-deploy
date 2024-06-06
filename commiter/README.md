# committer镜像部署

> 此节可省略，镜像已经托管到abelianl2

【1】拉取远程代码

```shell
git clone https://github.com/abelianl2/abe-committer.git
git checkout master
```

[2] 构建镜像

```shell
docker build -t mindcarver/abe-committer:v0.1 .
```

[3] 登录docker

```shell
echo "github access token" | docker login ghcr.io -u <username> --password-stdin
```

[4] 将镜像重新标记（tag）为GHCR仓库中的完整路径和标签

```shell
docker tag <username>/abe-committer:v0.1 ghcr.io/<username>/abe-committer:v0.1
```

[5] 推送镜像到github 托管

```shell
docker push ghcr.io/<username>/abe-committer:v0.1
```

-------------

# 启动docker容器

## 修改doker-compose配置

> 建议 下面这个用环境变量 export进去（zkevmnode 部署完毕之后将我所需的所有环境变量导入）

```toml
services:
  mysql1:
    container_name: mysql1
    image: mysql:8.4.0-oraclelinux9
    environment:
      MYSQL_ROOT_PASSWORD: "root"
    ports:
      - "3366:3306"
    volumes:
      - ./mysql.sql:/docker-entrypoint-initdb.d/init.sql
      - ./mysql1/datadir:/var/lib/mysql

  node1:
    depends_on:
      - mysql1
    environment:
      LOG_LEVEL: "info"
      LOG_FORMAT: "console"
      MYSQL_DATA_SOURCE: "root:root@tcp(mysql1:3306)/abe_committer?charset=utf8mb4&parseTime=True&loc=Local&multiStatements=true"
      MYSQL_MAX_IDLE_CONNS: "10"
      MYSQL_MAX_OPEN_CONNS: "20"
      MYSQL_CONN_MAX_LIFETIME: "3600"
      RPC_URL: ${RPC_URL}
      BLOCKCHAIN: "abe-node"
      INIT_BLOCK_NUMBER: ${INIT_BLOCK_NUMBER}
      INIT_BLOCK_HASH: ${INIT_BLOCK_HASH}
      POLYGON_ZKEVM_ADDRESS: ${POLYGON_ZKEVM_ADDRESS}
      PROPOSAL_BATCHES_LIMITNUM: "2"
      INIT_PROPOSAL_ID: "1"
      B2NODE_PRIVATE_KEY: ${B2NODE_PRIVATE_KEY}
      B2NODE_ADDRESS: ${B2NODE_ADDRESS}
      B2NODE_CHAIN_ID: ${B2NODE_CHAIN_ID}
      B2NODE_GRPC_HOST: ${B2NODE_GRPC_HOST}
      B2NODE_GRPC_PORT: ${B2NODE_GRPC_PORT}
      B2NODE_RPC_URL: ${B2NODE_RPC_URL}
      B2NODE_COIN_DENOM: "aphoton"
      BITCOIN_NETWORK_NAME: "signet"
      BITCOIN_PRIVATE_KEY: ${BITCOIN_PRIVATE_KEY}
      COMMITTER_DESTINATION_ADDRESS: ${COMMITTER_DESTINATION_ADDRESS}
      ENDPOINT : ${ENDPOINT}
      RPCENDPOINT : ${RPCENDPOINT}
      USERNAME : ${USERNAME}
      PASSWORD : ${PASSWORD}
      APPID : ${APPID}
      REQUEST_SIGNATURE : ${REQUEST_SIGNATURE}
      USERID : ${USERID}
      FROM : ${FROM}
      RECIPIENT : ${RECIPIENT}
      PRIVATE_KEY : ${PRIVATE_KEY}
      AUTHTOKEN : ${AUTHTOKEN}

    image: ghcr.io/<abelianl2>/abe-committer:v0.1

```



## 启动容器

> 修改完上述的配置之后启动

```shell
docker-compose up
```

