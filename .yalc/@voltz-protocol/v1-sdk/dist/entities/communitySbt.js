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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.REFERROR_BADGES_VARIANT = exports.NON_PROGRAMATIC_BADGES_VARIANT = exports.TOP_BADGES_VARIANT = exports.NON_SUBGRAPH_BADGES_SEASONS = exports.BadgeClaimingStatus = void 0;
var client_1 = require("@apollo/client");
var typechain_sbt_1 = require("../typechain-sbt");
var getIpfsLeaves_1 = require("../utils/communitySbt/getIpfsLeaves");
var getSubgraphRoot_1 = require("../utils/communitySbt/getSubgraphRoot");
var merkle_tree_1 = require("../utils/communitySbt/merkle-tree");
var axios_1 = __importDefault(require("axios"));
var cross_fetch_1 = __importDefault(require("cross-fetch"));
var constants_1 = require("../constants");
var helpers_1 = require("../utils/communitySbt/helpers");
var luxon_1 = require("luxon");
var getTopBadges_1 = require("../utils/communitySbt/getTopBadges");
var getSubgraphBadges_1 = require("../utils/communitySbt/getSubgraphBadges");
var sentry_1 = require("../utils/sentry");
var TxBadgeStatus;
(function (TxBadgeStatus) {
    TxBadgeStatus[TxBadgeStatus["SUCCESSFUL"] = 0] = "SUCCESSFUL";
    TxBadgeStatus[TxBadgeStatus["FAILED"] = 1] = "FAILED";
    TxBadgeStatus[TxBadgeStatus["PENDING"] = 2] = "PENDING";
})(TxBadgeStatus || (TxBadgeStatus = {}));
var BadgeClaimingStatus;
(function (BadgeClaimingStatus) {
    BadgeClaimingStatus[BadgeClaimingStatus["CLAIMED"] = 0] = "CLAIMED";
    BadgeClaimingStatus[BadgeClaimingStatus["CLAIMING"] = 1] = "CLAIMING";
    BadgeClaimingStatus[BadgeClaimingStatus["NOT_CLAIMED"] = 2] = "NOT_CLAIMED";
})(BadgeClaimingStatus = exports.BadgeClaimingStatus || (exports.BadgeClaimingStatus = {}));
exports.NON_SUBGRAPH_BADGES_SEASONS = {
    0: [
        '15',
        '12'
    ],
    1: [
        '31',
        '28',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38'
    ]
};
exports.TOP_BADGES_VARIANT = {
    'trader': ['15', '31'],
    'liquidityProvider': ['12', '28']
};
exports.NON_PROGRAMATIC_BADGES_VARIANT = {
    'diplomatz': '33',
    'governorz': '34',
    'senatorz': '35'
};
exports.REFERROR_BADGES_VARIANT = {
    'referror': '36',
    'notionalInfluencer': '37',
    'whaleWhisperer': '38'
};
var SBT = /** @class */ (function () {
    /**
     *
     * @param id: CommunitySBT contract address (depends on the network)
     * @param signer: Signer object according to the user's wallet
     */
    function SBT(_a) {
        var id = _a.id, signer = _a.signer, coingeckoKey = _a.coingeckoKey, badgesSubgraphUrl = _a.badgesSubgraphUrl, nonProgDbUrl = _a.nonProgDbUrl, referralsDbUrl = _a.referralsDbUrl, subgraphUrl = _a.subgraphUrl, ignoredWalletIds = _a.ignoredWalletIds;
        this.id = id;
        this.signer = signer;
        this.coingeckoKey = coingeckoKey;
        this.badgesSubgraphUrl = badgesSubgraphUrl;
        this.nonProgDbUrl = nonProgDbUrl;
        this.referralsDbUrl = referralsDbUrl;
        this.subgraphUrl = subgraphUrl;
        this.ignoredWalletIds = ignoredWalletIds !== null && ignoredWalletIds !== void 0 ? ignoredWalletIds : {};
        ;
        if (signer) {
            this.contract = typechain_sbt_1.CommunitySBT__factory.connect(id, signer);
            this.provider = signer.provider;
        }
        else {
            this.contract = null;
        }
    }
    /**
     * @notice This function calls the SBT contract's
     * @param badgeType: number associated with the badge to redeem
     * @param owner: user's address
     * @param awardedTimestamp: time at which the badge was awarded (taken from the subgraph)
     * @param subgraphAPI: the api link used to query the subgraph
     * @returns
     */
    SBT.prototype.redeemSbt = function (badgeType, owner, seasonId, awardedTimestamp) {
        return __awaiter(this, void 0, void 0, function () {
            var awardedTimestampSec, rootEntity, leafInfo, network, leaves, proof, tokenId, tx, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // wallet was not connected when the object was initialised
                        // therefore, it couldn't obtain the contract connection
                        if (!this.contract) {
                            throw new Error('Cannot connect to community SBT contract');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        if (!this.badgesSubgraphUrl || !this.coingeckoKey || !this.subgraphUrl || !this.provider) {
                            throw new Error('Missing env vars');
                        }
                        awardedTimestampSec = Math.floor(awardedTimestamp / 1000);
                        return [4 /*yield*/, (0, getSubgraphRoot_1.getRootFromSubgraph)(awardedTimestampSec, this.badgesSubgraphUrl)];
                    case 2:
                        rootEntity = _a.sent();
                        if (!rootEntity) {
                            throw new Error('No root found');
                        }
                        leafInfo = {
                            account: owner,
                            badgeId: parseInt(badgeType)
                        };
                        return [4 /*yield*/, this.provider.getNetwork()];
                    case 3:
                        network = (_a.sent()).name;
                        return [4 /*yield*/, (0, getIpfsLeaves_1.createLeaves)(network, seasonId)];
                    case 4:
                        leaves = _a.sent();
                        proof = (0, merkle_tree_1.getProof)(owner, parseInt(badgeType), leaves);
                        return [4 /*yield*/, this.contract.callStatic.redeem(leafInfo, proof, rootEntity.merkleRoot)];
                    case 5:
                        tokenId = _a.sent();
                        return [4 /*yield*/, this.contract.redeem(leafInfo, proof, rootEntity.merkleRoot)];
                    case 6:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, tokenId];
                    case 8:
                        error_1 = _a.sent();
                        sentry_1.sentryTracker.captureException(error_1);
                        sentry_1.sentryTracker.captureMessage("Unable to claim");
                        throw new Error("Unable to claim");
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
   * @notice This function calls the SBT contract's
   * @param badges: array of badgeTypes and the time at which they were awarded
   * @param owner: user's address
   * @param subgraphAPI: the api link used to query the subgraph
   * @returns
   */
    SBT.prototype.redeemMultipleSbts = function (badges, owner, seasonId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, network, claimedBadgeTypes, _i, badges_1, badge, awardedTimestampSec, rootEntity, leafInfo, leaves, proof, tx, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // wallet was not connected when the object was initialised
                        // therefore, it couldn't obtain the contract connection
                        if (!this.contract || !this.provider) {
                            throw new Error('Wallet not connected');
                        }
                        data = {
                            leaves: [],
                            proofs: [],
                            roots: []
                        };
                        return [4 /*yield*/, this.provider.getNetwork()];
                    case 1:
                        network = (_a.sent()).name;
                        claimedBadgeTypes = [];
                        _i = 0, badges_1 = badges;
                        _a.label = 2;
                    case 2:
                        if (!(_i < badges_1.length)) return [3 /*break*/, 6];
                        badge = badges_1[_i];
                        if (!this.badgesSubgraphUrl || !this.coingeckoKey || !this.subgraphUrl) {
                            return [3 /*break*/, 6];
                        }
                        awardedTimestampSec = Math.floor(badge.awardedTimestamp / 1000);
                        return [4 /*yield*/, (0, getSubgraphRoot_1.getRootFromSubgraph)(awardedTimestampSec, this.badgesSubgraphUrl)];
                    case 3:
                        rootEntity = _a.sent();
                        if (!rootEntity) {
                            return [3 /*break*/, 5];
                        }
                        leafInfo = {
                            account: owner,
                            badgeId: parseInt(badge.badgeType)
                        };
                        return [4 /*yield*/, (0, getIpfsLeaves_1.createLeaves)(network, seasonId)];
                    case 4:
                        leaves = _a.sent();
                        proof = (0, merkle_tree_1.getProof)(owner, parseInt(badge.badgeType), leaves);
                        data.leaves.push(leafInfo);
                        data.proofs.push(proof);
                        data.roots.push(rootEntity.merkleRoot);
                        claimedBadgeTypes.push(parseInt(badge.badgeType));
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6:
                        _a.trys.push([6, 10, , 11]);
                        return [4 /*yield*/, this.contract.callStatic.multiRedeem(data.leaves, data.proofs, data.roots)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.contract.multiRedeem(data.leaves, data.proofs, data.roots)];
                    case 8:
                        tx = _a.sent();
                        return [4 /*yield*/, tx.wait()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/, {
                                claimedBadgeTypes: claimedBadgeTypes,
                            }];
                    case 10:
                        error_2 = _a.sent();
                        sentry_1.sentryTracker.captureException(error_2);
                        sentry_1.sentryTracker.captureMessage("Unable to claim multiple badges");
                        throw new Error("Unable to claim multiple badges");
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    SBT.prototype.getSeasonBadges = function (_a) {
        var userId = _a.userId, seasonId = _a.seasonId, seasonStart = _a.seasonStart, seasonEnd = _a.seasonEnd;
        return __awaiter(this, void 0, void 0, function () {
            var badges_2, badges;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(seasonEnd < luxon_1.DateTime.now().toSeconds())) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getOldSeasonBadges({
                                userId: userId,
                                seasonId: seasonId,
                                seasonStart: seasonStart,
                                seasonEnd: seasonEnd,
                            })];
                    case 1:
                        badges_2 = _b.sent();
                        return [2 /*return*/, badges_2];
                    case 2: return [4 /*yield*/, this.computeSeasonBadges({
                            userId: userId,
                            seasonId: seasonId,
                            seasonStart: seasonStart,
                            seasonEnd: seasonEnd,
                        })];
                    case 3:
                        badges = _b.sent();
                        return [2 /*return*/, badges];
                }
            });
        });
    };
    SBT.prototype.getOldSeasonBadges = function (_a) {
        var userId = _a.userId, seasonId = _a.seasonId, seasonStart = _a.seasonStart, seasonEnd = _a.seasonEnd;
        return __awaiter(this, void 0, void 0, function () {
            var badgesResponse, mapBadges, network, data, snasphots, subgraphSnapshots;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.provider || !this.signer) {
                            throw new Error('Wallet not connected');
                        }
                        return [4 /*yield*/, (0, getSubgraphBadges_1.getSubgraphBadges)({
                                userId: userId,
                                seasonId: seasonId,
                                seasonStart: seasonStart,
                                seasonEnd: seasonEnd,
                                badgesSubgraphUrl: this.badgesSubgraphUrl
                            })];
                    case 1:
                        badgesResponse = _b.sent();
                        mapBadges = new Map();
                        badgesResponse.forEach(function (entry) {
                            mapBadges.set(entry.id, entry);
                        });
                        return [4 /*yield*/, this.provider.getNetwork()];
                    case 2:
                        network = (_b.sent()).name;
                        return [4 /*yield*/, axios_1.default.get((0, helpers_1.geLeavesIpfsUri)(network, seasonId, false))];
                    case 3:
                        data = _b.sent();
                        snasphots = data.data.snapshot;
                        subgraphSnapshots = [];
                        snasphots.forEach(function (entry) {
                            var _a, _b;
                            if (entry.owner.toLowerCase() === userId.toLowerCase()) {
                                var id = "".concat(entry.owner.toLowerCase(), "#").concat(entry.badgeType, "#").concat(seasonId);
                                subgraphSnapshots.push({
                                    id: id,
                                    badgeType: entry.badgeType.toString(),
                                    awardedTimestampMs: ((_a = mapBadges.get(id)) === null || _a === void 0 ? void 0 : _a.awardedTimestampMs) || (0, helpers_1.toMillis)(seasonEnd),
                                    mintedTimestampMs: ((_b = mapBadges.get(id)) === null || _b === void 0 ? void 0 : _b.mintedTimestampMs) || undefined,
                                });
                            }
                        });
                        return [2 /*return*/, subgraphSnapshots];
                }
            });
        });
    };
    SBT.prototype.computeSeasonBadges = function (_a) {
        var userId = _a.userId, seasonId = _a.seasonId, seasonStart = _a.seasonStart, seasonEnd = _a.seasonEnd;
        return __awaiter(this, void 0, void 0, function () {
            var badgesResponse, referroorBadges, nonProgBadges, _i, _b, badgeType, nonProgBadge, referroorBadge, topLpBadge, topTraderBadge, error_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, (0, getSubgraphBadges_1.getSubgraphBadges)({
                                userId: userId,
                                seasonId: seasonId,
                                seasonStart: seasonStart,
                                seasonEnd: seasonEnd,
                                badgesSubgraphUrl: this.badgesSubgraphUrl
                            })];
                    case 1:
                        badgesResponse = _c.sent();
                        referroorBadges = {};
                        nonProgBadges = {};
                        if (!this.nonProgDbUrl) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getNonProgramaticBadges(userId)];
                    case 2:
                        nonProgBadges = _c.sent();
                        _c.label = 3;
                    case 3:
                        if (!(this.referralsDbUrl && this.badgesSubgraphUrl)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getReferrorBadges(userId, seasonId)];
                    case 4:
                        referroorBadges = _c.sent();
                        _c.label = 5;
                    case 5:
                        for (_i = 0, _b = exports.NON_SUBGRAPH_BADGES_SEASONS[seasonId]; _i < _b.length; _i++) {
                            badgeType = _b[_i];
                            if (nonProgBadges[badgeType]) {
                                nonProgBadge = nonProgBadges[badgeType];
                                badgesResponse.push(nonProgBadge);
                            }
                            if (referroorBadges[badgeType]) {
                                referroorBadge = referroorBadges[badgeType];
                                badgesResponse.push(referroorBadge);
                            }
                        }
                        if (!(this.badgesSubgraphUrl && this.subgraphUrl && this.coingeckoKey &&
                            luxon_1.DateTime.now().toSeconds() > seasonEnd)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getTopBadge(userId, seasonId, false, seasonStart, seasonEnd)];
                    case 6:
                        topLpBadge = _c.sent();
                        return [4 /*yield*/, this.getTopBadge(userId, seasonId, true, seasonStart, seasonEnd)];
                    case 7:
                        topTraderBadge = _c.sent();
                        if (topLpBadge)
                            badgesResponse.push(topLpBadge);
                        if (topTraderBadge)
                            badgesResponse.push(topTraderBadge);
                        _c.label = 8;
                    case 8: return [2 /*return*/, badgesResponse];
                    case 9:
                        error_3 = _c.sent();
                        sentry_1.sentryTracker.captureException(error_3);
                        return [2 /*return*/, []];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
   * @dev Retrieve season's notional
   * ranking of all users. Check if given user is in top 5.
   * If so, assign a top trader/LP badge, otherwise return undefined
   */
    SBT.prototype.getTopBadge = function (userId, seasonId, isLP, seasonStart, seasonEnd) {
        return __awaiter(this, void 0, void 0, function () {
            var badgeType, _a, rankResult, rank, entry, badge;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        badgeType = (0, helpers_1.getTopBadgeType)(seasonId, !isLP);
                        if (!badgeType)
                            return [2 /*return*/, undefined];
                        if (!this.badgesSubgraphUrl || !this.coingeckoKey || !this.ignoredWalletIds) {
                            return [2 /*return*/, undefined];
                        }
                        if (!!this.ethPrice) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, (0, helpers_1.geckoEthToUsd)(this.coingeckoKey)];
                    case 1:
                        _a.ethPrice = _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.getRanking({
                            seasonStart: seasonStart,
                            seasonEnd: seasonEnd,
                            isLP: isLP
                        })];
                    case 3:
                        rankResult = _b.sent();
                        rank = 0;
                        _b.label = 4;
                    case 4:
                        if (!(rank < 5)) return [3 /*break*/, 7];
                        entry = rankResult[rank];
                        if (!(entry.address === userId)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.constructTopBadge(userId, seasonId, seasonEnd, badgeType)];
                    case 5:
                        badge = _b.sent();
                        return [2 /*return*/, badge];
                    case 6:
                        rank++;
                        return [3 /*break*/, 4];
                    case 7: return [2 /*return*/, undefined];
                }
            });
        });
    };
    SBT.prototype.getRanking = function (args) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, scoreArgs, scores, rankResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.subgraphUrl || !this.coingeckoKey || !this.ignoredWalletIds) {
                            return [2 /*return*/, []];
                        }
                        if (!!this.ethPrice) return [3 /*break*/, 2];
                        _b = this;
                        return [4 /*yield*/, (0, helpers_1.geckoEthToUsd)(this.coingeckoKey)];
                    case 1:
                        _b.ethPrice = _c.sent();
                        _c.label = 2;
                    case 2:
                        scoreArgs = {
                            seasonStart: args.seasonStart,
                            seasonEnd: args.seasonEnd,
                            subgraphUrl: this.subgraphUrl,
                            ethPrice: this.ethPrice,
                            ignoredWalletIds: this.ignoredWalletIds,
                            isLP: (_a = args.isLP) !== null && _a !== void 0 ? _a : false
                        };
                        return [4 /*yield*/, (0, getTopBadges_1.getScores)(scoreArgs)];
                    case 3:
                        scores = _c.sent();
                        rankResult = Object.keys(scores)
                            .sort(function (a, b) { return scores[b] - scores[a]; })
                            .map(function (walletId, index) {
                            var _a;
                            return ({
                                address: walletId,
                                points: (_a = scores[walletId]) !== null && _a !== void 0 ? _a : 0,
                                rank: index,
                            });
                        });
                        return [2 /*return*/, rankResult];
                }
            });
        });
    };
    /**
   * @dev Query the Badges subgraph to assess if the top
   * badge was claimed. Create a Badge Response with
   * the awarded time as end of season and claimed time
   * as eithr zero if not claimed or subgrap's minted timestamp
   */
    SBT.prototype.constructTopBadge = function (userId, seasonId, seasonEnd, badgeType) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var badgeQuery, client, idBadge, badgeData, badge;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        badgeQuery = "\n            query( $id: String) {\n                badge(id: $id){\n                    id\n                    mintedTimestamp\n                }\n            }\n        ";
                        client = new client_1.ApolloClient({
                            cache: new client_1.InMemoryCache(),
                            link: new client_1.HttpLink({ uri: this.badgesSubgraphUrl, fetch: cross_fetch_1.default })
                        });
                        idBadge = "".concat(userId.toLowerCase(), "#").concat(badgeType, "#").concat(seasonId);
                        return [4 /*yield*/, client.query({
                                query: (0, client_1.gql)(badgeQuery),
                                variables: {
                                    id: idBadge,
                                },
                            })];
                    case 1:
                        badgeData = _b.sent();
                        badge = {
                            id: "".concat(userId, "#").concat(seasonId, "#").concat(badgeType),
                            badgeType: badgeType,
                            awardedTimestampMs: (0, helpers_1.toMillis)(seasonEnd),
                            mintedTimestampMs: (0, helpers_1.toMillis)(parseInt(((_a = badgeData === null || badgeData === void 0 ? void 0 : badgeData.data) === null || _a === void 0 ? void 0 : _a.badge) ? badgeData.data.badge.mintedTimestamp : "0")),
                        };
                        return [2 /*return*/, badge];
                }
            });
        });
    };
    SBT.prototype.getNonProgramaticBadges = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var badgeResponseRecord, resp, badges;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        badgeResponseRecord = {};
                        return [4 /*yield*/, axios_1.default.get("".concat(this.nonProgDbUrl, "/get-badges/").concat(userId))];
                    case 1:
                        resp = _a.sent();
                        if (!resp.data) {
                            return [2 /*return*/, badgeResponseRecord];
                        }
                        badges = resp.data.badges;
                        badges.forEach(function (entry) {
                            var badgeType = exports.NON_PROGRAMATIC_BADGES_VARIANT[entry.badge];
                            if (badgeType) {
                                badgeResponseRecord[badgeType] = {
                                    id: "".concat(userId, "#").concat(badgeType, "#1"),
                                    badgeType: badgeType,
                                    awardedTimestampMs: (0, helpers_1.toMillis)(entry.awardedTimestamp),
                                    mintedTimestampMs: (0, helpers_1.toMillis)(entry.mintedTimestamp),
                                };
                            }
                        });
                        return [2 /*return*/, badgeResponseRecord];
                }
            });
        });
    };
    SBT.prototype.getReferrorBadges = function (userId, seasonId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var badgeResponseRecord, resp, referees, refereesWith100kNotionalTraded, refereesWith2mNotionalTraded, _loop_1, this_1, _i, referees_1, referee, badgeType, badgeType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        badgeResponseRecord = {};
                        return [4 /*yield*/, axios_1.default.get("".concat(this.referralsDbUrl, "/referrals-by/").concat(userId.toLowerCase()))];
                    case 1:
                        resp = _b.sent();
                        if (!resp.data) {
                            return [2 /*return*/, badgeResponseRecord];
                        }
                        referees = resp.data;
                        refereesWith100kNotionalTraded = 0;
                        refereesWith2mNotionalTraded = 0;
                        _loop_1 = function (referee) {
                            var badgeQuery, client, id, data, totalPointz;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        badgeQuery = "\n                query( $id: String) {\n                    seasonUsers( where: {owner_contains: $id}) {\n                        id\n                        totalWeightedNotionalTraded\n                      \n                    }\n                }\n            ";
                                        client = new client_1.ApolloClient({
                                            cache: new client_1.InMemoryCache(),
                                            link: new client_1.HttpLink({ uri: this_1.badgesSubgraphUrl, fetch: cross_fetch_1.default })
                                        });
                                        id = "".concat(referee.toLowerCase());
                                        return [4 /*yield*/, client.query({
                                                query: (0, client_1.gql)(badgeQuery),
                                                variables: {
                                                    id: id,
                                                },
                                            })];
                                    case 1:
                                        data = _c.sent();
                                        if (!((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.seasonUsers)) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        totalPointz = 0;
                                        data.data.seasonUsers.forEach(function (user) {
                                            totalPointz = totalPointz + parseFloat(user.totalWeightedNotionalTraded);
                                        });
                                        if (totalPointz >= (0, helpers_1.get100KRefereeBenchmark)(this_1.badgesSubgraphUrl)) {
                                            refereesWith100kNotionalTraded++;
                                            if (totalPointz >= (0, helpers_1.get2MRefereeBenchmark)(this_1.badgesSubgraphUrl)) {
                                                refereesWith2mNotionalTraded++;
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, referees_1 = referees;
                        _b.label = 2;
                    case 2:
                        if (!(_i < referees_1.length)) return [3 /*break*/, 5];
                        referee = referees_1[_i];
                        return [5 /*yield**/, _loop_1(referee)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        ;
                        if (refereesWith100kNotionalTraded >= 1) {
                            badgeType = '36';
                            badgeResponseRecord[badgeType] = this.createReferroorBadgeRecord(badgeType, userId, seasonId);
                            if (refereesWith100kNotionalTraded >= 10) {
                                badgeType = '37'; // Notional Influence
                                badgeResponseRecord[badgeType] = this.createReferroorBadgeRecord(badgeType, userId, seasonId);
                            }
                        }
                        if (refereesWith2mNotionalTraded >= 5) {
                            badgeType = '38';
                            badgeResponseRecord[badgeType] = this.createReferroorBadgeRecord(badgeType, userId, seasonId);
                        }
                        return [2 /*return*/, badgeResponseRecord];
                }
            });
        });
    };
    SBT.prototype.createReferroorBadgeRecord = function (badgeType, userId, seasonId) {
        return {
            id: "".concat(userId, "#").concat(badgeType, "#").concat(seasonId),
            badgeType: badgeType,
            awardedTimestampMs: (0, helpers_1.toMillis)(luxon_1.DateTime.now().toSeconds()),
            mintedTimestampMs: undefined,
        };
    };
    SBT.prototype.getUserBalance = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.contract) === null || _a === void 0 ? void 0 : _a.balanceOf(user))];
                    case 1:
                        balance = _b.sent();
                        return [2 /*return*/, balance];
                }
            });
        });
    };
    SBT.prototype.getTokenOwner = function (tokenId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var owner;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.contract) === null || _a === void 0 ? void 0 : _a.ownerOf(tokenId))];
                    case 1:
                        owner = _b.sent();
                        return [2 /*return*/, owner];
                }
            });
        });
    };
    SBT.prototype.getTotalSupply = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var totalSupply;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ((_a = this.contract) === null || _a === void 0 ? void 0 : _a.totalSupply())];
                    case 1:
                        totalSupply = _b.sent();
                        return [2 /*return*/, totalSupply];
                }
            });
        });
    };
    SBT.prototype.getBadgeStatus = function (args) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var userAddress, network, networkName, getURL, resp, transactions, txBadges, _i, transactions_1, transaction, status_1, badgeType, badgeTypes, _c, badgeTypes_1, badgeType, _d, _e, badgeType, subgraphClaimedBadges, badgeStatuses;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (!this.signer) {
                            throw new Error("No provider found");
                        }
                        return [4 /*yield*/, this.signer.getAddress()];
                    case 1:
                        userAddress = _f.sent();
                        return [4 /*yield*/, ((_a = this.provider) === null || _a === void 0 ? void 0 : _a.getNetwork())];
                    case 2:
                        network = _f.sent();
                        networkName = network ? network.name : "";
                        getURL = (0, helpers_1.getEtherscanURL)(networkName, args.apiKey, userAddress);
                        return [4 /*yield*/, axios_1.default.get(getURL)];
                    case 3:
                        resp = _f.sent();
                        if (!resp.data) {
                            throw new Error("Etherscan api failed");
                        }
                        transactions = resp.data.result;
                        txBadges = new Map();
                        for (_i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
                            transaction = transactions_1[_i];
                            if (transaction.to.toLowerCase() !== ((_b = this.contract) === null || _b === void 0 ? void 0 : _b.address.toLowerCase())) {
                                continue;
                            }
                            status_1 = transaction.txreceipt_status === 1 ?
                                TxBadgeStatus.SUCCESSFUL
                                : TxBadgeStatus.FAILED;
                            if (transaction.methodId === constants_1.REDEEM_METHOD_ID) {
                                badgeType = (0, helpers_1.decodeBadgeType)(transaction.input);
                                txBadges.set(badgeType, status_1);
                            }
                            else if (transaction.methodId === constants_1.MULTI_REDEEM_METHOD_ID) {
                                badgeTypes = (0, helpers_1.decodeMultipleBadgeTypes)(transaction.input);
                                for (_c = 0, badgeTypes_1 = badgeTypes; _c < badgeTypes_1.length; _c++) {
                                    badgeType = badgeTypes_1[_c];
                                    txBadges.set(badgeType, status_1);
                                }
                            }
                        }
                        // if badges of interest are not part of those 50 transactions, set them as pending
                        for (_d = 0, _e = args.potentialClaimingBadgeTypes; _d < _e.length; _d++) {
                            badgeType = _e[_d];
                            if (!txBadges.get(badgeType)) {
                                txBadges.set(badgeType, TxBadgeStatus.PENDING);
                            }
                        }
                        return [4 /*yield*/, this.claimedBadgesInSubgraph(userAddress, args.season)];
                    case 4:
                        subgraphClaimedBadges = _f.sent();
                        badgeStatuses = subgraphClaimedBadges.map(function (badge) {
                            if (badge.claimingStatus === BadgeClaimingStatus.CLAIMED) {
                                return badge;
                            }
                            var txStatus = txBadges.get(badge.badgeType);
                            // badge not found in recent successful txs or in potential pending txs
                            // meaning their status is desided by the subgraph
                            if (!txStatus || txStatus === TxBadgeStatus.FAILED) {
                                return {
                                    badgeType: badge.badgeType,
                                    claimingStatus: badge.claimingStatus
                                };
                            }
                            else { // subgraph is not updated yet
                                return {
                                    badgeType: badge.badgeType,
                                    claimingStatus: BadgeClaimingStatus.CLAIMING
                                };
                            }
                        });
                        return [2 /*return*/, badgeStatuses];
                }
            });
        });
    };
    SBT.prototype.claimedBadgesInSubgraph = function (userAddress, season) {
        return __awaiter(this, void 0, void 0, function () {
            var badgeQuery, client, id, data, badgesClaimed, _i, _a, badge;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        badgeQuery = "\n            query( $id: String) {\n                badges(first: 50, where: {seasonUser_contains: $id}) {\n                    id\n                    badgeType\n                    awardedTimestamp\n                    mintedTimestamp\n                }\n            }\n        ";
                        client = new client_1.ApolloClient({
                            cache: new client_1.InMemoryCache(),
                            link: new client_1.HttpLink({ uri: this.badgesSubgraphUrl, fetch: cross_fetch_1.default })
                        });
                        id = "".concat(userAddress.toLowerCase(), "#").concat(season);
                        return [4 /*yield*/, client.query({
                                query: (0, client_1.gql)(badgeQuery),
                                variables: {
                                    id: id,
                                },
                            })];
                    case 1:
                        data = _b.sent();
                        badgesClaimed = new Array();
                        for (_i = 0, _a = data.data.badges; _i < _a.length; _i++) {
                            badge = _a[_i];
                            badgesClaimed.push({
                                badgeType: parseInt(badge.badgeType, 10),
                                claimingStatus: parseInt(badge.mintedTimestamp, 10) === 0 ?
                                    BadgeClaimingStatus.NOT_CLAIMED
                                    : BadgeClaimingStatus.CLAIMED // only from subgraph's perspective
                            });
                        }
                        return [2 /*return*/, badgesClaimed];
                }
            });
        });
    };
    return SBT;
}());
exports.default = SBT;
