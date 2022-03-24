import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Periphery, PeripheryInterface } from "../Periphery";
export declare class Periphery__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Periphery>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Periphery;
    connect(signer: Signer): Periphery__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506112b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063040a5dc1146100465780637facc534146100715780639afb7873146100b4575b600080fd5b610059610054366004610e10565b6100d5565b60405160029190910b81526020015b60405180910390f35b61008461007f366004610f52565b6101c7565b604080519687526020870195909552938501929092526060840152608083015260020b60a082015260c001610068565b6100c76100c2366004610ebb565b610612565b604051908152602001610068565b600080826001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011157600080fd5b505afa158015610125573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101499190610e2c565b9050806001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc9190610ffc565b602001519392505050565b600080600080600080600087600001516001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561020f57600080fd5b505afa158015610223573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102479190610e2c565b9050876080015160020b6000148015610265575060a088015160020b155b156103d6576000816001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a557600080fd5b505afa1580156102b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dd9190610e48565b90506000826001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561031a57600080fd5b505afa15801561032e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103529190610ffc565b90506000828260200151610366919061116c565b9050600083836020015161037a91906110b0565b905062010deb19600283900b12156103945762010deb1991505b6103a162010deb196111ef565b60020b8160020b13156103be576103bb62010deb196111ef565b90505b600291820b820b60808d0152810b900b60a08b015250505b60008860200151156103f6576103ef89604001516107fa565b905061040f565b61040389604001516107fa565b61040c90611210565b90505b60006040518060a00160405280336001600160a01b031681526020018381526020018b606001516001600160a01b0316600014610450578b6060015161048e565b8b60200151156104775761047260016c1fa71f3f5f68a90479ee3f8fec6111b3565b61048e565b61048e6b0816769404766de590afe04e60016110f6565b6001600160a01b031681526020018b6080015160020b81526020018b60a0015160020b8152509050826001600160a01b03166367758e6e826040518263ffffffff1660e01b81526004016105299190600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b60a060405180830381600087803b15801561054357600080fd5b505af1158015610557573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057b9190610e7c565b809950819a50829b50839c50849d505050505050826001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b1580156105c857600080fd5b505afa1580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190610ffc565b60200151935050505091939550919395565b60008082600001516001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561065257600080fd5b505afa158015610666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068a9190610e2c565b9050600061069b846020015161086d565b905060006106ac856040015161086d565b905060006106bf83838860600151610c7f565b9050600094508560800151156107625760208601516040808801519051635c6651a760e11b81526001600160a01b0387169263b8cca34e926107099233929190879060040161107d565b602060405180830381600087803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075b9190610e64565b94506107f1565b60208601516040808801519051631f2f089360e01b81526001600160a01b03871692631f2f08939261079c9233929190879060040161107d565b602060405180830381600087803b1580156107b657600080fd5b505af11580156107ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ee9190610e64565b94505b50505050919050565b60006001600160ff1b038211156108695760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084015b60405180910390fd5b5090565b60008060008360020b12610884578260020b610891565b8260020b61089190611210565b90506108a062010deb196111ef565b60020b8111156108d65760405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606401610860565b6000600182166108ea57600160801b6108fc565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b03169050600282161561093157608061092c826ffff97272373d413259a46990580e213a61114d565b901c90505b600482161561095b576080610956826ffff2e50f5f656932ef12357cf3c7fdcc61114d565b901c90505b6008821615610985576080610980826fffe5caca7e10e4e61c3624eaa0941cd061114d565b901c90505b60108216156109af5760806109aa826fffcb9843d60f6159c9db58835c92664461114d565b901c90505b60208216156109d95760806109d4826fff973b41fa98c081472e6896dfb254c061114d565b901c90505b6040821615610a035760806109fe826fff2ea16466c96a3843ec78b326b5286161114d565b901c90505b6080821615610a2d576080610a28826ffe5dee046a99a2a811c461f1969c305361114d565b901c90505b610100821615610a58576080610a53826ffcbe86c7900a88aedcffc83b479aa3a461114d565b901c90505b610200821615610a83576080610a7e826ff987a7253ac413176f2b074cf7815e5461114d565b901c90505b610400821615610aae576080610aa9826ff3392b0822b70005940c7a398e4b70f361114d565b901c90505b610800821615610ad9576080610ad4826fe7159475a2c29b7443b29c7fa6e889d961114d565b901c90505b611000821615610b04576080610aff826fd097f3bdfd2022b8845ad8f792aa582561114d565b901c90505b612000821615610b2f576080610b2a826fa9f746462d870fdf8a65dc1f90e061e561114d565b901c90505b614000821615610b5a576080610b55826f70d869a156d2a1b890bb3df62baf32f761114d565b901c90505b618000821615610b85576080610b80826f31be135f97d08fd981231505542fcfa661114d565b901c90505b62010000821615610bb1576080610bac826f09aa508b5b7a84e1c677de54f3e99bc961114d565b901c90505b62020000821615610bdc576080610bd7826e5d6af8dedb81196699c329225ee60461114d565b901c90505b62040000821615610c06576080610c01826d2216e584f5fa1ea926041bedfe9861114d565b901c90505b62080000821615610c2e576080610c29826b048a170391f7dc42444e8fa261114d565b901c90505b60008460020b1315610c4957610c4681600019611139565b90505b610c57600160201b826111db565b15610c63576001610c66565b60005b610c779060ff16602083901c611121565b949350505050565b6000826001600160a01b0316846001600160a01b03161115610c9f579192915b610cc8610cc383600160601b610cb588886111b3565b6001600160a01b0316610cd2565b610de5565b90505b9392505050565b600080806000198587098587029250828110838203039150508060001415610d425760008411610d375760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b6044820152606401610860565b508290049050610ccb565b808411610d7c5760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b6044820152606401610860565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b806001600160801b0381168114610dfb57600080fd5b919050565b80358015158114610dfb57600080fd5b600060208284031215610e21578081fd5b8135610ccb81611256565b600060208284031215610e3d578081fd5b8151610ccb81611256565b600060208284031215610e59578081fd5b8151610ccb8161126e565b600060208284031215610e75578081fd5b5051919050565b600080600080600060a08688031215610e93578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600060a08284031215610ecc578081fd5b60405160a081016001600160401b0381118282101715610efa57634e487b7160e01b83526041600452602483fd5b6040528235610f0881611256565b81526020830135610f188161126e565b60208201526040830135610f2b8161126e565b604082015260608381013590820152610f4660808401610e00565b60808201529392505050565b600060c08284031215610f63578081fd5b60405160c081016001600160401b0381118282101715610f9157634e487b7160e01b83526041600452602483fd5b6040528235610f9f81611256565b8152610fad60208401610e00565b6020820152604083013560408201526060830135610fca81611256565b60608201526080830135610fdd8161126e565b608082015260a0830135610ff08161126e565b60a08201529392505050565b60006060828403121561100d578081fd5b604051606081016001600160401b038111828210171561103b57634e487b7160e01b83526041600452602483fd5b604052825161104981611256565b815260208301516110598161126e565b6020820152604083015160ff81168114611071578283fd5b60408201529392505050565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b60008160020b8360020b82821282627fffff038213811516156110d5576110d561122a565b82627fffff190382128116156110ed576110ed61122a565b50019392505050565b60006001600160a01b038281168482168083038211156111185761111861122a565b01949350505050565b600082198211156111345761113461122a565b500190565b60008261114857611148611240565b500490565b60008160001904831182151516156111675761116761122a565b500290565b60008160020b8360020b82811281627fffff19018312811516156111925761119261122a565b81627fffff0183138116156111a9576111a961122a565b5090039392505050565b60006001600160a01b03838116908316818110156111d3576111d361122a565b039392505050565b6000826111ea576111ea611240565b500690565b60008160020b627fffff198114156112095761120961122a565b9003919050565b6000600160ff1b8214156112265761122661122a565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b038116811461126b57600080fd5b50565b8060020b811461126b57600080fdfea26469706673582212204f5f4aab0fb1a07c840864e198641d26162a4df3a43733131221f833e605589064736f6c63430008040033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    })[];
    static createInterface(): PeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Periphery;
}
//# sourceMappingURL=Periphery__factory.d.ts.map