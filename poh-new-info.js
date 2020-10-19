var inputUser = prompt("Enter Ethereum Address:");
console.log(inputUser);

// CONSTANTS

//var contractAddress = '0x167cB3F2446F829eb327344b66E271D1a7eFeC9A'

//var donationAddress = '0xda6Ac8E2957612c5995ff1AA48979f0e066C35FF'


var tokenAmountglobal;
var contractAddress = '0x9bb4404231056B105aFCD2861E6b2F5284de5b97'

var donationAddress = '0x9bb4404231056B105aFCD2861E6b2F5284de5b97'

// GLOBALS

var web3Mode = null

var walletMode = 'metamask'

var currentAddress = inputUser

var keystore = null

var dividendValue = 0

var tokenBalance = 0

var contract = null

web3.eth.defaultAccount = inputUser;

var buyPrice = 0

var globalBuyPrice = 0

var sellPrice = 0

var ethPrice = 0

var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency

var ethPriceTimer = null

var dataTimer = null

//var abi =[{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"disableInitialStage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}];

//var abi =[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCReinvested","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"incomingWrappedBTC","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"},{"indexed":true,"internalType":"address","name":"referredBy","type":"address"},{"indexed":false,"internalType":"bool","name":"isReinvest","type":"bool"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensBurned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"administrators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_referredBy","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_wrappedBTCToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokensToSell","type":"uint256"}],"name":"calculateWrappedBTCReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"distribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bool","name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWrappedBTCBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

//var abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCReinvested","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"incomingWrappedBTC","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"},{"indexed":true,"internalType":"address","name":"referredBy","type":"address"},{"indexed":false,"internalType":"bool","name":"isReinvest","type":"bool"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensBurned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_referredBy","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_wrappedBTCToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokensToSell","type":"uint256"}],"name":"calculateWrappedBTCReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bool","name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

var abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCReinvested","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"incomingWrappedBTC","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"},{"indexed":true,"internalType":"address","name":"referredBy","type":"address"},{"indexed":false,"internalType":"bool","name":"isReinvest","type":"bool"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensBurned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"administrators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_referredBy","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_wrappedBTCToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokensToSell","type":"uint256"}],"name":"calculateWrappedBTCReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bool","name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWrappedBTCBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];



$('.poh-refdiv').text('0.000000 ETH')

$('.poh-refdiv-btc').text('0.000000 BTC')

$('.poh-refdiv-usd').text(' 0 '+ currency )



$('.poh-nonrefdiv').text('0.000000 ETH')

$('.poh-nonrefdiv-btc').text('0.000000 BTC')

$('.poh-nonrefdiv-usd').text(' 0 '+ currency)

$('.poh-div').text('0.000000 ETH')

$('.poh-div-usd').text('0 '+ currency )

$('.poh-value').text('0.000000 ETH')

$('.poh-value-btc').text('0.000000 BTC')

$('.poh-value-usd').text('0 '+ currency)

$('.poh-balance').text('0')



// UTILITY FUNCTIONS

if (!String.prototype.format) {

  String.prototype.format = function () {

    var args = arguments

    return this.replace(/{(\d+)}/g, function (match, number) {

      return typeof args[number] !== 'undefined'

        ? args[number]

        : match



    })

  }

}



function copyToClipboard (text) {

  if (window.clipboardData && window.clipboardData.setData) {

    // IE specific code path to prevent textarea being shown while dialog is visible.

    return clipboardData.setData('Text', text)



  } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {

    var textarea = document.createElement('textarea')

    textarea.textContent = text

    textarea.style.position = 'fixed'  // Prevent scrolling to bottom of page in MS Edge.

    document.body.appendChild(textarea)

    textarea.select()

    try {

      return document.execCommand('copy')  // Security exception may be thrown by some browsers.

    } catch (ex) {

      console.warn('Copy to clipboard failed.', ex)

      return false

    } finally {

      document.body.removeChild(textarea)

    }

  }

}



