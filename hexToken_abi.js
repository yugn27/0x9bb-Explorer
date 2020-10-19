var sellPricegloble; 
var tokensample = [
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "tokenOwner",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "tokens",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            constant: false,
            inputs: [
              {
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "numTokens",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "numTokens",
                type: "uint256",
              },
            ],
            name: "transfer",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "tokens",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            constant: false,
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "numTokens",
                type: "uint256",
              },
            ],
            name: "transferFrom",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                internalType: "address",
                name: "delegate",
                type: "address",
              },
            ],
            name: "allowance",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                internalType: "address",
                name: "tokenOwner",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
              {
                internalType: "uint8",
                name: "",
                type: "uint8",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
        ];
//var tokensample = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"value","type":"uint256"}],"name":"allocateTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"reclaimToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
        //--------------------------------------------------------------------------------------------------------------------------

        var hexfomo = [
          {
            constant: true,
            inputs: [
              {
                name: "_customerAddress",
                type: "address",
              },
            ],
            name: "dividendsOf",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [
              {
                name: "",
                type: "string",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "",
                type: "address",
              },
            ],
            name: "isPlayer",
            outputs: [
              {
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "_hexToSpend",
                type: "uint256",
              },
            ],
            name: "calculateTokensReceived",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "potWinner",
            outputs: [
              {
                name: "",
                type: "address",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "onlyAmbassadors",
            outputs: [
              {
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [
              {
                name: "",
                type: "uint8",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "",
                type: "bytes32",
              },
            ],
            name: "administrators",
            outputs: [
              {
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [],
            name: "withdraw",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "_tokensToSell",
                type: "uint256",
              },
            ],
            name: "calculateHexReceived",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "hexToken",
            outputs: [
              {
                name: "",
                type: "address",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "sellPrice",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "stakingRequirement",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "_includeReferralBonus",
                type: "bool",
              },
            ],
            name: "myDividends",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [
              {
                name: "_customerAddress",
                type: "address",
              },
            ],
            name: "balanceOf",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_amountOfTokens",
                type: "uint256",
              },
            ],
            name: "setStakingRequirement",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "buyPrice",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_identifier",
                type: "bytes32",
              },
              {
                name: "_status",
                type: "bool",
              },
            ],
            name: "setAdministrator",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalDividendspaid",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "myTokens",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [
              {
                name: "",
                type: "string",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [],
            name: "disableInitialStage",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_toAddress",
                type: "address",
              },
              {
                name: "_amountOfTokens",
                type: "uint256",
              },
            ],
            name: "transfer",
            outputs: [
              {
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_symbol",
                type: "string",
              },
            ],
            name: "setSymbol",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_name",
                type: "string",
              },
            ],
            name: "setName",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "hexIn1",
                type: "uint256",
              },
            ],
            name: "buy",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: true,
            stateMutability: "payable",
            type: "function",
          },
          {
            constant: false,
            inputs: [
              {
                name: "_amountOfTokens",
                type: "uint256",
              },
            ],
            name: "sell",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [],
            name: "exit",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "potTime",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "jackpotFund",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalhexBalance",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: true,
            inputs: [],
            name: "totalPlayers",
            outputs: [
              {
                name: "",
                type: "uint256",
              },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
          },
          {
            constant: false,
            inputs: [],
            name: "claimPot",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            constant: false,
            inputs: [],
            name: "reinvest",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            payable: true,
            stateMutability: "payable",
            type: "fallback",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                name: "customerAddress",
                type: "address",
              },
              {
                indexed: false,
                name: "incominghex",
                type: "uint256",
              },
              {
                indexed: false,
                name: "tokensMinted",
                type: "uint256",
              },
              {
                indexed: true,
                name: "referredBy",
                type: "address",
              },
            ],
            name: "onTokenPurchase",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                name: "customerAddress",
                type: "address",
              },
              {
                indexed: false,
                name: "tokensBurned",
                type: "uint256",
              },
              {
                indexed: false,
                name: "hexEarned",
                type: "uint256",
              },
            ],
            name: "onTokenSell",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                name: "customerAddress",
                type: "address",
              },
              {
                indexed: false,
                name: "hexReinvested",
                type: "uint256",
              },
              {
                indexed: false,
                name: "tokensMinted",
                type: "uint256",
              },
            ],
            name: "onReinvestment",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                name: "customerAddress",
                type: "address",
              },
              {
                indexed: false,
                name: "hexWithdrawn",
                type: "uint256",
              },
            ],
            name: "onWithdraw",
            type: "event",
          },
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                name: "from",
                type: "address",
              },
              {
                indexed: true,
                name: "to",
                type: "address",
              },
              {
                indexed: false,
                name: "tokens",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
        ];
        
   // var hexfomo = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCReinvested","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"incomingWrappedBTC","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensMinted","type":"uint256"},{"indexed":true,"internalType":"address","name":"referredBy","type":"address"},{"indexed":false,"internalType":"bool","name":"isReinvest","type":"bool"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensBurned","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"customerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"wrappedBTCWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"administrators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_referredBy","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_wrappedBTCToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokensToSell","type":"uint256"}],"name":"calculateWrappedBTCReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"distribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bool","name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"onlyAmbassadors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWrappedBTCBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
      
      var fomo;
      var initialAccount;
      var hex;
      // var hexContractAddress = "0xc9c1c5583343944dba9bB72E5449854E72877D81";
      var hexContractAddress = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

      var hexTokenContract;
      window.addEventListener("load", async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
          //console.log("interface starting modern");
          window.web3 = new Web3(ethereum);
          try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({
              /* ... */
            });
          } catch (error) {
            // User denied account access...
          }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
          //console.log("legacydapp");
          window.web3 = new Web3(web3.currentProvider);
          // Acccounts always exposed
          web3.eth.sendTransaction({
            /* ... */
          });
        }
        // Non-dapp browsers...
        else {
          alert(
            "please ensure https://metamask.io/ is installed and connected "
          );
          web3 = new Web3("wss://rinkeby.infura.io/ws");
          //console.log(
          //  "Non-Ethereum browser detected. You should consider trying MetaMask!"
         // );
        }

        //-----------------------------------------------------------------------------------------------------------------------


        var hexFomoContract = "0x9bb4404231056B105aFCD2861E6b2F5284de5b97";

        fomo = web3.eth.contract(hexfomo).at(hexFomoContract);
        // hexTokenContract = web3.eth.contract(hexTokenAbi.abi).at(hexContractAddress);
        hexTokenContract = web3.eth
          .contract(tokensample)
          .at(hexContractAddress);

        //  = web3.eth.Contract(hexTokenAbi.abi, hexContractAddress);
        initialAccount = web3.eth.defaultAccount;
        /*document.getElementById("intialAccount").textContent =
          "Your Address " + initialAccount;*/
        window.setInterval(function () {
            main(); 
          
          if (web3.eth.defaultAccount !== initialAccount) {
            window.location.reload();
          }
        }, 500);

        //console.log("Default Acc", initialAccount);
        //console.log("Contract", fomo);
      });

      var buyprice = 0;
      var sellprice = 0;
      var tp;
      var hp;
      
      function main() {
        fomo.buyPrice.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          buyprice = result.toNumber();
         // document.getElementById("buyprice").textContent = buyprice / 1e14;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.totalPlayers.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          totalPlayers = result.toNumber();
          //document.getElementById("totalPlayers").textContent = totalPlayers;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.calculateTokensReceived.call(1e18, {}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          hp = result.toNumber();
          //  document.getElementById("sellPrice").textContent = sellPrice;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });


         hexTokenContract.allowance.call(initialAccount, '0x9bb4404231056B105aFCD2861E6b2F5284de5b97', {}, function (err, result) {
          if (err) return error(err);

        //console.log('awl',result.toNumber());
          hp = result.toNumber();
          if(hp > 1e8){
               $(".floating").hide();           
          }
          else{
                        $(".floating").show();  
          }
          //  document.getElementById("sellPrice").textContent = sellPrice;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });
        fomo.calculateHexReceived.call(1e18, {}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          tp = result.toNumber();
          //  document.getElementById("sellPrice").textContent = sellPrice;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.sellPrice.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          sellPrice = result.toNumber() / 1e14;
          //document.getElementById("sellPrice").textContent = sellPrice;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });
          
           hexTokenContract.balanceOf.call('0x9bb4404231056B105aFCD2861E6b2F5284de5b97',{}, function (err, result) {
          if (err) return error(err);

          sellPrice = result.toNumber() / 1e8;
          sellPricegloble = sellPrice
          //tosmallbtc = Number(sellPrice).toFixed(4)
           $('.contract-balance-btc').text(Number(sellPrice).toFixed(6))

           //$('.contract-balance-usd').text(Number(sellPrice).toFixed(2)).toLocaleString())

            


          //document.getElementById("contract-balance-btc").textContent = sellPrice;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });



        //Wbtc update on ui
        hexTokenContract.balanceOf.call(currentAddress,{}, function (err, result) {	
          if (err) return error(err);	
          sellPrice = result.toNumber() / 1e8;	
           $('.address-balance-btc').text(sellPrice.toFixed(8) + " WBTC")	
        });
          
          
          
          
          
        fomo.myTokens.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          myTokens = result.toNumber() / 1e14;
          //document.getElementById("myTokens").textContent = myTokens.toFixed(0);
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.totalDividendspaid.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          totalDividendspaid = result.toNumber() / 1e8;
          /*document.getElementById(
            "totalDividendspaid"
          ).textContent = totalDividendspaid.toFixed(2);*/
          // document.getElementById("getPotCost").textContent = getPotCost;
        });
        fomo.jackpotFund.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          jackpotFund = result.toNumber() / 1e18;
         /* document.getElementById(
            "jackpotFund"
          ).textContent = jackpotFund.toFixed(2);*/
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.potWinner.call({}, function (err, result) {
          if (err) return error(err);
          //console.log(result);
          potWinner = result.toString();
          //document.getElementById("potWinner").textContent = potWinner;
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.potTime.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          potTime = result.toNumber();
          //cooldowntimer(potTime);
        });

        fomo.totalSupply.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          totalSupply = result.toNumber() / 1e14;
          /*document.getElementById(
            "totalSupply"
          ).textContent = totalSupply.toFixed(0);*/
          // document.getElementById("getPotCost").textContent = getPotCost;
        });
        fomo.totalhexBalance.call({}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          totalEthereumBalance = result.toNumber() / 1e8;
         /* document.getElementById(
            "totalEthereumBalance"
          ).textContent = totalEthereumBalance.toFixed(2);*/
          // document.getElementById("getPotCost").textContent = getPotCost;
        });

        fomo.myDividends.call(true, {}, function (err, result) {
          if (err) return error(err);

          //console.log(result.toNumber());
          myDividends = result.toNumber() / 1e8;
          /*document.getElementById(
            "myDividends"
          ).textContent = myDividends.toFixed(2);*/
          // document.getElementById("getPotCost").textContent = getPotCost;
        });
      }
      $("#buy").on("keyup input", function () {
        var amt = document.getElementById("buy").value;
        var data = amt * 1e18;
        var buyest = (data * hp) / 1e18;
        /*document.getElementById("").textContent = (buyest / 1e18).toFixed(
          2
        );*/
      });

      function approveHex() {
        var data = 100000000000000*1e8;
        var hexFomoContract = "0x9bb4404231056B105aFCD2861E6b2F5284de5b97";
        hexTokenContract.approve.sendTransaction(
          hexFomoContract,
          data,
          {
            from: initialAccount,
          },
          function () {}
        );
      }
      $("#sell").on("keyup input", function () {
        var amt = document.getElementById("sell").value;
        var data = amt * 1e14;
        var myDividends = (data * sellPrice) / 1e14;
        //document.getElementById("estsell").textContent = myDividends.toFixed(2);
      });

      var a_godTimer = "";
      var godtimer_in_seconds = 0;
      var god_numhours = 0;
      var god_numminutes = 0;
      var god_numseconds = 0;

      var god_roundover = false;
      var godtimer_lastminute = 300;
      var i_godTimer = true;

     
      // Prevent the browser from POSTing the form.
      function reinvest() {
        fomo.reinvest.sendTransaction({}, function () {});
      }
      function withdraw() {
        fomo.withdraw.sendTransaction({}, function () {});
      }

      function buyToken() {
        var numberOfTokens = document.getElementById("buy").value;
        //console.log("number", numberOfTokens * 1e18);
        var amount = numberOfTokens * 1e8;

        fomo.buy.sendTransaction(amount, {}, function () {
          $("#confirm").show().delay(10000).hide(0);
        });
      }
      function sell() {
        var numberOfTokensell = document.getElementById("sell").value;
        //console.log("number", numberOfTokensell * 1e14);
        var tokento = numberOfTokensell * 1e14;
        fomo.sell.sendTransaction(
          tokento,
          {
            value: 0,
          },
          function () {
            // Nothing to do here. If the transaction is successful, it will trigger
            // events that we're already monitoring.
          }
        );
      }
