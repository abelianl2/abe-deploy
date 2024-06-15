# abe-depoly
how does depoly QDay chain (abelianL2) 

## prerequirement

os: centos 7.9

cpu: amd64

docker :20.10

docker-compose


## usage 

0. ### account

    进入 [account](https://github.com/abelianl2/abe-deploy/tree/main/account) 模块
    执行如下命令
    
    ```shell
    npm i
    node wallets.js | tee wallets.txt
    
    ```
    如 正常执行，则 产生wallets.txt 文件,此文件包含 部署需要的 account

1. ### abe-node 

   [abe-node](https://github.com/abelianl2/abe-deploy/blob/main/abe-node/README.md)部署手册
  
   等待节点部署完成，观察是否部署成功，如果部署成功，则可以进入下一步操作

2. ### contract

- QDay matic


- zkevm-contracts 的部署

    如何使用？请阅读 [zkevm-contracts](https://github.com/abelianl2/abe-deploy/blob/main/contract/zkevm-contracts/README.md)
    
    成功执行完相关操作后，将产生的2个文件(deploy_output.json,genesis.json) 保存下来 ，作为下一步部署的依据


3. ### qday node 



4. ### bridge contract


5. ### committer and indexer

- indexer

     [indexer 使用手册](https://github.com/abelianl2/abe-deploy/blob/main/indexer/README.md)
    
    以下字段是经常变动：
    ```
    indexer.toml 
        database-source
  
    bitcoin.toml
        network-name
        rpc-host
        rpc-user
        rpc-pass
        indexer-listen-address
  
        eth-rpc-url 
        eth-priv-key
        contract-address
        aa-b2-api
    ```
  其他字段的使用，参考[配置说明](https://github.com/abelianl2/abe-indexer/tree/release-0.1.0/docs)




- committer

7. ### bridge


8. ### check
