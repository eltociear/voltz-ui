/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickTest, TickTestInterface } from "../TickTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
    ],
    name: "checkTicks",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "fixedTokenGrowthGlobalX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthGlobalX128",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobalX128",
        type: "uint256",
      },
    ],
    name: "cross",
    outputs: [
      {
        internalType: "int128",
        name: "liquidityNet",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobalX128",
        type: "uint256",
      },
    ],
    name: "getFeeGrowthInside",
    outputs: [
      {
        internalType: "uint256",
        name: "feeGrowthInsideX128",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "fixedTokenGrowthGlobalX128",
        type: "int256",
      },
    ],
    name: "getFixedTokenGrowthInside",
    outputs: [
      {
        internalType: "int256",
        name: "fixedTokenGrowthInsideX128",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthGlobalX128",
        type: "int256",
      },
    ],
    name: "getVariableTokenGrowthInside",
    outputs: [
      {
        internalType: "int256",
        name: "variableTokenGrowthInsideX128",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "liquidityGross",
            type: "uint128",
          },
          {
            internalType: "int128",
            name: "liquidityNet",
            type: "int128",
          },
          {
            internalType: "int256",
            name: "fixedTokenGrowthOutsideX128",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "variableTokenGrowthOutsideX128",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "feeGrowthOutsideX128",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
        ],
        internalType: "struct Tick.Info",
        name: "info",
        type: "tuple",
      },
    ],
    name: "setTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "ticks",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidityGross",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "liquidityNet",
        type: "int128",
      },
      {
        internalType: "int256",
        name: "fixedTokenGrowthOutsideX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthOutsideX128",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthOutsideX128",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickCurrent",
        type: "int24",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
      {
        internalType: "int256",
        name: "fixedTokenGrowthGlobalX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "variableTokenGrowthGlobalX128",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthGlobalX128",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "upper",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "maxLiquidity",
        type: "uint128",
      },
    ],
    name: "update",
    outputs: [
      {
        internalType: "bool",
        name: "flipped",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c87806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806334fabea5146100885780633d3506691461010757806344057fb81461012d5780636c0e7c3c146101405780639ede8b8814610153578063b04039b514610176578063b613524a1461019c578063d267849c146101df578063f30dba93146101f2575b600080fd5b61010561009636600461087b565b600291820b600090815260208181526040918290208351918401516001600160801b03908116600160801b0292169190911781559082015160018201556060820151928101929092556080810151600383015560a001516004909101805491151560ff19909216919091179055565b005b61011a610115366004610939565b61027f565b6040519081526020015b60405180910390f35b61011a61013b366004610939565b6102c7565b61011a61014e366004610939565b610306565b610166610161366004610984565b610345565b6040519015158152602001610124565b610189610184366004610a06565b610365565b604051600f9190910b8152602001610124565b6101056101aa366004610a3f565b600290810b6000908152602081905260408120818155600181018290559182018190556003820155600401805460ff19169055565b6101056101ed366004610a5a565b610374565b610243610200366004610a3f565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160801b03841694600160801b909404600f0b939060ff1686565b604080516001600160801b039097168752600f9590950b60208701529385019290925260608401526080830152151560a082015260c001610124565b60006102be60405180608001604052808760020b81526020018660020b81526020018560020b815260200184815250600061038290919063ffffffff16565b95945050505050565b60006102be60405180608001604052808760020b81526020018660020b81526020018560020b81526020018481525060006103e990919063ffffffff16565b60006102be60405180608001604052808760020b81526020018660020b81526020018560020b815260200184815250600061043090919063ffffffff16565b6000610358818a8a8a8a8a8a8a8a610480565b9998505050505050505050565b60006102be818686868661061a565b61037e828261067e565b5050565b8051600290810b600090815260208481526040808320918501805190940b8352808320855194519186015160608701519495939491936102be9390929091906103ca9061073f565b6103d7876003015461073f565b6103e4876003015461073f565b610788565b8051600290810b6000908152602084815260408083209185018051850b84528184208651915192870151606088015185880154978301549697959692956102be9593610788565b8051600290810b600090815260208481526040808320918501805190940b835280832085519451918601516060870151600180860154908401549697959693956102be9590949093929190610788565b600288900b600090815260208a90526040812080546001600160801b0316826104a98a83610aa3565b600f0b12156104fe5760405162461bcd60e51b815260206004820152601c60248201527b3737ba1032b737bab3b4103634b8bab4b234ba3c903a3790313ab93760211b60448201526064015b60405180910390fd5b600061050a828b6107f4565b9050846001600160801b0316816001600160801b031611156105535760405162461bcd60e51b81526020600482015260026024820152614c4f60f01b60448201526064016104f5565b6001600160801b0382811615908216158114159450156105a0578a60020b8c60020b13610590576003830187905560018301899055600283018890555b60048301805460ff191660011790555b82546001600160801b0319166001600160801b038216178355856105da5782546105d5908b90600160801b9004600f0b610aa3565b6105f1565b82546105f1908b90600160801b9004600f0b610af4565b83546001600160801b03918216600160801b0291161790925550909a9950505050505050505050565b600284900b6000908152602086905260408120600381015461063c9084610b44565b600382015560018101546106509086610b5b565b600182015560028101546106649085610b5b565b600282015554600160801b9004600f0b9695505050505050565b8060020b8260020b126106b95760405162461bcd60e51b8152602060048201526003602482015262544c5560e81b60448201526064016104f5565b62010deb19600283900b12156106f75760405162461bcd60e51b8152602060048201526003602482015262544c4d60e81b60448201526064016104f5565b61070462010deb19610b9a565b60020b8160020b131561037e5760405162461bcd60e51b815260206004820152600360248201526254554d60e81b60448201526064016104f5565b6000600160ff1b82106107845760405162461bcd60e51b815260206004820152600d60248201526c746f496e74323536206f666c6f60981b60448201526064016104f5565b5090565b6000808760020b8660020b1261079f5750826107ac565b6107a98486610b5b565b90505b60008760020b8760020b12156107c35750826107d0565b6107cd8487610b5b565b90505b60006107dc8284610bbd565b6107e69088610b5b565b9a9950505050505050505050565b60008082600f0b12156108185760008290036108108185610bfe565b915050610825565b6108228284610c26565b90505b92915050565b8035600281900b811461083d57600080fd5b919050565b80356001600160801b038116811461083d57600080fd5b8035600f81900b811461083d57600080fd5b8035801515811461083d57600080fd5b60008082840360e081121561088f57600080fd5b6108988461082b565b925060c0601f19820112156108ac57600080fd5b5060405160c081016001600160401b03811182821017156108dd57634e487b7160e01b600052604160045260246000fd5b6040526108ec60208501610842565b81526108fa60408501610859565b6020820152606084013560408201526080840135606082015260a0840135608082015261092960c0850161086b565b60a0820152809150509250929050565b6000806000806080858703121561094f57600080fd5b6109588561082b565b93506109666020860161082b565b92506109746040860161082b565b9396929550929360600135925050565b600080600080600080600080610100898b0312156109a157600080fd5b6109aa8961082b565b97506109b860208a0161082b565b96506109c660408a01610859565b9550606089013594506080890135935060a089013592506109e960c08a0161086b565b91506109f760e08a01610842565b90509295985092959890939650565b60008060008060808587031215610a1c57600080fd5b610a258561082b565b966020860135965060408601359560600135945092505050565b600060208284031215610a5157600080fd5b6108228261082b565b60008060408385031215610a6d57600080fd5b610a768361082b565b9150610a846020840161082b565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b6000600f82810b9084900b828212801560016001607f1b0384900383131615610ace57610ace610a8d565b60016001607f1b03198390038212811615610aeb57610aeb610a8d565b50019392505050565b6000600f82810b9084900b828112801560016001607f1b0319830184121615610b1f57610b1f610a8d565b60016001607f1b0382018313811615610b3a57610b3a610a8d565b5090039392505050565b600082821015610b5657610b56610a8d565b500390565b60008083128015600160ff1b850184121615610b7957610b79610a8d565b6001600160ff1b0384018313811615610b9457610b94610a8d565b50500390565b60008160020b627fffff19811415610bb457610bb4610a8d565b60000392915050565b600080821280156001600160ff1b0384900385131615610bdf57610bdf610a8d565b600160ff1b8390038412811615610bf857610bf8610a8d565b50500190565b60006001600160801b0383811690831681811015610c1e57610c1e610a8d565b039392505050565b60006001600160801b03828116848216808303821115610c4857610c48610a8d565b0194935050505056fea264697066735822122038f34a26a3e7a11ef127aaa436943b79d4b7f78439cce50fd9b6523a69f97d6064736f6c63430008090033";

export class TickTest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TickTest> {
    return super.deploy(overrides || {}) as Promise<TickTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickTest {
    return super.attach(address) as TickTest;
  }
  connect(signer: Signer): TickTest__factory {
    return super.connect(signer) as TickTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickTestInterface {
    return new utils.Interface(_abi) as TickTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickTest {
    return new Contract(address, _abi, signerOrProvider) as TickTest;
  }
}
