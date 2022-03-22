import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockAToken, MockATokenInterface } from "../MockAToken";
export declare class MockAToken__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(pool: string, underlyingAsset: string, name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockAToken>;
    getDeployTransaction(pool: string, underlyingAsset: string, name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockAToken;
    connect(signer: Signer): MockAToken__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620015d9380380620015d98339810160408190526200003491620001f8565b8151829082906200004d9060039060208501906200009f565b508051620000639060049060208401906200009f565b5050600580546001600160a01b039687166001600160a01b031991821617909155600680549590961694169390931790935550620002f6915050565b828054620000ad906200028a565b90600052602060002090601f016020900481019282620000d157600085556200011c565b82601f10620000ec57805160ff19168380011785556200011c565b828001600101855582156200011c579182015b828111156200011c578251825591602001919060010190620000ff565b506200012a9291506200012e565b5090565b5b808211156200012a57600081556001016200012f565b600082601f83011262000156578081fd5b81516001600160401b0380821115620001735762000173620002c7565b604051601f8301601f19908116603f011681019082821181831017156200019e576200019e620002c7565b81604052838152602092508683858801011115620001ba578485fd5b8491505b83821015620001dd5785820183015181830184015290820190620001be565b83821115620001ee57848385830101525b9695505050505050565b600080600080608085870312156200020e578384fd5b84516200021b81620002dd565b60208601519094506200022e81620002dd565b60408601519093506001600160401b03808211156200024b578384fd5b620002598883890162000145565b935060608701519150808211156200026f578283fd5b506200027e8782880162000145565b91505092959194509250565b600181811c908216806200029f57607f821691505b60208210811415620002c157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620002f357600080fd5b50565b6112d380620003066000396000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c806306fdde03146100f6578063095ea7b3146101145780630afbcdc914610137578063156e29f61461015f57806318160ddd146101725780631da24f3e1461018857806323b872dd1461019b578063313ce567146101ae57806339509351146101bd57806356189cb4146101d057806370a08231146101e55780637535d246146101f857806395d89b4114610212578063a457c2d71461021a578063a9059cbb1461022d578063b16a19de14610240578063b1bf962d14610251578063d7020d0a14610259578063dd62ed3e1461026c575b600080fd5b6100fe6102a5565b60405161010b919061116b565b60405180910390f35b6101276101223660046110c4565b610337565b604051901515815260200161010b565b61014a610145366004610ffc565b61034e565b6040805192835260208301919091520161010b565b61012761016d3660046110ed565b610366565b61017a610410565b60405190815260200161010b565b61017a610196366004610ffc565b6104c1565b6101276101a9366004611048565b6104cc565b6040516012815260200161010b565b6101276101cb3660046110c4565b610576565b6101e36101de366004611048565b6105b2565b005b61017a6101f3366004610ffc565b6105c2565b6005546001600160a01b03165b60405161010b9190611157565b6100fe61065b565b6101276102283660046110c4565b61066a565b61012761023b3660046110c4565b610703565b6006546001600160a01b0316610205565b61017a610710565b6101e3610267366004611083565b610720565b61017a61027a366004611016565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102b49061122c565b80601f01602080910402602001604051908101604052809291908181526020018280546102e09061122c565b801561032d5780601f106103025761010080835404028352916020019161032d565b820191906000526020600020905b81548152906001019060200180831161031057829003601f168201915b5050505050905090565b6000610344338484610895565b5060015b92915050565b60008061035a836109b9565b60025491509150915091565b600080610372856109b9565b9050600061038085856109d4565b9050806103cd5760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d352539517d05353d5539560521b60448201526064015b60405180910390fd5b6103d78682610ab0565b6040518581526001600160a01b0387169060009060008051602061127e8339815191529060200160405180910390a35015949350505050565b60008061041c60025490565b90508061042b57600091505090565b60055460065460405163d15e005360e01b81526104bb926001600160a01b039081169263d15e0053926104649290911690600401611157565b60206040518083038186803b15801561047c57600080fd5b505afa158015610490573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b4919061113f565b8290610b7d565b91505090565b6000610348826109b9565b60006104d9848484610c3d565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561055e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084016103c4565b61056b8533858403610895565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916103449185906105ad9086906111be565b610895565b6105bd838383610895565b505050565b60055460065460405163d15e005360e01b8152600092610348926001600160a01b039182169263d15e0053926105fc921690600401611157565b60206040518083038186803b15801561061457600080fd5b505afa158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c919061113f565b610655846109b9565b90610b7d565b6060600480546102b49061122c565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156106ec5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103c4565b6106f93385858403610895565b5060019392505050565b6000610344338484610c3d565b600061071b60025490565b905090565b6005546001600160a01b0316331461077a5760405162461bcd60e51b815260206004820152601e60248201527f43545f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c000060448201526064016103c4565b600061078683836109d4565b9050806107ce5760405162461bcd60e51b815260206004820152601660248201527510d517d253959053125117d095549397d05353d5539560521b60448201526064016103c4565b6107d88582610ce7565b60065460405163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529091169063a9059cbb90604401602060405180830381600087803b15801561082657600080fd5b505af115801561083a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e919061111f565b506040518381526000906001600160a01b0387169060008051602061127e8339815191529060200160405180910390a35050505050565b6001600160a01b0383166108f75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103c4565b6001600160a01b0382166109585760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103c4565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b031660009081526020819052604090205490565b604080518082019091526002815261035360f41b602082015260009082610a0e5760405162461bcd60e51b81526004016103c4919061116b565b506000610a1c6002846111d6565b9050676765c793fa10079d601b1b610a3682600019611215565b610a4091906111d6565b84111560405180604001604052806002815260200161068760f31b81525090610a7c5760405162461bcd60e51b81526004016103c4919061116b565b508281610a94676765c793fa10079d601b1b876111f6565b610a9e91906111be565b610aa891906111d6565b949350505050565b6001600160a01b038216610b065760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103c4565b8060026000828254610b1891906111be565b90915550506001600160a01b03821660009081526020819052604081208054839290610b459084906111be565b90915550506040518181526001600160a01b0383169060009060008051602061127e8339815191529060200160405180910390a35050565b6000821580610b8a575081155b15610b9757506000610348565b81610bae6002676765c793fa10079d601b1b6111d6565b610bba90600019611215565b610bc491906111d6565b83111560405180604001604052806002815260200161068760f31b81525090610c005760405162461bcd60e51b81526004016103c4919061116b565b50676765c793fa10079d601b1b610c186002826111d6565b610c2284866111f6565b610c2c91906111be565b610c3691906111d6565b9392505050565b60065460055460405163d15e005360e01b81526001600160a01b039283169290911690600090829063d15e005390610c79908690600401611157565b60206040518083038186803b158015610c9157600080fd5b505afa158015610ca5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc9919061113f565b9050610cdf8686610cda87856109d4565b610e23565b505050505050565b6001600160a01b038216610d475760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103c4565b6001600160a01b03821660009081526020819052604090205481811015610dbb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103c4565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610dea908490611215565b90915550506040518281526000906001600160a01b0385169060008051602061127e8339815191529060200160405180910390a3505050565b6001600160a01b038316610e875760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103c4565b6001600160a01b038216610ee95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103c4565b6001600160a01b03831660009081526020819052604090205481811015610f615760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103c4565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610f989084906111be565b92505081905550826001600160a01b0316846001600160a01b031660008051602061127e83398151915284604051610fd291815260200190565b60405180910390a350505050565b80356001600160a01b0381168114610ff757600080fd5b919050565b60006020828403121561100d578081fd5b610c3682610fe0565b60008060408385031215611028578081fd5b61103183610fe0565b915061103f60208401610fe0565b90509250929050565b60008060006060848603121561105c578081fd5b61106584610fe0565b925061107360208501610fe0565b9150604084013590509250925092565b60008060008060808587031215611098578081fd5b6110a185610fe0565b93506110af60208601610fe0565b93969395505050506040820135916060013590565b600080604083850312156110d6578182fd5b6110df83610fe0565b946020939093013593505050565b600080600060608486031215611101578283fd5b61110a84610fe0565b95602085013595506040909401359392505050565b600060208284031215611130578081fd5b81518015158114610c36578182fd5b600060208284031215611150578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6000602080835283518082850152825b818110156111975785810183015185820160400152820161117b565b818111156111a85783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156111d1576111d1611267565b500190565b6000826111f157634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561121057611210611267565b500290565b60008282101561122757611227611267565b500390565b600181811c9082168061124057607f821691505b6020821081141561126157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220b276f3596187049283504240a947ba7d5773d42cc034bc0e99e1f02c65b26a6764736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MockATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockAToken;
}
//# sourceMappingURL=MockAToken__factory.d.ts.map