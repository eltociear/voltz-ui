"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var token_1 = __importDefault(require("../token"));
var rateOracle_1 = __importDefault(require("../rateOracle"));
var amm_1 = __importDefault(require("../amm"));
describe('amm', function () {
    describe('mint', function () {
        var vammAddress = '0xe451980132e65465d0a498c53f0b5227326dd73f';
        var marginEngineAddress = '0x75537828f2ce51be7289709686a69cbfdbb714f1';
        var provider = new ethers_1.providers.JsonRpcProvider('http://0.0.0.0:8545/');
        var privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
        var wallet = new ethers_1.Wallet(privateKey, provider);
        var amm = new amm_1.default({
            id: vammAddress,
            signer: wallet,
            createdTimestamp: '1646856471',
            fcmAddress: '0x5392a33f7f677f59e833febf4016cddd88ff9e67',
            liquidity: '0',
            marginEngineAddress: marginEngineAddress,
            rateOracle: new rateOracle_1.default({
                id: '0x0165878a594ca255338adfa4d48449f69242eb8f',
                protocolId: 1,
            }),
            underlyingToken: new token_1.default({
                id: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
                name: 'USDC',
            }),
            sqrtPriceX96: '0',
            termEndTimestamp: '1649458800000000000000000000',
            termStartTimestamp: '1646856441000000000000000000',
            tick: '0',
            tickSpacing: '1000',
            txCount: 0,
            updatedTimestamp: '1646856471',
        });
        it('executes mint', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, amm.mint({
                            recipient: wallet.address,
                            fixedLow: 1,
                            fixedHigh: 2,
                            margin: 1,
                            leverage: 1,
                        })];
                    case 1:
                        result = _a.sent();
                        console.debug(result);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
