import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestRocketPoolRateOracle, TestRocketPoolRateOracleInterface } from "../TestRocketPoolRateOracle";
export declare class TestRocketPoolRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_rocketEth: string, _rocketNetworkBalances: string, _weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestRocketPoolRateOracle>;
    getDeployTransaction(_rocketEth: string, _rocketNetworkBalances: string, _weth: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestRocketPoolRateOracle;
    connect(signer: Signer): TestRocketPoolRateOracle__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620039f2380380620039f2833981016040819052620000349162000960565b60408051600080825260208201908152818301909252849184918491826200005c336200019f565b6001600160a01b03811660805243620100045562000085620001ef602090811b62000f5617901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b038516620001055760405162461bcd60e51b815260206004820152600f60248201526e14915512081b5d5cdd08195e1a5cdd608a1b60448201526064015b60405180910390fd5b6201000780546001600160a01b0319166001600160a01b03878116919091179091558416620001685760405162461bcd60e51b815260206004820152600e60248201526d149390881b5d5cdd08195e1a5cdd60921b6044820152606401620000fc565b6201000880546001600160a01b0319166001600160a01b03861617905562000191828262000201565b505050505050505062000b4b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001fc426200048c565b905090565b62000210600261ffff620009e0565b825110620002325760405162461bcd60e51b8152600401620000fc9062000a03565b8151815161ffff8216146200025b5760405162461bcd60e51b8152600401620000fc9062000a21565b60006200026a82600162000a4d565b61ffff166001600160401b03811115620002885762000288620009b4565b604051908082528060200260200182016040528015620002b2578160200160208202803683370190505b5090506000620002c483600162000a4d565b61ffff166001600160401b03811115620002e257620002e2620009b4565b6040519080825280602002602001820160405280156200030c578160200160208202803683370190505b50905060005b8361ffff16811015620003bd5785818151811062000334576200033462000a76565b602002602001015183828151811062000351576200035162000a76565b602002602001019063ffffffff16908163ffffffff168152505084818151811062000380576200038062000a76565b60200260200101518282815181106200039d576200039d62000a76565b602090810291909101015280620003b48162000a8c565b91505062000312565b50600080620003cb620004d3565b9150915081848661ffff1681518110620003e957620003e962000a76565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff16815181106200041d576200041d62000a76565b60200260200101818152505062000446848460046200067360201b62000f66179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620004ce5760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401620000fc565b919050565b6201000754604051638b32fa2360e01b81526b033b2e3c9fd0803ce8000000600482015260009182916001600160a01b0390911690638b32fa239060240160206040518083038186803b1580156200052a57600080fd5b505afa1580156200053f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000565919062000aaa565b90508062000586576040516312469ef560e01b815260040160405180910390fd5b620100085460408051639100c13d60e01b815290516000926001600160a01b031691639100c13d916004808301926020929190829003018186803b158015620005ce57600080fd5b505afa158015620005e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000609919062000aaa565b620100065462010005549192509063ffffffff16600082826200062d864362000ac4565b62000639919062000ade565b620006459190620009e0565b62000651904262000ac4565b905062000669816200048c60201b620011a91760201c565b9550505050509091565b600080600061ffff8551106200069d5760405162461bcd60e51b8152600401620000fc9062000a03565b8451845161ffff821614620006c65760405162461bcd60e51b8152600401620000fc9062000a21565b60008161ffff1611620007015760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401620000fc565b6000805b8261ffff168161ffff1610156200089757878161ffff16815181106200072f576200072f62000a76565b602002602001015163ffffffff168263ffffffff1610620007855760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401620000fc565b620007d7888261ffff1681518110620007a257620007a262000a76565b6020026020010151888361ffff1681518110620007c357620007c362000a76565b6020026020010151620008b860201b60201c565b898261ffff1661ffff8110620007f157620007f162000a76565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff831690811062000877576200087762000a76565b6020026020010151915080806200088e9062000b00565b91505062000705565b508180620008a760018262000b25565b945094509450505093509350939050565b60408051606081018252600080825260208201819052918101919091526001600160d81b03821115620009175760405162461bcd60e51b8152600401620000fc906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b6001600160a01b03811681146200095d57600080fd5b50565b6000806000606084860312156200097657600080fd5b8351620009838162000947565b6020850151909350620009968162000947565b6040850151909250620009a98162000947565b809150509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082620009fe57634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff80831681851680830382111562000a6d5762000a6d620009ca565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000aa35762000aa3620009ca565b5060010190565b60006020828403121562000abd57600080fd5b5051919050565b60008282101562000ad95762000ad9620009ca565b500390565b600081600019048311821515161562000afb5762000afb620009ca565b500290565b600061ffff8083168181141562000b1b5762000b1b620009ca565b6001019392505050565b600061ffff8381169083168181101562000b435762000b43620009ca565b039392505050565b608051612e8b62000b6760003960006103720152612e8b6000f3fe608060405234801561001057600080fd5b50600436106101965760003560e01c806301320aad1461019b5780631195082e146101b6578063163e9c4f146101e157806317221ef1146101f457806322ff65681461020757806324b18b1714610221578063251abea114610255578063252c09d71461028257806325f258dd146102c157806332148f67146102d45780633c155bd5146102e9578063414535281461031157806354124c641461032457806356da9775146103375780636e035c051461035a5780636f307dc31461036d578063715018a6146103945780637aa4db131461039c5780637cf2cc9f146103a45780638a6b8c5d146103ad5780638da5cb5b146103b557806391aa375d146103bd57806393556dbd146103df57806395f3e605146103f2578063af0c65a614610413578063bdb0509214610428578063c330c98d1461043b578063c7db359b1461044a578063e9b69c0d14610492578063efdf5d8b146104a5578063f2fde38b146104ad578063f739670c146104c0578063f90ce5ba146104d3578063fe115fbe146104eb575b600080fd5b6101a36104f3565b6040519081526020015b60405180910390f35b6101a36101c4366004612b5e565b600160209081526000928352604080842090915290825290205481565b6101a36101ef366004612b91565b61055a565b6101a3610202366004612b91565b61056c565b61020f600481565b60405160ff90911681526020016101ad565b620100055462010006546102399163ffffffff169082565b6040805163ffffffff90931683526020830191909152016101ad565b620100085461026a906001600160a01b031681565b6040516001600160a01b0390911681526020016101ad565b610295610290366004612b91565b610578565b6040805163ffffffff90941684526001600160d81b0390921660208401521515908201526060016101ad565b6101a36102cf366004612baa565b6105b2565b6102e76102e2366004612bcc565b610628565b005b6102fc6102f7366004612bcc565b6106ad565b604080519283526020830191909152016101ad565b6101a361031f366004612baa565b61071a565b6101a3610332366004612bf0565b61072e565b61034a610345366004612baa565b610783565b60405190151581526020016101ad565b6101a3610368366004612baa565b6107e9565b61026a7f000000000000000000000000000000000000000000000000000000000000000081565b6102e76107fc565b6102e7610810565b6101a360025481565b61023961085d565b61026a6109e2565b6103c56109f1565b6040805192835263ffffffff9091166020830152016101ad565b6101a36103ed366004612baa565b610a08565b610405610400366004612c1c565b610a9d565b6040516101ad929190612c61565b620100075461026a906001600160a01b031681565b6102e7610436366004612b91565b610ad5565b6101a3670de0b6b3a764000081565b60035461046d9061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff948516815292841660208401529216918101919091526060016101ad565b6102fc6104a0366004612c1c565b610b22565b6101a3610b7e565b6102e76104bb366004612c7c565b610c06565b6101a36104ce366004612baa565b610c7c565b620100035462010004546102399163ffffffff169082565b6103c5610d86565b600354600090819060049061ffff90811690811061051357610513612ca5565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b031660208301819052600160f81b90910460ff161515919092015292915050565b60006105668242610c7c565b92915050565b60006105668242610a08565b60048161ffff811061058957600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b6000806105bf84846111ee565b909250905080156106215760006105df670de0b6b3a764000086046111a9565b905060006105f6670de0b6b3a764000086046111a9565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff1660006106446004838561132c565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146106a85760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b600080600060048461ffff1661ffff81106106ca576106ca612ca5565b60408051606081018252919092015463ffffffff8116808352600160201b82046001600160d81b031660208401819052600160f81b90920460ff1615159290930191909152909590945092505050565b600061072683836111ee565b509392505050565b60008061073a8361141e565b90506000610750670de0b6b3a764000086612cd1565b9050600061075e8284611435565b9050600061076b82611474565b9050610777888261149e565b98975050505050505050565b60006b033b2e3cadb136f08f6400006b033b2e3c91efc989409c0000826107aa858461149e565b905060006107b8868461149e565b90508187111580156107ca5750808710155b156107dc576001945050505050610566565b6000945050505050610566565b60006107f583836114ac565b9392505050565b610804611511565b61080e6000611570565b565b6003546108359061ffff80821691620100008104821691600160201b909104166115c0565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b6201000754604051638b32fa2360e01b8152676765c793fa10079d601b1b600482015260009182916001600160a01b0390911690638b32fa239060240160206040518083038186803b1580156108b257600080fd5b505afa1580156108c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ea9190612ce9565b90508061090a576040516312469ef560e01b815260040160405180910390fd5b620100085460408051639100c13d60e01b815290516000926001600160a01b031691639100c13d916004808301926020929190829003018186803b15801561095157600080fd5b505afa158015610965573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109899190612ce9565b90506000806109966109f1565b909250905060008263ffffffff83166109af8643612d02565b6109b99190612d19565b6109c39190612d4e565b6109cd9042612d02565b90506109d8816111a9565b9550505050509091565b6000546001600160a01b031690565b62010006546201000554909163ffffffff90911690565b600081831115610a525760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b60448201526064015b60405180910390fd5b6000610a5e8484610c7c565b90506000610a6c8585612d02565b90506000610a7982611763565b90506000610a868261141e565b9050610a9284826114ac565b979650505050505050565b610aa5612b2a565b610aad612b2a565b600354610acc90600490859061ffff80821691620100009004166117b0565b91509150915091565b610add611511565b8060025414610b1f5760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610b2f610b7e565b9050600080610b5d86610b40610f56565b6003546004929190879061ffff8082169162010000900416611962565b6020918201519101516001600160d81b039182169891169650945050505050565b6000806000610b8b61085d565b91509150610b97610f56565b63ffffffff168263ffffffff1610610baf5792915050565b600080610bba610d86565b915091508063ffffffff168285610bcf610f56565b610bd99190612d62565b63ffffffff16610be99190612d19565b610bf39190612d4e565b610bfd9084612cd1565b94505050505090565b610c0e611511565b6001600160a01b038116610c735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a49565b610b1f81611570565b600081831115610cba5760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610a49565b81831415610cca57506000610566565b6000610cd4610f56565b90506000610ce1856111a9565b90506000610cee856111a9565b600354909150600090610d12908590859061ffff8082169162010000900416611b15565b600354909150600090610d36908690859061ffff8082169162010000900416611b15565b905081811115610d78576000610d6a676765c793fa10079d601b1b610d5b8486611d61565b610d659190612d02565b611d6f565b965061056695505050505050565b600095505050505050610566565b600354600090819061ffff16816001821015610dba57600354610db59060019062010000900461ffff16612d87565b610dcd565b600354610dcd9060019061ffff16612d87565b60035490915060026201000090910461ffff1610801590610e0e575060048161ffff1661ffff8110610e0157610e01612ca5565b0154600160f81b900460ff165b8015610e6b575060048261ffff1661ffff8110610e2d57610e2d612ca5565b0154600160201b90046001600160d81b0316600461ffff838116908110610e5657610e56612ca5565b0154600160201b90046001600160d81b031611155b610e9d5760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610a49565b60048161ffff1661ffff8110610eb557610eb5612ca5565b0154600160201b90046001600160d81b0316600461ffff848116908110610ede57610ede612ca5565b0154610efa9190600160201b90046001600160d81b0316612da2565b6001600160d81b0316935060048161ffff1661ffff8110610f1d57610f1d612ca5565b015463ffffffff16600461ffff808516908110610f3c57610f3c612ca5565b0154610f4e919063ffffffff16612d62565b925050509091565b6000610f61426111a9565b905090565b600080600061ffff855110610fa65760405162461bcd60e51b8152600401610a49906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff821614610ff15760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610a49565b60008161ffff161161102a5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610a49565b6000805b8261ffff168161ffff16101561118a57878161ffff168151811061105457611054612ca5565b602002602001015163ffffffff168263ffffffff16106110a85760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610a49565b6110ec888261ffff16815181106110c1576110c1612ca5565b6020026020010151888361ffff16815181106110df576110df612ca5565b6020026020010151611dfb565b898261ffff1661ffff811061110357611103612ca5565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff831690811061116d5761116d612ca5565b60200260200101519150808061118290612dc2565b91505061102e565b508180611198600182612d87565b945094509450505093509350939050565b8063ffffffff811681146111e95760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610a49565b919050565b60008080611205670de0b6b3a764000086046111a9565b9050600061121c670de0b6b3a764000086046111a9565b905060008263ffffffff1611801561123a575060008163ffffffff16115b61126e5760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610a49565b63ffffffff808316600090815260016020908152604080832093851683529290522054156112c45763ffffffff808316600090815260016020908152604080832093851683529290529081205494509250611323565b8063ffffffff166112d3610f56565b63ffffffff16106112ff576112f48263ffffffff168263ffffffff16610c7c565b935060019250611323565b61131c8263ffffffff16611311610f56565b63ffffffff16610c7c565b9350600092505b50509250929050565b6000808361ffff16116113655760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610a49565b61ffff8261ffff16106113a95760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610a49565b8261ffff168261ffff16116113bf5750816107f5565b825b8261ffff168161ffff161015611415576001858261ffff1661ffff81106113ea576113ea612ca5565b01805463ffffffff191663ffffffff929092169190911790558061140d81612dc2565b9150506113c1565b50909392505050565b6000610566826a1a1601fc4ea7109e000000611e73565b60008261145a578115611449576000611453565b670de0b6b3a76400005b9050610566565b6107f561146f61146985611e88565b84611f38565b611f44565b600080611494670de0b6b3a7640000676765c793fa10079d601b1b612d4e565b6107f59084612d19565b60006107f583836001611f8a565b6000826114bb57506000610566565b60006114d06114ca6001611763565b84611e73565b905060006114f2856114e26001611763565b6114ec9190612cd1565b83611435565b90506114fe6001611763565b6115089082612d02565b95945050505050565b3361151a6109e2565b6001600160a01b03161461080e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a49565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106115dd576115dd612ca5565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b90910416151590820152905060008061162861085d565b60025485519294509092506116429163ffffffff16612cd1565b8263ffffffff16101561165d5787879450945050505061175b565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa737561168661203d565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546116d89043612d02565b6201000655620100035463ffffffff166116f0610f56565b6116fa9190612d62565b62010005805463ffffffff191663ffffffff92909216919091179055436201000455611724610f56565b62010003805463ffffffff191663ffffffff928316179055611753906004908a90859085908c908c9061204816565b945094505050505b935093915050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156117a257604051633492ffd960e01b815260048101839052602401610a49565b50670de0b6b3a76400000290565b6117b8612b2a565b6117c0612b2a565b6000836117ce866001612de4565b6117d89190612e0a565b61ffff169050600060018561ffff16836117f29190612cd1565b6117fc9190612d02565b905060005b600161180d8385612cd1565b901c90508861182061ffff881683612e2b565b61ffff811061183157611831612ca5565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff161515918101829052955061188857611881816001612cd1565b9250611801565b8861ffff8716611899836001612cd1565b6118a39190612e2b565b61ffff81106118b4576118b4612ca5565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff16151592820192909252865190955089821691161180159081906119205750846000015163ffffffff168963ffffffff1611155b1561192b5750611956565b806119425761193b600183612d02565b9250611950565b61194d826001612cd1565b93505b50611801565b50505094509492505050565b61196a612b2a565b611972612b2a565b878461ffff1661ffff811061198957611989612ca5565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611a08578663ffffffff16826000015163ffffffff1614156119f457611b0a565b816119ff8787611dfb565b91509150611b0a565b8783611a15866001612de4565b611a1f9190612e0a565b61ffff1661ffff8110611a3457611a34612ca5565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181018290529250611ab95760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611af95760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610a49565b611b05888886866117b0565b915091505b965096945050505050565b60008363ffffffff168563ffffffff161015611b4457604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611bec57611b60612b2a565b60048461ffff1661ffff8110611b7857611b78612ca5565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090871614611bd557611bce610b7e565b9150611be6565b80602001516001600160d81b031691505b50611d59565b6000611bf6610b7e565b9050600080611c0a6004888a868a8a611962565b91509150816000015163ffffffff168763ffffffff161415611c3b5781602001516001600160d81b03169350611d55565b805163ffffffff88811691161415611c625780602001516001600160d81b03169350611d55565b600082602001516001600160d81b031682602001516001600160d81b03161115611cd1576000676765c793fa10079d601b1b611cb884602001516001600160d81b031686602001516001600160d81b0316611d61565b611cc29190612d02565b9050611ccd81611d6f565b9150505b82518251600091611d0491670de0b6b3a764000091611cef91612d62565b63ffffffff16611cff9190612d19565b61141e565b90506000611d1283836114ac565b9050611d4f85602001516001600160d81b031682670de0b6b3a764000088600001518e611d3f9190612d62565b63ffffffff166103329190612d19565b96505050505b5050505b949350505050565b60006107f58383600161218f565b600080611d8f670de0b6b3a7640000676765c793fa10079d601b1b612d4e565b611d999084612d4e565b90506002611dba670de0b6b3a7640000676765c793fa10079d601b1b612d4e565b611dc49190612d4e565b611de1670de0b6b3a7640000676765c793fa10079d601b1b612d4e565b611deb9085612e2b565b10610566576107f5600182612cd1565b611e03612b2a565b6001600160d81b03821115611e435760405162461bcd60e51b8152600401610a49906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b60006107f583670de0b6b3a76400008461222a565b6000670de0b6b3a7640000821015611eb657604051633621413760e21b815260048101839052602401610a49565b6000611ecb670de0b6b3a764000084046122f8565b670de0b6b3a7640000808202935090915083821c90811415611eee575050919050565b6706f05b59d3b200005b8015611f3057670de0b6b3a7640000828002049150671bc16d674ec800008210611f28579283019260019190911c905b60011c611ef8565b505050919050565b60006107f583836123d6565b6000680a688906bd8b0000008210611f7257604051634a4f26f160e01b815260048101839052602401610a49565b670de0b6b3a7640000604083901b046107f581612498565b6000831580611f97575082155b15611fa4575060006107f5565b6001826001811115611fb857611fb8612e3f565b14611fcb57670de0b6b3a7640000611fd8565b676765c793fa10079d601b1b5b6001836001811115611fec57611fec612e3f565b14612009576120046002670de0b6b3a7640000612d4e565b61201f565b61201f6002676765c793fa10079d601b1b612d4e565b6120298587612d19565b6120339190612cd1565b611d599190612d4e565b6000610f6142611763565b6000806000888861ffff1661ffff811061206457612064612ca5565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090881614156120bf5787859250925050611b0a565b8461ffff168461ffff161180156120e757506120dc600186612d87565b61ffff168861ffff16145b156120f4578391506120f8565b8491505b81612104896001612de4565b61210e9190612e0a565b925061211a8787611dfb565b898461ffff1661ffff811061213157612131612ca5565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff90941693909317179290921617905550965096945050505050565b6000826121c75760405162461bcd60e51b8152600401610a49906020808252600490820152630444956360e41b604082015260600190565b60006121d4600285612d4e565b9050838160018560018111156121ec576121ec612e3f565b146121ff57670de0b6b3a764000061220c565b676765c793fa10079d601b1b5b6122169088612d19565b6122209190612cd1565b6115089190612d4e565b6000808060001985870985870292508281108382030391505080600014156122655783828161225b5761225b612d38565b04925050506107f5565b83811061228f57604051631dcf306360e21b81526004810182905260248101859052604401610a49565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061231857608091821c916123159082612cd1565b90505b600160401b821061233657604091821c916123339082612cd1565b90505b600160201b821061235457602091821c916123519082612cd1565b90505b62010000821061237157601091821c9161236e9082612cd1565b90505b610100821061238d57600891821c9161238a9082612cd1565b90505b601082106123a857600491821c916123a59082612cd1565b90505b600482106123c357600291821c916123c09082612cd1565b90505b600282106111e957610566600182612cd1565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061241a5760405163698d9a0160e11b815260048101829052602401610a49565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826124545780670de0b6b3a7640000850401945050505050610566565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156124b85768016a09e667f3bcc9090260401c5b6001603e1b8216156124d3576801306fe0a31b7152df0260401c5b6001603d1b8216156124ee576801172b83c7d517adce0260401c5b6001603c1b8216156125095768010b5586cf9890f62a0260401c5b6001603b1b821615612524576801059b0d31585743ae0260401c5b6001603a1b82161561253f57680102c9a3e778060ee70260401c5b600160391b82161561255a5768010163da9fb33356d80260401c5b600160381b82161561257557680100b1afa5abcbed610260401c5b600160371b8216156125905768010058c86da1c09ea20260401c5b600160361b8216156125ab576801002c605e2e8cec500260401c5b600160351b8216156125c657680100162f3904051fa10260401c5b600160341b8216156125e1576801000b175effdc76ba0260401c5b600160331b8216156125fc57680100058ba01fb9f96d0260401c5b600160321b8216156126175768010002c5cc37da94920260401c5b600160311b821615612632576801000162e525ee05470260401c5b600160301b82161561264d5768010000b17255775c040260401c5b6001602f1b821615612668576801000058b91b5bc9ae0260401c5b6001602e1b82161561268357680100002c5c89d5ec6d0260401c5b6001602d1b82161561269e5768010000162e43f4f8310260401c5b6001602c1b8216156126b957680100000b1721bcfc9a0260401c5b6001602b1b8216156126d45768010000058b90cf1e6e0260401c5b6001602a1b8216156126ef576801000002c5c863b73f0260401c5b600160291b82161561270a57680100000162e430e5a20260401c5b600160281b821615612725576801000000b1721835510260401c5b600160271b82161561274057680100000058b90c0b490260401c5b600160261b82161561275b5768010000002c5c8601cc0260401c5b600160251b821615612776576801000000162e42fff00260401c5b600160241b8216156127915768010000000b17217fbb0260401c5b600160231b8216156127ac576801000000058b90bfce0260401c5b600160221b8216156127c757680100000002c5c85fe30260401c5b600160211b8216156127e25768010000000162e42ff10260401c5b600160201b8216156127fd57680100000000b17217f80260401c5b63800000008216156128185768010000000058b90bfc0260401c5b6340000000821615612833576801000000002c5c85fe0260401c5b632000000082161561284e57680100000000162e42ff0260401c5b6310000000821615612869576801000000000b17217f0260401c5b630800000082161561288457680100000000058b90c00260401c5b630400000082161561289f5768010000000002c5c8600260401c5b63020000008216156128ba576801000000000162e4300260401c5b63010000008216156128d55768010000000000b172180260401c5b628000008216156128ef576801000000000058b90c0260401c5b6240000082161561290957680100000000002c5c860260401c5b622000008216156129235768010000000000162e430260401c5b6210000082161561293d57680100000000000b17210260401c5b620800008216156129575768010000000000058b910260401c5b62040000821615612971576801000000000002c5c80260401c5b6202000082161561298b57680100000000000162e40260401c5b620100008216156129a45761b172600160401b010260401c5b6180008216156129bc576158b9600160401b010260401c5b6140008216156129d457612c5d600160401b010260401c5b6120008216156129ec5761162e600160401b010260401c5b611000821615612a0457610b17600160401b010260401c5b610800821615612a1c5761058c600160401b010260401c5b610400821615612a34576102c6600160401b010260401c5b610200821615612a4c57610163600160401b010260401c5b610100821615612a635760b1600160401b010260401c5b6080821615612a79576059600160401b010260401c5b6040821615612a8f57602c600160401b010260401c5b6020821615612aa5576016600160401b010260401c5b6010821615612abb57600b600160401b010260401c5b6008821615612ad1576006600160401b010260401c5b6004821615612ae7576003600160401b010260401c5b6002821615612afd576001600160401b010260401c5b6001821615612b13576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff811681146111e957600080fd5b60008060408385031215612b7157600080fd5b612b7a83612b4a565b9150612b8860208401612b4a565b90509250929050565b600060208284031215612ba357600080fd5b5035919050565b60008060408385031215612bbd57600080fd5b50508035926020909101359150565b600060208284031215612bde57600080fd5b813561ffff811681146107f557600080fd5b600080600060608486031215612c0557600080fd5b505081359360208301359350604090920135919050565b600060208284031215612c2e57600080fd5b6107f582612b4a565b805163ffffffff1682526020808201516001600160d81b0316908301526040908101511515910152565b60c08101612c6f8285612c37565b6107f56060830184612c37565b600060208284031215612c8e57600080fd5b81356001600160a01b03811681146107f557600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612ce457612ce4612cbb565b500190565b600060208284031215612cfb57600080fd5b5051919050565b600082821015612d1457612d14612cbb565b500390565b6000816000190483118215151615612d3357612d33612cbb565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612d5d57612d5d612d38565b500490565b600063ffffffff83811690831681811015612d7f57612d7f612cbb565b039392505050565b600061ffff83811690831681811015612d7f57612d7f612cbb565b60006001600160d81b0383811690831681811015612d7f57612d7f612cbb565b600061ffff80831681811415612dda57612dda612cbb565b6001019392505050565b600061ffff808316818516808303821115612e0157612e01612cbb565b01949350505050565b600061ffff80841680612e1f57612e1f612d38565b92169190910692915050565b600082612e3a57612e3a612d38565b500690565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220268a375f9782f99c3d9992dbee1ac37d40bf171cdca55a5576c685f428913a1264736f6c63430008090033";
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
    static createInterface(): TestRocketPoolRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestRocketPoolRateOracle;
}
//# sourceMappingURL=TestRocketPoolRateOracle__factory.d.ts.map