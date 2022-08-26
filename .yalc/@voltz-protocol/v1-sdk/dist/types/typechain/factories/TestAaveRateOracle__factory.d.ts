import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAaveRateOracle, TestAaveRateOracleInterface } from "../TestAaveRateOracle";
export declare class TestAaveRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(aaveLendingPool: string, underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAaveRateOracle>;
    getDeployTransaction(aaveLendingPool: string, underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAaveRateOracle;
    connect(signer: Signer): TestAaveRateOracle__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620037fa380380620037fa833981016040819052620000349162000887565b604080516000808252602082019081528183019092528391839190826200005b33620001a1565b6001600160a01b03811660805243620100045562000084620001f1602090811b62000e6d17901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b038416620001125760405162461bcd60e51b815260206004820152601460248201527f6161766520706f6f6c206d75737420657869737400000000000000000000000060448201526064015b60405180910390fd5b6080516001600160a01b03166200016c5760405162461bcd60e51b815260206004820152601560248201527f756e6465726c79696e67206d7573742065786973740000000000000000000000604482015260640162000109565b6201000780546001600160a01b0319166001600160a01b03861617905562000195828262000203565b50505050505062000a21565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001fe426200048e565b905090565b62000212600261ffff620008f2565b825110620002345760405162461bcd60e51b8152600401620001099062000915565b8151815161ffff8216146200025d5760405162461bcd60e51b8152600401620001099062000933565b60006200026c8260016200095f565b61ffff166001600160401b038111156200028a576200028a620008c6565b604051908082528060200260200182016040528015620002b4578160200160208202803683370190505b5090506000620002c68360016200095f565b61ffff166001600160401b03811115620002e457620002e4620008c6565b6040519080825280602002602001820160405280156200030e578160200160208202803683370190505b50905060005b8361ffff16811015620003bf5785818151811062000336576200033662000988565b602002602001015183828151811062000353576200035362000988565b602002602001019063ffffffff16908163ffffffff168152505084818151811062000382576200038262000988565b60200260200101518282815181106200039f576200039f62000988565b602090810291909101015280620003b6816200099e565b91505062000314565b50600080620003cd620004d5565b9150915081848661ffff1681518110620003eb57620003eb62000988565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff16815181106200041f576200041f62000988565b60200260200101818152505062000448848460046200059a60201b62000e7d179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620004d05760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b604482015260640162000109565b919050565b620100075460805160405163d15e005360e01b81526001600160a01b0391821660048201526000928392169063d15e00539060240160206040518083038186803b1580156200052357600080fd5b505afa15801562000538573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055e9190620009bc565b9050806200057f5760405163bd89c5af60e01b815260040160405180910390fd5b62000594620001f160201b62000e6d1760201c565b91509091565b600080600061ffff855110620005c45760405162461bcd60e51b8152600401620001099062000915565b8451845161ffff821614620005ed5760405162461bcd60e51b8152600401620001099062000933565b60008161ffff1611620006285760405162461bcd60e51b81526020600482015260026024820152610c1560f21b604482015260640162000109565b6000805b8261ffff168161ffff161015620007be57878161ffff168151811062000656576200065662000988565b602002602001015163ffffffff168263ffffffff1610620006ac5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b604482015260640162000109565b620006fe888261ffff1681518110620006c957620006c962000988565b6020026020010151888361ffff1681518110620006ea57620006ea62000988565b6020026020010151620007df60201b60201c565b898261ffff1661ffff811062000718576200071862000988565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff83169081106200079e576200079e62000988565b602002602001015191508080620007b590620009d6565b9150506200062c565b508180620007ce600182620009fb565b945094509450505093509350939050565b60408051606081018252600080825260208201819052918101919091526001600160d81b038211156200083e5760405162461bcd60e51b815260040162000109906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b6001600160a01b03811681146200088457600080fd5b50565b600080604083850312156200089b57600080fd5b8251620008a8816200086e565b6020840151909250620008bb816200086e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000826200091057634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff8083168185168083038211156200097f576200097f620008dc565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620009b557620009b5620008dc565b5060010190565b600060208284031215620009cf57600080fd5b5051919050565b600061ffff80831681811415620009f157620009f1620008dc565b6001019392505050565b600061ffff8381169083168181101562000a195762000a19620008dc565b039392505050565b608051612db662000a446000396000818161033a015261086a0152612db66000f3fe608060405234801561001057600080fd5b506004361061018b5760003560e01c806301320aad146101905780631195082e146101ab578063163e9c4f146101d657806317221ef1146101e957806322ff6568146101fc57806324b18b1714610216578063252c09d71461024a57806325f258dd1461028957806332148f671461029c5780633c155bd5146102b157806341453528146102d957806354124c64146102ec57806356da9775146102ff5780636e035c05146103225780636f307dc314610335578063715018a6146103695780637aa4db13146103715780637cf2cc9f146103795780638a6b8c5d146103825780638da5cb5b1461038a57806391aa375d1461039257806393556dbd146103bd57806395f3e605146103d0578063bdb05092146103f1578063c330c98d14610404578063c7db359b14610413578063e9b69c0d1461045b578063e9d337b81461046e578063efdf5d8b14610483578063f2fde38b1461048b578063f739670c1461049e578063f90ce5ba146104b1578063fe115fbe146104c9575b600080fd5b6101986104d1565b6040519081526020015b60405180910390f35b6101986101b9366004612a75565b600160209081526000928352604080842090915290825290205481565b6101986101e4366004612aa8565b610538565b6101986101f7366004612aa8565b61054a565b610204600181565b60405160ff90911681526020016101a2565b6201000554620100065461022e9163ffffffff169082565b6040805163ffffffff90931683526020830191909152016101a2565b61025d610258366004612aa8565b610556565b6040805163ffffffff90941684526001600160d81b0390921660208401521515908201526060016101a2565b610198610297366004612ac1565b610590565b6102af6102aa366004612ae3565b610606565b005b6102c46102bf366004612ae3565b61068b565b604080519283526020830191909152016101a2565b6101986102e7366004612ac1565b6106f8565b6101986102fa366004612b07565b61070c565b61031261030d366004612ac1565b610761565b60405190151581526020016101a2565b610198610330366004612ac1565b6107c7565b61035c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101a29190612b33565b6102af6107da565b6102af6107ee565b61019860025481565b61022e61083b565b61035c610910565b6201000654620100055463ffffffff165b6040805192835263ffffffff9091166020830152016101a2565b6101986103cb366004612ac1565b61091f565b6103e36103de366004612b47565b6109b4565b6040516101a2929190612b8c565b6102af6103ff366004612aa8565b6109ec565b610198670de0b6b3a764000081565b6003546104369061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff948516815292841660208401529216918101919091526060016101a2565b6102c4610469366004612b47565b610a39565b620100075461035c906001600160a01b031681565b610198610a95565b6102af610499366004612ba7565b610b1d565b6101986104ac366004612ac1565b610b93565b6201000354620100045461022e9163ffffffff169082565b6103a3610c9d565b600354600090819060049061ffff9081169081106104f1576104f1612bd0565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b031660208301819052600160f81b90910460ff161515919092015292915050565b60006105448242610b93565b92915050565b6000610544824261091f565b60048161ffff811061056757600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b60008061059d84846110c0565b909250905080156105ff5760006105bd670de0b6b3a764000086046111fe565b905060006105d4670de0b6b3a764000086046111fe565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff16600061062260048385611243565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146106865760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b600080600060048461ffff1661ffff81106106a8576106a8612bd0565b60408051606081018252919092015463ffffffff8116808352600160201b82046001600160d81b031660208401819052600160f81b90920460ff1615159290930191909152909590945092505050565b600061070483836110c0565b509392505050565b60008061071883611335565b9050600061072e670de0b6b3a764000086612bfc565b9050600061073c828461134c565b905060006107498261138b565b905061075588826113b5565b98975050505050505050565b60006b033b2e3cadb136f08f6400006b033b2e3c91efc989409c00008261078885846113b5565b9050600061079686846113b5565b90508187111580156107a85750808710155b156107ba576001945050505050610544565b6000945050505050610544565b60006107d383836113c3565b9392505050565b6107e2611428565b6107ec6000611487565b565b6003546108139061ffff80821691620100008104821691600160201b909104166114d7565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b620100075460405163d15e005360e01b815260009182916001600160a01b039091169063d15e005390610892907f000000000000000000000000000000000000000000000000000000000000000090600401612b33565b60206040518083038186803b1580156108aa57600080fd5b505afa1580156108be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e29190612c14565b9050806109025760405163bd89c5af60e01b815260040160405180910390fd5b61090a610e6d565b91509091565b6000546001600160a01b031690565b6000818311156109695760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b60448201526064015b60405180910390fd5b60006109758484610b93565b905060006109838585612c2d565b905060006109908261167a565b9050600061099d82611335565b90506109a984826113c3565b979650505050505050565b6109bc612a41565b6109c4612a41565b6003546109e390600490859061ffff80821691620100009004166116c7565b91509150915091565b6109f4611428565b8060025414610a365760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610a46610a95565b9050600080610a7486610a57610e6d565b6003546004929190879061ffff8082169162010000900416611879565b6020918201519101516001600160d81b039182169891169650945050505050565b6000806000610aa261083b565b91509150610aae610e6d565b63ffffffff168263ffffffff1610610ac65792915050565b600080610ad1610c9d565b915091508063ffffffff168285610ae6610e6d565b610af09190612c44565b63ffffffff16610b009190612c69565b610b0a9190612c9e565b610b149084612bfc565b94505050505090565b610b25611428565b6001600160a01b038116610b8a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610960565b610a3681611487565b600081831115610bd15760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610960565b81831415610be157506000610544565b6000610beb610e6d565b90506000610bf8856111fe565b90506000610c05856111fe565b600354909150600090610c29908590859061ffff8082169162010000900416611a2c565b600354909150600090610c4d908690859061ffff8082169162010000900416611a2c565b905081811115610c8f576000610c81676765c793fa10079d601b1b610c728486611c78565b610c7c9190612c2d565b611c86565b965061054495505050505050565b600095505050505050610544565b600354600090819061ffff16816001821015610cd157600354610ccc9060019062010000900461ffff16612cb2565b610ce4565b600354610ce49060019061ffff16612cb2565b60035490915060026201000090910461ffff1610801590610d25575060048161ffff1661ffff8110610d1857610d18612bd0565b0154600160f81b900460ff165b8015610d82575060048261ffff1661ffff8110610d4457610d44612bd0565b0154600160201b90046001600160d81b0316600461ffff838116908110610d6d57610d6d612bd0565b0154600160201b90046001600160d81b031611155b610db45760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610960565b60048161ffff1661ffff8110610dcc57610dcc612bd0565b0154600160201b90046001600160d81b0316600461ffff848116908110610df557610df5612bd0565b0154610e119190600160201b90046001600160d81b0316612ccd565b6001600160d81b0316935060048161ffff1661ffff8110610e3457610e34612bd0565b015463ffffffff16600461ffff808516908110610e5357610e53612bd0565b0154610e65919063ffffffff16612c44565b925050509091565b6000610e78426111fe565b905090565b600080600061ffff855110610ebd5760405162461bcd60e51b8152600401610960906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff821614610f085760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610960565b60008161ffff1611610f415760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610960565b6000805b8261ffff168161ffff1610156110a157878161ffff1681518110610f6b57610f6b612bd0565b602002602001015163ffffffff168263ffffffff1610610fbf5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610960565b611003888261ffff1681518110610fd857610fd8612bd0565b6020026020010151888361ffff1681518110610ff657610ff6612bd0565b6020026020010151611d12565b898261ffff1661ffff811061101a5761101a612bd0565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff831690811061108457611084612bd0565b60200260200101519150808061109990612ced565b915050610f45565b5081806110af600182612cb2565b945094509450505093509350939050565b600080806110d7670de0b6b3a764000086046111fe565b905060006110ee670de0b6b3a764000086046111fe565b905060008263ffffffff1611801561110c575060008163ffffffff16115b6111405760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610960565b63ffffffff808316600090815260016020908152604080832093851683529290522054156111965763ffffffff8083166000908152600160209081526040808320938516835292905290812054945092506111f5565b8063ffffffff166111a5610e6d565b63ffffffff16106111d1576111c68263ffffffff168263ffffffff16610b93565b9350600192506111f5565b6111ee8263ffffffff166111e3610e6d565b63ffffffff16610b93565b9350600092505b50509250929050565b8063ffffffff8116811461123e5760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610960565b919050565b6000808361ffff161161127c5760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610960565b61ffff8261ffff16106112c05760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610960565b8261ffff168261ffff16116112d65750816107d3565b825b8261ffff168161ffff16101561132c576001858261ffff1661ffff811061130157611301612bd0565b01805463ffffffff191663ffffffff929092169190911790558061132481612ced565b9150506112d8565b50909392505050565b6000610544826a1a1601fc4ea7109e000000611d8a565b60008261137157811561136057600061136a565b670de0b6b3a76400005b9050610544565b6107d361138661138085611d9f565b84611e4f565b611e5b565b6000806113ab670de0b6b3a7640000676765c793fa10079d601b1b612c9e565b6107d39084612c69565b60006107d383836001611ea1565b6000826113d257506000610544565b60006113e76113e1600161167a565b84611d8a565b90506000611409856113f9600161167a565b6114039190612bfc565b8361134c565b9050611415600161167a565b61141f9082612c2d565b95945050505050565b33611431610910565b6001600160a01b0316146107ec5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610960565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106114f4576114f4612bd0565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b90910416151590820152905060008061153f61083b565b60025485519294509092506115599163ffffffff16612bfc565b8263ffffffff16101561157457878794509450505050611672565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa737561159d611f54565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546115ef9043612c2d565b6201000655620100035463ffffffff16611607610e6d565b6116119190612c44565b62010005805463ffffffff191663ffffffff9290921691909117905543620100045561163b610e6d565b62010003805463ffffffff191663ffffffff92831617905561166a906004908a90859085908c908c90611f5f16565b945094505050505b935093915050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156116b957604051633492ffd960e01b815260048101839052602401610960565b50670de0b6b3a76400000290565b6116cf612a41565b6116d7612a41565b6000836116e5866001612d0f565b6116ef9190612d35565b61ffff169050600060018561ffff16836117099190612bfc565b6117139190612c2d565b905060005b60016117248385612bfc565b901c90508861173761ffff881683612d56565b61ffff811061174857611748612bd0565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff161515918101829052955061179f57611798816001612bfc565b9250611718565b8861ffff87166117b0836001612bfc565b6117ba9190612d56565b61ffff81106117cb576117cb612bd0565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff16151592820192909252865190955089821691161180159081906118375750846000015163ffffffff168963ffffffff1611155b15611842575061186d565b8061185957611852600183612c2d565b9250611867565b611864826001612bfc565b93505b50611718565b50505094509492505050565b611881612a41565b611889612a41565b878461ffff1661ffff81106118a0576118a0612bd0565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529093509088161061191f578663ffffffff16826000015163ffffffff16141561190b57611a21565b816119168787611d12565b91509150611a21565b878361192c866001612d0f565b6119369190612d35565b61ffff1661ffff811061194b5761194b612bd0565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905292506119d05760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611a105760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610960565b611a1c888886866116c7565b915091505b965096945050505050565b60008363ffffffff168563ffffffff161015611a5b57604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611b0357611a77612a41565b60048461ffff1661ffff8110611a8f57611a8f612bd0565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090871614611aec57611ae5610a95565b9150611afd565b80602001516001600160d81b031691505b50611c70565b6000611b0d610a95565b9050600080611b216004888a868a8a611879565b91509150816000015163ffffffff168763ffffffff161415611b525781602001516001600160d81b03169350611c6c565b805163ffffffff88811691161415611b795780602001516001600160d81b03169350611c6c565b600082602001516001600160d81b031682602001516001600160d81b03161115611be8576000676765c793fa10079d601b1b611bcf84602001516001600160d81b031686602001516001600160d81b0316611c78565b611bd99190612c2d565b9050611be481611c86565b9150505b82518251600091611c1b91670de0b6b3a764000091611c0691612c44565b63ffffffff16611c169190612c69565b611335565b90506000611c2983836113c3565b9050611c6685602001516001600160d81b031682670de0b6b3a764000088600001518e611c569190612c44565b63ffffffff166102fa9190612c69565b96505050505b5050505b949350505050565b60006107d3838360016120a6565b600080611ca6670de0b6b3a7640000676765c793fa10079d601b1b612c9e565b611cb09084612c9e565b90506002611cd1670de0b6b3a7640000676765c793fa10079d601b1b612c9e565b611cdb9190612c9e565b611cf8670de0b6b3a7640000676765c793fa10079d601b1b612c9e565b611d029085612d56565b10610544576107d3600182612bfc565b611d1a612a41565b6001600160d81b03821115611d5a5760405162461bcd60e51b8152600401610960906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b60006107d383670de0b6b3a764000084612141565b6000670de0b6b3a7640000821015611dcd57604051633621413760e21b815260048101839052602401610960565b6000611de2670de0b6b3a7640000840461220f565b670de0b6b3a7640000808202935090915083821c90811415611e05575050919050565b6706f05b59d3b200005b8015611e4757670de0b6b3a7640000828002049150671bc16d674ec800008210611e3f579283019260019190911c905b60011c611e0f565b505050919050565b60006107d383836122ed565b6000680a688906bd8b0000008210611e8957604051634a4f26f160e01b815260048101839052602401610960565b670de0b6b3a7640000604083901b046107d3816123af565b6000831580611eae575082155b15611ebb575060006107d3565b6001826001811115611ecf57611ecf612d6a565b14611ee257670de0b6b3a7640000611eef565b676765c793fa10079d601b1b5b6001836001811115611f0357611f03612d6a565b14611f2057611f1b6002670de0b6b3a7640000612c9e565b611f36565b611f366002676765c793fa10079d601b1b612c9e565b611f408587612c69565b611f4a9190612bfc565b611c709190612c9e565b6000610e784261167a565b6000806000888861ffff1661ffff8110611f7b57611f7b612bd0565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529092509088161415611fd65787859250925050611a21565b8461ffff168461ffff16118015611ffe5750611ff3600186612cb2565b61ffff168861ffff16145b1561200b5783915061200f565b8491505b8161201b896001612d0f565b6120259190612d35565b92506120318787611d12565b898461ffff1661ffff811061204857612048612bd0565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff90941693909317179290921617905550965096945050505050565b6000826120de5760405162461bcd60e51b8152600401610960906020808252600490820152630444956360e41b604082015260600190565b60006120eb600285612c9e565b90508381600185600181111561210357612103612d6a565b1461211657670de0b6b3a7640000612123565b676765c793fa10079d601b1b5b61212d9088612c69565b6121379190612bfc565b61141f9190612c9e565b60008080600019858709858702925082811083820303915050806000141561217c5783828161217257612172612c88565b04925050506107d3565b8381106121a657604051631dcf306360e21b81526004810182905260248101859052604401610960565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061222f57608091821c9161222c9082612bfc565b90505b600160401b821061224d57604091821c9161224a9082612bfc565b90505b600160201b821061226b57602091821c916122689082612bfc565b90505b62010000821061228857601091821c916122859082612bfc565b90505b61010082106122a457600891821c916122a19082612bfc565b90505b601082106122bf57600491821c916122bc9082612bfc565b90505b600482106122da57600291821c916122d79082612bfc565b90505b6002821061123e57610544600182612bfc565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106123315760405163698d9a0160e11b815260048101829052602401610960565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff81118261236b5780670de0b6b3a7640000850401945050505050610544565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156123cf5768016a09e667f3bcc9090260401c5b6001603e1b8216156123ea576801306fe0a31b7152df0260401c5b6001603d1b821615612405576801172b83c7d517adce0260401c5b6001603c1b8216156124205768010b5586cf9890f62a0260401c5b6001603b1b82161561243b576801059b0d31585743ae0260401c5b6001603a1b82161561245657680102c9a3e778060ee70260401c5b600160391b8216156124715768010163da9fb33356d80260401c5b600160381b82161561248c57680100b1afa5abcbed610260401c5b600160371b8216156124a75768010058c86da1c09ea20260401c5b600160361b8216156124c2576801002c605e2e8cec500260401c5b600160351b8216156124dd57680100162f3904051fa10260401c5b600160341b8216156124f8576801000b175effdc76ba0260401c5b600160331b82161561251357680100058ba01fb9f96d0260401c5b600160321b82161561252e5768010002c5cc37da94920260401c5b600160311b821615612549576801000162e525ee05470260401c5b600160301b8216156125645768010000b17255775c040260401c5b6001602f1b82161561257f576801000058b91b5bc9ae0260401c5b6001602e1b82161561259a57680100002c5c89d5ec6d0260401c5b6001602d1b8216156125b55768010000162e43f4f8310260401c5b6001602c1b8216156125d057680100000b1721bcfc9a0260401c5b6001602b1b8216156125eb5768010000058b90cf1e6e0260401c5b6001602a1b821615612606576801000002c5c863b73f0260401c5b600160291b82161561262157680100000162e430e5a20260401c5b600160281b82161561263c576801000000b1721835510260401c5b600160271b82161561265757680100000058b90c0b490260401c5b600160261b8216156126725768010000002c5c8601cc0260401c5b600160251b82161561268d576801000000162e42fff00260401c5b600160241b8216156126a85768010000000b17217fbb0260401c5b600160231b8216156126c3576801000000058b90bfce0260401c5b600160221b8216156126de57680100000002c5c85fe30260401c5b600160211b8216156126f95768010000000162e42ff10260401c5b600160201b82161561271457680100000000b17217f80260401c5b638000000082161561272f5768010000000058b90bfc0260401c5b634000000082161561274a576801000000002c5c85fe0260401c5b632000000082161561276557680100000000162e42ff0260401c5b6310000000821615612780576801000000000b17217f0260401c5b630800000082161561279b57680100000000058b90c00260401c5b63040000008216156127b65768010000000002c5c8600260401c5b63020000008216156127d1576801000000000162e4300260401c5b63010000008216156127ec5768010000000000b172180260401c5b62800000821615612806576801000000000058b90c0260401c5b6240000082161561282057680100000000002c5c860260401c5b6220000082161561283a5768010000000000162e430260401c5b6210000082161561285457680100000000000b17210260401c5b6208000082161561286e5768010000000000058b910260401c5b62040000821615612888576801000000000002c5c80260401c5b620200008216156128a257680100000000000162e40260401c5b620100008216156128bb5761b172600160401b010260401c5b6180008216156128d3576158b9600160401b010260401c5b6140008216156128eb57612c5d600160401b010260401c5b6120008216156129035761162e600160401b010260401c5b61100082161561291b57610b17600160401b010260401c5b6108008216156129335761058c600160401b010260401c5b61040082161561294b576102c6600160401b010260401c5b61020082161561296357610163600160401b010260401c5b61010082161561297a5760b1600160401b010260401c5b6080821615612990576059600160401b010260401c5b60408216156129a657602c600160401b010260401c5b60208216156129bc576016600160401b010260401c5b60108216156129d257600b600160401b010260401c5b60088216156129e8576006600160401b010260401c5b60048216156129fe576003600160401b010260401c5b6002821615612a14576001600160401b010260401c5b6001821615612a2a576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff8116811461123e57600080fd5b60008060408385031215612a8857600080fd5b612a9183612a61565b9150612a9f60208401612a61565b90509250929050565b600060208284031215612aba57600080fd5b5035919050565b60008060408385031215612ad457600080fd5b50508035926020909101359150565b600060208284031215612af557600080fd5b813561ffff811681146107d357600080fd5b600080600060608486031215612b1c57600080fd5b505081359360208301359350604090920135919050565b6001600160a01b0391909116815260200190565b600060208284031215612b5957600080fd5b6107d382612a61565b805163ffffffff1682526020808201516001600160d81b0316908301526040908101511515910152565b60c08101612b9a8285612b62565b6107d36060830184612b62565b600060208284031215612bb957600080fd5b81356001600160a01b03811681146107d357600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612c0f57612c0f612be6565b500190565b600060208284031215612c2657600080fd5b5051919050565b600082821015612c3f57612c3f612be6565b500390565b600063ffffffff83811690831681811015612c6157612c61612be6565b039392505050565b6000816000190483118215151615612c8357612c83612be6565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612cad57612cad612c88565b500490565b600061ffff83811690831681811015612c6157612c61612be6565b60006001600160d81b0383811690831681811015612c6157612c61612be6565b600061ffff80831681811415612d0557612d05612be6565b6001019392505050565b600061ffff808316818516808303821115612d2c57612d2c612be6565b01949350505050565b600061ffff80841680612d4a57612d4a612c88565b92169190910692915050565b600082612d6557612d65612c88565b500690565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b00e8a9b98b2dc738fd0e7adbd10170990c23cca3d247523c7fb9f0627a22a3464736f6c63430008090033";
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
    static createInterface(): TestAaveRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAaveRateOracle;
}
//# sourceMappingURL=TestAaveRateOracle__factory.d.ts.map