var abi = [{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}];

var contractAddress = "0x167cB3F2446F829eb327344b66E271D1a7eFeC9A"
var contractInstance 
var web3 

var BlockStart = 5383316;   
var EndBlock = 'latest'; // this should be updated to the final block in the end of the contest. 
// the latest block is the 'current' block on blockchain. 
// blocks in ethereum average about 14-15 seconds. see https://etherscan.io/chart/blocktime
var MasterNode = 50; // after division by 1e18 

function log(txt){
    var targ = document.getElementById("logger");
    targ.value =txt + "\n" + targ.value
    //console.log(txt);
}

if (typeof web3 !== 'undefined') {
        console.log("Using web3 detected from external source like Metamask")
        web3 = new Web3(web3.currentProvider);
        contract = web3.eth.contract(abi);
        contractInstance = contract.at(contractAddress);

    } 
    else{
        // USER has no metamask do nothing
        console.log("no metamask");
        error();
}
var alertsound = new Audio('https://gandhiji.io/wp-content/uploads/2018/05/quite-impressed.mp3');
var eth1 = new Audio('https://gandhiji.io/wp-content/uploads/2018/05/quite-impressed.mp3');
eth1.volume = 0.3;
var eth10 = new Audio('https://gandhiji.io/wp-content/uploads/2018/05/quite-impressed.mp3');


var txhash = {};

function sound(eth){
    if (eth>=10){
        eth10.play()
    }
    else if (eth >= 1){
        eth1.play()
    }
    else{
        alertsound.play();
    }
}

var tot = 0;

function vol(eth){
    tot = tot + parseFloat(eth);

    document.getElementById("vol").innerHTML = tot + " ETH"
}




document.getElementById("normal").addEventListener("click", function(){sound(0)});
document.getElementById("eth1").addEventListener("click", function(){sound(1)});
document.getElementById("eth10").addEventListener("click", function(){sound(10)});

totdiv = 0;

function upd(){

    document.getElementById("totaldivs").innerHTML = parseFloat(totdiv) + " ETH"
}



contractInstance.totalEthereumBalance(function(error, result){
    if (!error){
        //totdiv = totdiv + web3.fromWei(result/5);
        //upd()
    }
})

var txhash = {};

function dostuff(result,eth, check){
    if (!check && txhash[result.transactionHash]){
        return;
    }
    txhash[result.transactionHash] = true;

    totdiv = parseFloat(totdiv)+parseFloat(web3.fromWei(eth));
    upd()
}


var blocknfirst
var blockn = web3.eth.getBlockNumber(function(error, latest_blockn){
    
var events =contractInstance.allEvents({fromBlock: BlockStart, toBlock: latest_blockn-1});


events.watch(function(error, result){

    if (result.event == "onTokenSell"){

        dostuff(result,result.args.ethereumEarned)
    }
    if (result.event == "onTokenPurchase"){
        var eth = result.args.incomingEthereum;

        dostuff(result,eth/2);
    }
    //if (result.event == )
})
})





contractInstance.onTokenPurchase(function(error, result){
    if (!error){
        if (txhash[result.transactionHash]){
            return; 
        }
        txhash[result.transactionHash]=true;

        var eth = web3.fromWei(result.args.incomingEthereum);
        sound(eth)
        vol(eth/5);
        log(eth + " ETH in (" + eth/2 + " ETH dividend shared over token holders!!)")
        dostuff(result,result.args.incomingEthereum/5,true)

    }
})





contractInstance.onTokenSell(function(error, result){
    if (!error){
                if (txhash[result.transactionHash]){
            return; 
        }
        txhash[result.transactionHash]=true;

        var eth = web3.fromWei(result.args.ethereumEarned);
        sound(eth);
        vol(eth)
        log(eth + " dividend earned for token holders because someone with strong math sold!")
        dostuff(result,result.args.ethereumEarned,true)
  
    }
})

