import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAaveBorrowRateOracle, TestAaveBorrowRateOracleInterface } from "../TestAaveBorrowRateOracle";
export declare class TestAaveBorrowRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(aaveLendingPool: string, underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAaveBorrowRateOracle>;
    getDeployTransaction(aaveLendingPool: string, underlying: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAaveBorrowRateOracle;
    connect(signer: Signer): TestAaveBorrowRateOracle__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200384938038062003849833981016040819052620000349162000887565b604080516000808252602082019081528183019092528391839190826200005b33620001a1565b6001600160a01b03811660805243620100045562000084620001f1602090811b62000ee617901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b038416620001125760405162461bcd60e51b815260206004820152601460248201527f6161766520706f6f6c206d75737420657869737400000000000000000000000060448201526064015b60405180910390fd5b6080516001600160a01b03166200016c5760405162461bcd60e51b815260206004820152601560248201527f756e6465726c79696e67206d7573742065786973740000000000000000000000604482015260640162000109565b6201000780546001600160a01b0319166001600160a01b03861617905562000195828262000203565b50505050505062000a21565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001fe426200048e565b905090565b62000212600261ffff620008f2565b825110620002345760405162461bcd60e51b8152600401620001099062000915565b8151815161ffff8216146200025d5760405162461bcd60e51b8152600401620001099062000933565b60006200026c8260016200095f565b61ffff166001600160401b038111156200028a576200028a620008c6565b604051908082528060200260200182016040528015620002b4578160200160208202803683370190505b5090506000620002c68360016200095f565b61ffff166001600160401b03811115620002e457620002e4620008c6565b6040519080825280602002602001820160405280156200030e578160200160208202803683370190505b50905060005b8361ffff16811015620003bf5785818151811062000336576200033662000988565b602002602001015183828151811062000353576200035362000988565b602002602001019063ffffffff16908163ffffffff168152505084818151811062000382576200038262000988565b60200260200101518282815181106200039f576200039f62000988565b602090810291909101015280620003b6816200099e565b91505062000314565b50600080620003cd620004d5565b9150915081848661ffff1681518110620003eb57620003eb62000988565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff16815181106200041f576200041f62000988565b60200260200101818152505062000448848460046200059a60201b62000ef6179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620004d05760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b604482015260640162000109565b919050565b620100075460805160405163386497fd60e01b81526001600160a01b0391821660048201526000928392169063386497fd9060240160206040518083038186803b1580156200052357600080fd5b505afa15801562000538573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200055e9190620009bc565b9050806200057f5760405163c34b693d60e01b815260040160405180910390fd5b62000594620001f160201b62000ee61760201c565b91509091565b600080600061ffff855110620005c45760405162461bcd60e51b8152600401620001099062000915565b8451845161ffff821614620005ed5760405162461bcd60e51b8152600401620001099062000933565b60008161ffff1611620006285760405162461bcd60e51b81526020600482015260026024820152610c1560f21b604482015260640162000109565b6000805b8261ffff168161ffff161015620007be57878161ffff168151811062000656576200065662000988565b602002602001015163ffffffff168263ffffffff1610620006ac5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b604482015260640162000109565b620006fe888261ffff1681518110620006c957620006c962000988565b6020026020010151888361ffff1681518110620006ea57620006ea62000988565b6020026020010151620007df60201b60201c565b898261ffff1661ffff811062000718576200071862000988565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff83169081106200079e576200079e62000988565b602002602001015191508080620007b590620009d6565b9150506200062c565b508180620007ce600182620009fb565b945094509450505093509350939050565b60408051606081018252600080825260208201819052918101919091526001600160d81b038211156200083e5760405162461bcd60e51b815260040162000109906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b6001600160a01b03811681146200088457600080fd5b50565b600080604083850312156200089b57600080fd5b8251620008a8816200086e565b6020840151909250620008bb816200086e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000826200091057634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff8083168185168083038211156200097f576200097f620008dc565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620009b557620009b5620008dc565b5060010190565b600060208284031215620009cf57600080fd5b5051919050565b600061ffff80831681811415620009f157620009f1620008dc565b6001019392505050565b600061ffff8381169083168181101562000a195762000a19620008dc565b039392505050565b608051612e0562000a446000396000818161033a015261089a0152612e056000f3fe608060405234801561001057600080fd5b506004361061018b5760003560e01c806301320aad146101905780631195082e146101ab578063163e9c4f146101d657806317221ef1146101e957806322ff6568146101fc57806324b18b1714610216578063252c09d71461024a57806325f258dd1461028957806332148f671461029c5780633c155bd5146102b157806341453528146102d957806354124c64146102ec57806356da9775146102ff5780636e035c05146103225780636f307dc314610335578063715018a6146103695780637aa4db13146103715780637cf2cc9f146103795780638a6b8c5d146103825780638da5cb5b1461038a57806391aa375d1461039257806393556dbd146103bd57806395f3e605146103d0578063bdb05092146103f1578063c330c98d14610404578063c7db359b14610413578063e9b69c0d1461045b578063e9d337b81461046e578063efdf5d8b14610483578063f2fde38b1461048b578063f739670c1461049e578063f90ce5ba146104b1578063fe115fbe146104c9575b600080fd5b6101986104d1565b6040519081526020015b60405180910390f35b6101986101b9366004612a8f565b600160209081526000928352604080842090915290825290205481565b6101986101e4366004612ac2565b610538565b6101986101f7366004612ac2565b61054a565b610204600581565b60405160ff90911681526020016101a2565b6201000554620100065461022e9163ffffffff169082565b6040805163ffffffff90931683526020830191909152016101a2565b61025d610258366004612ac2565b610556565b6040805163ffffffff90941684526001600160d81b0390921660208401521515908201526060016101a2565b610198610297366004612adb565b610590565b6102af6102aa366004612afd565b610606565b005b6102c46102bf366004612afd565b61068b565b604080519283526020830191909152016101a2565b6101986102e7366004612adb565b6106f8565b6101986102fa366004612b21565b61070c565b61031261030d366004612adb565b610761565b60405190151581526020016101a2565b610198610330366004612adb565b6107c7565b61035c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101a29190612b4d565b6102af6107da565b6102af61081e565b61019860025481565b61022e61086b565b61035c610940565b6201000654620100055463ffffffff165b6040805192835263ffffffff9091166020830152016101a2565b6101986103cb366004612adb565b61094f565b6103e36103de366004612b61565b6109df565b6040516101a2929190612ba6565b6102af6103ff366004612ac2565b610a17565b610198670de0b6b3a764000081565b6003546104369061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff948516815292841660208401529216918101919091526060016101a2565b6102c4610469366004612b61565b610a8b565b620100075461035c906001600160a01b031681565b610198610ae7565b6102af610499366004612bc1565b610b6f565b6101986104ac366004612adb565b610c0c565b6201000354620100045461022e9163ffffffff169082565b6103a3610d16565b600354600090819060049061ffff9081169081106104f1576104f1612bea565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b031660208301819052600160f81b90910460ff161515919092015292915050565b60006105448242610c0c565b92915050565b6000610544824261094f565b60048161ffff811061056757600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b60008061059d8484611139565b909250905080156105ff5760006105bd670de0b6b3a76400008604611277565b905060006105d4670de0b6b3a76400008604611277565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff166000610622600483856112bc565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146106865760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b600080600060048461ffff1661ffff81106106a8576106a8612bea565b60408051606081018252919092015463ffffffff8116808352600160201b82046001600160d81b031660208401819052600160f81b90920460ff1615159290930191909152909590945092505050565b60006107048383611139565b509392505050565b600080610718836113ae565b9050600061072e670de0b6b3a764000086612c16565b9050600061073c82846113c5565b9050600061074982611404565b9050610755888261142e565b98975050505050505050565b60006b033b2e3cadb136f08f6400006b033b2e3c91efc989409c000082610788858461142e565b90506000610796868461142e565b90508187111580156107a85750808710155b156107ba576001945050505050610544565b6000945050505050610544565b60006107d3838361143c565b9392505050565b336107e3610940565b6001600160a01b0316146108125760405162461bcd60e51b815260040161080990612c2e565b60405180910390fd5b61081c60006114a1565b565b6003546108439061ffff80821691620100008104821691600160201b909104166114f1565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b620100075460405163386497fd60e01b815260009182916001600160a01b039091169063386497fd906108c2907f000000000000000000000000000000000000000000000000000000000000000090600401612b4d565b60206040518083038186803b1580156108da57600080fd5b505afa1580156108ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109129190612c63565b9050806109325760405163c34b693d60e01b815260040160405180910390fd5b61093a610ee6565b91509091565b6000546001600160a01b031690565b6000818311156109945760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b6044820152606401610809565b60006109a08484610c0c565b905060006109ae8585612c7c565b905060006109bb82611694565b905060006109c8826113ae565b90506109d4848261143c565b979650505050505050565b6109e7612a5b565b6109ef612a5b565b600354610a0e90600490859061ffff80821691620100009004166116e1565b91509150915091565b33610a20610940565b6001600160a01b031614610a465760405162461bcd60e51b815260040161080990612c2e565b8060025414610a885760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610a98610ae7565b9050600080610ac686610aa9610ee6565b6003546004929190879061ffff8082169162010000900416611893565b6020918201519101516001600160d81b039182169891169650945050505050565b6000806000610af461086b565b91509150610b00610ee6565b63ffffffff168263ffffffff1610610b185792915050565b600080610b23610d16565b915091508063ffffffff168285610b38610ee6565b610b429190612c93565b63ffffffff16610b529190612cb8565b610b5c9190612ced565b610b669084612c16565b94505050505090565b33610b78610940565b6001600160a01b031614610b9e5760405162461bcd60e51b815260040161080990612c2e565b6001600160a01b038116610c035760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610809565b610a88816114a1565b600081831115610c4a5760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610809565b81831415610c5a57506000610544565b6000610c64610ee6565b90506000610c7185611277565b90506000610c7e85611277565b600354909150600090610ca2908590859061ffff8082169162010000900416611a46565b600354909150600090610cc6908690859061ffff8082169162010000900416611a46565b905081811115610d08576000610cfa676765c793fa10079d601b1b610ceb8486611c92565b610cf59190612c7c565b611ca0565b965061054495505050505050565b600095505050505050610544565b600354600090819061ffff16816001821015610d4a57600354610d459060019062010000900461ffff16612d01565b610d5d565b600354610d5d9060019061ffff16612d01565b60035490915060026201000090910461ffff1610801590610d9e575060048161ffff1661ffff8110610d9157610d91612bea565b0154600160f81b900460ff165b8015610dfb575060048261ffff1661ffff8110610dbd57610dbd612bea565b0154600160201b90046001600160d81b0316600461ffff838116908110610de657610de6612bea565b0154600160201b90046001600160d81b031611155b610e2d5760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610809565b60048161ffff1661ffff8110610e4557610e45612bea565b0154600160201b90046001600160d81b0316600461ffff848116908110610e6e57610e6e612bea565b0154610e8a9190600160201b90046001600160d81b0316612d1c565b6001600160d81b0316935060048161ffff1661ffff8110610ead57610ead612bea565b015463ffffffff16600461ffff808516908110610ecc57610ecc612bea565b0154610ede919063ffffffff16612c93565b925050509091565b6000610ef142611277565b905090565b600080600061ffff855110610f365760405162461bcd60e51b8152600401610809906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff821614610f815760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610809565b60008161ffff1611610fba5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610809565b6000805b8261ffff168161ffff16101561111a57878161ffff1681518110610fe457610fe4612bea565b602002602001015163ffffffff168263ffffffff16106110385760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610809565b61107c888261ffff168151811061105157611051612bea565b6020026020010151888361ffff168151811061106f5761106f612bea565b6020026020010151611d2c565b898261ffff1661ffff811061109357611093612bea565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff83169081106110fd576110fd612bea565b60200260200101519150808061111290612d3c565b915050610fbe565b508180611128600182612d01565b945094509450505093509350939050565b60008080611150670de0b6b3a76400008604611277565b90506000611167670de0b6b3a76400008604611277565b905060008263ffffffff16118015611185575060008163ffffffff16115b6111b95760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610809565b63ffffffff8083166000908152600160209081526040808320938516835292905220541561120f5763ffffffff80831660009081526001602090815260408083209385168352929052908120549450925061126e565b8063ffffffff1661121e610ee6565b63ffffffff161061124a5761123f8263ffffffff168263ffffffff16610c0c565b93506001925061126e565b6112678263ffffffff1661125c610ee6565b63ffffffff16610c0c565b9350600092505b50509250929050565b8063ffffffff811681146112b75760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610809565b919050565b6000808361ffff16116112f55760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610809565b61ffff8261ffff16106113395760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610809565b8261ffff168261ffff161161134f5750816107d3565b825b8261ffff168161ffff1610156113a5576001858261ffff1661ffff811061137a5761137a612bea565b01805463ffffffff191663ffffffff929092169190911790558061139d81612d3c565b915050611351565b50909392505050565b6000610544826a1a1601fc4ea7109e000000611da4565b6000826113ea5781156113d95760006113e3565b670de0b6b3a76400005b9050610544565b6107d36113ff6113f985611db9565b84611e69565b611e75565b600080611424670de0b6b3a7640000676765c793fa10079d601b1b612ced565b6107d39084612cb8565b60006107d383836001611ebb565b60008261144b57506000610544565b600061146061145a6001611694565b84611da4565b90506000611482856114726001611694565b61147c9190612c16565b836113c5565b905061148e6001611694565b6114989082612c7c565b95945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff811061150e5761150e612bea565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b90910416151590820152905060008061155961086b565b60025485519294509092506115739163ffffffff16612c16565b8263ffffffff16101561158e5787879450945050505061168c565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa73756115b7611f6e565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546116099043612c7c565b6201000655620100035463ffffffff16611621610ee6565b61162b9190612c93565b62010005805463ffffffff191663ffffffff92909216919091179055436201000455611655610ee6565b62010003805463ffffffff191663ffffffff928316179055611684906004908a90859085908c908c90611f7916565b945094505050505b935093915050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156116d357604051633492ffd960e01b815260048101839052602401610809565b50670de0b6b3a76400000290565b6116e9612a5b565b6116f1612a5b565b6000836116ff866001612d5e565b6117099190612d84565b61ffff169050600060018561ffff16836117239190612c16565b61172d9190612c7c565b905060005b600161173e8385612c16565b901c90508861175161ffff881683612da5565b61ffff811061176257611762612bea565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905295506117b9576117b2816001612c16565b9250611732565b8861ffff87166117ca836001612c16565b6117d49190612da5565b61ffff81106117e5576117e5612bea565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff16151592820192909252865190955089821691161180159081906118515750846000015163ffffffff168963ffffffff1611155b1561185c5750611887565b806118735761186c600183612c7c565b9250611881565b61187e826001612c16565b93505b50611732565b50505094509492505050565b61189b612a5b565b6118a3612a5b565b878461ffff1661ffff81106118ba576118ba612bea565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611939578663ffffffff16826000015163ffffffff16141561192557611a3b565b816119308787611d2c565b91509150611a3b565b8783611946866001612d5e565b6119509190612d84565b61ffff1661ffff811061196557611965612bea565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905292506119ea5760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611a2a5760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610809565b611a36888886866116e1565b915091505b965096945050505050565b60008363ffffffff168563ffffffff161015611a7557604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611b1d57611a91612a5b565b60048461ffff1661ffff8110611aa957611aa9612bea565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090871614611b0657611aff610ae7565b9150611b17565b80602001516001600160d81b031691505b50611c8a565b6000611b27610ae7565b9050600080611b3b6004888a868a8a611893565b91509150816000015163ffffffff168763ffffffff161415611b6c5781602001516001600160d81b03169350611c86565b805163ffffffff88811691161415611b935780602001516001600160d81b03169350611c86565b600082602001516001600160d81b031682602001516001600160d81b03161115611c02576000676765c793fa10079d601b1b611be984602001516001600160d81b031686602001516001600160d81b0316611c92565b611bf39190612c7c565b9050611bfe81611ca0565b9150505b82518251600091611c3591670de0b6b3a764000091611c2091612c93565b63ffffffff16611c309190612cb8565b6113ae565b90506000611c43838361143c565b9050611c8085602001516001600160d81b031682670de0b6b3a764000088600001518e611c709190612c93565b63ffffffff166102fa9190612cb8565b96505050505b5050505b949350505050565b60006107d3838360016120c0565b600080611cc0670de0b6b3a7640000676765c793fa10079d601b1b612ced565b611cca9084612ced565b90506002611ceb670de0b6b3a7640000676765c793fa10079d601b1b612ced565b611cf59190612ced565b611d12670de0b6b3a7640000676765c793fa10079d601b1b612ced565b611d1c9085612da5565b10610544576107d3600182612c16565b611d34612a5b565b6001600160d81b03821115611d745760405162461bcd60e51b8152600401610809906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b60006107d383670de0b6b3a76400008461215b565b6000670de0b6b3a7640000821015611de757604051633621413760e21b815260048101839052602401610809565b6000611dfc670de0b6b3a76400008404612229565b670de0b6b3a7640000808202935090915083821c90811415611e1f575050919050565b6706f05b59d3b200005b8015611e6157670de0b6b3a7640000828002049150671bc16d674ec800008210611e59579283019260019190911c905b60011c611e29565b505050919050565b60006107d38383612307565b6000680a688906bd8b0000008210611ea357604051634a4f26f160e01b815260048101839052602401610809565b670de0b6b3a7640000604083901b046107d3816123c9565b6000831580611ec8575082155b15611ed5575060006107d3565b6001826001811115611ee957611ee9612db9565b14611efc57670de0b6b3a7640000611f09565b676765c793fa10079d601b1b5b6001836001811115611f1d57611f1d612db9565b14611f3a57611f356002670de0b6b3a7640000612ced565b611f50565b611f506002676765c793fa10079d601b1b612ced565b611f5a8587612cb8565b611f649190612c16565b611c8a9190612ced565b6000610ef142611694565b6000806000888861ffff1661ffff8110611f9557611f95612bea565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529092509088161415611ff05787859250925050611a3b565b8461ffff168461ffff16118015612018575061200d600186612d01565b61ffff168861ffff16145b1561202557839150612029565b8491505b81612035896001612d5e565b61203f9190612d84565b925061204b8787611d2c565b898461ffff1661ffff811061206257612062612bea565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff90941693909317179290921617905550965096945050505050565b6000826120f85760405162461bcd60e51b8152600401610809906020808252600490820152630444956360e41b604082015260600190565b6000612105600285612ced565b90508381600185600181111561211d5761211d612db9565b1461213057670de0b6b3a764000061213d565b676765c793fa10079d601b1b5b6121479088612cb8565b6121519190612c16565b6114989190612ced565b6000808060001985870985870292508281108382030391505080600014156121965783828161218c5761218c612cd7565b04925050506107d3565b8381106121c057604051631dcf306360e21b81526004810182905260248101859052604401610809565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b821061224957608091821c916122469082612c16565b90505b600160401b821061226757604091821c916122649082612c16565b90505b600160201b821061228557602091821c916122829082612c16565b90505b6201000082106122a257601091821c9161229f9082612c16565b90505b61010082106122be57600891821c916122bb9082612c16565b90505b601082106122d957600491821c916122d69082612c16565b90505b600482106122f457600291821c916122f19082612c16565b90505b600282106112b757610544600182612c16565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061234b5760405163698d9a0160e11b815260048101829052602401610809565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826123855780670de0b6b3a7640000850401945050505050610544565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156123e95768016a09e667f3bcc9090260401c5b6001603e1b821615612404576801306fe0a31b7152df0260401c5b6001603d1b82161561241f576801172b83c7d517adce0260401c5b6001603c1b82161561243a5768010b5586cf9890f62a0260401c5b6001603b1b821615612455576801059b0d31585743ae0260401c5b6001603a1b82161561247057680102c9a3e778060ee70260401c5b600160391b82161561248b5768010163da9fb33356d80260401c5b600160381b8216156124a657680100b1afa5abcbed610260401c5b600160371b8216156124c15768010058c86da1c09ea20260401c5b600160361b8216156124dc576801002c605e2e8cec500260401c5b600160351b8216156124f757680100162f3904051fa10260401c5b600160341b821615612512576801000b175effdc76ba0260401c5b600160331b82161561252d57680100058ba01fb9f96d0260401c5b600160321b8216156125485768010002c5cc37da94920260401c5b600160311b821615612563576801000162e525ee05470260401c5b600160301b82161561257e5768010000b17255775c040260401c5b6001602f1b821615612599576801000058b91b5bc9ae0260401c5b6001602e1b8216156125b457680100002c5c89d5ec6d0260401c5b6001602d1b8216156125cf5768010000162e43f4f8310260401c5b6001602c1b8216156125ea57680100000b1721bcfc9a0260401c5b6001602b1b8216156126055768010000058b90cf1e6e0260401c5b6001602a1b821615612620576801000002c5c863b73f0260401c5b600160291b82161561263b57680100000162e430e5a20260401c5b600160281b821615612656576801000000b1721835510260401c5b600160271b82161561267157680100000058b90c0b490260401c5b600160261b82161561268c5768010000002c5c8601cc0260401c5b600160251b8216156126a7576801000000162e42fff00260401c5b600160241b8216156126c25768010000000b17217fbb0260401c5b600160231b8216156126dd576801000000058b90bfce0260401c5b600160221b8216156126f857680100000002c5c85fe30260401c5b600160211b8216156127135768010000000162e42ff10260401c5b600160201b82161561272e57680100000000b17217f80260401c5b63800000008216156127495768010000000058b90bfc0260401c5b6340000000821615612764576801000000002c5c85fe0260401c5b632000000082161561277f57680100000000162e42ff0260401c5b631000000082161561279a576801000000000b17217f0260401c5b63080000008216156127b557680100000000058b90c00260401c5b63040000008216156127d05768010000000002c5c8600260401c5b63020000008216156127eb576801000000000162e4300260401c5b63010000008216156128065768010000000000b172180260401c5b62800000821615612820576801000000000058b90c0260401c5b6240000082161561283a57680100000000002c5c860260401c5b622000008216156128545768010000000000162e430260401c5b6210000082161561286e57680100000000000b17210260401c5b620800008216156128885768010000000000058b910260401c5b620400008216156128a2576801000000000002c5c80260401c5b620200008216156128bc57680100000000000162e40260401c5b620100008216156128d55761b172600160401b010260401c5b6180008216156128ed576158b9600160401b010260401c5b61400082161561290557612c5d600160401b010260401c5b61200082161561291d5761162e600160401b010260401c5b61100082161561293557610b17600160401b010260401c5b61080082161561294d5761058c600160401b010260401c5b610400821615612965576102c6600160401b010260401c5b61020082161561297d57610163600160401b010260401c5b6101008216156129945760b1600160401b010260401c5b60808216156129aa576059600160401b010260401c5b60408216156129c057602c600160401b010260401c5b60208216156129d6576016600160401b010260401c5b60108216156129ec57600b600160401b010260401c5b6008821615612a02576006600160401b010260401c5b6004821615612a18576003600160401b010260401c5b6002821615612a2e576001600160401b010260401c5b6001821615612a44576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff811681146112b757600080fd5b60008060408385031215612aa257600080fd5b612aab83612a7b565b9150612ab960208401612a7b565b90509250929050565b600060208284031215612ad457600080fd5b5035919050565b60008060408385031215612aee57600080fd5b50508035926020909101359150565b600060208284031215612b0f57600080fd5b813561ffff811681146107d357600080fd5b600080600060608486031215612b3657600080fd5b505081359360208301359350604090920135919050565b6001600160a01b0391909116815260200190565b600060208284031215612b7357600080fd5b6107d382612a7b565b805163ffffffff1682526020808201516001600160d81b0316908301526040908101511515910152565b60c08101612bb48285612b7c565b6107d36060830184612b7c565b600060208284031215612bd357600080fd5b81356001600160a01b03811681146107d357600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612c2957612c29612c00565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215612c7557600080fd5b5051919050565b600082821015612c8e57612c8e612c00565b500390565b600063ffffffff83811690831681811015612cb057612cb0612c00565b039392505050565b6000816000190483118215151615612cd257612cd2612c00565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612cfc57612cfc612cd7565b500490565b600061ffff83811690831681811015612cb057612cb0612c00565b60006001600160d81b0383811690831681811015612cb057612cb0612c00565b600061ffff80831681811415612d5457612d54612c00565b6001019392505050565b600061ffff808316818516808303821115612d7b57612d7b612c00565b01949350505050565b600061ffff80841680612d9957612d99612cd7565b92169190910692915050565b600082612db457612db4612cd7565b500690565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220ee9978c86af8cd73ea9c19d3980cef0ca6279d5ca397c8b88701078259bc858964736f6c63430008090033";
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
    static createInterface(): TestAaveBorrowRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAaveBorrowRateOracle;
}
//# sourceMappingURL=TestAaveBorrowRateOracle__factory.d.ts.map