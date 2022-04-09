import { Signer, BytesLike, ContractFactory, PayableOverrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";
export declare class ERC1967Proxy__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1967Proxy>;
    getDeployTransaction(_logic: string, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1967Proxy;
    connect(signer: Signer): ERC1967Proxy__factory;
    static readonly bytecode = "0x608060405260405161077e38038061077e83398101604081905261002291610303565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041b565b6000805160206107378339815191521461007757634e487b7160e01b600052600160045260246000fd5b6100838282600061008a565b5050610480565b610093836100c0565b6000825111806100a05750805b156100bb576100b9838361010060201b6100291760201c565b505b505050565b6100c98161012c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606101258383604051806060016040528060278152602001610757602791396101ec565b9392505050565b61013f816102c160201b6100551760201c565b6101a65760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cb60008051602061073783398151915260001b6102c760201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161019d565b600080856001600160a01b03168560405161026691906103cc565b600060405180830381855af49150503d80600081146102a1576040519150601f19603f3d011682016040523d82523d6000602084013e6102a6565b606091505b5090925090506102b78282866102ca565b9695505050505050565b3b151590565b90565b606083156102d9575081610125565b8251156102e95782518084602001fd5b8160405162461bcd60e51b815260040161019d91906103e8565b60008060408385031215610315578182fd5b82516001600160a01b038116811461032b578283fd5b60208401519092506001600160401b0380821115610347578283fd5b818501915085601f83011261035a578283fd5b81518181111561036c5761036c61046a565b604051601f8201601f19908116603f011681019083821181831017156103945761039461046a565b816040528281528860208487010111156103ac578586fd5b6103bd83602083016020880161043e565b80955050505050509250929050565b600082516103de81846020870161043e565b9190910192915050565b602081526000825180602084015261040781604085016020870161043e565b601f01601f19169190910160400192915050565b60008282101561043957634e487b7160e01b81526011600452602481fd5b500390565b60005b83811015610459578181015183820152602001610441565b838111156100b95750506000910152565b634e487b7160e01b600052604160045260246000fd5b6102a88061048f6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101cc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b815260040161011591906101e8565b600082516101de81846020870161021b565b9190910192915050565b602081526000825180602084015261020781604085016020870161021b565b601f01601f19169190910160400192915050565b60005b8381101561023657818101518382015260200161021e565b83811115610245576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220285c659e603d3aa3a0b61e748d9a0a46cba029b8ac23ad23d0fbb8c2be53053b64736f6c63430008040033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
    })[];
    static createInterface(): ERC1967ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Proxy;
}
//# sourceMappingURL=ERC1967Proxy__factory.d.ts.map