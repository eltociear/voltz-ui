import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CompoundBorrowRateOracle, CompoundBorrowRateOracleInterface } from "../CompoundBorrowRateOracle";
export declare class CompoundBorrowRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_ctoken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, _times: BigNumberish[], _results: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CompoundBorrowRateOracle>;
    getDeployTransaction(_ctoken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, _times: BigNumberish[], _results: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CompoundBorrowRateOracle;
    connect(signer: Signer): CompoundBorrowRateOracle__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162003c7438038062003c74833981016040819052620000349162000c69565b83620000403362000205565b6001600160a01b0381166080524362010004556200006962000255602090811b62000e1217901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b03861660a05284806200013c5750836001600160a01b031660a0516001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b158015620000f657600080fd5b505afa1580156200010b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000131919062000d31565b6001600160a01b0316145b6200018e5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e7320646f206e6f74206d617463680000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038416620001e65760405162461bcd60e51b815260206004820152601560248201527f756e6465726c79696e67206d7573742065786973740000000000000000000000604482015260640162000185565b60ff831660c052620001f9828262000267565b50505050505062000eed565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006200026242620004f2565b905090565b62000276600261ffff62000d67565b825110620002985760405162461bcd60e51b8152600401620001859062000d8a565b8151815161ffff821614620002c15760405162461bcd60e51b8152600401620001859062000da8565b6000620002d082600162000dd4565b61ffff166001600160401b03811115620002ee57620002ee62000b11565b60405190808252806020026020018201604052801562000318578160200160208202803683370190505b50905060006200032a83600162000dd4565b61ffff166001600160401b0381111562000348576200034862000b11565b60405190808252806020026020018201604052801562000372578160200160208202803683370190505b50905060005b8361ffff1681101562000423578581815181106200039a576200039a62000dfd565b6020026020010151838281518110620003b757620003b762000dfd565b602002602001019063ffffffff16908163ffffffff1681525050848181518110620003e657620003e662000dfd565b602002602001015182828151811062000403576200040362000dfd565b6020908102919091010152806200041a8162000e13565b91505062000378565b506000806200043162000539565b9150915081848661ffff16815181106200044f576200044f62000dfd565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff168151811062000483576200048362000dfd565b602002602001018181525050620004ac848460046200077860201b62000e22179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620005345760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b604482015260640162000185565b919050565b600080600060a0516001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b1580156200057a57600080fd5b505afa1580156200058f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005b5919062000e31565b905065048c273950008111156200060f5760405162461bcd60e51b815260206004820152601c60248201527f626f72726f772072617465206973206162737572646c79206869676800000000604482015260640162000185565b600060a0516001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200064d57600080fd5b505afa15801562000662573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000688919062000e31565b62000694904362000e4b565b90506000620006b860405180602001604052808581525083620009bd60201b60201c565b9050600060a0516001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b158015620006f857600080fd5b505afa1580156200070d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000733919062000e31565b9050600062000744838380620009f6565b90506200075b6200025560201b62000e121760201c565b6200076b82633b9aca0062000e65565b9650965050505050509091565b600080600061ffff855110620007a25760405162461bcd60e51b8152600401620001859062000d8a565b8451845161ffff821614620007cb5760405162461bcd60e51b8152600401620001859062000da8565b60008161ffff1611620008065760405162461bcd60e51b81526020600482015260026024820152610c1560f21b604482015260640162000185565b6000805b8261ffff168161ffff1610156200099c57878161ffff168151811062000834576200083462000dfd565b602002602001015163ffffffff168263ffffffff16106200088a5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b604482015260640162000185565b620008dc888261ffff1681518110620008a757620008a762000dfd565b6020026020010151888361ffff1681518110620008c857620008c862000dfd565b602002602001015162000a2660201b60201c565b898261ffff1661ffff8110620008f657620008f662000dfd565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff83169081106200097c576200097c62000dfd565b602002602001015191508080620009939062000e87565b9150506200080a565b508180620009ac60018262000eac565b945094509450505093509350939050565b6040805160208101909152600081526040518060200160405280620009ed85600001518562000ab560201b60201c565b90529392505050565b60008062000a058585620009bd565b905062000a1d62000a168262000aca565b8462000aea565b95945050505050565b60408051606081018252600080825260208201819052918101919091526001600160d81b0382111562000a855760405162461bcd60e51b815260040162000185906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600062000ac3828462000e65565b9392505050565b805160009062000ae490670de0b6b3a76400009062000d67565b92915050565b600062000ac3828462000ed2565b6001600160a01b038116811462000b0e57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000b525762000b5262000b11565b604052919050565b60006001600160401b0382111562000b765762000b7662000b11565b5060051b60200190565b600082601f83011262000b9257600080fd5b8151602062000bab62000ba58362000b5a565b62000b27565b82815260059290921b8401810191818101908684111562000bcb57600080fd5b8286015b8481101562000bfc57805163ffffffff8116811462000bee5760008081fd5b835291830191830162000bcf565b509695505050505050565b600082601f83011262000c1957600080fd5b8151602062000c2c62000ba58362000b5a565b82815260059290921b8401810191818101908684111562000c4c57600080fd5b8286015b8481101562000bfc578051835291830191830162000c50565b60008060008060008060c0878903121562000c8357600080fd5b865162000c908162000af8565b6020880151909650801515811462000ca757600080fd5b604088015190955062000cba8162000af8565b606088015190945060ff8116811462000cd257600080fd5b60808801519093506001600160401b038082111562000cf057600080fd5b62000cfe8a838b0162000b80565b935060a089015191508082111562000d1557600080fd5b5062000d2489828a0162000c07565b9150509295509295509295565b60006020828403121562000d4457600080fd5b815162000ac38162000af8565b634e487b7160e01b600052601160045260246000fd5b60008262000d8557634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff80831681851680830382111562000df45762000df462000d51565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000e2a5762000e2a62000d51565b5060010190565b60006020828403121562000e4457600080fd5b5051919050565b60008282101562000e605762000e6062000d51565b500390565b600081600019048311821515161562000e825762000e8262000d51565b500290565b600061ffff8083168181141562000ea25762000ea262000d51565b6001019392505050565b600061ffff8381169083168181101562000eca5762000eca62000d51565b039392505050565b6000821982111562000ee85762000ee862000d51565b500190565b60805160a05160c051612d4262000f3260003960006102620152600081816103d40152818161069801528181610782015261083d015260006102c40152612d426000f3fe608060405234801561001057600080fd5b50600436106101545760003560e01c80631195082e14610159578063163e9c4f1461019757806317221ef1146101aa57806322ff6568146101bd57806324b18b17146101d7578063252c09d71461020b57806325f258dd1461024a578063313ce5671461025d57806332148f6714610284578063414535281461029957806354124c64146102ac5780636f307dc3146102bf578063715018a6146102fe5780637aa4db13146103065780637cf2cc9f1461030e5780638a6b8c5d146103175780638da5cb5b1461031f57806391aa375d1461032757806393556dbd14610352578063bdb0509214610365578063c330c98d14610378578063c7db359b14610387578063ccf3eb9f146103cf578063efdf5d8b146103f6578063f2fde38b146103fe578063f739670c14610411578063f90ce5ba14610424578063fe115fbe1461043c575b600080fd5b610184610167366004612a40565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b6101846101a5366004612a73565b610444565b6101846101b8366004612a73565b610456565b6101c5600681565b60405160ff909116815260200161018e565b620100055462010006546101ef9163ffffffff169082565b6040805163ffffffff909316835260208301919091520161018e565b61021e610219366004612a73565b610462565b6040805163ffffffff90941684526001600160d81b03909216602084015215159082015260600161018e565b610184610258366004612a8c565b61049c565b6101c57f000000000000000000000000000000000000000000000000000000000000000081565b610297610292366004612aae565b610512565b005b6101846102a7366004612a8c565b610597565b6101846102ba366004612ad2565b6105ab565b6102e67f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161018e565b610297610600565b610297610644565b61018460025481565b6101ef610691565b6102e6610900565b6201000654620100055463ffffffff165b6040805192835263ffffffff90911660208301520161018e565b610184610360366004612a8c565b61090f565b610297610373366004612a73565b61099f565b610184670de0b6b3a764000081565b6003546103aa9061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff9485168152928416602084015292169181019190915260600161018e565b6102e67f000000000000000000000000000000000000000000000000000000000000000081565b610184610a13565b61029761040c366004612afe565b610a9b565b61018461041f366004612a8c565b610b38565b620100035462010004546101ef9163ffffffff169082565b610338610c42565b60006104508242610b38565b92915050565b6000610450824261090f565b60048161ffff811061047357600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b6000806104a98484611065565b9092509050801561050b5760006104c9670de0b6b3a764000086046111a3565b905060006104e0670de0b6b3a764000086046111a3565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff16600061052e600483856111e8565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146105925760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b60006105a38383611065565b509392505050565b6000806105b7836112dd565b905060006105cd670de0b6b3a764000086612b3d565b905060006105db82846112f4565b905060006105e882611333565b90506105f4888261135d565b98975050505050505050565b33610609610900565b6001600160a01b0316146106385760405162461bcd60e51b815260040161062f90612b55565b60405180910390fd5b610642600061136b565b565b6003546106699061ffff80821691620100008104821691600160201b909104166113bb565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ef57600080fd5b505afa158015610703573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107279190612b8a565b905065048c2739500081111561077e5760405162461bcd60e51b815260206004820152601c60248201527b0c4dee4e4deee40e4c2e8ca40d2e640c2c4e6eae4c8d8f240d0d2ced60231b604482015260640161062f565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107d957600080fd5b505afa1580156107ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108119190612b8a565b61081b9043612ba3565b905060006108376040518060200160405280858152508361155e565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561089457600080fd5b505afa1580156108a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cc9190612b8a565b905060006108db83838461158f565b90506108e5610e12565b6108f382633b9aca00612bba565b9650965050505050509091565b6000546001600160a01b031690565b6000818311156109545760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b604482015260640161062f565b60006109608484610b38565b9050600061096e8585612ba3565b9050600061097b826115b9565b90506000610988826112dd565b90506109948482611606565b979650505050505050565b336109a8610900565b6001600160a01b0316146109ce5760405162461bcd60e51b815260040161062f90612b55565b8060025414610a105760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610a20610691565b91509150610a2c610e12565b63ffffffff168263ffffffff1610610a445792915050565b600080610a4f610c42565b915091508063ffffffff168285610a64610e12565b610a6e9190612bd9565b63ffffffff16610a7e9190612bba565b610a889190612c14565b610a929084612b3d565b94505050505090565b33610aa4610900565b6001600160a01b031614610aca5760405162461bcd60e51b815260040161062f90612b55565b6001600160a01b038116610b2f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161062f565b610a108161136b565b600081831115610b765760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b604482015260640161062f565b81831415610b8657506000610450565b6000610b90610e12565b90506000610b9d856111a3565b90506000610baa856111a3565b600354909150600090610bce908590859061ffff8082169162010000900416611662565b600354909150600090610bf2908690859061ffff8082169162010000900416611662565b905081811115610c34576000610c26676765c793fa10079d601b1b610c1784866118ae565b610c219190612ba3565b6118bc565b965061045095505050505050565b600095505050505050610450565b600354600090819061ffff16816001821015610c7657600354610c719060019062010000900461ffff16612c28565b610c89565b600354610c899060019061ffff16612c28565b60035490915060026201000090910461ffff1610801590610cca575060048161ffff1661ffff8110610cbd57610cbd612c43565b0154600160f81b900460ff165b8015610d27575060048261ffff1661ffff8110610ce957610ce9612c43565b0154600160201b90046001600160d81b0316600461ffff838116908110610d1257610d12612c43565b0154600160201b90046001600160d81b031611155b610d595760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b604482015260640161062f565b60048161ffff1661ffff8110610d7157610d71612c43565b0154600160201b90046001600160d81b0316600461ffff848116908110610d9a57610d9a612c43565b0154610db69190600160201b90046001600160d81b0316612c59565b6001600160d81b0316935060048161ffff1661ffff8110610dd957610dd9612c43565b015463ffffffff16600461ffff808516908110610df857610df8612c43565b0154610e0a919063ffffffff16612bd9565b925050509091565b6000610e1d426111a3565b905090565b600080600061ffff855110610e625760405162461bcd60e51b815260040161062f906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff821614610ead5760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604482015260640161062f565b60008161ffff1611610ee65760405162461bcd60e51b81526020600482015260026024820152610c1560f21b604482015260640161062f565b6000805b8261ffff168161ffff16101561104657878161ffff1681518110610f1057610f10612c43565b602002602001015163ffffffff168263ffffffff1610610f645760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b604482015260640161062f565b610fa8888261ffff1681518110610f7d57610f7d612c43565b6020026020010151888361ffff1681518110610f9b57610f9b612c43565b6020026020010151611948565b898261ffff1661ffff8110610fbf57610fbf612c43565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff831690811061102957611029612c43565b60200260200101519150808061103e90612c79565b915050610eea565b508180611054600182612c28565b945094509450505093509350939050565b6000808061107c670de0b6b3a764000086046111a3565b90506000611093670de0b6b3a764000086046111a3565b905060008263ffffffff161180156110b1575060008163ffffffff16115b6110e55760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b604482015260640161062f565b63ffffffff8083166000908152600160209081526040808320938516835292905220541561113b5763ffffffff80831660009081526001602090815260408083209385168352929052908120549450925061119a565b8063ffffffff1661114a610e12565b63ffffffff16106111765761116b8263ffffffff168263ffffffff16610b38565b93506001925061119a565b6111938263ffffffff16611188610e12565b63ffffffff16610b38565b9350600092505b50509250929050565b8063ffffffff811681146111e35760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b604482015260640161062f565b919050565b6000808361ffff16116112215760405162461bcd60e51b81526020600482015260016024820152604960f81b604482015260640161062f565b61ffff8261ffff16106112655760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b604482015260640161062f565b8261ffff168261ffff161161127b5750816112d6565b825b8261ffff168161ffff1610156112d1576001858261ffff1661ffff81106112a6576112a6612c43565b01805463ffffffff191663ffffffff92909216919091179055806112c981612c79565b91505061127d565b508190505b9392505050565b6000610450826a1a1601fc4ea7109e0000006119c0565b600082611319578115611308576000611312565b670de0b6b3a76400005b9050610450565b6112d661132e611328856119d5565b84611a85565b611a91565b600080611353670de0b6b3a7640000676765c793fa10079d601b1b612c14565b6112d69084612bba565b60006112d683836001611ad7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106113d8576113d8612c43565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b909104161515908201529050600080611423610691565b600254855192945090925061143d9163ffffffff16612b3d565b8263ffffffff16101561145857878794509450505050611556565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa7375611481611b8a565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546114d39043612ba3565b6201000655620100035463ffffffff166114eb610e12565b6114f59190612bd9565b62010005805463ffffffff191663ffffffff9290921691909117905543620100045561151f610e12565b62010003805463ffffffff191663ffffffff92831617905561154e906004908a90859085908c908c90611b9516565b945094505050505b935093915050565b6040805160208101909152600081526040518060200160405280611586856000015185611cdd565b90529392505050565b60008061159c858561155e565b90506115b06115aa82611ce9565b84611d01565b95945050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156115f857604051633492ffd960e01b81526004810183905260240161062f565b50670de0b6b3a76400000290565b60008261161557506000610450565b600061162a61162460016115b9565b846119c0565b9050600061164c8561163c60016115b9565b6116469190612b3d565b836112f4565b905061165860016115b9565b6115b09082612ba3565b60008363ffffffff168563ffffffff16101561169157604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611739576116ad612a0c565b60048461ffff1661ffff81106116c5576116c5612c43565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff16151593830193909352909250908716146117225761171b610a13565b9150611733565b80602001516001600160d81b031691505b506118a6565b6000611743610a13565b90506000806117576004888a868a8a611d0d565b91509150816000015163ffffffff168763ffffffff1614156117885781602001516001600160d81b031693506118a2565b805163ffffffff888116911614156117af5780602001516001600160d81b031693506118a2565b600082602001516001600160d81b031682602001516001600160d81b0316111561181e576000676765c793fa10079d601b1b61180584602001516001600160d81b031686602001516001600160d81b03166118ae565b61180f9190612ba3565b905061181a816118bc565b9150505b8251825160009161185191670de0b6b3a76400009161183c91612bd9565b63ffffffff1661184c9190612bba565b6112dd565b9050600061185f8383611606565b905061189c85602001516001600160d81b031682670de0b6b3a764000088600001518e61188c9190612bd9565b63ffffffff166102ba9190612bba565b96505050505b5050505b949350505050565b60006112d683836001611ebf565b6000806118dc670de0b6b3a7640000676765c793fa10079d601b1b612c14565b6118e69084612c14565b90506002611907670de0b6b3a7640000676765c793fa10079d601b1b612c14565b6119119190612c14565b61192e670de0b6b3a7640000676765c793fa10079d601b1b612c14565b6119389085612c9b565b10610450576112d6600182612b3d565b611950612a0c565b6001600160d81b038211156119905760405162461bcd60e51b815260040161062f906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b60006112d683670de0b6b3a764000084611f5a565b6000670de0b6b3a7640000821015611a0357604051633621413760e21b81526004810183905260240161062f565b6000611a18670de0b6b3a76400008404612028565b670de0b6b3a7640000808202935090915083821c90811415611a3b575050919050565b6706f05b59d3b200005b8015611a7d57670de0b6b3a7640000828002049150671bc16d674ec800008210611a75579283019260019190911c905b60011c611a45565b505050919050565b60006112d68383612106565b6000680a688906bd8b0000008210611abf57604051634a4f26f160e01b81526004810183905260240161062f565b670de0b6b3a7640000604083901b046112d6816121c8565b6000831580611ae4575082155b15611af1575060006112d6565b6001826001811115611b0557611b05612caf565b14611b1857670de0b6b3a7640000611b25565b676765c793fa10079d601b1b5b6001836001811115611b3957611b39612caf565b14611b5657611b516002670de0b6b3a7640000612c14565b611b6c565b611b6c6002676765c793fa10079d601b1b612c14565b611b768587612bba565b611b809190612b3d565b6118a69190612c14565b6000610e1d426115b9565b6000806000888861ffff1661ffff8110611bb157611bb1612c43565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529092509088161415611c0c5787859250925050611cd2565b8461ffff168461ffff16118015611c345750611c29600186612c28565b61ffff168861ffff16145b15611c4157839150611c45565b8491505b81611c51896001612cc5565b611c5b9190612ceb565b9250611c678787611948565b898461ffff1661ffff8110611c7e57611c7e612c43565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff909416939093171792909216179055505b965096945050505050565b60006112d68284612bba565b805160009061045090670de0b6b3a764000090612c14565b60006112d68284612b3d565b611d15612a0c565b611d1d612a0c565b878461ffff1661ffff8110611d3457611d34612c43565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611db3578663ffffffff16826000015163ffffffff161415611d9f57611cd2565b81611daa8787611948565b91509150611cd2565b8783611dc0866001612cc5565b611dca9190612ceb565b61ffff1661ffff8110611ddf57611ddf612c43565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181018290529250611e645760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611ea45760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b604482015260640161062f565b611eb08888868661285a565b91509150965096945050505050565b600082611ef75760405162461bcd60e51b815260040161062f906020808252600490820152630444956360e41b604082015260600190565b6000611f04600285612c14565b905083816001856001811115611f1c57611f1c612caf565b14611f2f57670de0b6b3a7640000611f3c565b676765c793fa10079d601b1b5b611f469088612bba565b611f509190612b3d565b6115b09190612c14565b600080806000198587098587029250828110838203039150508060001415611f9557838281611f8b57611f8b612bfe565b04925050506112d6565b838110611fbf57604051631dcf306360e21b8152600481018290526024810185905260440161062f565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061204857608091821c916120459082612b3d565b90505b600160401b821061206657604091821c916120639082612b3d565b90505b600160201b821061208457602091821c916120819082612b3d565b90505b6201000082106120a157601091821c9161209e9082612b3d565b90505b61010082106120bd57600891821c916120ba9082612b3d565b90505b601082106120d857600491821c916120d59082612b3d565b90505b600482106120f357600291821c916120f09082612b3d565b90505b600282106111e357610450600182612b3d565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061214a5760405163698d9a0160e11b81526004810182905260240161062f565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826121845780670de0b6b3a7640000850401945050505050610450565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156121e85768016a09e667f3bcc9090260401c5b6001603e1b821615612203576801306fe0a31b7152df0260401c5b6001603d1b82161561221e576801172b83c7d517adce0260401c5b6001603c1b8216156122395768010b5586cf9890f62a0260401c5b6001603b1b821615612254576801059b0d31585743ae0260401c5b6001603a1b82161561226f57680102c9a3e778060ee70260401c5b600160391b82161561228a5768010163da9fb33356d80260401c5b600160381b8216156122a557680100b1afa5abcbed610260401c5b600160371b8216156122c05768010058c86da1c09ea20260401c5b600160361b8216156122db576801002c605e2e8cec500260401c5b600160351b8216156122f657680100162f3904051fa10260401c5b600160341b821615612311576801000b175effdc76ba0260401c5b600160331b82161561232c57680100058ba01fb9f96d0260401c5b600160321b8216156123475768010002c5cc37da94920260401c5b600160311b821615612362576801000162e525ee05470260401c5b600160301b82161561237d5768010000b17255775c040260401c5b6001602f1b821615612398576801000058b91b5bc9ae0260401c5b6001602e1b8216156123b357680100002c5c89d5ec6d0260401c5b6001602d1b8216156123ce5768010000162e43f4f8310260401c5b6001602c1b8216156123e957680100000b1721bcfc9a0260401c5b6001602b1b8216156124045768010000058b90cf1e6e0260401c5b6001602a1b82161561241f576801000002c5c863b73f0260401c5b600160291b82161561243a57680100000162e430e5a20260401c5b600160281b821615612455576801000000b1721835510260401c5b600160271b82161561247057680100000058b90c0b490260401c5b600160261b82161561248b5768010000002c5c8601cc0260401c5b600160251b8216156124a6576801000000162e42fff00260401c5b600160241b8216156124c15768010000000b17217fbb0260401c5b600160231b8216156124dc576801000000058b90bfce0260401c5b600160221b8216156124f757680100000002c5c85fe30260401c5b600160211b8216156125125768010000000162e42ff10260401c5b600160201b82161561252d57680100000000b17217f80260401c5b63800000008216156125485768010000000058b90bfc0260401c5b6340000000821615612563576801000000002c5c85fe0260401c5b632000000082161561257e57680100000000162e42ff0260401c5b6310000000821615612599576801000000000b17217f0260401c5b63080000008216156125b457680100000000058b90c00260401c5b63040000008216156125cf5768010000000002c5c8600260401c5b63020000008216156125ea576801000000000162e4300260401c5b63010000008216156126055768010000000000b172180260401c5b6280000082161561261f576801000000000058b90c0260401c5b6240000082161561263957680100000000002c5c860260401c5b622000008216156126535768010000000000162e430260401c5b6210000082161561266d57680100000000000b17210260401c5b620800008216156126875768010000000000058b910260401c5b620400008216156126a1576801000000000002c5c80260401c5b620200008216156126bb57680100000000000162e40260401c5b620100008216156126d45761b172600160401b010260401c5b6180008216156126ec576158b9600160401b010260401c5b61400082161561270457612c5d600160401b010260401c5b61200082161561271c5761162e600160401b010260401c5b61100082161561273457610b17600160401b010260401c5b61080082161561274c5761058c600160401b010260401c5b610400821615612764576102c6600160401b010260401c5b61020082161561277c57610163600160401b010260401c5b6101008216156127935760b1600160401b010260401c5b60808216156127a9576059600160401b010260401c5b60408216156127bf57602c600160401b010260401c5b60208216156127d5576016600160401b010260401c5b60108216156127eb57600b600160401b010260401c5b6008821615612801576006600160401b010260401c5b6004821615612817576003600160401b010260401c5b600282161561282d576001600160401b010260401c5b6001821615612843576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b612862612a0c565b61286a612a0c565b600083612878866001612cc5565b6128829190612ceb565b61ffff169050600060018561ffff168361289c9190612b3d565b6128a69190612ba3565b905060005b60016128b78385612b3d565b901c9050886128ca61ffff881683612c9b565b61ffff81106128db576128db612c43565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905295506129325761292b816001612b3d565b92506128ab565b8861ffff8716612943836001612b3d565b61294d9190612c9b565b61ffff811061295e5761295e612c43565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff16151592820192909252865190955089821691161180159081906129ca5750846000015163ffffffff168963ffffffff1611155b156129d55750612a00565b806129ec576129e5600183612ba3565b92506129fa565b6129f7826001612b3d565b93505b506128ab565b50505094509492505050565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff811681146111e357600080fd5b60008060408385031215612a5357600080fd5b612a5c83612a2c565b9150612a6a60208401612a2c565b90509250929050565b600060208284031215612a8557600080fd5b5035919050565b60008060408385031215612a9f57600080fd5b50508035926020909101359150565b600060208284031215612ac057600080fd5b813561ffff811681146112d657600080fd5b600080600060608486031215612ae757600080fd5b505081359360208301359350604090920135919050565b600060208284031215612b1057600080fd5b81356001600160a01b03811681146112d657600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612b5057612b50612b27565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215612b9c57600080fd5b5051919050565b600082821015612bb557612bb5612b27565b500390565b6000816000190483118215151615612bd457612bd4612b27565b500290565b600063ffffffff83811690831681811015612bf657612bf6612b27565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600082612c2357612c23612bfe565b500490565b600061ffff83811690831681811015612bf657612bf6612b27565b634e487b7160e01b600052603260045260246000fd5b60006001600160d81b0383811690831681811015612bf657612bf6612b27565b600061ffff80831681811415612c9157612c91612b27565b6001019392505050565b600082612caa57612caa612bfe565b500690565b634e487b7160e01b600052602160045260246000fd5b600061ffff808316818516808303821115612ce257612ce2612b27565b01949350505050565b600061ffff80841680612d0057612d00612bfe565b9216919091069291505056fea2646970667358221220a43f7a4336e64356f7bbc8b65bea534d9c10671bf7595893ae0b891e9758354964736f6c63430008090033";
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): CompoundBorrowRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompoundBorrowRateOracle;
}
//# sourceMappingURL=CompoundBorrowRateOracle__factory.d.ts.map