# deploy committer compoment

## Requirements
- docker
- docker-compose
- git

## Usage
> Docker compile relies on variable data provided by other environments and needs to be configured in the. env file

1. download project
```shell
git clone https://github.com/abelianl2/abe-committer.git
```


2. Fill in the env environment variables below

```shell
cd test-docker
vim .env
```

```shell
ETHERMINT_IMAGE=
LOG_LEVEL=
LOG_FORMAT=
MYSQL_DATA_SOURCE=
MYSQL_MAX_IDLE_CONNS=
MYSQL_MAX_OPEN_CONNS=
MYSQL_CONN_MAX_LIFETIME=
RPC_URL=
BLOCKCHAIN=
INIT_BLOCK_NUMBER=
INIT_BLOCK_HASH=
POLYGON_ZKEVM_ADDRESS=
PROPOSAL_BATCHES_LIMITNUM=
INIT_PROPOSAL_ID=
B2NODE_PRIVATE_KEY=
B2NODE_ADDRESS=
B2NODE_CHAIN_ID=
B2NODE_GRPC_HOST=
B2NODE_GRPC_PORT=
B2NODE_RPC_URL=
B2NODE_COIN_DENOM=
BITCOIN_NETWORK_NAME=
BITCOIN_PRIVATE_KEY=
COMMITTER_DESTINATION_ADDRESS=
ENDPOINT=
RPCENDPOINT=
USERNAME=
PASSWORD=
APPID=
REQUEST_SIGNATURE=
USERID=
FROM=
RECIPIENT=
PRIVATE_KEY=
AUTHTOKEN=
```

3. After filling in the env above, start directly
```shell
docker-compose up
```

## Project path
learn more about contract  , please visit
[abe-committer](https://github.com/abelianl2/abe-committer.git)
