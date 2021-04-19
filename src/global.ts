import { Signer } from 'ethers'
import { TransactionResponse } from '@ethersproject/abstract-provider'

export type ChainType = 'ethereum'

export interface Config {
  debug?: boolean
  account: string
  connectedSigner: Signer
}

export interface Token {
  id: string
  symbol: string
  decimals: number
  totalSupply: number
  chainType: ChainType
}

export interface EverpayInfo {
  ethLocker: string
  owner: string
  tokenList: Token[]
}

export interface BalanceParams {
  chainType?: ChainType
  symbol?: string
  account?: string
}

export interface DepositParams {
  chainType?: ChainType
  symbol?: string
  amount: number
}

export abstract class EverpayBase {
  abstract info (): Promise<EverpayInfo>
  abstract balance (params?: BalanceParams): Promise<number>
  abstract deposit (params: DepositParams): Promise<TransactionResponse>
  // withdraw
  // transfer
}