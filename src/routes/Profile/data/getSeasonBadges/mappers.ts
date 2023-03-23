import { SupportedChainId } from '@voltz-protocol/v1-sdk';

import { Season } from '../../../../hooks/season/types';
import { BadgeVariant, NonProgrammaticBadges } from './types';

type BadgeTypeBadgeVariant = Record<string, BadgeVariant>;
const ethereumBadgeTypeBadgeVariantMap: BadgeTypeBadgeVariant = {
  // season 1
  '16': 'fixedTrader',
  '17': 'deltaDegen',
  '18': 'leverageCrowbar',
  '19': 'irsConnoisseur',
  '20': 'sushiRoll',
  '21': 'degenStuff',
  '22': 'okBoomer',
  '23': 'lpoor',
  '24': 'moneyMoneyMoney',
  '25': 'waterHose',
  '26': 'rainMaker',
  '27': 'dryIce',
  '28': 'beWaterMyFriend',
  '29': 'yikes',
  '30': 'maxBidding',
  '31': 'topTrader',
  '32': 'mellowLpVault',
  '39': 'mellowLpVaultTier1',
  '40': 'mellowLpVaultTier2',
  '41': 'mellowLpVaultTier3',
  '42': '0BCMellowLpVault',
  // season OG
  '0': 'ogFixedTrader',
  '1': 'ogDeltaDegen',
  '2': 'ogLeverageCrowbar',
  '3': 'ogIrsConnoisseur',
  '4': 'ogSushiRoll',
  '5': 'ogDegenStuff',
  '6': 'ogOkBoomer',
  '7': 'ogLpoor',
  '8': 'ogMoneyMoneyMoney',
  '9': 'ogWaterHose',
  '10': 'ogRainMaker',
  '11': 'ogDryIce',
  '12': 'ogBeWaterMyFriend',
  '13': 'ogYikes',
  '14': 'ogMaxBidding',
  '15': 'ogTopTrader',
  // season 2
  '43': 's2FixedTrader',
  '44': 's2DeltaDegen',
  '45': 's2LeverageCrowbar',
  '46': 's2IrsConnoisseur',
  '47': 's2SushiRoll',
  '48': 's2DegenStuff',
  '49': 's2Lpoor',
  '50': 's2MoneyMoneyMoney',
  '51': 's2WaterHose',
  '52': 's2RainMaker',
  '53': 's2BeWaterMyFriend',
  '54': 's2Yikes',
  '55': 's2MaxBidding',
  '56': 's2TopTrader',
  '63': 's2MellowLpVaultTier1',
  '64': 's2MellowLpVaultTier2',
  '65': 's2MellowLpVaultTier3',
  // season 3
  // TODO: Ioana or Costin change with proper ids
  '-43': 's3FixedTrader',
  '-44': 's3DeltaDegen',
  '-45': 's3LeverageCrowbar',
  '-46': 's3IrsConnoisseur',
  '-47': 's3SushiRoll',
  '-48': 's3DegenStuff',
  '-49': 's3Lpoor',
  '-50': 's3MoneyMoneyMoney',
  '-51': 's3WaterHose',
  '-52': 's3RainMaker',
  '-53': 's3BeWaterMyFriend',
  '-54': 's3Yikes',
  '-55': 's3MaxBidding',
  '-56': 's3TopTrader',
  '-63': 's3MellowLpVaultTier1',
  '-64': 's3MellowLpVaultTier2',
  '-65': 's3MellowLpVaultTier3',
  // season1, season2 & og non-programmatic badges
  '34': 'governorz',
  '33': 'diplomatz',
  '35': 'senatorz',
  '36': 'referror',
  '37': 'notionalInfluencer',
  '38': 'whaleWhisperer',
  '58': 'governorz',
  '57': 'diplomatz',
  '59': 'senatorz',
  '60': 'referror',
  '61': 'notionalInfluencer',
  '62': 'whaleWhisperer',
  // season3
  // TODO: Costin or Ioana change ids
  '-58': 'governorz',
  '-57': 'diplomatz',
  '-59': 'senatorz',
  '-60': 'referror',
  '-61': 'notionalInfluencer',
  '-62': 'whaleWhisperer',
};
const arbitrumTypeBadgeVariantMap: BadgeTypeBadgeVariant = {
  // season 3
  // TODO: Ioana or Costin change with proper ids
  '-43': 's3FixedTraderArbitrum',
  '-44': 's3DeltaDegenArbitrum',
  '-45': 's3LeverageCrowbarArbitrum',
  '-46': 's3IrsConnoisseurArbitrum',
  '-47': 's3SushiRollArbitrum',
  '-48': 's3DegenStuffArbitrum',
  '-49': 's3LpoorArbitrum',
  '-50': 's3MoneyMoneyMoneyArbitrum',
  '-51': 's3WaterHoseArbitrum',
  '-52': 's3RainMakerArbitrum',
  '-53': 's3BeWaterMyFriendArbitrum',
  '-54': 's3YikesArbitrum',
  '-55': 's3MaxBiddingArbitrum',
  '-56': 's3TopTraderArbitrum',
  '-63': 's3MellowLpVaultTier1Arbitrum',
  '-64': 's3MellowLpVaultTier2Arbitrum',
  '-65': 's3MellowLpVaultTier3Arbitrum',
  // season1, season2 & og non-programmatic badges
  '34': 'governorz',
  '33': 'diplomatz',
  '35': 'senatorz',
  '36': 'referror',
  '37': 'notionalInfluencer',
  '38': 'whaleWhisperer',
  '58': 'governorz',
  '57': 'diplomatz',
  '59': 'senatorz',
  '60': 'referror',
  '61': 'notionalInfluencer',
  '62': 'whaleWhisperer',
  // season3
  // TODO: Costin or Ioana change ids
  '-58': 'governorz',
  '-57': 'diplomatz',
  '-59': 'senatorz',
  '-60': 'referror',
  '-61': 'notionalInfluencer',
  '-62': 'whaleWhisperer',
};
export const BADGE_TYPE_BADGE_VARIANT_MAP: Record<SupportedChainId, BadgeTypeBadgeVariant> = {
  [SupportedChainId.mainnet]: ethereumBadgeTypeBadgeVariantMap,
  [SupportedChainId.goerli]: ethereumBadgeTypeBadgeVariantMap,
  [SupportedChainId.arbitrum]: arbitrumTypeBadgeVariantMap,
  [SupportedChainId.arbitrumGoerli]: arbitrumTypeBadgeVariantMap,
};

