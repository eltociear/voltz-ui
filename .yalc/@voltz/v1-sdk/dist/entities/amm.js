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
var jsbi_1 = __importDefault(require("jsbi"));
var ethers_1 = require("ethers");
var ethers_2 = require("ethers");
var constants_1 = require("../constants");
var typechain_1 = require("../typechain");
var tickMath_1 = require("../utils/tickMath");
var timestampWadToDateTime_1 = __importDefault(require("../utils/timestampWadToDateTime"));
var priceTickConversions_1 = require("../utils/priceTickConversions");
var nearestUsableTick_1 = require("../utils/nearestUsableTick");
var price_1 = require("./fractions/price");
var tokenAmount_1 = require("./fractions/tokenAmount");
var extractErrorMessage_1 = require("../utils/extractErrorMessage");
var AMM = /** @class */ (function () {
    function AMM(_a) {
        var id = _a.id, signer = _a.signer, provider = _a.provider, marginEngineAddress = _a.marginEngineAddress, fcmAddress = _a.fcmAddress, rateOracle = _a.rateOracle, createdTimestamp = _a.createdTimestamp, updatedTimestamp = _a.updatedTimestamp, termStartTimestamp = _a.termStartTimestamp, termEndTimestamp = _a.termEndTimestamp, underlyingToken = _a.underlyingToken, sqrtPriceX96 = _a.sqrtPriceX96, liquidity = _a.liquidity, tick = _a.tick, tickSpacing = _a.tickSpacing, txCount = _a.txCount;
        this.id = id;
        this.signer = signer;
        this.provider = provider || (signer === null || signer === void 0 ? void 0 : signer.provider);
        this.marginEngineAddress = marginEngineAddress;
        this.fcmAddress = fcmAddress;
        this.rateOracle = rateOracle;
        this.createdTimestamp = jsbi_1.default.BigInt(createdTimestamp);
        this.updatedTimestamp = jsbi_1.default.BigInt(updatedTimestamp);
        this.termStartTimestamp = jsbi_1.default.BigInt(termStartTimestamp);
        this.termEndTimestamp = jsbi_1.default.BigInt(termEndTimestamp);
        this.underlyingToken = underlyingToken;
        this.sqrtPriceX96 = jsbi_1.default.BigInt(sqrtPriceX96);
        this.liquidity = jsbi_1.default.BigInt(liquidity);
        this.tickSpacing = jsbi_1.default.BigInt(tickSpacing);
        this.tick = jsbi_1.default.BigInt(tick);
        this.txCount = jsbi_1.default.BigInt(txCount);
    }
    AMM.prototype.getInfoPostSwap = function (_a) {
        var isFT = _a.isFT, notional = _a.notional, fixedRateLimit = _a.fixedRateLimit, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tickUpper, tickLower, sqrtPriceLimitX96, tickLimit, scaledNotional, peripheryContract, swapPeripheryParams, tickBefore, tickAfter, marginRequirement, fee, availableNotional, fixedTokenDeltaUnbalanced, fixedRateBefore, fixedRateAfter, fixedRateDelta, fixedRateDeltaRaw, marginEngineContract, currentMargin, scaledCurrentMargin, scaledMarginRequirement, scaledAvailableNotional, scaledFee, additionalMargin, averageFixedRate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _b.sent();
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            if (isFT) {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                            }
                            else {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                            }
                        }
                        scaledNotional = this.scale(notional);
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        swapPeripheryParams = {
                            marginEngine: this.marginEngineAddress,
                            isFT: isFT,
                            notional: scaledNotional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            marginDelta: '0',
                        };
                        return [4 /*yield*/, peripheryContract.getCurrentTick(this.marginEngineAddress)];
                    case 2:
                        tickBefore = _b.sent();
                        tickAfter = 0;
                        marginRequirement = ethers_2.BigNumber.from(0);
                        fee = ethers_2.BigNumber.from(0);
                        availableNotional = ethers_2.BigNumber.from(0);
                        fixedTokenDeltaUnbalanced = ethers_2.BigNumber.from(0);
                        return [4 /*yield*/, peripheryContract.callStatic.swap(swapPeripheryParams).then(function (result) {
                                availableNotional = result[1];
                                fee = result[2];
                                fixedTokenDeltaUnbalanced = result[3];
                                marginRequirement = result[4];
                                tickAfter = parseInt(result[5]);
                            }, function (error) {
                                var errSig;
                                var reason;
                                try {
                                    reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Cannot decode trade information");
                                }
                                if (errSig) {
                                    if (errSig === "MarginRequirementNotMet") {
                                        try {
                                            var iface = new ethers_1.ethers.utils.Interface(["error MarginRequirementNotMet(int256 marginRequirement,int24 tick,int256 fixedTokenDelta,int256 variableTokenDelta,uint256 cumulativeFeeIncurred,int256 fixedTokenDeltaUnbalanced)"]);
                                            var result = iface.decodeErrorResult("MarginRequirementNotMet", reason);
                                            marginRequirement = result.marginRequirement;
                                            tickAfter = result.tick;
                                            fee = result.cumulativeFeeIncurred;
                                            availableNotional = result.variableTokenDelta;
                                            fixedTokenDeltaUnbalanced = result.fixedTokenDeltaUnbalanced;
                                        }
                                        catch (_) {
                                            throw new Error("Cannot decode trade information");
                                        }
                                    }
                                }
                                else {
                                    throw new Error("Cannot decode trade information");
                                }
                            })];
                    case 3:
                        _b.sent();
                        fixedRateBefore = (0, priceTickConversions_1.tickToFixedRate)(tickBefore);
                        fixedRateAfter = (0, priceTickConversions_1.tickToFixedRate)(tickAfter);
                        fixedRateDelta = fixedRateAfter.subtract(fixedRateBefore);
                        fixedRateDeltaRaw = fixedRateDelta.toNumber();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, tickLower, tickUpper)];
                    case 4:
                        currentMargin = (_b.sent()).margin;
                        scaledCurrentMargin = this.descale(currentMargin);
                        scaledMarginRequirement = this.descale(marginRequirement);
                        scaledAvailableNotional = this.descale(availableNotional);
                        scaledFee = this.descale(fee);
                        additionalMargin = scaledMarginRequirement > scaledCurrentMargin
                            ? scaledMarginRequirement - scaledCurrentMargin
                            : 0;
                        averageFixedRate = fixedTokenDeltaUnbalanced.mul(ethers_2.BigNumber.from(1000)).div(availableNotional).toNumber() / 1000;
                        return [2 /*return*/, {
                                marginRequirement: additionalMargin,
                                availableNotional: scaledAvailableNotional < 0 ? -scaledAvailableNotional : scaledAvailableNotional,
                                fee: scaledFee < 0 ? -scaledFee : scaledFee,
                                slippage: fixedRateDeltaRaw < 0 ? -fixedRateDeltaRaw : fixedRateDeltaRaw,
                                averageFixedRate: averageFixedRate < 0 ? -averageFixedRate : averageFixedRate,
                            }];
                }
            });
        });
    };
    AMM.prototype.settlePosition = function (_a) {
        var _b;
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, marginEngineContract, effectiveOwner, settlePositionTransaction, receipt, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        if (!!owner) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_b = this.signer) === null || _b === void 0 ? void 0 : _b.getAddress())];
                    case 1:
                        effectiveOwner = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        effectiveOwner = owner;
                        _c.label = 3;
                    case 3: return [4 /*yield*/, marginEngineContract.settlePosition(effectiveOwner, tickLower, tickUpper)];
                    case 4:
                        settlePositionTransaction = _c.sent();
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, settlePositionTransaction.wait()];
                    case 6:
                        receipt = _c.sent();
                        return [2 /*return*/, receipt];
                    case 7:
                        error_1 = _c.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.scale = function (value) {
        var price = price_1.Price.fromNumber(value);
        var tokenAmount = tokenAmount_1.TokenAmount.fromFractionalAmount(this.underlyingToken, price.numerator, price.denominator);
        var scaledValue = tokenAmount.scale();
        return scaledValue;
    };
    AMM.prototype.descale = function (value) {
        if (this.underlyingToken.decimals <= 3) {
            return value.toNumber() / (Math.pow(10, this.underlyingToken.decimals));
        }
        else {
            return value.div(ethers_2.BigNumber.from(10).pow(this.underlyingToken.decimals - 3)).toNumber() / 1000;
        }
    };
    AMM.prototype.updatePositionMargin = function (_a) {
        var _b;
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, marginDelta = _a.marginDelta;
        return __awaiter(this, void 0, void 0, function () {
            var effectiveOwner, tickUpper, tickLower, scaledMarginDelta, marginEngineContract, updatePositionMarginTransaction, receipt, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            return [2 /*return*/];
                        }
                        if (!!owner) return [3 /*break*/, 2];
                        return [4 /*yield*/, ((_b = this.signer) === null || _b === void 0 ? void 0 : _b.getAddress())];
                    case 1:
                        effectiveOwner = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        effectiveOwner = owner;
                        _c.label = 3;
                    case 3:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (marginDelta === 0) {
                            throw new Error('No margin delta to update');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        scaledMarginDelta = this.scale(marginDelta);
                        return [4 /*yield*/, this.approveERC20(scaledMarginDelta, this.marginEngineAddress)];
                    case 4:
                        _c.sent();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.updatePositionMargin(effectiveOwner, tickLower, tickUpper, scaledMarginDelta)];
                    case 5:
                        updatePositionMarginTransaction = _c.sent();
                        _c.label = 6;
                    case 6:
                        _c.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, updatePositionMarginTransaction.wait()];
                    case 7:
                        receipt = _c.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_2 = _c.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.liquidatePosition = function (_a) {
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, marginEngineContract, liquidatePositionTransaction, receipt, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.liquidatePosition(owner, tickLower, tickUpper)];
                    case 1:
                        liquidatePositionTransaction = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, liquidatePositionTransaction.wait()];
                    case 3:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 4:
                        error_3 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.getLiquidationThreshold = function (_a) {
        var owner = _a.owner, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, marginEngineContract, threshold;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPositionMarginRequirement(owner, tickLower, tickUpper, false)];
                    case 1:
                        threshold = _b.sent();
                        return [2 /*return*/, this.descale(threshold)];
                }
            });
        });
    };
    AMM.prototype.getMinimumMarginRequirementPostMint = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional;
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, tickUpper, tickLower, peripheryContract, scaledNotional, mintOrBurnParams, marginRequirement, marginEngineContract, currentMargin, scaledCurrentMargin, scaledMarginRequirement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _b.sent();
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        scaledNotional = this.scale(notional);
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: scaledNotional,
                            isMint: true,
                            marginDelta: '0',
                        };
                        marginRequirement = ethers_2.BigNumber.from('0');
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).then(function (result) {
                                marginRequirement = ethers_2.BigNumber.from(result);
                            }, function (error) {
                                var errSig;
                                var reason;
                                try {
                                    reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Cannot decode additional margin amount");
                                }
                                if (errSig) {
                                    if (errSig === "MarginLessThanMinimum") {
                                        try {
                                            var iface = new ethers_1.ethers.utils.Interface(["error MarginLessThanMinimum(int256 marginRequirement)"]);
                                            var result = iface.decodeErrorResult("MarginLessThanMinimum", reason);
                                            marginRequirement = result.marginRequirement;
                                        }
                                        catch (_) {
                                            throw new Error("Cannot decode additional margin amount");
                                        }
                                    }
                                }
                                else {
                                    throw new Error("Cannot decode additional margin amount");
                                }
                            })];
                    case 2:
                        _b.sent();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, tickLower, tickUpper)];
                    case 3:
                        currentMargin = (_b.sent()).margin;
                        scaledCurrentMargin = this.descale(currentMargin);
                        scaledMarginRequirement = this.descale(marginRequirement);
                        if (scaledMarginRequirement > scaledCurrentMargin) {
                            return [2 /*return*/, scaledMarginRequirement - scaledCurrentMargin];
                        }
                        else {
                            return [2 /*return*/, 0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.mint = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional, margin = _a.margin, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, peripheryContract, _notional, _marginDelta, approvalError_1, mintOrBurnParams, mintTransaction, receipt, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (margin < 0) {
                            throw new Error('Amount of margin cannot be negative');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        _notional = this.scale(notional);
                        _marginDelta = this.scale(margin);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.approveERC20(_marginDelta, peripheryContract.address)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        approvalError_1 = _b.sent();
                        throw approvalError_1;
                    case 4:
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: _notional,
                            isMint: true,
                            marginDelta: _marginDelta,
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).catch(function (error) {
                                var errSig;
                                try {
                                    var reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Unrecognized error");
                                }
                                if (errSig) {
                                    throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                }
                                else {
                                    throw new Error("Unrecognized error");
                                }
                            })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.mintOrBurn(mintOrBurnParams, {
                                gasLimit: 1000000,
                            }).catch(function (error) {
                                var errSig;
                                try {
                                    var reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Unrecognized error");
                                }
                                if (errSig) {
                                    throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                }
                                else {
                                    throw new Error("Unrecognized error");
                                }
                            })];
                    case 6:
                        mintTransaction = _b.sent();
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, mintTransaction.wait()];
                    case 8:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 9:
                        error_4 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.burn = function (_a) {
        var fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, notional = _a.notional, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, peripheryContract, _notional, mintOrBurnParams, burnTransaction, receipt, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        _notional = this.scale(notional);
                        mintOrBurnParams = {
                            marginEngine: this.marginEngineAddress,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            notional: _notional,
                            isMint: false,
                            marginDelta: '0',
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.mintOrBurn(mintOrBurnParams).catch(function (error) {
                                var errSig;
                                try {
                                    var reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Unrecognized error");
                                }
                                if (errSig) {
                                    throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                }
                                else {
                                    throw new Error("Unrecognized error");
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.mintOrBurn(mintOrBurnParams).catch(function (error) {
                                var errSig;
                                try {
                                    var reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Unrecognized error");
                                }
                                if (errSig) {
                                    throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                }
                                else {
                                    throw new Error("Unrecognized error");
                                }
                            })];
                    case 2:
                        burnTransaction = _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, burnTransaction.wait()];
                    case 4:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 5:
                        error_5 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.approveFCM = function () {
        return __awaiter(this, void 0, void 0, function () {
            var factoryContract, signerAddress, isApproved, approvalTransaction, receipt, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        factoryContract = typechain_1.Factory__factory.connect(constants_1.FACTORY_ADDRESS, this.signer);
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        return [4 /*yield*/, factoryContract.isApproved(signerAddress, this.fcmAddress)];
                    case 2:
                        isApproved = _a.sent();
                        if (isApproved) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, factoryContract.setApproval(this.fcmAddress, true)];
                    case 3:
                        approvalTransaction = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 5:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 6:
                        error_6 = _a.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.approveERC20 = function (amountToApprove, addressToApprove) {
        return __awaiter(this, void 0, void 0, function () {
            var token, currentApproval, _a, _b, amountToApproveBN, approvalTransaction, receipt, error_7;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (!this.underlyingToken.id) {
                            throw new Error('No underlying token');
                        }
                        token = typechain_1.ERC20Mock__factory.connect(this.underlyingToken.id, this.signer);
                        _b = (_a = token).allowance;
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(), addressToApprove])];
                    case 2:
                        currentApproval = _c.sent();
                        amountToApproveBN = ethers_2.BigNumber.from(amountToApprove).mul(ethers_2.BigNumber.from("101")).div(ethers_2.BigNumber.from("100"));
                        if (amountToApproveBN.lt(currentApproval.mul(ethers_2.BigNumber.from("101")).div(ethers_2.BigNumber.from("100")))) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, token.approve(addressToApprove, amountToApproveBN)];
                    case 3:
                        approvalTransaction = _c.sent();
                        _c.label = 4;
                    case 4:
                        _c.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, approvalTransaction.wait()];
                    case 5:
                        receipt = _c.sent();
                        return [2 /*return*/, receipt];
                    case 6:
                        error_7 = _c.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.swap = function (_a) {
        var isFT = _a.isFT, notional = _a.notional, margin = _a.margin, fixedRateLimit = _a.fixedRateLimit, fixedLow = _a.fixedLow, fixedHigh = _a.fixedHigh, validationOnly = _a.validationOnly;
        return __awaiter(this, void 0, void 0, function () {
            var tickUpper, tickLower, sqrtPriceLimitX96, tickLimit, peripheryContract, scaledNotional, scaledMarginDelta, approvalError_2, swapPeripheryParams, swapTransaction, receipt, error_8;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedLow >= fixedHigh) {
                            throw new Error('Lower Rate must be smaller than Upper Rate');
                        }
                        if (fixedLow < constants_1.MIN_FIXED_RATE) {
                            throw new Error('Lower Rate is too low');
                        }
                        if (fixedHigh > constants_1.MAX_FIXED_RATE) {
                            throw new Error('Upper Rate is too high');
                        }
                        if (notional <= 0) {
                            throw new Error('Amount of notional must be greater than 0');
                        }
                        if (margin < 0) {
                            throw new Error('Amount of margin cannot be negative');
                        }
                        if (validationOnly) {
                            return [2 /*return*/];
                        }
                        tickUpper = this.closestTickAndFixedRate(fixedLow).closestUsableTick;
                        tickLower = this.closestTickAndFixedRate(fixedHigh).closestUsableTick;
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            if (isFT) {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                            }
                            else {
                                sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                            }
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        scaledNotional = this.scale(notional);
                        scaledMarginDelta = this.scale(margin);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.approveERC20(scaledMarginDelta, peripheryContract.address)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        approvalError_2 = _b.sent();
                        throw approvalError_2;
                    case 4:
                        swapPeripheryParams = {
                            marginEngine: this.marginEngineAddress,
                            isFT: isFT,
                            notional: scaledNotional,
                            sqrtPriceLimitX96: sqrtPriceLimitX96,
                            tickLower: tickLower,
                            tickUpper: tickUpper,
                            marginDelta: scaledMarginDelta,
                        };
                        return [4 /*yield*/, peripheryContract.callStatic.swap(swapPeripheryParams).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                var errSig, reason;
                                return __generator(this, function (_a) {
                                    try {
                                        reason = error.data.toString().replace("Reverted ", "");
                                        errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                    }
                                    catch (_) {
                                        throw new Error("Unrecognized error");
                                    }
                                    if (errSig) {
                                        throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                    }
                                    else {
                                        throw new Error("Unrecognized error");
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, peripheryContract.swap(swapPeripheryParams, {
                                gasLimit: 1000000,
                            }).catch(function (error) {
                                var errSig;
                                try {
                                    var reason = error.data.toString().replace("Reverted ", "");
                                    errSig = (0, extractErrorMessage_1.getErrorSignature)(reason);
                                }
                                catch (_) {
                                    throw new Error("Unrecognized error");
                                }
                                if (errSig) {
                                    throw new Error((0, extractErrorMessage_1.getErrorMessage)(errSig));
                                }
                                else {
                                    throw new Error("Unrecognized error");
                                }
                            })];
                    case 6:
                        swapTransaction = _b.sent();
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, swapTransaction.wait()];
                    case 8:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 9:
                        error_8 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.fcmSwap = function (_a) {
        var notional = _a.notional, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var approvalError_3, sqrtPriceLimitX96, tickLimit, fcmContract, scaledNotional, fcmSwapTransaction, receipt, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.approveFCM()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        approvalError_3 = _b.sent();
                        throw approvalError_3;
                    case 4:
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MAX_TICK - 1).toString();
                        }
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        scaledNotional = this.scale(notional);
                        return [4 /*yield*/, fcmContract.initiateFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96)];
                    case 5:
                        fcmSwapTransaction = _b.sent();
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, fcmSwapTransaction.wait()];
                    case 7:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_9 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.fcmUnwind = function (_a) {
        var notionalToUnwind = _a.notionalToUnwind, fixedRateLimit = _a.fixedRateLimit;
        return __awaiter(this, void 0, void 0, function () {
            var sqrtPriceLimitX96, tickLimit, approvalError_4, fcmContract, scaledNotional, fcmUnwindTransaction, receipt, error_10;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        if (fixedRateLimit) {
                            tickLimit = this.closestTickAndFixedRate(fixedRateLimit).closestUsableTick;
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickLimit).toString();
                        }
                        else {
                            sqrtPriceLimitX96 = tickMath_1.TickMath.getSqrtRatioAtTick(tickMath_1.TickMath.MIN_TICK + 1).toString();
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.approveFCM()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        approvalError_4 = _b.sent();
                        throw approvalError_4;
                    case 4:
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        scaledNotional = this.scale(notionalToUnwind);
                        return [4 /*yield*/, fcmContract.unwindFullyCollateralisedFixedTakerSwap(scaledNotional, sqrtPriceLimitX96)];
                    case 5:
                        fcmUnwindTransaction = _b.sent();
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        return [4 /*yield*/, fcmUnwindTransaction.wait()];
                    case 7:
                        receipt = _b.sent();
                        return [2 /*return*/, receipt];
                    case 8:
                        error_10 = _b.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AMM.prototype.settleFCMTrader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fcmContract, fcmSettleTraderTransaction, receipt, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        fcmContract = typechain_1.AaveFCM__factory.connect(this.fcmAddress, this.signer);
                        return [4 /*yield*/, fcmContract.settleTrader()];
                    case 1:
                        fcmSettleTraderTransaction = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fcmSettleTraderTransaction.wait()];
                    case 3:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                    case 4:
                        error_11 = _a.sent();
                        throw new Error("Transaction Confirmation Error");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AMM.prototype, "startDateTime", {
        get: function () {
            return (0, timestampWadToDateTime_1.default)(this.termStartTimestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "endDateTime", {
        get: function () {
            return (0, timestampWadToDateTime_1.default)(this.termEndTimestamp);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "initialized", {
        get: function () {
            return !jsbi_1.default.EQ(this.sqrtPriceX96, jsbi_1.default.BigInt(0));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "fixedRate", {
        get: function () {
            if (!this._fixedRate) {
                if (!this.initialized) {
                    return new price_1.Price(1, 0);
                }
                this._fixedRate = new price_1.Price(jsbi_1.default.multiply(this.sqrtPriceX96, this.sqrtPriceX96), constants_1.Q192);
            }
            return this._fixedRate;
        },
        enumerable: false,
        configurable: true
    });
    AMM.prototype.fixedApr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var peripheryContract, currentTick, apr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.provider);
                        return [4 /*yield*/, peripheryContract.callStatic.getCurrentTick(this.marginEngineAddress)];
                    case 1:
                        currentTick = _a.sent();
                        apr = (0, priceTickConversions_1.tickToFixedRate)(currentTick).toNumber();
                        return [2 /*return*/, apr];
                }
            });
        });
    };
    Object.defineProperty(AMM.prototype, "price", {
        get: function () {
            if (!this._price) {
                this._price = new price_1.Price(constants_1.Q192, jsbi_1.default.multiply(this.sqrtPriceX96, this.sqrtPriceX96));
            }
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AMM.prototype, "protocol", {
        get: function () {
            var firstProtocolCharacter = this.rateOracle.protocol[0];
            var tokenName = this.underlyingToken.name;
            return "".concat(firstProtocolCharacter.toLowerCase()).concat(tokenName);
        },
        enumerable: false,
        configurable: true
    });
    AMM.prototype.getVariableApy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var marginEngineContract, historicalApy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider) {
                            throw new Error('Blockchain not connected');
                        }
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.provider);
                        return [4 /*yield*/, marginEngineContract.callStatic.getHistoricalApy()];
                    case 1:
                        historicalApy = _a.sent();
                        return [2 /*return*/, parseFloat(ethers_2.utils.formatEther(historicalApy))];
                }
            });
        });
    };
    AMM.prototype.getEstimatedCashflow = function (fixedRateLower, fixedRateUpper) {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, peripheryContract, estimatedCashflow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        peripheryContract = typechain_1.Periphery__factory.connect(constants_1.PERIPHERY_ADDRESS, this.signer);
                        return [4 /*yield*/, peripheryContract.callStatic.estimatedCashflowAtMaturity(this.marginEngineAddress, signerAddress, this.closestTickAndFixedRate(fixedRateUpper).closestUsableTick, this.closestTickAndFixedRate(fixedRateLower).closestUsableTick)];
                    case 2:
                        estimatedCashflow = _a.sent();
                        return [2 /*return*/, this.descale(estimatedCashflow)];
                }
            });
        });
    };
    AMM.prototype.getCurrentMargin = function (fixedRateLower, fixedRateUpper) {
        return __awaiter(this, void 0, void 0, function () {
            var signerAddress, marginEngineContract, margin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        marginEngineContract = typechain_1.MarginEngine__factory.connect(this.marginEngineAddress, this.signer);
                        return [4 /*yield*/, marginEngineContract.callStatic.getPosition(signerAddress, this.closestTickAndFixedRate(fixedRateUpper).closestUsableTick, this.closestTickAndFixedRate(fixedRateLower).closestUsableTick)];
                    case 2:
                        margin = (_a.sent()).margin;
                        return [2 /*return*/, this.descale(margin)];
                }
            });
        });
    };
    AMM.prototype.closestTickAndFixedRate = function (fixedRate) {
        if (fixedRate < constants_1.MIN_FIXED_RATE) {
            fixedRate = constants_1.MIN_FIXED_RATE;
        }
        if (fixedRate > constants_1.MAX_FIXED_RATE) {
            fixedRate = constants_1.MAX_FIXED_RATE;
        }
        var fixedRatePrice = price_1.Price.fromNumber(fixedRate);
        var closestTick = (0, priceTickConversions_1.fixedRateToClosestTick)(fixedRatePrice);
        var closestUsableTick = (0, nearestUsableTick_1.nearestUsableTick)(closestTick, jsbi_1.default.toNumber(this.tickSpacing));
        var closestUsableFixedRate = (0, priceTickConversions_1.tickToFixedRate)(closestUsableTick);
        return {
            closestUsableTick: closestUsableTick,
            closestUsableFixedRate: closestUsableFixedRate,
        };
    };
    AMM.prototype.getNextUsableFixedRate = function (fixedRate, count) {
        var closestUsableTick = this.closestTickAndFixedRate(fixedRate).closestUsableTick;
        closestUsableTick -= count * jsbi_1.default.toNumber(this.tickSpacing);
        return (0, priceTickConversions_1.tickToFixedRate)(closestUsableTick).toNumber();
    };
    return AMM;
}());
exports.default = AMM;
