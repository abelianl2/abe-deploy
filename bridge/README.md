## Deploy bridge server
start bridge server

## Requirement
- docker
- docker-compose
- tar
- curl

## Usage

1. download config

```
curl -L https://github.com/abelianl2/bridge-server/releases/download/v0.1.0/bridge-server-config.zip > bridge-server-config.zip && unzip bridge-server-config.zip

```

2. update config file


   [config.json](https://github.com/abelianl2/bridge-server/blob/release-0.1.0/doc/config.md) 配置详情


3. start bridge server

  ```
  // start
  docker-compose -f docker-compose.yml up -d
  
  //stop with remove
  
  docker-compose -f docker-compose.yml down -v
  
  ```
4. check

 ```
  docker-compose -f docker-compose.yml ps
 ```

## Project path

learn more about birdge  , please visit
[bridge server](https://github.com/abelianl2/bridge-server)
 
