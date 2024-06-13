## abe-zkevm-contracts
Deploy contracts to L1 and create genesis for L2

## Requirement
- docker
- docker-compose
- tar
- curl

## Usage

1. download config

```
curl -L https://github.com/abelianl2/abe-zkevm-contracts/releases/download/v0.1.0/zkevm-contracts-config.zip > zkevm-contracts-config.zip && unzip zkevm-contracts-config.zip

```

2. update config file


change the following configuration file according to your needs


   [.env]() 
  
   [deploy_parameters.json]()

   [hardhat.config.js]()

   [start.sh]()

   [docker-compose.yml]()


3. start bridge server

  ```
  // start
  docker-compose -f docker-compose.yml up -d
  
  //stop with remove
  
  docker-compose -f docker-compose.yml down -v
  
  ```
4. check

 - deploy_parameters.json
 - out/genesis.json
 - out/deploy_output.json

## Project path

learn more about abe-zkevm-contracts  , please visit
[abe-zkevm-contracts](https://github.com/abelianl2/abe-zkevm-contracts)
 
