/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CommunityDeployer,
  CommunityDeployerInterface,
} from "../CommunityDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVAMM",
        name: "_masterVAMM",
        type: "address",
      },
      {
        internalType: "contract IMarginEngine",
        name: "_masterMarginEngine",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_quorumVotes",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_blockTimestampVotingEnd",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfVotes",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "yesVote",
        type: "bool",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "TIMELOCK_PERIOD_IN_SECONDS",
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
    inputs: [],
    name: "blockTimestampTimelockEnd",
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
    inputs: [],
    name: "blockTimestampVotingEnd",
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
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberOfVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_yesVote",
        type: "bool",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "hasTokenIdVoted",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "hasVoted",
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
    name: "isQueued",
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
    name: "merkleRoot",
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
    inputs: [],
    name: "noVoteCount",
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
    inputs: [],
    name: "ownerAddress",
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
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "quorumVotes",
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
    inputs: [],
    name: "voltzFactory",
    outputs: [
      {
        internalType: "contract IFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yesVoteCount",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516123f23803806123f283398101604081905261002f91610096565b600755600380546001600160a01b03199081166001600160a01b039788161790915560028054821695871695909517909455600192909255600080549093169316929092179055600a556100ff565b6001600160a01b038116811461009357600080fd5b50565b60008060008060008060c087890312156100af57600080fd5b86516100ba8161007e565b60208801519096506100cb8161007e565b6040880151606089015191965094506100e38161007e565b809350506080870151915060a087015190509295509295509295565b6122e48061010e6000396000f3fe608060405234801561001057600080fd5b50600436106100db5760003560e01c80631b25de8f146100e057806324bc1a64146101025780632eb4a7ab1461011957806344a0b3e714610122578063775c300c1461012b57806378d177c0146101355780638f84aa091461013f578063916e62f31461015f57806392c7abb7146101685780639fe1b3541461017b578063b4395f831461018e578063b555039714610197578063b8f2145f146101a0578063e10d29ee146101c3578063ecca031f146101cb578063fe3b9591146101de578063febfe75e146101f6575b600080fd5b6009546100ed9060ff1681565b60405190151581526020015b60405180910390f35b61010b60015481565b6040519081526020016100f9565b61010b600a5481565b61010b60045481565b610133610209565b005b61010b6202a30081565b600054610152906001600160a01b031681565b6040516100f991906107ae565b61010b60055481565b6101336101763660046107c2565b610371565b600254610152906001600160a01b031681565b61010b60075481565b61010b60085481565b6100ed6101ae36600461085f565b60066020526000908152604090205460ff1681565b61013361055c565b6100ed6101d936600461085f565b61068c565b6009546101529061010090046001600160a01b031681565b600354610152906001600160a01b031681565b60095460ff1661024d5760405162461bcd60e51b815260206004820152600a6024820152691b9bdd081c5d595d595960b21b60448201526064015b60405180910390fd5b60085442116102945760405162461bcd60e51b815260206004820152601360248201527274696d656c6f636b206973206f6e676f696e6760681b6044820152606401610244565b6002546003546040516001600160a01b0392831692909116906102b6906107a0565b6001600160a01b03928316815291166020820152604001604051809103906000f0801580156102e9573d6000803e3d6000fd5b5060098054610100600160a81b0319166101006001600160a01b039384168102919091179182905560005460405163f2fde38b60e01b81529190920483169263f2fde38b9261033d929116906004016107ae565b600060405180830381600087803b15801561035757600080fd5b505af115801561036b573d6000803e3d6000fd5b50505050565b6007544211156103b85760405162461bcd60e51b81526020600482015260126024820152713b37ba34b733903832b934b7b21037bb32b960711b6044820152606401610244565b6103c18561068c565b156103ff5760405162461bcd60e51b815260206004820152600e60248201526d6475706c696361746520766f746560901b6044820152606401610244565b60408051602081018790526001600160601b03193360601b16918101919091526054810185905260009060740160405160208183030381529060405280519060200120905061048583838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600a5491508490506106cd565b6104c85760405162461bcd60e51b815260206004820152601460248201527334b73b30b634b21036b2b935b63290383937b7b360611b6044820152606401610244565b6104d1866106e3565b83156104f45784600460008282546104e9919061088e565b9091555061050c9050565b8460056000828254610506919061088e565b90915550505b6040805187815233602082015290810186905284151560608201527fb7086a9dd618ffa688aa9500720dfe31d3b288daba445664cecceaed4a1562c39060800160405180910390a1505050505050565b60075442116105a15760405162461bcd60e51b8152602060048201526011602482015270766f74696e67206973206f6e676f696e6760781b6044820152606401610244565b60015460045410156105ea5760405162461bcd60e51b81526020600482015260126024820152711c5d5bdc9d5b481b9bdd081c995858da195960721b6044820152606401610244565b600554600454116106295760405162461bcd60e51b81526020600482015260096024820152686e6f203e3d2079657360b81b6044820152606401610244565b60095460ff161561066d5760405162461bcd60e51b815260206004820152600e60248201526d185b1c9958591e481c5d595d595960921b6044820152606401610244565b6009805460ff191660011790556106876202a3004261088e565b600855565b60008061069b610100846108bc565b905060006106ab610100856108d0565b6000928352600b602052604090922054600190921b9182169091149392505050565b6000826106da8584610721565b14949350505050565b60006106f1610100836108bc565b90506000610701610100846108d0565b6000928352600b60205260409092208054600190931b9092179091555050565b600081815b84518110156107665761075282868381518110610745576107456108e4565b602002602001015161076e565b91508061075e816108fa565b915050610726565b509392505050565b600081831061078a576000828152602084905260409020610799565b60008381526020839052604090205b9392505050565b611999806200091683390190565b6001600160a01b0391909116815260200190565b6000806000806000608086880312156107da57600080fd5b8535945060208601359350604086013580151581146107f857600080fd5b925060608601356001600160401b038082111561081457600080fd5b818801915088601f83011261082857600080fd5b81358181111561083757600080fd5b8960208260051b850101111561084c57600080fd5b9699959850939650602001949392505050565b60006020828403121561087157600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156108a1576108a1610878565b500190565b634e487b7160e01b600052601260045260246000fd5b6000826108cb576108cb6108a6565b500490565b6000826108df576108df6108a6565b500690565b634e487b7160e01b600052603260045260246000fd5b600060001982141561090e5761090e610878565b506001019056fe60806040523480156200001157600080fd5b50604051620019993803806200199983398101604081905262000034916200018e565b6200003f3362000125565b6001600160a01b0382166200009b5760405162461bcd60e51b815260206004820152601460248201527f6d6173746572206d65206d75737420657869737400000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038116620000f35760405162461bcd60e51b815260206004820152601660248201527f6d61737465722076616d6d206d75737420657869737400000000000000000000604482015260640162000092565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620001cd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200018b57600080fd5b50565b60008060408385031215620001a257600080fd5b8251620001af8162000175565b6020840151909250620001c28162000175565b809150509250929050565b6117bc80620001dd6000396000f3fe60806040523480156200001157600080fd5b5060043610620000ca5760003560e01c80630e8a064814620000cf578063715018a6146200011557806377aace1a14620001215780638da5cb5b146200014457806394a9b1f7146200014e57806395858f981462000165578063973cd931146200017c5780639fe1b3541462000193578063a389783e14620001a7578063aeb2293414620001cf578063ca5183b714620001e6578063db9b71701462000212578063f2fde38b1462000229578063febfe75e1462000240575b600080fd5b620000e6620000e036600462000e81565b62000254565b604080516001600160a01b03948516815292841660208401529216918101919091526060015b60405180910390f35b6200011f6200090a565b005b60055462000135906001600160a01b031681565b6040516200010c919062000eed565b6200013562000922565b6200011f6200015f36600462000f01565b62000931565b6200011f6200017636600462000f38565b620009c1565b6200011f6200018d36600462000f01565b62000a88565b60015462000135906001600160a01b031681565b620001be620001b836600462000f76565b62000b17565b60405190151581526020016200010c565b6200011f620001e036600462000f01565b62000c06565b62000135620001f736600462000fa9565b6003602052600090815260409020546001600160a01b031681565b6200011f6200022336600462000fc9565b62000cce565b6200011f6200023a36600462000f01565b62000d2e565b60025462000135906001600160a01b031681565b60008060006200026362000daa565b6001546040516000916001600160a01b031690620002819062000e5d565b6200028d919062001000565b604051809103906000f080158015620002aa573d6000803e3d6000fd5b506002546040519192506000916001600160a01b0390911690620002ce9062000e5d565b620002da919062001000565b604051809103906000f080158015620002f7573d6000803e3d6000fd5b5060405163eb990c5960e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90529192509083169063eb990c5990608401600060405180830381600087803b1580156200035657600080fd5b505af11580156200036b573d6000803e3d6000fd5b5050604051631b325b2160e31b81526001600160a01b03858116600483015260028a900b60248301528416925063d992d9089150604401600060405180830381600087803b158015620003bd57600080fd5b505af1158015620003d2573d6000803e3d6000fd5b50506040516331d81ea760e21b81526001600160a01b038516925063c7607a9c91506200040490849060040162000eed565b600060405180830381600087803b1580156200041f57600080fd5b505af115801562000434573d6000803e3d6000fd5b5050505060008990508a6001600160a01b0316816001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200048157600080fd5b505afa15801562000496573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004bc919062001023565b6001600160a01b0316146200050e5760405162461bcd60e51b81526020600482015260136024820152720a8ded6cadce640c8de40dcdee840dac2e8c6d606b1b60448201526064015b60405180910390fd5b6000816001600160a01b03166322ff65686040518163ffffffff1660e01b815260040160206040518083038186803b1580156200054a57600080fd5b505afa1580156200055f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000585919062001043565b60ff81166000908152600360205260408120549192506001600160a01b03909116908115620007155781604051620005bd9062000e5d565b620005c9919062001000565b604051809103906000f080158015620005e6573d6000803e3d6000fd5b5060405163485cc95560e01b81526001600160a01b03878116600483015288811660248301529192509082169063485cc95590604401600060405180830381600087803b1580156200063757600080fd5b505af11580156200064c573d6000803e3d6000fd5b505060405163534d337560e01b81526001600160a01b038916925063534d337591506200067e90849060040162000eed565b600060405180830381600087803b1580156200069957600080fd5b505af1158015620006ae573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038416925063f2fde38b9150620006e090339060040162000eed565b600060405180830381600087803b158015620006fb57600080fd5b505af115801562000710573d6000803e3d6000fd5b505050505b60008e6001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200075157600080fd5b505afa15801562000766573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200078c919062001043565b90508d6001600160a01b03168f6001600160a01b03167fe134804702afa0f02bd7f0687d4c2f662a1790b4904d1c2cd6f41fcffbfc05c38f8f8f8c8c898c8a60405162000826989796959493929190978852602088019690965260029490940b60408701526001600160a01b03928316606087015290821660808601521660a084015260ff90811660c08401521660e08201526101000190565b60405180910390a360405163f2fde38b60e01b81526001600160a01b0387169063f2fde38b906200085c90339060040162000eed565b600060405180830381600087803b1580156200087757600080fd5b505af11580156200088c573d6000803e3d6000fd5b505060405163f2fde38b60e01b81526001600160a01b038a16925063f2fde38b9150620008be90339060040162000eed565b600060405180830381600087803b158015620008d957600080fd5b505af1158015620008ee573d6000803e3d6000fd5b50989b5096995091975050505050505050955095509592505050565b6200091462000daa565b62000920600062000e0d565b565b6000546001600160a01b031690565b6200093b62000daa565b6001600160a01b0381166200098c5760405162461bcd60e51b81526020600482015260166024820152751b585cdd195c881d985b5b481b5d5cdd08195e1a5cdd60521b604482015260640162000505565b6002546001600160a01b03828116911614620009be57600280546001600160a01b0319166001600160a01b0383161790555b50565b620009cb62000daa565b6001600160a01b03821662000a1b5760405162461bcd60e51b81526020600482015260156024820152741b585cdd195c881998db481b5d5cdd08195e1a5cdd605a1b604482015260640162000505565b60ff811660008181526003602090815260409182902080546001600160a01b0319166001600160a01b0387169081179091558251908152908101929092527fcece9976caa53e350e3311c87df72b4ed94d768ba03a4688cdf331121bf613c2910160405180910390a15050565b62000a9262000daa565b6001600160a01b03811662000ae15760405162461bcd60e51b81526020600482015260146024820152731b585cdd195c881b59481b5d5cdd08195e1a5cdd60621b604482015260640162000505565b6001546001600160a01b03828116911614620009be57600180546001600160a01b0383166001600160a01b031990911617905550565b60006001600160a01b03831662000b685760405162461bcd60e51b81526020600482015260146024820152731bdddb995c88191bd95cc81b9bdd08195e1a5cdd60621b604482015260640162000505565b6001600160a01b03821662000bb55760405162461bcd60e51b81526020600482015260126024820152711a5b9d08191bd95cc81b9bdd08195e1a5cdd60721b604482015260640162000505565b6005546001600160a01b038381169116141562000bd55750600162000c00565b506001600160a01b0380831660009081526004602090815260408083209385168352929052205460ff165b92915050565b62000c1062000daa565b6001600160a01b03811662000c5f5760405162461bcd60e51b81526020600482015260146024820152731c195c9a5c1a195c9e481b5d5cdd08195e1a5cdd60621b604482015260640162000505565b6005546001600160a01b03828116911614620009be57600580546001600160a01b0319166001600160a01b0383169081179091556040517f9d41c928e1b7d55eb20c9906b2cc3223035dd4dc2c59e5fcd2282e857db1b0509162000cc39162000eed565b60405180910390a150565b3360008181526004602090815260408083206001600160a01b0387168085529252808320805460ff19168615159081179091559051909391927f1d3e246ebbc933bf65d3290db9f93d67ab91a12d2b19308a35806e04d1c174c591a45050565b62000d3862000daa565b6001600160a01b03811662000d9f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840162000505565b620009be8162000e0d565b3362000db562000922565b6001600160a01b031614620009205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000505565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610723806200106483390190565b6001600160a01b0381168114620009be57600080fd5b600080600080600060a0868803121562000e9a57600080fd5b853562000ea78162000e6b565b9450602086013562000eb98162000e6b565b935060408601359250606086013591506080860135600281900b811462000edf57600080fd5b809150509295509295909350565b6001600160a01b0391909116815260200190565b60006020828403121562000f1457600080fd5b813562000f218162000e6b565b9392505050565b60ff81168114620009be57600080fd5b6000806040838503121562000f4c57600080fd5b823562000f598162000e6b565b9150602083013562000f6b8162000f28565b809150509250929050565b6000806040838503121562000f8a57600080fd5b823562000f978162000e6b565b9150602083013562000f6b8162000e6b565b60006020828403121562000fbc57600080fd5b813562000f218162000f28565b6000806040838503121562000fdd57600080fd5b823562000fea8162000e6b565b91506020830135801515811462000f6b57600080fd5b6001600160a01b0391909116815260406020820181905260009082015260600190565b6000602082840312156200103657600080fd5b815162000f218162000e6b565b6000602082840312156200105657600080fd5b815162000f218162000f2856fe608060405260405161072338038061072383398101604081905261002291610318565b818161003082826000610039565b50505050610435565b6100428361006f565b60008251118061004f5750805b1561006a5761006883836100af60201b6100291760201c565b505b505050565b610078816100db565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d483836040518060600160405280602781526020016106fc602791396101ad565b9392505050565b6100ee8161028b60201b6100551760201c565b6101555760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b8061018c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61029a60201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102155760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161014c565b600080856001600160a01b03168560405161023091906103e6565b600060405180830381855af49150503d806000811461026b576040519150601f19603f3d011682016040523d82523d6000602084013e610270565b606091505b50909250905061028182828661029d565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102ac5750816100d4565b8251156102bc5782518084602001fd5b8160405162461bcd60e51b815260040161014c9190610402565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103075781810151838201526020016102ef565b838111156100685750506000910152565b6000806040838503121561032b57600080fd5b82516001600160a01b038116811461034257600080fd5b60208401519092506001600160401b038082111561035f57600080fd5b818501915085601f83011261037357600080fd5b815181811115610385576103856102d6565b604051601f8201601f19908116603f011681019083821181831017156103ad576103ad6102d6565b816040528281528860208487010111156103c657600080fd5b6103d78360208301602088016102ec565b80955050505050509250929050565b600082516103f88184602087016102ec565b9190910192915050565b60208152600082518060208401526104218160408501602087016102ec565b601f01601f19169190910160400192915050565b6102b8806104446000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025c602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606100ce84610055565b61012e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b031685604051610149919061020c565b600060405180830381855af49150503d8060008114610184576040519150601f19603f3d011682016040523d82523d6000602084013e610189565b606091505b50915091506101998282866101a3565b9695505050505050565b606083156101b257508161004e565b8251156101c25782518084602001fd5b8160405162461bcd60e51b81526004016101259190610228565b60005b838110156101f75781810151838201526020016101df565b83811115610206576000848401525b50505050565b6000825161021e8184602087016101dc565b9190910192915050565b60208152600082518060208401526102478160408501602087016101dc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c61fd0359be328e79fc906a7cd975057e62b0bde27587d31d8b8e20255054ec764736f6c63430008090033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220aba913cfcd0d3a8fd37e743c1e08758cfaceed58c90349083ec622fded116e1364736f6c63430008090033a26469706673582212206cf93701e45548d1bf11e8eccf3e2f7de0985f973abf3eded58db94d7aa2918064736f6c63430008090033";

export class CommunityDeployer__factory extends ContractFactory {
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
    _masterVAMM: string,
    _masterMarginEngine: string,
    _quorumVotes: BigNumberish,
    _ownerAddress: string,
    _merkleRoot: BytesLike,
    _blockTimestampVotingEnd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CommunityDeployer> {
    return super.deploy(
      _masterVAMM,
      _masterMarginEngine,
      _quorumVotes,
      _ownerAddress,
      _merkleRoot,
      _blockTimestampVotingEnd,
      overrides || {}
    ) as Promise<CommunityDeployer>;
  }
  getDeployTransaction(
    _masterVAMM: string,
    _masterMarginEngine: string,
    _quorumVotes: BigNumberish,
    _ownerAddress: string,
    _merkleRoot: BytesLike,
    _blockTimestampVotingEnd: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _masterVAMM,
      _masterMarginEngine,
      _quorumVotes,
      _ownerAddress,
      _merkleRoot,
      _blockTimestampVotingEnd,
      overrides || {}
    );
  }
  attach(address: string): CommunityDeployer {
    return super.attach(address) as CommunityDeployer;
  }
  connect(signer: Signer): CommunityDeployer__factory {
    return super.connect(signer) as CommunityDeployer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommunityDeployerInterface {
    return new utils.Interface(_abi) as CommunityDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CommunityDeployer {
    return new Contract(address, _abi, signerOrProvider) as CommunityDeployer;
  }
}
