const Contract = require ("web3-eth-contract");
Contract.setProvider("HTTP://127.0.0.1:7545");

async function instanceContract(){
     ABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_x",
                    "type": "uint256"
                }
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "get",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    ContractAddress = "0xd1532Df1AEDae0d40C4f2AB34b320Fb16C6788D5";

    const contract = new Contract(ABI,ContractAddress);
    // console.log(contract);
    contract.methods.get().call({from:"0x5790739a370bB7C05B217797d56c45d20a347d19"}).then(console.log);

    // if we want to only check the function then we can use call() function
    // but for changing something in contract we have to use send()
    
    contract.methods.set(50).send({from:"0x5790739a370bB7C05B217797d56c45d20a347d19"});
    contract.methods.get().call({from:"0x5790739a370bB7C05B217797d56c45d20a347d19"}).then(console.log);
}   
instanceContract();