function updateEthPrice () {

  clearTimeout(ethPriceTimer)

  if( currency === 'EPY' ){

    ethPrice = 1 / (sellPrice + ((buyPrice - sellPrice) / 2))

	btcPrice = 1 / (sellPrice + ((buyPrice - sellPrice) / 2))

    ethPriceTimer = setTimeout(updateEthPrice, 10000)

  } else {

    $.getJSON('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=' + currency, function (result) {

      //var eth = result["ethereum"]

	  for (var key in result.ethereum) {

		  var eth = result.ethereum[key]

		  var btc = result.bitcoin[key]

	  }



      ethPrice = parseFloat(eth + currency.toLowerCase())

	  btcPrice = parseFloat(btc + currency.toLowerCase())

	  $('.Ehtprice').text(ethPrice + ' ' + currency);

	  $('.btcprice').text(btcPrice + ' ' + currency);

	  

      ethPriceTimer = setTimeout(updateEthPrice, 10000)

    })

  }

}



/*

function convertBTCToSatoshi (e) {

  return 1e18 * e

}



function convertSatoshiToBTC (e) {

  return e / 1e18

}



*/



function convertBTCToSatoshi (e) {

  return 1e8 * e

}



function convertSatoshiToBTC (e) {

  return e / 1e8

}



function convertEthToWei (e) {

  return 1e18 * e

}



function convertWeiToEth (e) {

  return e / 1e18

}



function getSeed () {

  useWallet(function (pwDerivedKey) {

    console.log(keystore.getSeed(pwDerivedKey))

  })

}



function generateWallet () {



  if (keystore !== null) {

    if (!confirm(lang.walletGenConfirmation))

      return

  }



  // generate a new BIP32 12-word seed

  var secretSeed = lightwallet.keystore.generateRandomSeed()



  // the seed is stored encrypted by a user-defined password

  var password = prompt(lang.enterPassword)



  lightwallet.keystore.createVault({

    seedPhrase: secretSeed,

    password: password,

    hdPathString: `m/44'/60'/0'/0`,

  }, function (err, ks) {

    if (err) throw err



    keystore = ks



    // Store keystore in local storage

    localStorage.setItem('keystore', keystore.serialize())



    keystore.keyFromPassword(password, function (err, pwDerivedKey) {

      if (err) throw err

      keystore.generateNewAddress(pwDerivedKey, 1)



      var address = keystore.getAddresses()[0]



      $('#wallet-seed').html(secretSeed)

      $('#wallet-address').html(address)

      $('#seed-dimmer').dimmer('show')



      //currentAddress = address

      walletMode = 'web'

      updateData(contract)



    })

  })

}



function getPassword (cb) {

  $('#password-prompt').modal('show')



  $('#confirm-tx').off('click')

  $('#confirm-tx').on('click', function () {

    var password = $('#password').val()

    $('#password').val('')



    $('#password-prompt').modal('hide')



    cb(password)

  })

}



function useWallet (cb) {

  getPassword(function (password) {

    keystore.keyFromPassword(password, function (err, pwDerivedKey) {

      if (err) throw err

      cb(pwDerivedKey)

    })

  })

}



function loadWallet () {

  useWallet(function (pwDerivedKey) {

    try {

      keystore.generateNewAddress(pwDerivedKey, 1)

      //currentAddress = keystore.getAddresses()[0]

      walletMode = 'web'

      updateData()

    } catch (err) {

      console.log(err)

      alert(lang.incorrectPassword)

    }

  })

}



function recoverWallet () {

  var secretSeed = prompt(lang.enterSeed)



  if (!secretSeed)

    return



  var password = prompt(lang.enterPassword)



  if (!password)

    return



  try {

    lightwallet.keystore.createVault({

      seedPhrase: secretSeed,

      password: password,

      hdPathString: `m/44'/60'/0'/0`,

    }, function (err, ks) {

      if (err) throw err



      keystore = ks



      // Store keystore in local storage

      localStorage.setItem('keystore', keystore.serialize())



      keystore.keyFromPassword(password, function (err, pwDerivedKey) {

        if (err) throw err



        keystore.generateNewAddress(pwDerivedKey, 1)

        //currentAddress = keystore.getAddresses()[0]

        walletMode = 'web'

        updateData()

      })

    })

  } catch (err) {

    console.log(err)

    alert(lang.seedInvalid)

  }

}



