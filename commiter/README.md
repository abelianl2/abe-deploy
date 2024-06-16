# deploy committer compoment

## Requirements
- docker
- docker-compose
- git

## Usage
> Docker compile relies on variable data provided by other environments and needs to be configured in the. env file

1. download file
```shell
curl -L https://github.com/abelianl2/abe-committer/releases/download/v0.1.0/committer-cfg.zip > committer-cfg.zip && unzip committer-cfg.zip
```


2. Fill in the env environment variables below

```shell
cd committer-cfg
vim .env
```

```shell
ETHERMINT_IMAGE=
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
docker-compose up -d
```

## Project path
learn more about contract  , please visit
[abe-committer](https://github.com/abelianl2/abe-committer.git)
