"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IMarginEngine",
                name: "_masterMarginEngine",
                type: "address",
            },
            {
                internalType: "contract IVAMM",
                name: "_masterVAMM",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "AavePoolGetReserveNormalizedIncomeReturnedZero",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "unlocked",
                type: "bool",
            },
        ],
        name: "CanOnlyTradeIfUnlocked",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "marginRequirement",
                type: "uint256",
            },
        ],
        name: "CannotLiquidate",
        type: "error",
    },
    {
        inputs: [],
        name: "CannotSettleBeforeMaturity",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "y",
                type: "uint256",
            },
        ],
        name: "DebugError",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amount0",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "amount1",
                type: "int256",
            },
        ],
        name: "ExpectedOppositeSigns",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "ExpectedSqrtPriceZeroBeforeInit",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "amountSpecified",
                type: "int256",
            },
        ],
        name: "IRSNotionalAmountSpecifiedMustBeNonZero",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidMarginDelta",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInBurn",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "LiquidityDeltaMustBePositiveInMint",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginLessThanMinimum",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
            {
                internalType: "int24",
                name: "tick",
                type: "int24",
            },
            {
                internalType: "int256",
                name: "fixedTokenDelta",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "variableTokenDelta",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "cumulativeFeeIncurred",
                type: "uint256",
            },
            {
                internalType: "int256",
                name: "fixedTokenDeltaUnbalanced",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMet",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "marginRequirement",
                type: "int256",
            },
        ],
        name: "MarginRequirementNotMetFCM",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requested",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "available",
                type: "uint256",
            },
        ],
        name: "NotEnoughFunds",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyFCM",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyMarginEngine",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyOwnerCanUpdatePosition",
        type: "error",
    },
    {
        inputs: [],
        name: "OnlyVAMM",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNetZero",
        type: "error",
    },
    {
        inputs: [],
        name: "PositionNotSettled",
        type: "error",
    },
    {
        inputs: [],
        name: "WithdrawalExceedsCurrentMargin",
        type: "error",
    },
    {
        inputs: [],
        name: "closeToOrBeyondMaturity",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "isApproved",
                type: "bool",
            },
        ],
        name: "ApprovalSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "contract IERC20Minimal",
                name: "underlyingToken",
                type: "address",
            },
            {
                indexed: true,
                internalType: "contract IRateOracle",
                name: "rateOracle",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termStartTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "termEndTimestampWad",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "int24",
                name: "tickSpacing",
                type: "int24",
            },
            {
                indexed: false,
                internalType: "contract IMarginEngine",
                name: "marginEngine",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract IVAMM",
                name: "vamm",
                type: "address",
            },
            {
                indexed: false,
                internalType: "contract IFCM",
                name: "fcm",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "IrsInstanceDeployed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "contract IFCM",
                name: "masterFCMAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "MasterFCMSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "contract IERC20Minimal",
                name: "_underlyingToken",
                type: "address",
            },
            {
                internalType: "contract IRateOracle",
                name: "_rateOracle",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_termStartTimestampWad",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_termEndTimestampWad",
                type: "uint256",
            },
            {
                internalType: "int24",
                name: "_tickSpacing",
                type: "int24",
            },
        ],
        name: "deployIrsInstance",
        outputs: [
            {
                internalType: "contract IMarginEngine",
                name: "marginEngineProxy",
                type: "address",
            },
            {
                internalType: "contract IVAMM",
                name: "vammProxy",
                type: "address",
            },
            {
                internalType: "contract IFCM",
                name: "fcmProxy",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "isApproved",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        name: "masterFCMs",
        outputs: [
            {
                internalType: "contract IFCM",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterMarginEngine",
        outputs: [
            {
                internalType: "contract IMarginEngine",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "masterVAMM",
        outputs: [
            {
                internalType: "contract IVAMM",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "intAddress",
                type: "address",
            },
            {
                internalType: "bool",
                name: "allowIntegration",
                type: "bool",
            },
        ],
        name: "setApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IFCM",
                name: "_masterFCM",
                type: "address",
            },
            {
                internalType: "uint8",
                name: "_yieldBearingProtocolID",
                type: "uint8",
            },
        ],
        name: "setMasterFCM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IMarginEngine",
                name: "_masterMarginEngine",
                type: "address",
            },
        ],
        name: "setMasterMarginEngine",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IVAMM",
                name: "_masterVAMM",
                type: "address",
            },
        ],
        name: "setMasterVAMM",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161179138038061179183398101604081905261002f916100b9565b61003833610069565b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905561010a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100cb578182fd5b82516100d6816100f2565b60208401519092506100e7816100f2565b809150509250929050565b6001600160a01b038116811461010757600080fd5b50565b611678806101196000396000f3fe60806040523480156200001157600080fd5b5060043610620000b25760003560e01c80630e8a064814620000b7578063715018a614620000fd5780638da5cb5b146200010957806394a9b1f7146200012257806395858f981462000139578063973cd93114620001505780639fe1b3541462000167578063a389783e146200017b578063ca5183b714620001bd578063db9b717014620001e9578063f2fde38b1462000200578063febfe75e1462000217575b600080fd5b620000ce620000c836600462000d54565b6200022b565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b6200010762000889565b005b62000113620008cb565b604051620000f4919062000e2e565b620001076200013336600462000c9d565b620008da565b620001076200014a36600462000dbe565b62000994565b620001076200016136600462000c9d565b62000a85565b60015462000113906001600160a01b031681565b620001ac6200018c36600462000ce2565b600460209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001620000f4565b62000113620001ce36600462000df0565b6003602052600090815260409020546001600160a01b031681565b62000107620001fa36600462000d1f565b62000b3e565b620001076200021136600462000c9d565b62000b9e565b60025462000113906001600160a01b031681565b60008080336200023a620008cb565b6001600160a01b0316146200026c5760405162461bcd60e51b8152600401620002639062000e65565b60405180910390fd5b6001546040516000916001600160a01b0316906200028a9062000c8f565b62000296919062000e42565b604051809103906000f080158015620002b3573d6000803e3d6000fd5b506002546040519192506000916001600160a01b0390911690620002d79062000c8f565b620002e3919062000e42565b604051809103906000f08015801562000300573d6000803e3d6000fd5b5060405163eb990c5960e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90529192509083169063eb990c5990608401600060405180830381600087803b1580156200035f57600080fd5b505af115801562000374573d6000803e3d6000fd5b5050604051631b325b2160e31b81526001600160a01b03858116600483015260028a900b60248301528416925063d992d9089150604401600060405180830381600087803b158015620003c657600080fd5b505af1158015620003db573d6000803e3d6000fd5b50506040516331d81ea760e21b81526001600160a01b038516925063c7607a9c91506200040d90849060040162000e2e565b600060405180830381600087803b1580156200042857600080fd5b505af11580156200043d573d6000803e3d6000fd5b5050505060008990508a6001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200048a57600080fd5b505afa1580156200049f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004c5919062000cc3565b6001600160a01b031614620005135760405162461bcd60e51b81526020600482015260136024820152720a8ded6cadce640c8de40dcdee840dac2e8c6d606b1b604482015260640162000263565b6000816001600160a01b031663dd9d05d16040518163ffffffff1660e01b815260040160206040518083038186803b1580156200054f57600080fd5b505afa15801562000564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200058a919062000e0f565b60ff81166000908152600360205260408120549192506001600160a01b039091169081156200071a5781604051620005c29062000c8f565b620005ce919062000e42565b604051809103906000f080158015620005eb573d6000803e3d6000fd5b5060405163485cc95560e01b81526001600160a01b03878116600483015288811660248301529192509082169063485cc95590604401600060405180830381600087803b1580156200063c57600080fd5b505af115801562000651573d6000803e3d6000fd5b505060405163534d337560e01b81526001600160a01b038916925063534d337591506200068390849060040162000e2e565b600060405180830381600087803b1580156200069e57600080fd5b505af1158015620006b3573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038416925063f2fde38b9150620006e590339060040162000e2e565b600060405180830381600087803b1580156200070057600080fd5b505af115801562000715573d6000803e3d6000fd5b505050505b8c6001600160a01b03168e6001600160a01b03167f500781bba4ad6f1bf0c19c292590fadbc7485e159320b34f7f289a41bb2104bb8e8e8e8b8b888b604051620007a69796959493929190968752602087019590955260029390930b60408601526001600160a01b039182166060860152811660808501521660a083015260ff1660c082015260e00190565b60405180910390a360405163f2fde38b60e01b81526001600160a01b0386169063f2fde38b90620007dc90339060040162000e2e565b600060405180830381600087803b158015620007f757600080fd5b505af11580156200080c573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038916925063f2fde38b91506200083e90339060040162000e2e565b600060405180830381600087803b1580156200085957600080fd5b505af11580156200086e573d6000803e3d6000fd5b50979a50959850909650505050505050955095509592505050565b3362000894620008cb565b6001600160a01b031614620008bd5760405162461bcd60e51b8152600401620002639062000e65565b620008c9600062000c3f565b565b6000546001600160a01b031690565b33620008e5620008cb565b6001600160a01b0316146200090e5760405162461bcd60e51b8152600401620002639062000e65565b6001600160a01b0381166200095f5760405162461bcd60e51b81526020600482015260166024820152751b585cdd195c881d985b5b481b5d5cdd08195e1a5cdd60521b604482015260640162000263565b6002546001600160a01b038281169116146200099157600280546001600160a01b0319166001600160a01b0383161790555b50565b336200099f620008cb565b6001600160a01b031614620009c85760405162461bcd60e51b8152600401620002639062000e65565b6001600160a01b03821662000a185760405162461bcd60e51b81526020600482015260156024820152741b585cdd195c881998db481b5d5cdd08195e1a5cdd605a1b604482015260640162000263565b60ff811660008181526003602090815260409182902080546001600160a01b0319166001600160a01b0387169081179091558251908152908101929092527f6b2ce997059b28c261cab8466dec3834f8e8a65929bab9c7e9d1f26b225445c7910160405180910390a15050565b3362000a90620008cb565b6001600160a01b03161462000ab95760405162461bcd60e51b8152600401620002639062000e65565b6001600160a01b03811662000b085760405162461bcd60e51b81526020600482015260146024820152731b585cdd195c881b59481b5d5cdd08195e1a5cdd60621b604482015260640162000263565b6001546001600160a01b038281169116146200099157600180546001600160a01b0383166001600160a01b031990911617905550565b3360008181526004602090815260408083206001600160a01b0387168085529252808320805460ff19168615159081179091559051909391927f3ab6a6aa00eb6098930ab1be82a402b963c135ffa8bd2ad34958569d6c7c9cc691a45050565b3362000ba9620008cb565b6001600160a01b03161462000bd25760405162461bcd60e51b8152600401620002639062000e65565b6001600160a01b03811662000c395760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000263565b62000991815b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6107828062000ec183390190565b60006020828403121562000caf578081fd5b813562000cbc8162000e9a565b9392505050565b60006020828403121562000cd5578081fd5b815162000cbc8162000e9a565b6000806040838503121562000cf5578081fd5b823562000d028162000e9a565b9150602083013562000d148162000e9a565b809150509250929050565b6000806040838503121562000d32578182fd5b823562000d3f8162000e9a565b91506020830135801515811462000d14578182fd5b600080600080600060a0868803121562000d6c578081fd5b853562000d798162000e9a565b9450602086013562000d8b8162000e9a565b935060408601359250606086013591506080860135600281900b811462000db0578182fd5b809150509295509295909350565b6000806040838503121562000dd1578182fd5b823562000dde8162000e9a565b9150602083013562000d148162000eb0565b60006020828403121562000e02578081fd5b813562000cbc8162000eb0565b60006020828403121562000e21578081fd5b815162000cbc8162000eb0565b6001600160a01b0391909116815260200190565b6001600160a01b0391909116815260406020820181905260009082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03811681146200099157600080fd5b60ff811681146200099157600080fdfe608060405260405161078238038061078283398101604081905261002291610307565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041f565b60008051602061073b8339815191521461007957634e487b7160e01b600052600160045260246000fd5b6100858282600061008e565b50505050610484565b610097836100c4565b6000825111806100a45750805b156100bf576100bd838361010460201b6100291760201c565b505b505050565b6100cd81610130565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610129838360405180606001604052806027815260200161075b602791396101f0565b9392505050565b610143816102c560201b6100551760201c565b6101aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cf60008051602061073b83398151915260001b6102cb60201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a1565b600080856001600160a01b03168560405161026a91906103d0565b600060405180830381855af49150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b5090925090506102bb8282866102ce565b9695505050505050565b3b151590565b90565b606083156102dd575081610129565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b81526004016101a191906103ec565b60008060408385031215610319578182fd5b82516001600160a01b038116811461032f578283fd5b60208401519092506001600160401b038082111561034b578283fd5b818501915085601f83011261035e578283fd5b8151818111156103705761037061046e565b604051601f8201601f19908116603f011681019083821181831017156103985761039861046e565b816040528281528860208487010111156103b0578586fd5b6103c1836020830160208801610442565b80955050505050509250929050565b600082516103e2818460208701610442565b9190910192915050565b602081526000825180602084015261040b816040850160208701610442565b601f01601f19169190910160400192915050565b60008282101561043d57634e487b7160e01b81526011600452602481fd5b500390565b60005b8381101561045d578181015183820152602001610445565b838111156100bd5750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a8806104936000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220667011574314cf4e5801022aadde47a0038316aed06925aadc6c7f77b495475764736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a0dd490ba4cb387b7a96954c7dcb9689e896ffcbf3cf4d1d8d2f4eaf4f13672c64736f6c63430008040033";
var Factory__factory = /** @class */ (function (_super) {
    __extends(Factory__factory, _super);
    function Factory__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    Factory__factory.prototype.deploy = function (_masterMarginEngine, _masterVAMM, overrides) {
        return _super.prototype.deploy.call(this, _masterMarginEngine, _masterVAMM, overrides || {});
    };
    Factory__factory.prototype.getDeployTransaction = function (_masterMarginEngine, _masterVAMM, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _masterMarginEngine, _masterVAMM, overrides || {});
    };
    Factory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Factory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Factory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Factory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Factory__factory.bytecode = _bytecode;
    Factory__factory.abi = _abi;
    return Factory__factory;
}(ethers_1.ContractFactory));
exports.Factory__factory = Factory__factory;
