import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MarginEngineEmergency, MarginEngineEmergencyInterface } from "../MarginEngineEmergency";
export declare class MarginEngineEmergency__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MarginEngineEmergency>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MarginEngineEmergency;
    connect(signer: Signer): MarginEngineEmergency__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b506080516114f461004c600039600081816103f701528181610440015281816104c901528181610509015261058501526114f46000f3fe6080604052600436106101315760003560e01c806322d23b21146101365780632495a599146101665780633659cfe6146101845780634f1ef286146101a657806352d1902d146101b95780635c975abb146101dc5780635dcc93911461020b5780635f6a3e0c1461022a57806363f5738114610240578063652c30b71461025c578063715018a61461027157806386b127ee1461028657806387e163031461029d57806388428752146102b95780638da5cb5b146102d157806393edb454146102e657806398f4b1b2146102fb5780639cbff18814610319578063b623f5191461032e578063c2ee3a0814610240578063c45a015514610343578063cdcae73d14610361578063e087caf114610381578063e098372c14610396578063f2fde38b146103b4578063f907bd6d146103d4575b600080fd5b34801561014257600080fd5b506004546001600160a01b03165b60405161015d91906110ef565b60405180910390f35b34801561017257600080fd5b506001546001600160a01b0316610150565b34801561019057600080fd5b506101a461019f36600461111f565b6103ec565b005b6101a46101b4366004611150565b6104be565b3480156101c557600080fd5b506101ce610578565b60405190815260200161015d565b3480156101e857600080fd5b50601f546101fb90610100900460ff1681565b604051901515815260200161015d565b34801561021757600080fd5b506101ce6a1a1601fc4ea7109e00000081565b34801561023657600080fd5b506101ce610e1081565b34801561024c57600080fd5b506101ce670de0b6b3a764000081565b34801561026857600080fd5b506002546101ce565b34801561027d57600080fd5b506101a4610626565b34801561029257600080fd5b506101ce6212750081565b3480156102a957600080fd5b506101ce670429d069189e000081565b3480156102c557600080fd5b50601f5460ff166101fb565b3480156102dd57600080fd5b5061015061063a565b3480156102f257600080fd5b506003546101ce565b34801561030757600080fd5b50600c546001600160a01b0316610150565b34801561032557600080fd5b506007546101ce565b34801561033a57600080fd5b50600a546101ce565b34801561034f57600080fd5b50600b546001600160a01b0316610150565b34801561036d57600080fd5b506101a461037c366004611223565b610649565b34801561038d57600080fd5b506000546101ce565b3480156103a257600080fd5b506006546001600160a01b0316610150565b3480156103c057600080fd5b506101a46103cf36600461111f565b610779565b3480156103e057600080fd5b506101ce6312cc030081565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561043e5760405162461bcd60e51b815260040161043590611266565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166104706107ef565b6001600160a01b0316146104965760405162461bcd60e51b8152600401610435906112a0565b61049f8161080b565b604080516000808252602082019092526104bb91839190610813565b50565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156105075760405162461bcd60e51b815260040161043590611266565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166105396107ef565b6001600160a01b03161461055f5760405162461bcd60e51b8152600401610435906112a0565b6105688261080b565b61057482826001610813565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106135760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b6064820152608401610435565b5060008051602061147883398151915290565b61062e610992565b61063860006109f1565b565b6098546001600160a01b031690565b6001600160a01b0383166106845760405162461bcd60e51b815260206004820152600260248201526104f360f41b6044820152606401610435565b60006106936005858585610a43565b90506001600160a01b038416331480159061072e5750600b546040516351c4bc1f60e11b81526001600160a01b0386811660048301523360248301529091169063a389783e9060440160206040518083038186803b1580156106f457600080fd5b505afa158015610708573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072c91906112da565b155b1561074c57604051637da45ce760e01b815260040160405180910390fd5b6000816001015461075c90611312565b90506107688282610aae565b6107723382610acb565b5050505050565b610781610992565b6001600160a01b0381166107e65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610435565b6104bb816109f1565b600080516020611478833981519152546001600160a01b031690565b6104bb610992565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561084b5761084683610c2b565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561088457600080fd5b505afa9250505080156108b4575060408051601f3d908101601f191682019092526108b19181019061132f565b60015b6109175760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610435565b60008051602061147883398151915281146109865760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610435565b50610846838383610cc5565b3361099b61063a565b6001600160a01b0316146106385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610435565b609880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000610a4f8383610cea565b6040516001600160601b0319606086901b16602082015260e884811b603483015283901b60378201528590600090603a016040516020818303038152906040528051906020012081526020019081526020016000209050949350505050565b80826001016000828254610ac29190611348565b90915550505050565b6000811315610aec57600154610574906001600160a01b0316833084610dab565b6001546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610b1d9030906004016110ef565b60206040518083038186803b158015610b3557600080fd5b505afa158015610b49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6d919061132f565b9050600082900381811115610c0e578115610ba657610b8c8282611389565b600154909150610ba6906001600160a01b03168584610e16565b600480546040516318399f4d60e31b81526001600160a01b039091169163c1ccfa6891610bd79188918691016113a0565b600060405180830381600087803b158015610bf157600080fd5b505af1158015610c05573d6000803e3d6000fd5b50505050610c25565b600154610c25906001600160a01b03168583610e16565b50505050565b610c3481610e35565b610c965760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610435565b60008051602061147883398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b610cce83610e44565b600082511180610cdb5750805b1561084657610c258383610e84565b8060020b8260020b12610d255760405162461bcd60e51b8152602060048201526003602482015262544c5560e81b6044820152606401610435565b62010deb19600283900b1215610d635760405162461bcd60e51b8152602060048201526003602482015262544c4d60e81b6044820152606401610435565b610d7062010deb196113b9565b60020b8160020b13156105745760405162461bcd60e51b815260206004820152600360248201526254554d60e81b6044820152606401610435565b6040516001600160a01b0380851660248301528316604482015260648101829052610c259085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f76565b6108468363a9059cbb60e01b8484604051602401610ddf9291906113a0565b6001600160a01b03163b151590565b610e4d81610c2b565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610e8f83610e35565b610eea5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610435565b600080846001600160a01b031684604051610f059190611408565b600060405180830381855af49150503d8060008114610f40576040519150601f19603f3d011682016040523d82523d6000602084013e610f45565b606091505b5091509150610f6d828260405180606001604052806027815260200161149860279139610ff7565b95945050505050565b6000610fa283836040518060400160405280600781526020016629aa261032b93960c91b815250611037565b8051909150156108465780806020019051810190610fc091906112da565b6108465760405162461bcd60e51b815260206004820152600860248201526714d5130819985a5b60c21b6044820152606401610435565b60608315611006575081611030565b8251156110165782518084602001fd5b8160405162461bcd60e51b81526004016104359190611424565b9392505050565b6060833b6110765760405162461bcd60e51b815260206004820152600c60248201526b1b9bdb8b58dbdb9d1c9858dd60a21b6044820152606401610435565b600080856001600160a01b03166000866040516110939190611408565b60006040518083038185875af1925050503d80600081146110d0576040519150601f19603f3d011682016040523d82523d6000602084013e6110d5565b606091505b50915091506110e5828286610ff7565b9695505050505050565b6001600160a01b0391909116815260200190565b80356001600160a01b038116811461111a57600080fd5b919050565b60006020828403121561113157600080fd5b61103082611103565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561116357600080fd5b61116c83611103565b915060208301356001600160401b038082111561118857600080fd5b818501915085601f83011261119c57600080fd5b8135818111156111ae576111ae61113a565b604051601f8201601f19908116603f011681019083821181831017156111d6576111d661113a565b816040528281528860208487010111156111ef57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8035600281900b811461111a57600080fd5b60008060006060848603121561123857600080fd5b61124184611103565b925061124f60208501611211565b915061125d60408501611211565b90509250925092565b6020808252602c9082015260008051602061145883398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061145883398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6000602082840312156112ec57600080fd5b8151801515811461103057600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415611328576113286112fc565b5060000390565b60006020828403121561134157600080fd5b5051919050565b600080821280156001600160ff1b038490038513161561136a5761136a6112fc565b600160ff1b8390038412811615611383576113836112fc565b50500190565b60008282101561139b5761139b6112fc565b500390565b6001600160a01b03929092168252602082015260400190565b60008160020b627fffff198114156113d3576113d36112fc565b60000392915050565b60005b838110156113f75781810151838201526020016113df565b83811115610c255750506000910152565b6000825161141a8184602087016113dc565b9190910192915050565b60208152600082518060208401526114438160408501602087016113dc565b601f01601f1916919091016040019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9b9556bae07c83e348dbd2340a94945f0b48bf1aa9efa73153f73f7a7c5265364736f6c63430008090033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
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
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): MarginEngineEmergencyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MarginEngineEmergency;
}
//# sourceMappingURL=MarginEngineEmergency__factory.d.ts.map