export const NON_PROGRAMMATIC_BADGES_DISCORD: NonProgrammaticBadges[] = [
  'governorz',
  'diplomatz',
  'senatorz',
];

export const NON_PROGRAMMATIC_BADGES: NonProgrammaticBadges[] = [
  ...NON_PROGRAMMATIC_BADGES_DISCORD,
  'referror',
  'notionalInfluencer',
  'whaleWhisperer',
];

type SeasonBadgeVariants = Record<`${Season['id']}`, string[]>;
const etherumChainSeasonBadgeVariants: SeasonBadgeVariants = {
  0: [
    'ogFixedTrader',
    'ogDeltaDegen',
    'ogLeverageCrowbar',
    'ogIrsConnoisseur',
    'ogSushiRoll',
    'ogDegenStuff',
    'ogTopTrader',
    'ogOkBoomer',
    'ogDryIce',
    'ogMaxBidding',
    'ogYikes',
    'ogLpoor',
    'ogMoneyMoneyMoney',
    'ogWaterHose',
    'ogRainMaker',
    'ogBeWaterMyFriend',
    ...NON_PROGRAMMATIC_BADGES,
  ],
  1: [
    'fixedTrader',
    'deltaDegen',
    'leverageCrowbar',
    'irsConnoisseur',
    'sushiRoll',
    'degenStuff',
    'topTrader',
    'okBoomer',
    'dryIce',
    'maxBidding',
    'yikes',
    'lpoor',
    '0BCMellowLpVault',
    'mellowLpVault',
    'mellowLpVaultTier1',
    'mellowLpVaultTier2',
    'mellowLpVaultTier3',
    'moneyMoneyMoney',
    'waterHose',
    'rainMaker',
    'beWaterMyFriend',
    ...NON_PROGRAMMATIC_BADGES,
  ],
  2: [
    's2FixedTrader',
    's2DeltaDegen',
    's2LeverageCrowbar',
    's2IrsConnoisseur',
    's2SushiRoll',
    's2DegenStuff',
    's2Lpoor',
    's2MoneyMoneyMoney',
    's2WaterHose',
    's2RainMaker',
    's2BeWaterMyFriend',
    's2Yikes',
    's2MaxBidding',
    's2TopTrader',
    's2MellowLpVaultTier1',
    's2MellowLpVaultTier2',
    's2MellowLpVaultTier3',
    ...NON_PROGRAMMATIC_BADGES,
  ],
  3: [
    's3FixedTrader',
    's3DeltaDegen',
    's3LeverageCrowbar',
    's3IrsConnoisseur',
    's3SushiRoll',
    's3DegenStuff',
    's3Lpoor',
    's3MoneyMoneyMoney',
    's3WaterHose',
    's3RainMaker',
    's3BeWaterMyFriend',
    's3Yikes',
    's3MaxBidding',
    's3TopTrader',
    's3MellowLpVaultTier1',
    's3MellowLpVaultTier2',
    's3MellowLpVaultTier3',
    ...NON_PROGRAMMATIC_BADGES,
  ],
  4: [],
  5: [],
};
const arbitrumChainSeasonBadgeVariants: SeasonBadgeVariants = {
  0: [],
  1: [],
  2: [],
  3: [
    's3FixedTraderArbitrum',
    's3DeltaDegenArbitrum',
    's3LeverageCrowbarArbitrum',
    's3IrsConnoisseurArbitrum',
    's3SushiRollArbitrum',
    's3DegenStuffArbitrum',
    's3LpoorArbitrum',
    's3MoneyMoneyMoneyArbitrum',
    's3WaterHoseArbitrum',
    's3RainMakerArbitrum',
    's3BeWaterMyFriendArbitrum',
    's3YikesArbitrum',
    's3MaxBiddingArbitrum',
    's3TopTraderArbitrum',
    's3MellowLpVaultTier1Arbitrum',
    's3MellowLpVaultTier2Arbitrum',
    's3MellowLpVaultTier3Arbitrum',
    ...NON_PROGRAMMATIC_BADGES,
  ],
  4: [],
  5: [],
};
export const CHAIN_SEASON_BADGE_VARIANTS: Record<SupportedChainId, SeasonBadgeVariants> = {
  [SupportedChainId.mainnet]: etherumChainSeasonBadgeVariants,
  [SupportedChainId.goerli]: etherumChainSeasonBadgeVariants,
  [SupportedChainId.arbitrum]: arbitrumChainSeasonBadgeVariants,
  [SupportedChainId.arbitrumGoerli]: arbitrumChainSeasonBadgeVariants,
};
