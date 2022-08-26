import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCompoundBorrowRateOracle, TestCompoundBorrowRateOracleInterface } from "../TestCompoundBorrowRateOracle";
export declare class TestCompoundBorrowRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(cToken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestCompoundBorrowRateOracle>;
    getDeployTransaction(cToken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestCompoundBorrowRateOracle;
    connect(signer: Signer): TestCompoundBorrowRateOracle__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162003dea38038062003dea833981016040819052620000349162000b55565b83838383600060405190808252806020026020018201604052801562000064578160200160208202803683370190505b5060408051600081526020810190915283620000803362000249565b6001600160a01b038116608052436201000455620000a962000299602090811b6200105617901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b03861660a05284806200017c5750836001600160a01b031660a0516001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200013657600080fd5b505afa1580156200014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000171919062000bdc565b6001600160a01b0316145b620001ce5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e7320646f206e6f74206d617463680000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038416620002265760405162461bcd60e51b815260206004820152601560248201527f756e6465726c79696e67206d75737420657869737400000000000000000000006044820152606401620001c5565b60ff831660c052620002398282620002ab565b5050505050505050505062000d98565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620002a64262000536565b905090565b620002ba600261ffff62000c12565b825110620002dc5760405162461bcd60e51b8152600401620001c59062000c35565b8151815161ffff821614620003055760405162461bcd60e51b8152600401620001c59062000c53565b60006200031482600162000c7f565b61ffff166001600160401b0381111562000332576200033262000bc6565b6040519080825280602002602001820160405280156200035c578160200160208202803683370190505b50905060006200036e83600162000c7f565b61ffff166001600160401b038111156200038c576200038c62000bc6565b604051908082528060200260200182016040528015620003b6578160200160208202803683370190505b50905060005b8361ffff168110156200046757858181518110620003de57620003de62000ca8565b6020026020010151838281518110620003fb57620003fb62000ca8565b602002602001019063ffffffff16908163ffffffff16815250508481815181106200042a576200042a62000ca8565b602002602001015182828151811062000447576200044762000ca8565b6020908102919091010152806200045e8162000cbe565b915050620003bc565b50600080620004756200057d565b9150915081848661ffff168151811062000493576200049362000ca8565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff1681518110620004c757620004c762000ca8565b602002602001018181525050620004f084846004620007bc60201b62001066179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620005785760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401620001c5565b919050565b600080600060a0516001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b158015620005be57600080fd5b505afa158015620005d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005f9919062000cdc565b905065048c27395000811115620006535760405162461bcd60e51b815260206004820152601c60248201527f626f72726f772072617465206973206162737572646c792068696768000000006044820152606401620001c5565b600060a0516001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200069157600080fd5b505afa158015620006a6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006cc919062000cdc565b620006d8904362000cf6565b90506000620006fc6040518060200160405280858152508362000a0160201b60201c565b9050600060a0516001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200073c57600080fd5b505afa15801562000751573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000777919062000cdc565b905060006200078883838062000a3a565b90506200079f6200029960201b620010561760201c565b620007af82633b9aca0062000d10565b9650965050505050509091565b600080600061ffff855110620007e65760405162461bcd60e51b8152600401620001c59062000c35565b8451845161ffff8216146200080f5760405162461bcd60e51b8152600401620001c59062000c53565b60008161ffff16116200084a5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401620001c5565b6000805b8261ffff168161ffff161015620009e057878161ffff168151811062000878576200087862000ca8565b602002602001015163ffffffff168263ffffffff1610620008ce5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401620001c5565b62000920888261ffff1681518110620008eb57620008eb62000ca8565b6020026020010151888361ffff16815181106200090c576200090c62000ca8565b602002602001015162000a6a60201b60201c565b898261ffff1661ffff81106200093a576200093a62000ca8565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff8316908110620009c057620009c062000ca8565b602002602001015191508080620009d79062000d32565b9150506200084e565b508180620009f060018262000d57565b945094509450505093509350939050565b604080516020810190915260008152604051806020016040528062000a3185600001518562000af960201b60201c565b90529392505050565b60008062000a49858562000a01565b905062000a6162000a5a8262000b0e565b8462000b2e565b95945050505050565b60408051606081018252600080825260208201819052918101919091526001600160d81b0382111562000ac95760405162461bcd60e51b8152600401620001c5906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600062000b07828462000d10565b9392505050565b805160009062000b2890670de0b6b3a76400009062000c12565b92915050565b600062000b07828462000d7d565b6001600160a01b038116811462000b5257600080fd5b50565b6000806000806080858703121562000b6c57600080fd5b845162000b798162000b3c565b6020860151909450801515811462000b9057600080fd5b604086015190935062000ba38162000b3c565b606086015190925060ff8116811462000bbb57600080fd5b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121562000bef57600080fd5b815162000b078162000b3c565b634e487b7160e01b600052601160045260246000fd5b60008262000c3057634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff80831681851680830382111562000c9f5762000c9f62000bfc565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000cd55762000cd562000bfc565b5060010190565b60006020828403121562000cef57600080fd5b5051919050565b60008282101562000d0b5762000d0b62000bfc565b500390565b600081600019048311821515161562000d2d5762000d2d62000bfc565b500290565b600061ffff8083168181141562000d4d5762000d4d62000bfc565b6001019392505050565b600061ffff8381169083168181101562000d755762000d7562000bfc565b039392505050565b6000821982111562000d935762000d9362000bfc565b500190565b60805160a05160c05161300d62000ddd60003960006102ac01526000818161049d01528181610891015281816109800152610a3b0152600061036c015261300d6000f3fe608060405234801561001057600080fd5b50600436106101965760003560e01c806301320aad1461019b5780631195082e146101b6578063163e9c4f146101e157806317221ef1146101f457806322ff65681461020757806324b18b1714610221578063252c09d71461025557806325f258dd14610294578063313ce567146102a757806332148f67146102ce5780633c155bd5146102e3578063414535281461030b57806354124c641461031e57806356da9775146103315780636e035c05146103545780636f307dc314610367578063715018a6146103a65780637aa4db13146103ae5780637cf2cc9f146103b65780638a6b8c5d146103bf5780638da5cb5b146103c757806391aa375d146103cf57806393556dbd146103fa57806395f3e6051461040d578063bdb050921461042e578063c330c98d14610441578063c7db359b14610450578063ccf3eb9f14610498578063e9b69c0d146104bf578063efdf5d8b146104d2578063f2fde38b146104da578063f739670c146104ed578063f90ce5ba14610500578063fe115fbe14610518575b600080fd5b6101a3610520565b6040519081526020015b60405180910390f35b6101a36101c4366004612ce0565b600160209081526000928352604080842090915290825290205481565b6101a36101ef366004612d13565b610587565b6101a3610202366004612d13565b610599565b61020f600681565b60405160ff90911681526020016101ad565b620100055462010006546102399163ffffffff169082565b6040805163ffffffff90931683526020830191909152016101ad565b610268610263366004612d13565b6105a5565b6040805163ffffffff90941684526001600160d81b0390921660208401521515908201526060016101ad565b6101a36102a2366004612d2c565b6105df565b61020f7f000000000000000000000000000000000000000000000000000000000000000081565b6102e16102dc366004612d4e565b610655565b005b6102f66102f1366004612d4e565b6106da565b604080519283526020830191909152016101ad565b6101a3610319366004612d2c565b610747565b6101a361032c366004612d72565b61075b565b61034461033f366004612d2c565b6107b0565b60405190151581526020016101ad565b6101a3610362366004612d2c565b610816565b61038e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101ad565b6102e1610829565b6102e161083d565b6101a360025481565b61023961088a565b61038e610afe565b6201000654620100055463ffffffff165b6040805192835263ffffffff9091166020830152016101ad565b6101a3610408366004612d2c565b610b0d565b61042061041b366004612d9e565b610b9d565b6040516101ad929190612de3565b6102e161043c366004612d13565b610bd5565b6101a3670de0b6b3a764000081565b6003546104739061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff948516815292841660208401529216918101919091526060016101ad565b61038e7f000000000000000000000000000000000000000000000000000000000000000081565b6102f66104cd366004612d9e565b610c22565b6101a3610c7e565b6102e16104e8366004612dfe565b610d06565b6101a36104fb366004612d2c565b610d7c565b620100035462010004546102399163ffffffff169082565b6103e0610e86565b600354600090819060049061ffff90811690811061054057610540612e27565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b031660208301819052600160f81b90910460ff161515919092015292915050565b60006105938242610d7c565b92915050565b60006105938242610b0d565b60048161ffff81106105b657600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b6000806105ec84846112a9565b9092509050801561064e57600061060c670de0b6b3a764000086046113e7565b90506000610623670de0b6b3a764000086046113e7565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff1660006106716004838561142c565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146106d55760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b600080600060048461ffff1661ffff81106106f7576106f7612e27565b60408051606081018252919092015463ffffffff8116808352600160201b82046001600160d81b031660208401819052600160f81b90920460ff1615159290930191909152909590945092505050565b600061075383836112a9565b509392505050565b6000806107678361151e565b9050600061077d670de0b6b3a764000086612e53565b9050600061078b8284611535565b9050600061079882611574565b90506107a4888261159e565b98975050505050505050565b60006b033b2e3cadb136f08f6400006b033b2e3c91efc989409c0000826107d7858461159e565b905060006107e5868461159e565b90508187111580156107f75750808710155b15610809576001945050505050610593565b6000945050505050610593565b600061082283836115ac565b9392505050565b610831611611565b61083b6000611670565b565b6003546108629061ffff80821691620100008104821691600160201b909104166116c0565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b1580156108e857600080fd5b505afa1580156108fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109209190612e6b565b905065048c2739500081111561097c5760405162461bcd60e51b815260206004820152601c60248201527b0c4dee4e4deee40e4c2e8ca40d2e640c2c4e6eae4c8d8f240d0d2ced60231b60448201526064015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109d757600080fd5b505afa1580156109eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0f9190612e6b565b610a199043612e84565b90506000610a3560405180602001604052808581525083611863565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a9257600080fd5b505afa158015610aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aca9190612e6b565b90506000610ad9838384611894565b9050610ae3611056565b610af182633b9aca00612e9b565b9650965050505050509091565b6000546001600160a01b031690565b600081831115610b525760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b6044820152606401610973565b6000610b5e8484610d7c565b90506000610b6c8585612e84565b90506000610b79826118b5565b90506000610b868261151e565b9050610b9284826115ac565b979650505050505050565b610ba5612cac565b610bad612cac565b600354610bcc90600490859061ffff8082169162010000900416611902565b91509150915091565b610bdd611611565b8060025414610c1f5760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610c2f610c7e565b9050600080610c5d86610c40611056565b6003546004929190879061ffff8082169162010000900416611ab4565b6020918201519101516001600160d81b039182169891169650945050505050565b6000806000610c8b61088a565b91509150610c97611056565b63ffffffff168263ffffffff1610610caf5792915050565b600080610cba610e86565b915091508063ffffffff168285610ccf611056565b610cd99190612eba565b63ffffffff16610ce99190612e9b565b610cf39190612ef5565b610cfd9084612e53565b94505050505090565b610d0e611611565b6001600160a01b038116610d735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610973565b610c1f81611670565b600081831115610dba5760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610973565b81831415610dca57506000610593565b6000610dd4611056565b90506000610de1856113e7565b90506000610dee856113e7565b600354909150600090610e12908590859061ffff8082169162010000900416611c67565b600354909150600090610e36908690859061ffff8082169162010000900416611c67565b905081811115610e78576000610e6a676765c793fa10079d601b1b610e5b8486611eb3565b610e659190612e84565b611ec1565b965061059395505050505050565b600095505050505050610593565b600354600090819061ffff16816001821015610eba57600354610eb59060019062010000900461ffff16612f09565b610ecd565b600354610ecd9060019061ffff16612f09565b60035490915060026201000090910461ffff1610801590610f0e575060048161ffff1661ffff8110610f0157610f01612e27565b0154600160f81b900460ff165b8015610f6b575060048261ffff1661ffff8110610f2d57610f2d612e27565b0154600160201b90046001600160d81b0316600461ffff838116908110610f5657610f56612e27565b0154600160201b90046001600160d81b031611155b610f9d5760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610973565b60048161ffff1661ffff8110610fb557610fb5612e27565b0154600160201b90046001600160d81b0316600461ffff848116908110610fde57610fde612e27565b0154610ffa9190600160201b90046001600160d81b0316612f24565b6001600160d81b0316935060048161ffff1661ffff811061101d5761101d612e27565b015463ffffffff16600461ffff80851690811061103c5761103c612e27565b015461104e919063ffffffff16612eba565b925050509091565b6000611061426113e7565b905090565b600080600061ffff8551106110a65760405162461bcd60e51b8152600401610973906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff8216146110f15760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610973565b60008161ffff161161112a5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610973565b6000805b8261ffff168161ffff16101561128a57878161ffff168151811061115457611154612e27565b602002602001015163ffffffff168263ffffffff16106111a85760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610973565b6111ec888261ffff16815181106111c1576111c1612e27565b6020026020010151888361ffff16815181106111df576111df612e27565b6020026020010151611f4d565b898261ffff1661ffff811061120357611203612e27565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff831690811061126d5761126d612e27565b60200260200101519150808061128290612f44565b91505061112e565b508180611298600182612f09565b945094509450505093509350939050565b600080806112c0670de0b6b3a764000086046113e7565b905060006112d7670de0b6b3a764000086046113e7565b905060008263ffffffff161180156112f5575060008163ffffffff16115b6113295760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610973565b63ffffffff8083166000908152600160209081526040808320938516835292905220541561137f5763ffffffff8083166000908152600160209081526040808320938516835292905290812054945092506113de565b8063ffffffff1661138e611056565b63ffffffff16106113ba576113af8263ffffffff168263ffffffff16610d7c565b9350600192506113de565b6113d78263ffffffff166113cc611056565b63ffffffff16610d7c565b9350600092505b50509250929050565b8063ffffffff811681146114275760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610973565b919050565b6000808361ffff16116114655760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610973565b61ffff8261ffff16106114a95760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610973565b8261ffff168261ffff16116114bf575081610822565b825b8261ffff168161ffff161015611515576001858261ffff1661ffff81106114ea576114ea612e27565b01805463ffffffff191663ffffffff929092169190911790558061150d81612f44565b9150506114c1565b50909392505050565b6000610593826a1a1601fc4ea7109e000000611fc5565b60008261155a578115611549576000611553565b670de0b6b3a76400005b9050610593565b61082261156f61156985611fda565b8461208a565b612096565b600080611594670de0b6b3a7640000676765c793fa10079d601b1b612ef5565b6108229084612e9b565b6000610822838360016120dc565b6000826115bb57506000610593565b60006115d06115ca60016118b5565b84611fc5565b905060006115f2856115e260016118b5565b6115ec9190612e53565b83611535565b90506115fe60016118b5565b6116089082612e84565b95945050505050565b3361161a610afe565b6001600160a01b03161461083b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610973565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106116dd576116dd612e27565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b90910416151590820152905060008061172861088a565b60025485519294509092506117429163ffffffff16612e53565b8263ffffffff16101561175d5787879450945050505061185b565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa737561178661218f565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546117d89043612e84565b6201000655620100035463ffffffff166117f0611056565b6117fa9190612eba565b62010005805463ffffffff191663ffffffff92909216919091179055436201000455611824611056565b62010003805463ffffffff191663ffffffff928316179055611853906004908a90859085908c908c9061219a16565b945094505050505b935093915050565b604080516020810190915260008152604051806020016040528061188b8560000151856122e1565b90529392505050565b6000806118a18585611863565b90506116086118af826122ed565b84612305565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156118f457604051633492ffd960e01b815260048101839052602401610973565b50670de0b6b3a76400000290565b61190a612cac565b611912612cac565b600083611920866001612f66565b61192a9190612f8c565b61ffff169050600060018561ffff16836119449190612e53565b61194e9190612e84565b905060005b600161195f8385612e53565b901c90508861197261ffff881683612fad565b61ffff811061198357611983612e27565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905295506119da576119d3816001612e53565b9250611953565b8861ffff87166119eb836001612e53565b6119f59190612fad565b61ffff8110611a0657611a06612e27565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff1615159282019290925286519095508982169116118015908190611a725750846000015163ffffffff168963ffffffff1611155b15611a7d5750611aa8565b80611a9457611a8d600183612e84565b9250611aa2565b611a9f826001612e53565b93505b50611953565b50505094509492505050565b611abc612cac565b611ac4612cac565b878461ffff1661ffff8110611adb57611adb612e27565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611b5a578663ffffffff16826000015163ffffffff161415611b4657611c5c565b81611b518787611f4d565b91509150611c5c565b8783611b67866001612f66565b611b719190612f8c565b61ffff1661ffff8110611b8657611b86612e27565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181018290529250611c0b5760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611c4b5760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610973565b611c5788888686611902565b915091505b965096945050505050565b60008363ffffffff168563ffffffff161015611c9657604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611d3e57611cb2612cac565b60048461ffff1661ffff8110611cca57611cca612e27565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090871614611d2757611d20610c7e565b9150611d38565b80602001516001600160d81b031691505b50611eab565b6000611d48610c7e565b9050600080611d5c6004888a868a8a611ab4565b91509150816000015163ffffffff168763ffffffff161415611d8d5781602001516001600160d81b03169350611ea7565b805163ffffffff88811691161415611db45780602001516001600160d81b03169350611ea7565b600082602001516001600160d81b031682602001516001600160d81b03161115611e23576000676765c793fa10079d601b1b611e0a84602001516001600160d81b031686602001516001600160d81b0316611eb3565b611e149190612e84565b9050611e1f81611ec1565b9150505b82518251600091611e5691670de0b6b3a764000091611e4191612eba565b63ffffffff16611e519190612e9b565b61151e565b90506000611e6483836115ac565b9050611ea185602001516001600160d81b031682670de0b6b3a764000088600001518e611e919190612eba565b63ffffffff1661032c9190612e9b565b96505050505b5050505b949350505050565b600061082283836001612311565b600080611ee1670de0b6b3a7640000676765c793fa10079d601b1b612ef5565b611eeb9084612ef5565b90506002611f0c670de0b6b3a7640000676765c793fa10079d601b1b612ef5565b611f169190612ef5565b611f33670de0b6b3a7640000676765c793fa10079d601b1b612ef5565b611f3d9085612fad565b1061059357610822600182612e53565b611f55612cac565b6001600160d81b03821115611f955760405162461bcd60e51b8152600401610973906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600061082283670de0b6b3a7640000846123ac565b6000670de0b6b3a764000082101561200857604051633621413760e21b815260048101839052602401610973565b600061201d670de0b6b3a7640000840461247a565b670de0b6b3a7640000808202935090915083821c90811415612040575050919050565b6706f05b59d3b200005b801561208257670de0b6b3a7640000828002049150671bc16d674ec80000821061207a579283019260019190911c905b60011c61204a565b505050919050565b60006108228383612558565b6000680a688906bd8b00000082106120c457604051634a4f26f160e01b815260048101839052602401610973565b670de0b6b3a7640000604083901b046108228161261a565b60008315806120e9575082155b156120f657506000610822565b600182600181111561210a5761210a612fc1565b1461211d57670de0b6b3a764000061212a565b676765c793fa10079d601b1b5b600183600181111561213e5761213e612fc1565b1461215b576121566002670de0b6b3a7640000612ef5565b612171565b6121716002676765c793fa10079d601b1b612ef5565b61217b8587612e9b565b6121859190612e53565b611eab9190612ef5565b6000611061426118b5565b6000806000888861ffff1661ffff81106121b6576121b6612e27565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090881614156122115787859250925050611c5c565b8461ffff168461ffff16118015612239575061222e600186612f09565b61ffff168861ffff16145b156122465783915061224a565b8491505b81612256896001612f66565b6122609190612f8c565b925061226c8787611f4d565b898461ffff1661ffff811061228357612283612e27565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff90941693909317179290921617905550965096945050505050565b60006108228284612e9b565b805160009061059390670de0b6b3a764000090612ef5565b60006108228284612e53565b6000826123495760405162461bcd60e51b8152600401610973906020808252600490820152630444956360e41b604082015260600190565b6000612356600285612ef5565b90508381600185600181111561236e5761236e612fc1565b1461238157670de0b6b3a764000061238e565b676765c793fa10079d601b1b5b6123989088612e9b565b6123a29190612e53565b6116089190612ef5565b6000808060001985870985870292508281108382030391505080600014156123e7578382816123dd576123dd612edf565b0492505050610822565b83811061241157604051631dcf306360e21b81526004810182905260248101859052604401610973565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061249a57608091821c916124979082612e53565b90505b600160401b82106124b857604091821c916124b59082612e53565b90505b600160201b82106124d657602091821c916124d39082612e53565b90505b6201000082106124f357601091821c916124f09082612e53565b90505b610100821061250f57600891821c9161250c9082612e53565b90505b6010821061252a57600491821c916125279082612e53565b90505b6004821061254557600291821c916125429082612e53565b90505b6002821061142757610593600182612e53565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061259c5760405163698d9a0160e11b815260048101829052602401610973565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826125d65780670de0b6b3a7640000850401945050505050610593565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b82161561263a5768016a09e667f3bcc9090260401c5b6001603e1b821615612655576801306fe0a31b7152df0260401c5b6001603d1b821615612670576801172b83c7d517adce0260401c5b6001603c1b82161561268b5768010b5586cf9890f62a0260401c5b6001603b1b8216156126a6576801059b0d31585743ae0260401c5b6001603a1b8216156126c157680102c9a3e778060ee70260401c5b600160391b8216156126dc5768010163da9fb33356d80260401c5b600160381b8216156126f757680100b1afa5abcbed610260401c5b600160371b8216156127125768010058c86da1c09ea20260401c5b600160361b82161561272d576801002c605e2e8cec500260401c5b600160351b82161561274857680100162f3904051fa10260401c5b600160341b821615612763576801000b175effdc76ba0260401c5b600160331b82161561277e57680100058ba01fb9f96d0260401c5b600160321b8216156127995768010002c5cc37da94920260401c5b600160311b8216156127b4576801000162e525ee05470260401c5b600160301b8216156127cf5768010000b17255775c040260401c5b6001602f1b8216156127ea576801000058b91b5bc9ae0260401c5b6001602e1b82161561280557680100002c5c89d5ec6d0260401c5b6001602d1b8216156128205768010000162e43f4f8310260401c5b6001602c1b82161561283b57680100000b1721bcfc9a0260401c5b6001602b1b8216156128565768010000058b90cf1e6e0260401c5b6001602a1b821615612871576801000002c5c863b73f0260401c5b600160291b82161561288c57680100000162e430e5a20260401c5b600160281b8216156128a7576801000000b1721835510260401c5b600160271b8216156128c257680100000058b90c0b490260401c5b600160261b8216156128dd5768010000002c5c8601cc0260401c5b600160251b8216156128f8576801000000162e42fff00260401c5b600160241b8216156129135768010000000b17217fbb0260401c5b600160231b82161561292e576801000000058b90bfce0260401c5b600160221b82161561294957680100000002c5c85fe30260401c5b600160211b8216156129645768010000000162e42ff10260401c5b600160201b82161561297f57680100000000b17217f80260401c5b638000000082161561299a5768010000000058b90bfc0260401c5b63400000008216156129b5576801000000002c5c85fe0260401c5b63200000008216156129d057680100000000162e42ff0260401c5b63100000008216156129eb576801000000000b17217f0260401c5b6308000000821615612a0657680100000000058b90c00260401c5b6304000000821615612a215768010000000002c5c8600260401c5b6302000000821615612a3c576801000000000162e4300260401c5b6301000000821615612a575768010000000000b172180260401c5b62800000821615612a71576801000000000058b90c0260401c5b62400000821615612a8b57680100000000002c5c860260401c5b62200000821615612aa55768010000000000162e430260401c5b62100000821615612abf57680100000000000b17210260401c5b62080000821615612ad95768010000000000058b910260401c5b62040000821615612af3576801000000000002c5c80260401c5b62020000821615612b0d57680100000000000162e40260401c5b62010000821615612b265761b172600160401b010260401c5b618000821615612b3e576158b9600160401b010260401c5b614000821615612b5657612c5d600160401b010260401c5b612000821615612b6e5761162e600160401b010260401c5b611000821615612b8657610b17600160401b010260401c5b610800821615612b9e5761058c600160401b010260401c5b610400821615612bb6576102c6600160401b010260401c5b610200821615612bce57610163600160401b010260401c5b610100821615612be55760b1600160401b010260401c5b6080821615612bfb576059600160401b010260401c5b6040821615612c1157602c600160401b010260401c5b6020821615612c27576016600160401b010260401c5b6010821615612c3d57600b600160401b010260401c5b6008821615612c53576006600160401b010260401c5b6004821615612c69576003600160401b010260401c5b6002821615612c7f576001600160401b010260401c5b6001821615612c95576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff8116811461142757600080fd5b60008060408385031215612cf357600080fd5b612cfc83612ccc565b9150612d0a60208401612ccc565b90509250929050565b600060208284031215612d2557600080fd5b5035919050565b60008060408385031215612d3f57600080fd5b50508035926020909101359150565b600060208284031215612d6057600080fd5b813561ffff8116811461082257600080fd5b600080600060608486031215612d8757600080fd5b505081359360208301359350604090920135919050565b600060208284031215612db057600080fd5b61082282612ccc565b805163ffffffff1682526020808201516001600160d81b0316908301526040908101511515910152565b60c08101612df18285612db9565b6108226060830184612db9565b600060208284031215612e1057600080fd5b81356001600160a01b038116811461082257600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612e6657612e66612e3d565b500190565b600060208284031215612e7d57600080fd5b5051919050565b600082821015612e9657612e96612e3d565b500390565b6000816000190483118215151615612eb557612eb5612e3d565b500290565b600063ffffffff83811690831681811015612ed757612ed7612e3d565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600082612f0457612f04612edf565b500490565b600061ffff83811690831681811015612ed757612ed7612e3d565b60006001600160d81b0383811690831681811015612ed757612ed7612e3d565b600061ffff80831681811415612f5c57612f5c612e3d565b6001019392505050565b600061ffff808316818516808303821115612f8357612f83612e3d565b01949350505050565b600061ffff80841680612fa157612fa1612edf565b92169190910692915050565b600082612fbc57612fbc612edf565b500690565b634e487b7160e01b600052602160045260246000fdfea264697066735822122044063df67a560cacbab159db148e630b94c6da80c900fad55f597619f818619a64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
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
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestCompoundBorrowRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCompoundBorrowRateOracle;
}
//# sourceMappingURL=TestCompoundBorrowRateOracle__factory.d.ts.map