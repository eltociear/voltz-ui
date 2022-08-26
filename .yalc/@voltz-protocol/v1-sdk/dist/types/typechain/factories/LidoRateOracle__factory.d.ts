import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LidoRateOracle, LidoRateOracleInterface } from "../LidoRateOracle";
export declare class LidoRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_stEth: string, _lidoOracle: string, _weth: string, _times: BigNumberish[], _results: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LidoRateOracle>;
    getDeployTransaction(_stEth: string, _lidoOracle: string, _weth: string, _times: BigNumberish[], _results: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LidoRateOracle;
    connect(signer: Signer): LidoRateOracle__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162003b8238038062003b82833981016040819052620000349162000b28565b82620000403362000197565b6001600160a01b03811660805243620100045562000069620001e7602090811b62000d8617901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b038516620000ea5760405162461bcd60e51b815260206004820152601060248201526f1cdd115512081b5d5cdd08195e1a5cdd60821b60448201526064015b60405180910390fd5b6001600160a01b038416620001425760405162461bcd60e51b815260206004820152601560248201527f6c69646f4f7261636c65206d75737420657869737400000000000000000000006044820152606401620000e1565b6201000780546001600160a01b038088166001600160a01b0319928316179092556201000880549287169290911691909117905562000180620001f9565b6200018c8282620002ec565b505050505062000e6e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001f44262000577565b905090565b60008060006201000860009054906101000a90046001600160a01b03166001600160a01b031663e547c77c6040518163ffffffff1660e01b815260040160806040518083038186803b1580156200024f57600080fd5b505afa15801562000264573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200028a919062000c5d565b620100088054600160a01b600160e01b031916600160a01b6001600160401b0384160217905591955093509150620002c59050828462000cd0565b6201000980546001600160401b0319166001600160401b0392909216919091179055505050565b620002fb600261ffff62000d02565b8251106200031d5760405162461bcd60e51b8152600401620000e19062000d25565b8151815161ffff821614620003465760405162461bcd60e51b8152600401620000e19062000d43565b60006200035582600162000d6f565b61ffff166001600160401b0381111562000373576200037362000a46565b6040519080825280602002602001820160405280156200039d578160200160208202803683370190505b5090506000620003af83600162000d6f565b61ffff166001600160401b03811115620003cd57620003cd62000a46565b604051908082528060200260200182016040528015620003f7578160200160208202803683370190505b50905060005b8361ffff16811015620004a8578581815181106200041f576200041f62000d98565b60200260200101518382815181106200043c576200043c62000d98565b602002602001019063ffffffff16908163ffffffff16815250508481815181106200046b576200046b62000d98565b602002602001015182828151811062000488576200048862000d98565b6020908102919091010152806200049f8162000dae565b915050620003fd565b50600080620004b6620005be565b9150915081848661ffff1681518110620004d457620004d462000d98565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff168151811062000508576200050862000d98565b60200260200101818152505062000531848460046200075960201b62000d96179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620005b95760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401620000e1565b919050565b6201000754604051630f451f7160e31b81526b033b2e3c9fd0803ce80000006004820152600091829182916001600160a01b031690637a28fb889060240160206040518083038186803b1580156200061557600080fd5b505afa1580156200062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000650919062000dcc565b90508062000674576040516001620723a560e01b0319815260040160405180910390fd5b6201000854604080516389896aef60e01b815290516000926001600160a01b0316916389896aef916004808301926020929190829003018186803b158015620006bc57600080fd5b505afa158015620006d1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006f7919062000dcc565b62010009549091506000906200074e906200071c906001600160401b03168462000de6565b62010008546200073d9190600160a01b90046001600160401b031662000e08565b6200057760201b62000fd91760201c565b959294509192505050565b600080600061ffff855110620007835760405162461bcd60e51b8152600401620000e19062000d25565b8451845161ffff821614620007ac5760405162461bcd60e51b8152600401620000e19062000d43565b60008161ffff1611620007e75760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401620000e1565b6000805b8261ffff168161ffff1610156200097d57878161ffff168151811062000815576200081562000d98565b602002602001015163ffffffff168263ffffffff16106200086b5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401620000e1565b620008bd888261ffff168151811062000888576200088862000d98565b6020026020010151888361ffff1681518110620008a957620008a962000d98565b60200260200101516200099e60201b60201c565b898261ffff1661ffff8110620008d757620008d762000d98565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff83169081106200095d576200095d62000d98565b602002602001015191508080620009749062000e23565b915050620007eb565b5081806200098d60018262000e48565b945094509450505093509350939050565b60408051606081018252600080825260208201819052918101919091526001600160d81b03821115620009fd5760405162461bcd60e51b8152600401620000e1906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b6001600160a01b038116811462000a4357600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000a875762000a8762000a46565b604052919050565b60006001600160401b0382111562000aab5762000aab62000a46565b5060051b60200190565b600082601f83011262000ac757600080fd5b8151602062000ae062000ada8362000a8f565b62000a5c565b82815260059290921b8401810191818101908684111562000b0057600080fd5b8286015b8481101562000b1d578051835291830191830162000b04565b509695505050505050565b600080600080600060a0868803121562000b4157600080fd5b855162000b4e8162000a2d565b8095505060208087015162000b638162000a2d565b604088015190955062000b768162000a2d565b60608801519094506001600160401b038082111562000b9457600080fd5b818901915089601f83011262000ba957600080fd5b815162000bba62000ada8262000a8f565b81815260059190911b8301840190848101908c83111562000bda57600080fd5b938501935b8285101562000c0e57845163ffffffff8116811462000bfe5760008081fd5b8252938501939085019062000bdf565b60808c0151909750945050508083111562000c2857600080fd5b505062000c388882890162000ab5565b9150509295509295909350565b80516001600160401b0381168114620005b957600080fd5b6000806000806080858703121562000c7457600080fd5b62000c7f8562000c45565b935062000c8f6020860162000c45565b925062000c9f6040860162000c45565b915062000caf6060860162000c45565b905092959194509250565b634e487b7160e01b600052601160045260246000fd5b60006001600160401b038281168482168115158284048211161562000cf95762000cf962000cba565b02949350505050565b60008262000d2057634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff80831681851680830382111562000d8f5762000d8f62000cba565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000dc55762000dc562000cba565b5060010190565b60006020828403121562000ddf57600080fd5b5051919050565b600081600019048311821515161562000e035762000e0362000cba565b500290565b6000821982111562000e1e5762000e1e62000cba565b500190565b600061ffff8083168181141562000e3e5762000e3e62000cba565b6001019392505050565b600061ffff8381169083168181101562000e665762000e6662000cba565b039392505050565b608051612cf862000e8a60003960006102d50152612cf86000f3fe608060405234801561001057600080fd5b506004361061015f5760003560e01c80631195082e14610164578063163e9c4f146101a257806317221ef1146101b557806322ff6568146101c857806324b18b17146101e2578063252c09d71461021657806325f258dd1461025557806332148f6714610268578063357d7b5c1461027d57806341453528146102aa57806354124c64146102bd5780636f307dc3146102d0578063715018a6146102f75780637aa4db13146102ff5780637cf2cc9f146103075780638a6b8c5d146103105780638da5cb5b1461031857806391aa375d1461032057806393556dbd1461034b57806399940ece1461035e578063bdb0509214610373578063c330c98d14610386578063c7db359b14610395578063ddc7a5aa146103dd578063efdf5d8b146103e5578063f2fde38b146103ed578063f739670c14610400578063f90ce5ba14610413578063fe115fbe1461042b575b600080fd5b61018f610172366004612991565b600160209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61018f6101b03660046129c4565b610433565b61018f6101c33660046129c4565b610445565b6101d0600381565b60405160ff9091168152602001610199565b620100055462010006546101fa9163ffffffff169082565b6040805163ffffffff9093168352602083019190915201610199565b6102296102243660046129c4565b610451565b6040805163ffffffff90941684526001600160d81b039092166020840152151590820152606001610199565b61018f6102633660046129dd565b61048b565b61027b6102763660046129ff565b610506565b005b6201000854610292906001600160a01b031681565b6040516001600160a01b039091168152602001610199565b61018f6102b83660046129dd565b61058b565b61018f6102cb366004612a23565b61059f565b6102927f000000000000000000000000000000000000000000000000000000000000000081565b61027b6105f4565b61027b610608565b61018f60025481565b6101fa610655565b6102926107d0565b6201000654620100055463ffffffff165b6040805192835263ffffffff909116602083015201610199565b61018f6103593660046129dd565b6107df565b6201000754610292906001600160a01b031681565b61027b6103813660046129c4565b610874565b61018f670de0b6b3a764000081565b6003546103b89061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff94851681529284166020840152921691810191909152606001610199565b61027b6108c1565b61018f6109ae565b61027b6103fb366004612a4f565b610a36565b61018f61040e3660046129dd565b610aac565b620100035462010004546101fa9163ffffffff169082565b610331610bb6565b600061043f8242610aac565b92915050565b600061043f82426107df565b60048161ffff811061046257600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b600080610498848461101e565b909250905080156104ff5760006104bd670de0b6b3a76400008604610fd9565b610fd9565b905060006104d4670de0b6b3a76400008604610fd9565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff1660006105226004838561115c565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146105865760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b6000610597838361101e565b509392505050565b6000806105ab83611251565b905060006105c1670de0b6b3a764000086612a8e565b905060006105cf8284611268565b905060006105dc826112a7565b90506105e888826112d1565b98975050505050505050565b6105fc6112df565b610606600061133e565b565b60035461062d9061ffff80821691620100008104821691600160201b9091041661138e565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b6201000754604051630f451f7160e31b8152676765c793fa10079d601b1b6004820152600091829182916001600160a01b031690637a28fb889060240160206040518083038186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e29190612aa6565b905080610705576040516001620723a560e01b0319815260040160405180910390fd5b6201000854604080516389896aef60e01b815290516000926001600160a01b0316916389896aef916004808301926020929190829003018186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107849190612aa6565b62010009549091506000906107c5906107a6906001600160401b031684612abf565b62010008546104b89190600160a01b90046001600160401b0316612a8e565b959294509192505050565b6000546001600160a01b031690565b6000818311156108295760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b60448201526064015b60405180910390fd5b60006108358484610aac565b905060006108438585612ade565b9050600061085082611531565b9050600061085d82611251565b9050610869848261157e565b979650505050505050565b61087c6112df565b80600254146108be5760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b60008060006201000860009054906101000a90046001600160a01b03166001600160a01b031663e547c77c6040518163ffffffff1660e01b815260040160806040518083038186803b15801561091657600080fd5b505afa15801561092a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094e9190612b0c565b620100088054600160a01b600160e01b031916600160a01b6001600160401b038416021790559195509350915061098790508284612b60565b6201000980546001600160401b0319166001600160401b0392909216919091179055505050565b60008060006109bb610655565b915091506109c7610d86565b63ffffffff168263ffffffff16106109df5792915050565b6000806109ea610bb6565b915091508063ffffffff1682856109ff610d86565b610a099190612b8f565b63ffffffff16610a199190612abf565b610a239190612bca565b610a2d9084612a8e565b94505050505090565b610a3e6112df565b6001600160a01b038116610aa35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610820565b6108be8161133e565b600081831115610aea5760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610820565b81831415610afa5750600061043f565b6000610b04610d86565b90506000610b1185610fd9565b90506000610b1e85610fd9565b600354909150600090610b42908590859061ffff80821691620100009004166115e3565b600354909150600090610b66908690859061ffff80821691620100009004166115e3565b905081811115610ba8576000610b9a676765c793fa10079d601b1b610b8b848661182f565b610b959190612ade565b61183d565b965061043f95505050505050565b60009550505050505061043f565b600354600090819061ffff16816001821015610bea57600354610be59060019062010000900461ffff16612bde565b610bfd565b600354610bfd9060019061ffff16612bde565b60035490915060026201000090910461ffff1610801590610c3e575060048161ffff1661ffff8110610c3157610c31612bf9565b0154600160f81b900460ff165b8015610c9b575060048261ffff1661ffff8110610c5d57610c5d612bf9565b0154600160201b90046001600160d81b0316600461ffff838116908110610c8657610c86612bf9565b0154600160201b90046001600160d81b031611155b610ccd5760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610820565b60048161ffff1661ffff8110610ce557610ce5612bf9565b0154600160201b90046001600160d81b0316600461ffff848116908110610d0e57610d0e612bf9565b0154610d2a9190600160201b90046001600160d81b0316612c0f565b6001600160d81b0316935060048161ffff1661ffff8110610d4d57610d4d612bf9565b015463ffffffff16600461ffff808516908110610d6c57610d6c612bf9565b0154610d7e919063ffffffff16612b8f565b925050509091565b6000610d9142610fd9565b905090565b600080600061ffff855110610dd65760405162461bcd60e51b8152600401610820906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff821614610e215760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610820565b60008161ffff1611610e5a5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610820565b6000805b8261ffff168161ffff161015610fba57878161ffff1681518110610e8457610e84612bf9565b602002602001015163ffffffff168263ffffffff1610610ed85760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610820565b610f1c888261ffff1681518110610ef157610ef1612bf9565b6020026020010151888361ffff1681518110610f0f57610f0f612bf9565b60200260200101516118c9565b898261ffff1661ffff8110610f3357610f33612bf9565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff8316908110610f9d57610f9d612bf9565b602002602001015191508080610fb290612c2f565b915050610e5e565b508180610fc8600182612bde565b945094509450505093509350939050565b8063ffffffff811681146110195760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610820565b919050565b60008080611035670de0b6b3a76400008604610fd9565b9050600061104c670de0b6b3a76400008604610fd9565b905060008263ffffffff1611801561106a575060008163ffffffff16115b61109e5760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610820565b63ffffffff808316600090815260016020908152604080832093851683529290522054156110f45763ffffffff808316600090815260016020908152604080832093851683529290529081205494509250611153565b8063ffffffff16611103610d86565b63ffffffff161061112f576111248263ffffffff168263ffffffff16610aac565b935060019250611153565b61114c8263ffffffff16611141610d86565b63ffffffff16610aac565b9350600092505b50509250929050565b6000808361ffff16116111955760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610820565b61ffff8261ffff16106111d95760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610820565b8261ffff168261ffff16116111ef57508161124a565b825b8261ffff168161ffff161015611245576001858261ffff1661ffff811061121a5761121a612bf9565b01805463ffffffff191663ffffffff929092169190911790558061123d81612c2f565b9150506111f1565b508190505b9392505050565b600061043f826a1a1601fc4ea7109e000000611941565b60008261128d57811561127c576000611286565b670de0b6b3a76400005b905061043f565b61124a6112a261129c85611956565b84611a06565b611a12565b6000806112c7670de0b6b3a7640000676765c793fa10079d601b1b612bca565b61124a9084612abf565b600061124a83836001611a58565b336112e86107d0565b6001600160a01b0316146106065760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610820565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106113ab576113ab612bf9565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b9091041615159082015290506000806113f6610655565b60025485519294509092506114109163ffffffff16612a8e565b8263ffffffff16101561142b57878794509450505050611529565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa7375611454611b0b565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546114a69043612ade565b6201000655620100035463ffffffff166114be610d86565b6114c89190612b8f565b62010005805463ffffffff191663ffffffff929092169190911790554362010004556114f2610d86565b62010003805463ffffffff191663ffffffff928316179055611521906004908a90859085908c908c90611b1616565b945094505050505b935093915050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182111561157057604051633492ffd960e01b815260048101839052602401610820565b50670de0b6b3a76400000290565b60008261158d5750600061043f565b60006115a261159c6001611531565b84611941565b905060006115c4856115b46001611531565b6115be9190612a8e565b83611268565b90506115d06001611531565b6115da9082612ade565b95945050505050565b60008363ffffffff168563ffffffff16101561161257604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff1614156116ba5761162e61295d565b60048461ffff1661ffff811061164657611646612bf9565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff16151593830193909352909250908716146116a35761169c6109ae565b91506116b4565b80602001516001600160d81b031691505b50611827565b60006116c46109ae565b90506000806116d86004888a868a8a611c5e565b91509150816000015163ffffffff168763ffffffff1614156117095781602001516001600160d81b03169350611823565b805163ffffffff888116911614156117305780602001516001600160d81b03169350611823565b600082602001516001600160d81b031682602001516001600160d81b0316111561179f576000676765c793fa10079d601b1b61178684602001516001600160d81b031686602001516001600160d81b031661182f565b6117909190612ade565b905061179b8161183d565b9150505b825182516000916117d291670de0b6b3a7640000916117bd91612b8f565b63ffffffff166117cd9190612abf565b611251565b905060006117e0838361157e565b905061181d85602001516001600160d81b031682670de0b6b3a764000088600001518e61180d9190612b8f565b63ffffffff166102cb9190612abf565b96505050505b5050505b949350505050565b600061124a83836001611e10565b60008061185d670de0b6b3a7640000676765c793fa10079d601b1b612bca565b6118679084612bca565b90506002611888670de0b6b3a7640000676765c793fa10079d601b1b612bca565b6118929190612bca565b6118af670de0b6b3a7640000676765c793fa10079d601b1b612bca565b6118b99085612c51565b1061043f5761124a600182612a8e565b6118d161295d565b6001600160d81b038211156119115760405162461bcd60e51b8152600401610820906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600061124a83670de0b6b3a764000084611eab565b6000670de0b6b3a764000082101561198457604051633621413760e21b815260048101839052602401610820565b6000611999670de0b6b3a76400008404611f79565b670de0b6b3a7640000808202935090915083821c908114156119bc575050919050565b6706f05b59d3b200005b80156119fe57670de0b6b3a7640000828002049150671bc16d674ec8000082106119f6579283019260019190911c905b60011c6119c6565b505050919050565b600061124a8383612057565b6000680a688906bd8b0000008210611a4057604051634a4f26f160e01b815260048101839052602401610820565b670de0b6b3a7640000604083901b0461124a81612119565b6000831580611a65575082155b15611a725750600061124a565b6001826001811115611a8657611a86612c65565b14611a9957670de0b6b3a7640000611aa6565b676765c793fa10079d601b1b5b6001836001811115611aba57611aba612c65565b14611ad757611ad26002670de0b6b3a7640000612bca565b611aed565b611aed6002676765c793fa10079d601b1b612bca565b611af78587612abf565b611b019190612a8e565b6118279190612bca565b6000610d9142611531565b6000806000888861ffff1661ffff8110611b3257611b32612bf9565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff161515938301939093529092509088161415611b8d5787859250925050611c53565b8461ffff168461ffff16118015611bb55750611baa600186612bde565b61ffff168861ffff16145b15611bc257839150611bc6565b8491505b81611bd2896001612c7b565b611bdc9190612ca1565b9250611be887876118c9565b898461ffff1661ffff8110611bff57611bff612bf9565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff909416939093171792909216179055505b965096945050505050565b611c6661295d565b611c6e61295d565b878461ffff1661ffff8110611c8557611c85612bf9565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611d04578663ffffffff16826000015163ffffffff161415611cf057611c53565b81611cfb87876118c9565b91509150611c53565b8783611d11866001612c7b565b611d1b9190612ca1565b61ffff1661ffff8110611d3057611d30612bf9565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181018290529250611db55760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611df55760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610820565b611e01888886866127ab565b91509150965096945050505050565b600082611e485760405162461bcd60e51b8152600401610820906020808252600490820152630444956360e41b604082015260600190565b6000611e55600285612bca565b905083816001856001811115611e6d57611e6d612c65565b14611e8057670de0b6b3a7640000611e8d565b676765c793fa10079d601b1b5b611e979088612abf565b611ea19190612a8e565b6115da9190612bca565b600080806000198587098587029250828110838203039150508060001415611ee657838281611edc57611edc612bb4565b049250505061124a565b838110611f1057604051631dcf306360e21b81526004810182905260248101859052604401610820565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b8210611f9957608091821c91611f969082612a8e565b90505b600160401b8210611fb757604091821c91611fb49082612a8e565b90505b600160201b8210611fd557602091821c91611fd29082612a8e565b90505b620100008210611ff257601091821c91611fef9082612a8e565b90505b610100821061200e57600891821c9161200b9082612a8e565b90505b6010821061202957600491821c916120269082612a8e565b90505b6004821061204457600291821c916120419082612a8e565b90505b600282106110195761043f600182612a8e565b60008080600019848609848602925082811083820303915050670de0b6b3a7640000811061209b5760405163698d9a0160e11b815260048101829052602401610820565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826120d55780670de0b6b3a764000085040194505050505061043f565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156121395768016a09e667f3bcc9090260401c5b6001603e1b821615612154576801306fe0a31b7152df0260401c5b6001603d1b82161561216f576801172b83c7d517adce0260401c5b6001603c1b82161561218a5768010b5586cf9890f62a0260401c5b6001603b1b8216156121a5576801059b0d31585743ae0260401c5b6001603a1b8216156121c057680102c9a3e778060ee70260401c5b600160391b8216156121db5768010163da9fb33356d80260401c5b600160381b8216156121f657680100b1afa5abcbed610260401c5b600160371b8216156122115768010058c86da1c09ea20260401c5b600160361b82161561222c576801002c605e2e8cec500260401c5b600160351b82161561224757680100162f3904051fa10260401c5b600160341b821615612262576801000b175effdc76ba0260401c5b600160331b82161561227d57680100058ba01fb9f96d0260401c5b600160321b8216156122985768010002c5cc37da94920260401c5b600160311b8216156122b3576801000162e525ee05470260401c5b600160301b8216156122ce5768010000b17255775c040260401c5b6001602f1b8216156122e9576801000058b91b5bc9ae0260401c5b6001602e1b82161561230457680100002c5c89d5ec6d0260401c5b6001602d1b82161561231f5768010000162e43f4f8310260401c5b6001602c1b82161561233a57680100000b1721bcfc9a0260401c5b6001602b1b8216156123555768010000058b90cf1e6e0260401c5b6001602a1b821615612370576801000002c5c863b73f0260401c5b600160291b82161561238b57680100000162e430e5a20260401c5b600160281b8216156123a6576801000000b1721835510260401c5b600160271b8216156123c157680100000058b90c0b490260401c5b600160261b8216156123dc5768010000002c5c8601cc0260401c5b600160251b8216156123f7576801000000162e42fff00260401c5b600160241b8216156124125768010000000b17217fbb0260401c5b600160231b82161561242d576801000000058b90bfce0260401c5b600160221b82161561244857680100000002c5c85fe30260401c5b600160211b8216156124635768010000000162e42ff10260401c5b600160201b82161561247e57680100000000b17217f80260401c5b63800000008216156124995768010000000058b90bfc0260401c5b63400000008216156124b4576801000000002c5c85fe0260401c5b63200000008216156124cf57680100000000162e42ff0260401c5b63100000008216156124ea576801000000000b17217f0260401c5b630800000082161561250557680100000000058b90c00260401c5b63040000008216156125205768010000000002c5c8600260401c5b630200000082161561253b576801000000000162e4300260401c5b63010000008216156125565768010000000000b172180260401c5b62800000821615612570576801000000000058b90c0260401c5b6240000082161561258a57680100000000002c5c860260401c5b622000008216156125a45768010000000000162e430260401c5b621000008216156125be57680100000000000b17210260401c5b620800008216156125d85768010000000000058b910260401c5b620400008216156125f2576801000000000002c5c80260401c5b6202000082161561260c57680100000000000162e40260401c5b620100008216156126255761b172600160401b010260401c5b61800082161561263d576158b9600160401b010260401c5b61400082161561265557612c5d600160401b010260401c5b61200082161561266d5761162e600160401b010260401c5b61100082161561268557610b17600160401b010260401c5b61080082161561269d5761058c600160401b010260401c5b6104008216156126b5576102c6600160401b010260401c5b6102008216156126cd57610163600160401b010260401c5b6101008216156126e45760b1600160401b010260401c5b60808216156126fa576059600160401b010260401c5b604082161561271057602c600160401b010260401c5b6020821615612726576016600160401b010260401c5b601082161561273c57600b600160401b010260401c5b6008821615612752576006600160401b010260401c5b6004821615612768576003600160401b010260401c5b600282161561277e576001600160401b010260401c5b6001821615612794576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b6127b361295d565b6127bb61295d565b6000836127c9866001612c7b565b6127d39190612ca1565b61ffff169050600060018561ffff16836127ed9190612a8e565b6127f79190612ade565b905060005b60016128088385612a8e565b901c90508861281b61ffff881683612c51565b61ffff811061282c5761282c612bf9565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905295506128835761287c816001612a8e565b92506127fc565b8861ffff8716612894836001612a8e565b61289e9190612c51565b61ffff81106128af576128af612bf9565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff161515928201929092528651909550898216911611801590819061291b5750846000015163ffffffff168963ffffffff1611155b156129265750612951565b8061293d57612936600183612ade565b925061294b565b612948826001612a8e565b93505b506127fc565b50505094509492505050565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff8116811461101957600080fd5b600080604083850312156129a457600080fd5b6129ad8361297d565b91506129bb6020840161297d565b90509250929050565b6000602082840312156129d657600080fd5b5035919050565b600080604083850312156129f057600080fd5b50508035926020909101359150565b600060208284031215612a1157600080fd5b813561ffff8116811461124a57600080fd5b600080600060608486031215612a3857600080fd5b505081359360208301359350604090920135919050565b600060208284031215612a6157600080fd5b81356001600160a01b038116811461124a57600080fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612aa157612aa1612a78565b500190565b600060208284031215612ab857600080fd5b5051919050565b6000816000190483118215151615612ad957612ad9612a78565b500290565b600082821015612af057612af0612a78565b500390565b80516001600160401b038116811461101957600080fd5b60008060008060808587031215612b2257600080fd5b612b2b85612af5565b9350612b3960208601612af5565b9250612b4760408601612af5565b9150612b5560608601612af5565b905092959194509250565b60006001600160401b0382811684821681151582840482111615612b8657612b86612a78565b02949350505050565b600063ffffffff83811690831681811015612bac57612bac612a78565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600082612bd957612bd9612bb4565b500490565b600061ffff83811690831681811015612bac57612bac612a78565b634e487b7160e01b600052603260045260246000fd5b60006001600160d81b0383811690831681811015612bac57612bac612a78565b600061ffff80831681811415612c4757612c47612a78565b6001019392505050565b600082612c6057612c60612bb4565b500690565b634e487b7160e01b600052602160045260246000fd5b600061ffff808316818516808303821115612c9857612c98612a78565b01949350505050565b600061ffff80841680612cb657612cb6612bb4565b9216919091069291505056fea2646970667358221220c5358fbb1a198e7b60248eceadafd342f2b7dcec0b3aedafdc3034966c789bbc64736f6c63430008090033";
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
    static createInterface(): LidoRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LidoRateOracle;
}
//# sourceMappingURL=LidoRateOracle__factory.d.ts.map