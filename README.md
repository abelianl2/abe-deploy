# QDay deploy 
how does deploy QDay chain (abelianL2) 

## Prerequirement

os: centos 7.9

cpu: amd64

docker :20.10

docker-compose


## Usage 

 QDay chain 的部署按如下步骤执行

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


- zkevm-contracts 的部署

    如何使用？请阅读 [zkevm-contracts](https://github.com/abelianl2/abe-deploy/blob/main/contract/zkevm-contracts/README.md)
    
    成功执行完相关操作后，将产生的2个文件(deploy_output.json,genesis.json) 保存下来 ，作为下一步部署的依据


3. ### qday node 

     [QDay node 部署](https://github.com/abelianl2/abe-deploy/blob/main/abe-zkevm-node/README.md)
    

   *第2步的输出 是本步骤的相关配置的依赖 ，需要特别注意*


   注意genesis文件在头部添加如下元素


   ``````
    "l1Config": {
     "chainId": 9000,
     "polygonZkEVMAddress": "0xdde8f57d008D36C9476c5DF5525F7C5B52B03647",
     "maticTokenAddress": "0x68715d6F60e00c55cb43EFC223D1D38b4BDb9638",
     "polygonZkEVMGlobalExitRootAddress": "0xE593b85fc5351b1CF9051012110B35F79C36F2E4"
    },
    "genesisBlockNumber": 32,
   ``````

4. ### bridge contract

   [bridge contract 部署](https://github.com/abelianl2/abe-deploy/blob/main/contract/bridge/README.md)


   *本次操作 包含2个部分： 部署合约、资产转移*

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

  [committer 配置说明](https://github.com/abelianl2/abe-deploy/blob/main/commiter/README.md)


7. ### bridge

     [bridge 部署说明](https://github.com/abelianl2/abe-deploy/blob/main/bridge/README.md)


 - bridge service 包含 前端、后端2个部分
 - 该服务依赖于https证书、域名

  
8. ### check

   - 检查余额 ,可以使用兼容EVM的钱包 [metamask](https://metamask.io/download/)
   - 部署区块浏览器，兼容EVM的浏览器 [blockscout](https://github.com/0xPolygonHermez/blockscout)