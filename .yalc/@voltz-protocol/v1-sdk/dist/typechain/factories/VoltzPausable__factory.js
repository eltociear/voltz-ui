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
exports.VoltzPausable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
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
        inputs: [],
        name: "VOLTZ_PAUSER",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "bool",
                name: "permission",
                type: "bool",
            },
        ],
        name: "changePauser",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "paused",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "state",
                type: "bool",
            },
        ],
        name: "setPausability",
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
var _bytecode = "0x608060405234801561001057600080fd5b506103df806100206000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80630d211954146100725780631b398e0614610087578063478de324146100c15780635c975abb146100d4578063715018a6146100f15780638da5cb5b146100f9578063f2fde38b14610119575b600080fd5b610085610080366004610322565b61012c565b005b6100ae7fc02e2d3f2633adb184196f6ae17c8476d7912f8727b7c1cc7da0b7ddac86bc6581565b6040519081526020015b60405180910390f35b6100856100cf36600461035b565b61018d565b6066546100e19060ff1681565b60405190151581526020016100b8565b6100856101c0565b6101016101d4565b6040516001600160a01b0390911681526020016100b8565b61008561012736600461038e565b6101e3565b3360009081526065602052604090205460ff1661017a5760405162461bcd60e51b81526020600482015260076024820152666e6f20726f6c6560c81b60448201526064015b60405180910390fd5b6066805460ff1916911515919091179055565b61019561025c565b6001600160a01b03919091166000908152606560205260409020805460ff1916911515919091179055565b6101c861025c565b6101d260006102bb565b565b6033546001600160a01b031690565b6101eb61025c565b6001600160a01b0381166102505760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610171565b610259816102bb565b50565b336102656101d4565b6001600160a01b0316146101d25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610171565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8035801515811461031d57600080fd5b919050565b60006020828403121561033457600080fd5b61033d8261030d565b9392505050565b80356001600160a01b038116811461031d57600080fd5b6000806040838503121561036e57600080fd5b61037783610344565b91506103856020840161030d565b90509250929050565b6000602082840312156103a057600080fd5b61033d8261034456fea264697066735822122008b84abf22472ba23df40c6d9730c93479237733097b7aa17b8f98868fa4412d64736f6c63430008090033";
var VoltzPausable__factory = /** @class */ (function (_super) {
    __extends(VoltzPausable__factory, _super);
    function VoltzPausable__factory() {
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
    VoltzPausable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    VoltzPausable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    VoltzPausable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    VoltzPausable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    VoltzPausable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    VoltzPausable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    VoltzPausable__factory.bytecode = _bytecode;
    VoltzPausable__factory.abi = _abi;
    return VoltzPausable__factory;
}(ethers_1.ContractFactory));
exports.VoltzPausable__factory = VoltzPausable__factory;
