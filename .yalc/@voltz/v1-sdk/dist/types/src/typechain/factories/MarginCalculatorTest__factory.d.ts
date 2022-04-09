import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MarginCalculatorTest, MarginCalculatorTestInterface } from "../MarginCalculatorTest";
export declare class MarginCalculatorTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MarginCalculatorTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MarginCalculatorTest;
    connect(signer: Signer): MarginCalculatorTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611b89806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063110d579c1461005c578063266ffe7f14610081578063538fd30714610094578063cec00a99146100a7578063f446f101146100ba575b600080fd5b61006f61006a3660046119ce565b6100cd565b60405190815260200160405180910390f35b61006f61008f366004611963565b6100e8565b61006f6100a236600461192d565b610105565b61006f6100b5366004611870565b61011c565b61006f6100c83660046118aa565b61012b565b60006100dc868686868661014c565b90505b95945050505050565b60006100f98888888888888861031c565b98975050505050505050565b6000610112848484610373565b90505b9392505050565b60006100dc8686868686610448565b600061013e8a8a8a8a8a8a8a8a8a6104cd565b9a9950505050505050505050565b600061019d6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60808301516060840151600291821b911b6101b9898987610373565b8084526101ce90670de0b6b3a7640000611acd565b602084015260408501516101e3908290610693565b8360400181815250506102118261020b8560200151886040015161075990919063ffffffff16565b90610693565b6060840152825161022f908890610229908590610759565b90610759565b60808401526020830151604086015161024791610759565b60a08401819052608084015161025c91610693565b60c0840181905260408401516001916102779190831b611a74565b901b60e08401526102a386610290578560c00151610296565b8560a001515b6102298560e0015161081b565b61010084015260006102f7876102c7578461010001516102c290611b23565b6102ce565b8461010001515b8560c0015186604001516102e29190611a74565b6102ec9190611a74565b606086015190610759565b9050600081121561030b576000945061030f565b8094505b5050505095945050505050565b60008061032889610897565b90506103418161033b8a8a888b8961014c565b906108ae565b915084610367576103648661035a57836020015161035d565b83515b83906108ae565b91505b50979650505050505050565b6000838311156103ca5760405162461bcd60e51b815260206004820152601e60248201527f656e6454696d65206d757374206265203e3d2063757272656e7454696d65000060448201526064015b60405180910390fd5b6080820151806104115760405162461bcd60e51b81526020600482015260126024820152711c185c985b595d195c9cc81b9bdd081cd95d60721b60448201526064016103c1565b60e083015160006104268261020b888a611acd565b9050600061043d61043685611b23565b8390610759565b90506100f9816108ba565b60008282116104695760405162461bcd60e51b81526004016103c190611a1f565b85158015610475575084155b15610482575060006100df565b600061048d8761092a565b9050600061049a8761092a565b905060006104ab83838989896109b5565b905060006104bb848389896109f6565b9050670de0b6b3a7640000810561013e565b600061051e6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b61053e670de0b6b3a76400008b6001600160a01b0316600160601b610a37565b80825261055e9061054f90806108ae565b670de0b6b3a764000090610b4a565b6020820181905261056f908a6108ae565b6040820181905288111561058557604081018890525b61059985610593888a611b0c565b90610b4a565b60608201526105c06105aa85610b5f565b6105b390611b23565b6102298360600151610b5f565b608082018190526105d0906108ba565b6105e290670de0b6b3a7640000611acd565b60a08201819052610601906105f690610bcd565b6040830151906108ae565b60c08201528215610646578060c001518160200151111561063a578060c0015181602001516106309190611b0c565b60e0820152610660565b600060e0820152610660565b8060c00151816020015161065a9190611ab5565b60e08201525b6106718160e0015161033b8d610c1f565b6101008201819052670de0b6b3a764000090049b9a5050505050505050505050565b6000600160ff1b8314806106aa5750600160ff1b82145b156106c85760405163b3c754a360e01b815260040160405180910390fd5b600080600085126106d957846106de565b846000035b9150600084126106ee57836106f3565b836000035b9050600061070a83670de0b6b3a764000084610c5e565b90506001600160ff1b0381111561073757604051637cb4bef560e01b8152600481018290526024016103c1565b60001980871390861380821860011461075057826100f9565b6100f983611b23565b6000600160ff1b8314806107705750600160ff1b82145b1561078e57604051630d01a11b60e21b815260040160405180910390fd5b6000806000851261079f57846107a4565b846000035b9150600084126107b457836107b9565b836000035b905060006107c78383610cd1565b90506001600160ff1b038111156107f45760405163bf79e8d960e01b8152600481018290526024016103c1565b60001980871390861380821860011461080d57826100f9565b505060000395945050505050565b6000808212156108415760405163608c83ff60e11b8152600481018390526024016103c1565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f9082131561087e57604051632c482c3960e01b8152600481018390526024016103c1565b610891670de0b6b3a76400008302610d93565b92915050565b6000610891826a1a1601fc4ea7109e000000610b4a565b60006101158383610cd1565b600068023f2fa8f6da5b9d31198212156108d657506000919050565b680736ea4425c11ac6318212610902576040516399bb754160e01b8152600481018390526024016103c1565b6714057b7ef767814f8202610115670de0b6b3a76400006706f05b59d3b20000830105610f78565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f1982121561096a5760405163e608e18b60e01b8152600481018390526024016103c1565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156109a7576040516371f72a3160e01b8152600481018390526024016103c1565b50670de0b6b3a76400000290565b6000806000806109d16109ca60008888611022565b8a90610759565b92506109dd8888610759565b91506109e98284611a74565b9998505050505050505050565b6000828211610a175760405162461bcd60e51b81526004016103c190611a1f565b610a2d610a2660018585611022565b8590610693565b6100df9086611acd565b600080806000198587098587029250828110838203039150508060001415610aa75760008411610a9c5760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b60448201526064016103c1565b508290049050610115565b808411610ae15760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b60448201526064016103c1565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b600061011583670de0b6b3a764000084610c5e565b60006001600160ff1b03821115610bc95760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016103c1565b5090565b600080821215610bc95760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016103c1565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156109a757604051633492ffd960e01b8152600481018390526024016103c1565b600080806000198587098587029250828110838203039150508060001415610ca757838281610c9d57634e487b7160e01b600052601260045260246000fd5b0492505050610115565b838110610ae157604051631dcf306360e21b815260048101829052602481018590526044016103c1565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110610d155760405163698d9a0160e11b8152600481018290526024016103c1565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182610d4f5780670de0b6b3a7640000850401945050505050610891565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600081610da257506000919050565b50600181600160801b8110610dbc5760409190911b9060801c5b600160401b8110610dd25760209190911b9060401c5b600160201b8110610de85760109190911b9060201c5b620100008110610dfd5760089190911b9060101c5b6101008110610e115760049190911b9060081c5b60108110610e245760029190911b9060041c5b60088110610e3457600182901b91505b6001828481610e5357634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610e7957634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610e9f57634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610ec557634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610eeb57634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610f1157634e487b7160e01b600052601260045260246000fd5b048301901c91506001828481610f3757634e487b7160e01b600052601260045260246000fd5b048301901c91506000828481610f5d57634e487b7160e01b600052601260045260246000fd5b04905080831015610f6e5782610f70565b805b949350505050565b600080821215610fd95768033dd1780914b9711419821215610f9c57506000919050565b610fa882600003610f78565b6a0c097ce7bc90715b34b9f160241b81610fd257634e487b7160e01b600052601260045260246000fd5b0592915050565b680a688906bd8b00000082126110055760405163e69458f960e01b8152600481018390526024016103c1565b670de0b6b3a7640000604083901b04610115816110e3565b919050565b60008282116110435760405162461bcd60e51b81526004016103c190611a1f565b600061104d611775565b9050838110156110875760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b60448201526064016103c1565b600085806110955750838210155b156110ab576110a48585611b0c565b90506110b8565b6110b58583611b0c565b90505b60006110c382610897565b90506110d88168056bc75e2d63100000610b4a565b979650505050505050565b600160bf1b6001603f1b8216156111035768016a09e667f3bcc9090260401c5b6001603e1b82161561111e576801306fe0a31b7152df0260401c5b6001603d1b821615611139576801172b83c7d517adce0260401c5b6001603c1b8216156111545768010b5586cf9890f62a0260401c5b6001603b1b82161561116f576801059b0d31585743ae0260401c5b6001603a1b82161561118a57680102c9a3e778060ee70260401c5b600160391b8216156111a55768010163da9fb33356d80260401c5b600160381b8216156111c057680100b1afa5abcbed610260401c5b600160371b8216156111db5768010058c86da1c09ea20260401c5b600160361b8216156111f6576801002c605e2e8cec500260401c5b600160351b82161561121157680100162f3904051fa10260401c5b600160341b82161561122c576801000b175effdc76ba0260401c5b600160331b82161561124757680100058ba01fb9f96d0260401c5b600160321b8216156112625768010002c5cc37da94920260401c5b600160311b82161561127d576801000162e525ee05470260401c5b600160301b8216156112985768010000b17255775c040260401c5b6001602f1b8216156112b3576801000058b91b5bc9ae0260401c5b6001602e1b8216156112ce57680100002c5c89d5ec6d0260401c5b6001602d1b8216156112e95768010000162e43f4f8310260401c5b6001602c1b82161561130457680100000b1721bcfc9a0260401c5b6001602b1b82161561131f5768010000058b90cf1e6e0260401c5b6001602a1b82161561133a576801000002c5c863b73f0260401c5b600160291b82161561135557680100000162e430e5a20260401c5b600160281b821615611370576801000000b1721835510260401c5b600160271b82161561138b57680100000058b90c0b490260401c5b600160261b8216156113a65768010000002c5c8601cc0260401c5b600160251b8216156113c1576801000000162e42fff00260401c5b600160241b8216156113dc5768010000000b17217fbb0260401c5b600160231b8216156113f7576801000000058b90bfce0260401c5b600160221b82161561141257680100000002c5c85fe30260401c5b600160211b82161561142d5768010000000162e42ff10260401c5b600160201b82161561144857680100000000b17217f80260401c5b63800000008216156114635768010000000058b90bfc0260401c5b634000000082161561147e576801000000002c5c85fe0260401c5b632000000082161561149957680100000000162e42ff0260401c5b63100000008216156114b4576801000000000b17217f0260401c5b63080000008216156114cf57680100000000058b90c00260401c5b63040000008216156114ea5768010000000002c5c8600260401c5b6302000000821615611505576801000000000162e4300260401c5b63010000008216156115205768010000000000b172180260401c5b6280000082161561153a576801000000000058b90c0260401c5b6240000082161561155457680100000000002c5c860260401c5b6220000082161561156e5768010000000000162e430260401c5b6210000082161561158857680100000000000b17210260401c5b620800008216156115a25768010000000000058b910260401c5b620400008216156115bc576801000000000002c5c80260401c5b620200008216156115d657680100000000000162e40260401c5b620100008216156115ef5761b172600160401b010260401c5b618000821615611607576158b9600160401b010260401c5b61400082161561161f57612c5d600160401b010260401c5b6120008216156116375761162e600160401b010260401c5b61100082161561164f57610b17600160401b010260401c5b6108008216156116675761058c600160401b010260401c5b61040082161561167f576102c6600160401b010260401c5b61020082161561169757610163600160401b010260401c5b6101008216156116ae5760b1600160401b010260401c5b60808216156116c4576059600160401b010260401c5b60408216156116da57602c600160401b010260401c5b60208216156116f0576016600160401b010260401c5b601082161561170657600b600160401b010260401c5b600882161561171c576006600160401b010260401c5b6004821615611732576003600160401b010260401c5b6002821615611748576001600160401b010260401c5b600182161561175e576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b600061178042610c1f565b905090565b8035801515811461101d57600080fd5b600061024082840312156117a7578081fd5b6117af611a3d565b823581526020808401359082015260408084013590820152606080840135908201526080808401359082015260a0808401359082015260c0808401359082015260e08084013590820152610100808401359082015261012080840135908201526101408084013590820152610160808401359082015261018080840135908201526101a080840135908201526101c080840135908201526101e080840135908201526102008084013590820152610220928301359281019290925250919050565b600080600080600060a08688031215611887578081fd5b505083359560208501359550604085013594606081013594506080013592509050565b60008060008060008060008060006101208a8c0312156118c8578384fd5b8935985060208a01356001600160a01b03811681146118e5578485fd5b975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a0135925060e08a0135915061191e6101008b01611785565b90509295985092959850929598565b60008060006102808486031215611942578283fd5b833592506020840135915061195a8560408601611795565b90509250925092565b6000806000806000806000610300888a03121561197e578283fd5b87359650602088013595506040880135945061199c60608901611785565b93506119aa60808901611785565b925060a088013591506119c08960c08a01611795565b905092959891949750929550565b60008060008060006102c086880312156119e6578081fd5b853594506020860135935060408601359250611a0460608701611785565b9150611a138760808801611795565b90509295509295909350565b602080825260049082015263453c3d5360e01b604082015260600190565b60405161024081016001600160401b0381118282101715611a6e57634e487b7160e01b600052604160045260246000fd5b60405290565b600080821280156001600160ff1b0384900385131615611a9657611a96611b3d565b600160ff1b8390038412811615611aaf57611aaf611b3d565b50500190565b60008219821115611ac857611ac8611b3d565b500190565b60008083128015600160ff1b850184121615611aeb57611aeb611b3d565b6001600160ff1b0384018313811615611b0657611b06611b3d565b50500390565b600082821015611b1e57611b1e611b3d565b500390565b6000600160ff1b821415611b3957611b39611b3d565b0390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212200065e4a002610578290179b88561fc341fd01d38edde78af163266c6ded58a1264736f6c63430008040033";
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MarginCalculatorTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MarginCalculatorTest;
}
//# sourceMappingURL=MarginCalculatorTest__factory.d.ts.map