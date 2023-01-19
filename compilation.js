solc = require("solc");  //solc compiler
fs = require("fs");
Web3 = require("web3");

web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

fileContent = fs.readFileSync("demo.sol").toString();

var input = {
    language: "Solidity",
    sources: {
        "demo.sol":{
            content: fileContent,
        },
    },

    settings: {
        outputSelection: {
            "*":{
                "*":["*"],
            },
        },
    },
};

output = JSON.parse(solc.compile(JSON.stringify(input)));
ABI = output.contracts["demo.sol"]["demo"].abi;
bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode.object;

contract = new web3.eth.Contract(ABI);
let defaultAccount;

web3.eth.getAccounts().then((accounts) =>{
    defaultAccount = accounts[0];
    contract.deploy({data:bytecode}).send({from:defaultAccount,gas:470000}).on("receipt",(receipt) => {
        console.log("Contract address :",receipt.contractAddress);
    })
})