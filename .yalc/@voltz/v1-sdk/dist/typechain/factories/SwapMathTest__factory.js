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
exports.SwapMathTest__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "x",
                type: "uint256",
            },
        ],
        name: "PRBMathUD60x18__FromUintOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivFixedPointOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "prod1",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "denominator",
                type: "uint256",
            },
        ],
        name: "PRBMath__MulDivOverflow",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "notional",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "timeToMaturityInSeconds",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "feePercentage",
                type: "uint256",
            },
        ],
        name: "computeFeeAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtRatioCurrentX96",
                type: "uint160",
            },
            {
                internalType: "uint160",
                name: "sqrtRatioTargetX96",
                type: "uint160",
            },
            {
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
            {
                internalType: "int256",
                name: "amountRemaining",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feePercentage",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "timeToMaturityInSeconds",
                type: "uint256",
            },
        ],
        name: "computeSwapStep",
        outputs: [
            {
                internalType: "uint160",
                name: "sqrtQ",
                type: "uint160",
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "feeAmount",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtRatioCurrentX96",
                type: "uint160",
            },
            {
                internalType: "uint160",
                name: "sqrtRatioTargetX96",
                type: "uint160",
            },
            {
                internalType: "uint128",
                name: "liquidity",
                type: "uint128",
            },
            {
                internalType: "int256",
                name: "amountRemaining",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "feePercentage",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "timeToMaturityInSeconds",
                type: "uint256",
            },
        ],
        name: "getGasCostOfComputeSwapStep",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b50610e02806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a2bfc561461004657806392ea035b1461006c578063da27ae4e146100a9575b600080fd5b610059610054366004610ba5565b6100bc565b6040519081526020015b60405180910390f35b61007f61007a366004610ba5565b6100eb565b604080516001600160a01b0390951685526020850193909352918301526060820152608001610063565b6100596100b7366004610c10565b610113565b6000805a90506100d088888888888861012a565b505050505a6100df9082610d6a565b98975050505050505050565b6000806000806100ff8a8a8a8a8a8a61012a565b929d919c509a509098509650505050505050565b60006101208484846102ec565b90505b9392505050565b60008080806001600160a01b03808a16908b16101581881280159061019157816101605761015b8c8c8c6001610324565b61016d565b61016d8b8d8c600161039f565b945084891061017e578a95506101e5565b61018a8c8b8b856104b9565b95506101e5565b816101a8576101a38c8c8c600061039f565b6101b5565b6101b58b8d8c6000610324565b9350836101c18a610d9c565b106101ce578a95506101e5565b6101e28c8b6101dc8c610d9c565b8561052b565b95505b6001600160a01b038b8116908716146000831561024d578180156102065750825b61021c57610217888f8e600161039f565b61021e565b865b965081801561022b575082155b6102415761023c888f8e6000610324565b610243565b855b955085905061029a565b8180156102575750825b61026d576102688e898e6001610324565b61026f565b865b965081801561027c575082155b6102925761028d8e898e600061039f565b610294565b855b95508690505b821580156102af57506102ac8b610d9c565b86115b156102c0576102bd8b610d9c565b95505b60006102cb8261059d565b90506102d8818b8d6102ec565b955050505050509650965096509692505050565b6000806102f8846105ea565b9050600061030f8661030a8685610607565b610607565b670de0b6b3a764000090049695505050505050565b6000836001600160a01b0316856001600160a01b03161115610344579293925b816103715761036c836001600160801b03168686036001600160a01b0316600160601b610613565b610394565b610394836001600160801b03168686036001600160a01b0316600160601b61070b565b90505b949350505050565b6000836001600160a01b0316856001600160a01b031611156103bf579293925b600160601b600160e01b03606084901b1660006103dc8787610d42565b6001600160a01b031690506000876001600160a01b03161161043e5760405162461bcd60e51b8152602060048201526016602482015275073717274207072696365206d757374206265203e20360541b60448201526064015b60405180910390fd5b8361048257866001600160a01b03166104618383896001600160a01b0316610613565b8161047c57634e487b7160e01b600052601260045260246000fd5b046104ae565b6104ae6104998383896001600160a01b031661070b565b886001600160a01b0316808204910615150190565b979650505050505050565b600080856001600160a01b0316116104e35760405162461bcd60e51b815260040161043590610c3b565b6000846001600160801b03161161050c5760405162461bcd60e51b815260040161043590610c6f565b8161051e5761036c8585856001610775565b6103948585856001610897565b600080856001600160a01b0316116105555760405162461bcd60e51b815260040161043590610c3b565b6000846001600160801b03161161057e5760405162461bcd60e51b815260040161043590610c6f565b816105905761036c8585856000610897565b6103948585856000610775565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156105dc57604051633492ffd960e01b815260048101839052602401610435565b50670de0b6b3a76400000290565b6000610601826a1a1601fc4ea7109e0000006109ee565b92915050565b60006101238383610a03565b60008080600019858709858702925082811083820303915050806000141561068357600084116106785760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b6044820152606401610435565b508290049050610123565b8084116106a25760405162461bcd60e51b815260040161043590610c9e565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000610718848484610613565b90506000828061073857634e487b7160e01b600052601260045260246000fd5b84860911156101235760001981106107625760405162461bcd60e51b815260040161043590610c9e565b8061076c81610d81565b95945050505050565b600081156107df5760006001600160a01b038411156107ab576107a684600160601b876001600160801b0316610613565b6107c2565b6107c26001600160801b038616606086901b610d03565b90506107cd81610ac5565b6107d79087610cc0565b915050610397565b60006001600160a01b0384111561080d5761080884600160601b876001600160801b031661070b565b61082a565b61082a606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116108845760405162461bcd60e51b815260206004820152601e60248201527f7374617274696e67207078206d757374206265203e2071756f7469656e7400006044820152606401610435565b6107d7816001600160a01b038816610d6a565b6000826108a5575083610397565b600160601b600160e01b03606085901b1682156109505760006001600160a01b038716856108d38282610d23565b92506108df9083610d03565b141561091a5760006108f18284610ceb565b90508281106109185761090e83896001600160a01b03168361070b565b9350505050610397565b505b61094782866109326001600160a01b038b1683610d03565b61093c9190610ceb565b808204910615150190565b92505050610397565b60006001600160a01b038716856109678282610d23565b92506109739083610d03565b14801561097f57508082115b6109c45760405162461bcd60e51b815260206004820152601660248201527564656e6f6d696e61746f7220756e646572666c6f777360501b6044820152606401610435565b60006109d08284610d6a565b905061090e6109e9848a6001600160a01b03168461070b565b610ac5565b600061012383670de0b6b3a764000084610b1b565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110610a475760405163698d9a0160e11b815260048101829052602401610435565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182610a815780670de0b6b3a7640000850401945050505050610601565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b806001600160a01b0381168114610b165760405162461bcd60e51b815260206004820152601560248201527406f766572666c6f7720696e20746f55696e7431363605c1b6044820152606401610435565b919050565b600080806000198587098587029250828110838203039150508060001415610b6457838281610b5a57634e487b7160e01b600052601260045260246000fd5b0492505050610123565b8381106106a257604051631dcf306360e21b81526004810182905260248101859052604401610435565b80356001600160a01b0381168114610b1657600080fd5b60008060008060008060c08789031215610bbd578182fd5b610bc687610b8e565b9550610bd460208801610b8e565b945060408701356001600160801b0381168114610bef578283fd5b959894975094956060810135955060808101359460a0909101359350915050565b600080600060608486031215610c24578283fd5b505081359360208301359350604090920135919050565b6020808252601a908201527907374617274696e67207072696365206d757374206265203e20360341b604082015260600190565b60208082526015908201527406c6971756964697479206d757374206265203e203605c1b604082015260600190565b6020808252600890820152676f766572666c6f7760c01b604082015260600190565b60006001600160a01b03828116848216808303821115610ce257610ce2610db6565b01949350505050565b60008219821115610cfe57610cfe610db6565b500190565b600082610d1e57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610d3d57610d3d610db6565b500290565b60006001600160a01b0383811690831681811015610d6257610d62610db6565b039392505050565b600082821015610d7c57610d7c610db6565b500390565b6000600019821415610d9557610d95610db6565b5060010190565b6000600160ff1b821415610db257610db2610db6565b0390565b634e487b7160e01b600052601160045260246000fdfea264697066735822122054e2e7557b2a7e801480cd4ade69b34fc3b8688987e2690857bfc561be5b4eff64736f6c63430008040033";
var SwapMathTest__factory = /** @class */ (function (_super) {
    __extends(SwapMathTest__factory, _super);
    function SwapMathTest__factory() {
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
    SwapMathTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    SwapMathTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    SwapMathTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SwapMathTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SwapMathTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SwapMathTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SwapMathTest__factory.bytecode = _bytecode;
    SwapMathTest__factory.abi = _abi;
    return SwapMathTest__factory;
}(ethers_1.ContractFactory));
exports.SwapMathTest__factory = SwapMathTest__factory;
