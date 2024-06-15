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



1. ### ethermint


2. ### contract

- QDay matic


- zkevm-contracts 的部署

    如何使用？请阅读 [zkevm-contracts](https://github.com/abelianl2/abe-deploy/blob/main/contract/zkevm-contracts/README.md)
    
    成功执行完相关操作后，将产生的2个文件(deploy_output.json,genesis.json) 保存下来 ，作为下一步部署的依据


3. ### qday node 



4. ### bridge contract


5. ### committer and indexer



7. ### bridge


8. ### check