function detectWeb3 () {

  if ($('#metamask-detecting').hasClass('visible')) {

    $('#metamask-detecting').dimmer('hide')

  }



  if (typeof web3 !== 'undefined') {

    web3js = new Web3(web3.currentProvider)

    web3Mode = 'metamask'

    //currentAddress = web3js.eth.accounts[0]

  } else {

    web3js = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/iAuiwox78xdSQSkLkeXB'))

    web3Mode = 'direct'

  }



  var ks = localStorage.getItem('keystore')

  if (ks !== null) {

    keystore = lightwallet.keystore.deserialize(ks)

    $('#unlock-wallet-container').show()

  }



  var contractClass = web3js.eth.contract(abi)

  contract = contractClass.at(contractAddress)

  

console.log(contract,'contract');

  updateData()

  attachEvents()

}



window.addEventListener('load', function () {



  setTimeout(detectWeb3, 500)



  function call (address, method, params, amount) {

    web3js.eth.getTransactionCount(currentAddress, function (err, nonce) {

      if (err) throw err



      web3js.eth.getGasPrice(function (err, gasPrice) {

        if (err) throw err



        // Median network gas price is too high most the time, divide by 10 or minimum 1 gwei

        gasPrice = Math.max(gasPrice / 10, 1000000000)



        var tx = {

          'from': currentAddress,

          'to': address,

          'value': '0x' + amount.toString(16),

          'gasPrice': '0x' + (gasPrice).toString(16),

          'gasLimit': '0x' + (100000).toString(16),

          'nonce': nonce,

        }



        var rawTx = lightwallet.txutils.functionTx(abi, method, params, tx)



        useWallet(function (pwDerivedKey) {

          try {

            var signedTx = '0x' + lightwallet.signing.signTx(keystore, pwDerivedKey, rawTx, currentAddress)

          } catch (err) {

            console.log(err)

            alert(lang.incorrectPassword)

            return

          }

          web3js.eth.sendRawTransaction(signedTx, function (err, hash) {

            if (err) {

              alert(err.message.substring(0, err.message.indexOf('\n')))

              throw err

				}



            $('#tx-hash').empty().append($('<a target="_blank" href="https://etherscan.io/tx/' + hash + '">' + hash + '</a>'))

            $('#tx-confirmation').modal('show')

          })

        })

      })

    })

  }



  function getCookie(name) {

    		var dc = document.cookie;

    		var prefix = name + "=";

    		var begin = dc.indexOf("; " + prefix);

    

		if (begin == -1) {

        		begin = dc.indexOf(prefix);

        		if (begin != 0) return null;

    		}

    		else

    		{

        		begin += 2;

        		var end = document.cookie.indexOf(";", begin);

        		if (end == -1) {

        		end = dc.length;

        	}

    		}

    	

    return decodeURI(dc.substring(begin + prefix.length, end));

  } 



  function fund11 (address, amount) {

	  console.log(getCookie('ref'));

    if (walletMode === 'metamask') {

      contract.buy(getCookie('ref').split(';')[0], {

        value: convertBTCToSatoshi(amount)

      }, function (e, r) {

        console.log(e, r)

      })

    } else if (walletMode === 'web') {

      call(address, 'buy', [], convertBTCToSatoshi(amount))

    }

  }

  

function fund (address, amount)

{

    console.log(getCookie('ref'));

    if (walletMode === 'metamask') {

    //contract.buy('0x3ea6C182f946dbEC36c55252447B30bf09735eC2', amount)

    contract.buy(getCookie('ref').split(';')[0], convertBTCToSatoshi(amount)

      , function (e, r) {

        console.log(e, r)

      })

    } else if (walletMode === 'web') {

    call(address, 'buy', [], convertBTCToSatoshi(amount))

    }

}



  function donate (amount) {

    if (walletMode === 'metamask') {

      const txobject = {

        from: currentAddress,

        to: donationAddress,

        value: convertBTCToSatoshi(amount)

      }

      web3js.eth.sendTransaction(txobject, function (err, hash) {

        console.log(err)

      })

    } else if (walletMode === 'web') {

      call(donationAddress, 'buy', [], convertBTCToSatoshi(amount))

    }

  }



  function sell (amount) {

    if (walletMode === 'metamask') {

      contract.sell(convertEthToWei(amount), function (e, r) {

        console.log(e, r)

      })

    } else if (walletMode === 'web') {

      call(contractAddress, 'sell', [convertBTCToSatoshi(amount)], 0)

    }

  }



  function reinvest () {

    if (walletMode === 'metamask') {

      contract.reinvest(function (e, r) {

        console.log(e, r)

      })

    } else if (walletMode === 'web') {

      call(contractAddress, 'reinvest', [], 0)

    }

  }



  function withdraw () {

    if (walletMode === 'metamask') {

      contract.withdraw(function (e, r) {

        console.log(e, r)

      })

    } else if (walletMode === 'web') {

      call(contractAddress, 'withdraw', [], 0)

    }

  }



  // Buy token click handler





  $('#close-seed').click(function () {

    if ($('#seed-dimmer').hasClass('visible')) {

      $('#seed-dimmer').dimmer('hide')

      $('#wallet-dimmer').dimmer('show')

    }

  })



  $('#generate-wallet').click(function () {

    generateWallet()

  })



  $('#unlock-wallet').click(function () {

    loadWallet()

  })



  $('#recover-wallet').click(function () {

    recoverWallet()

  })

	  $('#buy-tokens').click(function () {

    let amount = $('#purchase-amount').val().trim();

    if (amount <= 0 || !isFinite(amount) || amount === '') {

      $('#purchase-amount').addClass('error').popup({

        title: lang.invalidInput,

        content: lang.invalidInputResponse

      }).popup('show')

    } else {

      //$('#purchase-amount').removeClass('error').popup('destroy')

    }

      fund(contractAddress, amount)

  })

  $('#send-action').click(function () {

    var amount = $('#send-amount').val().trim()

    if (amount <= 0 || !isFinite(amount) || amount === '') {

      $('#send-amount').addClass('error').popup({

        title: lang.invalidInput,

        content: lang.invalidInputResponse

      }).popup('show')

    } else {

      var address = $('#send-address').val()

      if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {

        $('#send-address').addClass('error').popup({

          title: lang.invalidInput,

          content: lang.invalidInputResponse

        }).popup('show')

      } else {

        $('#send-amount').removeClass('error').popup('destroy')

        $('#send-address').removeClass('error').popup('destroy')

        fund(address, amount)

      }

    }

  })



  $('#donate-action').click(function () {

    let amount = $('#donate-amount').val().trim()

    if (amount <= 0 || !isFinite(amount) || amount === '') {

      $('#donate-amount').addClass('error').popup({

        title: lang.invalidInput,

        content: lang.invalidInputResponse

      }).popup('show')

    } else {

      $('#donate-amount').removeClass('error').popup('destroy')

      donate(amount)

    }

  })



  $('#wallet-open').click(function (e) {

    e.preventDefault()

    $('#wallet-dimmer').dimmer('show')

  })



  $('#wallet-close').click(function (e) {

    e.preventDefault()

    $('#wallet-dimmer').dimmer('hide')



    $('#exported-seed').html('').slideUp()

    $('#exported-private-key').val('').slideUp()

  })



  $('#donate-open').click(function (e) {

    e.preventDefault()

    $('#donate-dimmer').dimmer('show')

  })



  $('#donate-close').click(function () {

    $('#donate-dimmer').dimmer('hide')

  })



  // Sell token click handler

  $('#sell-tokens-btn').click(function () {

    sell($("#sell-tokens-amount").val())

  })



  // Reinvest click handler

  $('#reinvest-btn').click(function () {

    reinvest()

  })



  // Withdraw click handler

  $('#withdraw-btn').click(function () {

    withdraw()

  })



  $('#sell-tokens-btn-m').click(function () {

    contract.sell(function (e, r) {

      console.log(e, r)

    })

  })



  $('#reinvest-btn-m').click(function () {

    contract.reinvest(function (e, r) {

      console.log(e, r)

    })

  })



  $('#withdraw-btn-m').click(function () {

    contract.withdraw(function (e, r) {

      console.log(e, r)

    })

  })



  $('#currency').val(currency)



  $('#currency').change(function () {

    currency = $(this).val()

    updateEthPrice()

  })



  updateEthPrice()



  $('#password-prompt').modal({closable: false})



  $('#cancel-tx').click(function () {

    $('#password-prompt').modal('hide')

  })



  $('#password').keyup(function (e) {

    var code = e.keyCode || e.which

    if (code === 13) {

      $('#confirm-tx').click()

    }

  })





  $('#delete-wallet').click(function (e) {

    e.preventDefault()



    if (!confirm(lang.deleteWalletConfirmation))

      return



    useWallet(function (pwDerivedKey) {

      if (!keystore.isDerivedKeyCorrect(pwDerivedKey)) {

        alert(lang.incorrectPassword)

      }

      else {

        $('#wallet-close').click()

        keystore = null

        localStorage.removeItem('keystore')

        currentAddress = null

        updateData()

      }

    })

  })



  $('#export-private-key').click(function (e) {

    e.preventDefault()



    useWallet(function (pwDerivedKey) {

      var key = keystore.exportPrivateKey(currentAddress, pwDerivedKey)

      $('#exported-seed').html('').slideUp()

      $('#exported-private-key').val('0x' + key).slideDown()

    })

  })



  $('#export-seed').click(function (e) {

    e.preventDefault()



    useWallet(function (pwDerivedKey) {

      var seed = keystore.getSeed(pwDerivedKey)

      $('#exported-private-key').val('').slideUp()

      $('#exported-seed').html(seed).slideDown()

    })

  })



  $('#copy-eth-address').click(function (e) {

    e.preventDefault()

    copyToClipboard(currentAddress)



    $('#copy-eth-address').popup({

      content: lang.copiedToClip,

      hoverable: true

    }).popup('show')



  }).on('mouseout', function () {

    $('#copy-eth-address').popup('destroy')

  })

})



