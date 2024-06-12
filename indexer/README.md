## Deploy indexer server
start indexer server

## Requirement
- docker
- docker-compose
- tar
- curl

## Usage

1. download config

```
curl -L https://github.com/abelianl2/abe-indexer/releases/download/v0.1.0/abe-indexer-config -o abe-indexer-config.tar.gz && tar -xzvf abe-indexer-config.tar.gz
```

2. update config file

   [http.toml](https://github.com/abelianl2/abe-indexer/blob/release-0.1.0/docs/config_http.md) 配置说明
   
   [indexer.toml](https://github.com/abelianl2/abe-indexer/blob/release-0.1.0/docs/config_indexer.md) 配置详情

   [bitcoin.toml](https://github.com/abelianl2/abe-indexer/blob/release-0.1.0/docs/config_bitcoin.md) 配置详情


3. start indexer server

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

learn more about indexer  , please visit 
 [indexer server](https://github.com/abelianl2/abe-indexer)
 