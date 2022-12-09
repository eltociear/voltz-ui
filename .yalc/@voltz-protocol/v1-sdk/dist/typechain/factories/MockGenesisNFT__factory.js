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
exports.MockGenesisNFT__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
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
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
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
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
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
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
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
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
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
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252601081526f135bd8dac811d95b995cda5cc813919560821b60208083019182528351808501909452600484526356554e4960e01b908401528151919291620000669160009162000085565b5080516200007c90600190602084019062000085565b50505062000168565b82805462000093906200012b565b90600052602060002090601f016020900481019282620000b7576000855562000102565b82601f10620000d257805160ff191683800117855562000102565b8280016001018555821562000102579182015b8281111562000102578251825591602001919060010190620000e5565b506200011092915062000114565b5090565b5b8082111562000110576000815560010162000115565b600181811c908216806200014057607f821691505b602082108114156200016257634e487b7160e01b600052602260045260246000fd5b50919050565b61124480620001786000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806301ffc9a7146100bf57806306fdde03146100e7578063081812fc146100fc578063095ea7b31461012757806323b872dd1461013c57806342842e0e1461014f5780636352211e1461016257806370a082311461017557806395d89b4114610196578063a0712d681461019e578063a22cb465146101b1578063b88d4fde146101c4578063c87b56dd146101d7578063e985e9c5146101ea575b600080fd5b6100d26100cd366004610d06565b6101fd565b60405190151581526020015b60405180910390f35b6100ef61024f565b6040516100de9190610d7b565b61010f61010a366004610d8e565b6102e1565b6040516001600160a01b0390911681526020016100de565b61013a610135366004610dc3565b610308565b005b61013a61014a366004610ded565b610423565b61013a61015d366004610ded565b610454565b61010f610170366004610d8e565b61046f565b610188610183366004610e29565b6104a4565b6040519081526020016100de565b6100ef61052a565b61013a6101ac366004610d8e565b610539565b61013a6101bf366004610e44565b610546565b61013a6101d2366004610e96565b610555565b6100ef6101e5366004610d8e565b61058d565b6100d26101f8366004610f71565b610601565b60006001600160e01b031982166380ac58cd60e01b148061022e57506001600160e01b03198216635b5e139f60e01b145b8061024957506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461025e90610fa4565b80601f016020809104026020016040519081016040528092919081815260200182805461028a90610fa4565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b5050505050905090565b60006102ec8261062f565b506000908152600460205260409020546001600160a01b031690565b60006103138261046f565b9050806001600160a01b0316836001600160a01b031614156103865760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103a257506103a28133610601565b6104145760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161037d565b61041e8383610654565b505050565b61042d33826106c2565b6104495760405162461bcd60e51b815260040161037d90610fdf565b61041e838383610721565b61041e83838360405180602001604052806000815250610555565b6000818152600260205260408120546001600160a01b0316806102495760405162461bcd60e51b815260040161037d9061102d565b60006001600160a01b03821661050e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161037d565b506001600160a01b031660009081526003602052604090205490565b60606001805461025e90610fa4565b61054333826108ab565b50565b6105513383836109cb565b5050565b61055f33836106c2565b61057b5760405162461bcd60e51b815260040161037d90610fdf565b61058784848484610a96565b50505050565b60606105988261062f565b60006105af60408051602081019091526000815290565b905060008151116105cf57604051806020016040528060008152506105fa565b806105d984610ac9565b6040516020016105ea92919061105f565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61063881610bc6565b6105435760405162461bcd60e51b815260040161037d9061102d565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106898261046f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806106ce8361046f565b9050806001600160a01b0316846001600160a01b031614806106f557506106f58185610601565b806107195750836001600160a01b031661070e846102e1565b6001600160a01b0316145b949350505050565b826001600160a01b03166107348261046f565b6001600160a01b0316146107985760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161037d565b6001600160a01b0382166107fa5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161037d565b610805600082610654565b6001600160a01b038316600090815260036020526040812080546001929061082e9084906110a4565b90915550506001600160a01b038216600090815260036020526040812080546001929061085c9084906110bb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206111ef83398151915291a4505050565b6001600160a01b0382166109015760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161037d565b61090a81610bc6565b156109565760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b604482015260640161037d565b6001600160a01b038216600090815260036020526040812080546001929061097f9084906110bb565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392906000805160206111ef833981519152908290a45050565b816001600160a01b0316836001600160a01b03161415610a295760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161037d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610aa1848484610721565b610aad84848484610be3565b6105875760405162461bcd60e51b815260040161037d906110d3565b606081610aed5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b175780610b0181611125565b9150610b109050600a83611156565b9150610af1565b6000816001600160401b03811115610b3157610b31610e80565b6040519080825280601f01601f191660200182016040528015610b5b576020820181803683370190505b5090505b841561071957610b706001836110a4565b9150610b7d600a8661116a565b610b889060306110bb565b60f81b818381518110610b9d57610b9d61117e565b60200101906001600160f81b031916908160001a905350610bbf600a86611156565b9450610b5f565b6000908152600260205260409020546001600160a01b0316151590565b60006001600160a01b0384163b15610ce557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c27903390899088908890600401611194565b602060405180830381600087803b158015610c4157600080fd5b505af1925050508015610c71575060408051601f3d908101601f19168201909252610c6e918101906111d1565b60015b610ccb573d808015610c9f576040519150601f19603f3d011682016040523d82523d6000602084013e610ca4565b606091505b508051610cc35760405162461bcd60e51b815260040161037d906110d3565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610719565b506001949350505050565b6001600160e01b03198116811461054357600080fd5b600060208284031215610d1857600080fd5b81356105fa81610cf0565b60005b83811015610d3e578181015183820152602001610d26565b838111156105875750506000910152565b60008151808452610d67816020860160208601610d23565b601f01601f19169290920160200192915050565b6020815260006105fa6020830184610d4f565b600060208284031215610da057600080fd5b5035919050565b80356001600160a01b0381168114610dbe57600080fd5b919050565b60008060408385031215610dd657600080fd5b610ddf83610da7565b946020939093013593505050565b600080600060608486031215610e0257600080fd5b610e0b84610da7565b9250610e1960208501610da7565b9150604084013590509250925092565b600060208284031215610e3b57600080fd5b6105fa82610da7565b60008060408385031215610e5757600080fd5b610e6083610da7565b915060208301358015158114610e7557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610eac57600080fd5b610eb585610da7565b9350610ec360208601610da7565b92506040850135915060608501356001600160401b0380821115610ee657600080fd5b818701915087601f830112610efa57600080fd5b813581811115610f0c57610f0c610e80565b604051601f8201601f19908116603f01168101908382118183101715610f3457610f34610e80565b816040528281528a6020848701011115610f4d57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610f8457600080fd5b610f8d83610da7565b9150610f9b60208401610da7565b90509250929050565b600181811c90821680610fb857607f821691505b60208210811415610fd957634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b60008351611071818460208801610d23565b835190830190611085818360208801610d23565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110b6576110b661108e565b500390565b600082198211156110ce576110ce61108e565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156111395761113961108e565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261116557611165611140565b500490565b60008261117957611179611140565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111c790830184610d4f565b9695505050505050565b6000602082840312156111e357600080fd5b81516105fa81610cf056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220514ffd8127c28e3cdeb8041de20a79eaf21134ca64be882bb2fa560044d1e79564736f6c63430008090033";
var MockGenesisNFT__factory = /** @class */ (function (_super) {
    __extends(MockGenesisNFT__factory, _super);
    function MockGenesisNFT__factory() {
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
    MockGenesisNFT__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockGenesisNFT__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockGenesisNFT__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockGenesisNFT__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockGenesisNFT__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockGenesisNFT__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockGenesisNFT__factory.bytecode = _bytecode;
    MockGenesisNFT__factory.abi = _abi;
    return MockGenesisNFT__factory;
}(ethers_1.ContractFactory));
exports.MockGenesisNFT__factory = MockGenesisNFT__factory;