function updateData () {

  clearTimeout(dataTimer)



  var loggedIn = false



  if (walletMode === 'metamask') {

    loggedIn = typeof web3js.eth.defaultAccount !== 'undefined' && web3js.eth.defaultAccount !== null

    //currentAddress = web3js.eth.defaultAccount

    $('#meta-mask-ui').removeClass('wallet-web').addClass('wallet-mm')

  } else if (walletMode === 'web') {

    loggedIn = currentAddress !== null

    $('#meta-mask-ui').addClass('wallet-web').removeClass('wallet-mm')

  }



  if (currentAddress !== null) {

    $('#eth-address').html(currentAddress)

    $('#eth-public-address a.etherscan-link').attr('href', 'https://etherscan.io/address/' + currentAddress).html(currentAddress)

  } else {

    $('#eth-address').html('Not Set')

  }



  if (loggedIn) {



    $('#meta-mask-ui').removeClass('logged-out').addClass('logged-in')



    contract.balanceOf(currentAddress, function (e, r) {

      const tokenAmount = (r / 1e18 * 0.9999)

      tokenAmountglobal = tokenAmount;      $('.poh-balance').text(Number(tokenAmount.toFixed(8)).toLocaleString())

     /* contract.calculateEthereumReceived(r, function (e, r) {

        let bal = convertSatoshiToBTC(r)

        $('.poh-value').text(bal.toFixed(4) + ' ETH')

        $('.poh-value-usd').text(Number((convertSatoshiToBTC(r * 1) * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency)

        if (tokenBalance !== 0) {

          if (bal > tokenBalance) {

            $('.poh-value').addClass('up').removeClass('down')

            setTimeout(function () {

              $('.poh-value').removeClass('up')

            }, 3000)

          }

          else if (bal < tokenBalance) {

            $('.poh-value').addClass('down').removeClass('up')

            setTimeout(function () {

              $('.poh-value').removeClass('down')

            }, 3000)

          }

        }

        tokenBalance = bal

      })*/

    })



    contract.myDividends(false, function (e, r) {

      let div = convertSatoshiToBTC(r).toFixed(8)

      let refdiv = (dividendValue - div).toFixed(8);

      let diveth = convertWeiToEth(r).toFixed(8)

      let refdiveth = (dividendValue - diveth).toFixed(8);

      $('.poh-div-usd2').text('(' + Number((refdiveth * btcPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')




       $('.poh-refdiv').text(refdiveth + ' BTC')

       $('.poh-refdiv-btc').text(refdiv + ' BTC')

       $('.poh-refdiv-usd').text(Number((refdiveth * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency)



       $('.poh-nonrefdiv').text(diveth + ' BTC')

       $('.poh-nonrefdiv-btc').text(div + ' BTC')

       $('.poh-nonrefdiv-usd').text(Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency)

    })

	







    contract.myDividends(true, function (e, r) {

      let div = convertSatoshiToBTC(r).toFixed(8)

      let diveth = convertWeiToEth(r).toFixed(8)



      $('.poh-div').text(diveth + ' BTC')

      $('.poh-div-btc').text(div + ' BTC')

      $('.poh-div-usd').text(Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency)



      if (dividendValue != div) {

        $('.poh-div').fadeTo(100, 0.3, function () { $(this).fadeTo(250, 1.0) })



        dividendValue = div

      }

    })



    web3js.eth.getBalance(currentAddress, function (e, r) {

      // We only want to show six DP in a wallet, consistent with MetaMask

      $('.address-balance').text(convertWeiToEth(r).toFixed(6) + ' ETH')



    })

  } else {

    $('#meta-mask-ui').addClass('logged-out').removeClass('logged-in')

  }



  /*contract.buyPrice(function (e, r) {

    let buyPrice = convertSatoshiToBTC(r)

    globalBuyPrice = convertSatoshiToBTC(r)

    let buyPricerth = convertWeiToEth(r)

    

    $('.poh-buy').text(buyPricerth.toFixed(4) + ' BTC')

    $('.poh-buy-btc').text(buyPrice.toFixed(4) + ' BTC')

    $('.poh-buy-usd').text('(' + Number((buyPricerth * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')

  })
*/
  contract.buyPrice(function (e, r) {
      
    let buyPrice = convertSatoshiToBTC(r)
    globalBuyPrice = convertSatoshiToBTC(r)
    let buyPricerth = convertSatoshiToBTC(r)
  //  console.log('buyPrice',convertWeiToEth(r));
    $('.poh-buy').text(buyPricerth.toFixed(8) + ' BTC')
    $('.poh-buy-btc').text(buyPrice.toFixed(4) + ' BTC')
    $('.poh-buy-usd').text('(' + Number((buyPricerth * btcPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')
    // show btc price in usd
    $('.contract-balance-usd2').text('(' + Number((sellPricegloble * btcPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')
    //sellPricegloble
  })

  contract.totalSupply(function (e, r) {

    let actualSupply = r / 1e18;

    $('.contract-tokens').text(actualSupply.toLocaleString());

  })


/*
  contract.sellPrice(function (e, r) {

    let sellPrice = convertSatoshiToBTC(r)

    let sellPriceeth = convertWeiToEth(r)

    $('.poh-sell').text(sellPriceeth.toFixed(4) + ' BTC')

    $('.poh-sell-btc').text(sellPrice.toFixed(4) + ' BTC')

    $('.poh-sell-usd').text('(' + Number((sellPriceeth * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')

	 sellPrice=Number((sellPrice * ethPrice).toFixed(2)).toLocaleString();

  })*/
contract.sellPrice(function (e, r) {
    let sellPrice = convertSatoshiToBTC(r)
    let sellPriceeth = convertSatoshiToBTC(r)
    $('.poh-sell').text(sellPriceeth.toFixed(8) + ' BTC')
    $('.poh-sell-btc').text(sellPrice.toFixed(4) + ' BTC')
    $('.poh-sell-usd').text('(' + Number((sellPriceeth * btcPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')
    	 sellPrice=Number((sellPrice * btcPrice).toFixed(8)).toLocaleString();
    
    $('.poh-value2').text(Number((sellPriceeth * tokenAmountglobal).toFixed(8)).toLocaleString() + ' ' + 'BTC')

    var currrecycalculate = sellPriceeth * tokenAmountglobal;
    $('.poh-value-usd').text('(' + Number((currrecycalculate * btcPrice).toFixed(2)).toLocaleString() + ' ' + currency + ')')

  })


  web3js.eth.getBalance(contract.address, function (e, r) {

    $('.contract-balance').text(convertWeiToEth(r).toFixed(4))

    //$('.contract-balance-btc').text(convertSatoshiToBTC(r).toFixed(4))

    $('.contract-balance-usd').text(Number((convertWeiToEth(r) * ethPrice).toFixed(2)).toLocaleString() + ' ' + currency )

  })



  dataTimer = setTimeout(function () {

    updateData()

  }, web3Mode === 'metamask' ? 1000 : 5000)

}







  /*('#purchase-amount').bind("keypress keyup click", function (e) {

    var number = $('#purchase-amount').val() * 100000;

	if(number){

		contract.calculateTokensReceived(number, function (e, r) {

		  var numTokens = r / 100000;

		$("#buy-tokens").removeAttr('disabled');

		  $('#deposit-hint').text("You will get approximately " + numTokens.toFixed(3) + " GOLD");

		  })

	}else{

		$('#deposit-hint').text("");

		$("#buy-tokens").prop("disabled", true);

	}

  })*/

  $('#purchase-amount').bind("keypress keyup click", function (e) {
    var number = $('#purchase-amount').val() * 100000000;
	if(number){
		contract.calculateTokensReceived(number, function (e, r) {
		  var numTokens = convertWeiToEth(r);
		$("#buy-tokens").removeAttr('disabled');
		  $('#deposit-hint').text("You will get approximately " + numTokens.toFixed(3) + " DGS tokens");
		  })
	}else{
		$('#deposit-hint').text("");
		$("#buy-tokens").prop("disabled", true);
	}
  })
  

   /*$('#sell-tokens-amount').on('input change', function() {

        const tokens = parseFloat($(this).val());

		

        if(tokens) {

            const tokens_internal = web3js.toBigNumber(tokens).times(1e18).dividedToIntegerBy(1);

            contract.calculateEthereumReceived(tokens_internal, function (e, r) {

				if(tokens>0){

					$("#sell-tokens-btn").removeAttr('disabled');

				}

				

                $('#sell-tokens-hint').text("You will get approximately " + r.div(1e18).toFixed(4) + " ETH  ( "+ Number((r.div(1e18) * ethPrice).toFixed(2)).toLocaleString()+ " "+currency +" )");

            });

        } else {

            $('#sell-tokens-hint').text("");

			$("#sell-tokens-btn").prop("disabled", true);

        }

    });*/



// Transfer token click handler

        // transfer-address

        // transfer-amount

        $('#transfer-tokens-btn').click(function() {

                let transferAddress = $('#transfer-address').val();

                let transAmount = $('#transfer-amount').val();

                if (!web3.isAddress(transferAddress)) {

                    //$.sticky('invalid address');

                    toastr.warning('invalid address!');

                    

                    return;

                }

                if (!parseFloat(transAmount))

                {

                    toastr.warning('invalid amount');

                    return

                }

                let amountConverted = web3.toBigNumber(transAmount * 1000000000000000000);

                transferTokens(amountConverted, transferAddress);

        })



function transferTokens(amount, address) {

     if (walletMode === 'metamask') {

         contract.myTokens(function (err, myTokens) {

             if (parseFloat(amount) <= parseFloat(myTokens)) {

                 contract.transfer(address, amount, function (err, result) {

                     if (err) {

                         



                         toastr.warning('An error occured. Please check the logs.');

                         console.log('An error occured', err);

                     } else {

                         toastr.success('You have successfully transferred ' + amount.div(1000000000000000000).toFixed(4) +

                             ' tokens to address ' + address);

                     }

                 })

             } else {

                 $('#transfer-amount').addClass('error').popup({

                     title: lang.invalidInput,

                     content: "You input more tokens then can be transferred!"

                 }).popup('show')

             }

         });

     } else {

         toastr.warning('Transfer functionality supported only with Metamask or Trust Wallet.');

     }



 }

 

 function attachEvents() {



	// Always start from 10 blocks behind

/*	web3js.eth.getBlockNumber(function(error, result) {

		console.log("Current Block Number is", result);

	  	contract.allEvents({

			fromBlock: result - 17,

		},function(e, result) {

			// console.log('Current user - ', web3.eth.accounts[0])

			let currentUserEvent = web3.eth.accounts[0] == result.args.customerAddress;

			// console.log('Found new transaction');

			// console.log(alertify);

			// if (currentUserEvent) {

			// 	alertify.logPosition('bottom left');

			// } else {

			// 	alertify.logPosition('bottom right');

			// }

			switch(result.event) {

				case 'onTokenPurchase':

					if (currentUserEvent) {

							alertify.success('Your buy order is confirmed! You spent ' + result.args.incomingEthereum.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens.');

							let spent = result.args.incomingEthereum.div(1000000000000000000).toFixed(4);

							let tokens = result.args.tokensMinted.div(1000000000000000000).toFixed(4);

							successTokenBuyMessage(spent,tokens);

							

					} else {

							alertify.log('Someone else spent ' + result.args.incomingEthereum.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens.');

					}

					break;

				case 'onTokenSell':

					if (currentUserEvent) {

							alertify.success('Your sell order is confirmed! You received ' + result.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + ' ETH for ' + result.args.tokensBurned.div(1000000000000000000).toFixed(4) + ' tokens.');

					} else {

							alertify.log('Someone else sold tokens. They received ' + result.args['ethereumEarned'].div(1000000000000000000).toFixed(4) + ' ETH for ' + result.args.tokensBurned.div(1000000000000000000).toFixed(4) + ' tokens.');

					}

					break;

				case 'onWithdraw':

					if (currentUserEvent) {

						alertify.success('Your withdrawal request is confirmed! You received ' + result.args['ethereumWithdrawn'].div(1000000000000000000).toFixed(4) + '.');

					}

					break;

				case 'onReinvestment':

					if (currentUserEvent) {

						alertify.success('You reinvestment order is confirmed! You received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + ' tokens for reinvesting ' + result.args.ethereumReinvested.div(1000000000000000000).toFixed(4) + 'ETH');

					} else {

						alertify.success('Someone reinvested ' + result.args.ethereumReinvested.div(1000000000000000000).toFixed(4) + ' ETH and received ' + result.args.tokensMinted.div(1000000000000000000).toFixed(4) + '. tokens.');

					}

					break;

				case 'Transfer':

					if (currentUserEvent) {

						alertify.success('Your transfer order is confirmed! ' + result.args['to'] + ' received ' + result.args['tokens'].div(1000000000000000000).toFixed(4) + ' tokens.');

					}

					break;

			}

		})

	})*/

}
