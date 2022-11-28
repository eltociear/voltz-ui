import { ElementType } from 'react';

import {
  ArrowLeft,
  ArrowRight,
  BeWaterMyFriend,
  Burn,
  DegenStuff,
  DeltaDegen,
  DryIce,
  Ethereum,
  IrsConnoisseur,
  LeverageCrowbar,
  Liquidation,
  Lpoor,
  MarginUpdate,
  MaxBidding,
  Metamask,
  Mint,
  MoneyMoneyMoney,
  NoClaimedBadges,
  FixedTrader,
  OkBoomer,
  Rainmaker,
  TopTrader,
  Settle,
  Yikes,
  SushiRoll,
  Swap,
  TokenDai,
  TokenEth,
  TokenLido,
  TokenUsdc,
  TokenUsdt,
  Voltz,
  WalletConnect,
  WaterHose,
  OGLpoor,
  OGDryIce,
  OGYikes,
  OGMaxBidding,
  OGOkBoomer,
  OGLeverageCrowbar,
  OGWaterHose,
  OGDeltaDegen,
  OGIrsConnoisseur,
  OGDegenStuff,
  OGFixedTrader,
  OGSushiRoll,
  OGTopTrader,
  OGBeWaterMyFriend,
  OGRainmaker,
  OGMoneyMoneyMoney,
  MellowLpVault,
  Senatorz,
  Governorz,
  Diplomatz,
  NotionalInfluencer,
  Referror,
  WhaleWhisperer,
  InformationCircle,
  WarningCircle,
} from './icons';

export type Icons =
  | 'arrow-left'
  | 'arrow-right'
  | 'ethereum'
  | 'information-circle'
  | 'metamask'
  | 'token-dai'
  | 'token-eth'
  | 'token-lido'
  | 'token-usdc'
  | 'token-usdt'
  | 'tx-burn'
  | 'tx-liquidation'
  | 'tx-margin-update'
  | 'tx-mint'
  | 'tx-settle'
  | 'tx-swap'
  | 'voltz'
  | 'walletConnect'
  | 'warning-circle'
  // badges
  | 'noClaimedBadges'
  // season 1 badges
  | 'degenStuff'
  | 'deltaDegen'
  | 'irsConnoisseur'
  | 'leverageCrowbar'
  | 'fixedTrader'
  | 'sushiRoll'
  | 'topTrader'
  | 'beWaterMyFriend'
  | 'rainMaker'
  | 'waterHose'
  | 'moneyMoneyMoney'
  | 'lpoor'
  | 'yikes'
  | 'maxBidding'
  | 'dryIce'
  | 'okBoomer'
  | 'mellowLpVault'
  // season OG badges
  | 'ogDegenStuff'
  | 'ogDeltaDegen'
  | 'ogIrsConnoisseur'
  | 'ogLeverageCrowbar'
  | 'ogFixedTrader'
  | 'ogSushiRoll'
  | 'ogTopTrader'
  | 'ogBeWaterMyFriend'
  | 'ogRainMaker'
  | 'ogWaterHose'
  | 'ogMoneyMoneyMoney'
  | 'ogLpoor'
  | 'ogYikes'
  | 'ogMaxBidding'
  | 'ogDryIce'
  | 'ogOkBoomer'
  // non-programmatic badges
  | 'senatorz'
  | 'governorz'
  | 'diplomatz'
  | 'whaleWhisperer'
  | 'notionalInfluencer'
  | 'referror';

export const iconMap: Record<Icons, ElementType> = {
  'arrow-left': ArrowLeft as ElementType,
  'arrow-right': ArrowRight as ElementType,
  ethereum: Ethereum as ElementType,
  'information-circle': InformationCircle as ElementType,
  metamask: Metamask as ElementType,
  voltz: Voltz as ElementType,
  walletConnect: WalletConnect as ElementType,
  'warning-circle': WarningCircle as ElementType,
  'token-dai': TokenDai as ElementType,
  'token-eth': TokenEth as ElementType,
  'token-lido': TokenLido as ElementType,
  'token-usdc': TokenUsdc as ElementType,
  'token-usdt': TokenUsdt as ElementType,
  'tx-burn': Burn as ElementType,
  'tx-liquidation': Liquidation as ElementType,
  'tx-margin-update': MarginUpdate as ElementType,
  'tx-mint': Mint as ElementType,
  'tx-settle': Settle as ElementType,
  'tx-swap': Swap as ElementType,
  // badges
  noClaimedBadges: NoClaimedBadges as ElementType,
  // badges season 1
  degenStuff: DegenStuff as ElementType,
  deltaDegen: DeltaDegen as ElementType,
  irsConnoisseur: IrsConnoisseur as ElementType,
  leverageCrowbar: LeverageCrowbar as ElementType,
  fixedTrader: FixedTrader as ElementType,
  sushiRoll: SushiRoll as ElementType,
  topTrader: TopTrader as ElementType,
  beWaterMyFriend: BeWaterMyFriend as ElementType,
  rainMaker: Rainmaker as ElementType,
  waterHose: WaterHose as ElementType,
  moneyMoneyMoney: MoneyMoneyMoney as ElementType,
  lpoor: Lpoor as ElementType,
  yikes: Yikes as ElementType,
  maxBidding: MaxBidding as ElementType,
  okBoomer: OkBoomer as ElementType,
  dryIce: DryIce as ElementType,
  mellowLpVault: MellowLpVault as ElementType,
  // badges season OG
  ogDegenStuff: OGDegenStuff as ElementType,
  ogDeltaDegen: OGDeltaDegen as ElementType,
  ogIrsConnoisseur: OGIrsConnoisseur as ElementType,
  ogLeverageCrowbar: OGLeverageCrowbar as ElementType,
  ogFixedTrader: OGFixedTrader as ElementType,
  ogSushiRoll: OGSushiRoll as ElementType,
  ogTopTrader: OGTopTrader as ElementType,
  ogBeWaterMyFriend: OGBeWaterMyFriend as ElementType,
  ogRainMaker: OGRainmaker as ElementType,
  ogWaterHose: OGWaterHose as ElementType,
  ogMoneyMoneyMoney: OGMoneyMoneyMoney as ElementType,
  ogLpoor: OGLpoor as ElementType,
  ogYikes: OGYikes as ElementType,
  ogMaxBidding: OGMaxBidding as ElementType,
  ogOkBoomer: OGOkBoomer as ElementType,
  ogDryIce: OGDryIce as ElementType,
  // non-programmatic badges
  senatorz: Senatorz as ElementType,
  diplomatz: Diplomatz as ElementType,
  governorz: Governorz as ElementType,
  notionalInfluencer: NotionalInfluencer as ElementType,
  referror: Referror as ElementType,
  whaleWhisperer: WhaleWhisperer as ElementType,
};
