let Web3 = require("web3");

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

async function getBalance(){
    // const balance = await web3.eth.getBalance("0xd72dA6733C3D4A09f9D7B58d01e4b46be5E9b0DC");
    // const balanceToEther = await web3.utils.fromWei(balance,"ether");
    // console.log(balanceToEther);

    const txn = await web3.eth.sendTransaction({
        from: "0x5790739a370bB7C05B217797d56c45d20a347d19",
        to: "0x1e25Ac67A6CB5D15c9AAb1f937d600fbB3e157C3",
        value: web3.utils.toWei("1","ether"),
    });
}

getBalance();