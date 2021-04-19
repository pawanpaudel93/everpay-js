import { isString } from 'lodash'
import Everpay from '../src/index'

const everpay = new Everpay({
  debug: true
})

export default async (): Promise<void> => {
  const info = await everpay.info()
  console.log('info', info)
}

test('everpey info got correct', async () => {
  return await everpay.info().then(info => {
    const { ethLocker, owner, txVersion, ethChainID, feeRecipient, tokenList } = info
    for (const item of [ethLocker, owner, txVersion, feeRecipient]) {
      expect(isString(item)).toBe(true)
    }
    expect(+ethChainID).toBeGreaterThanOrEqual(0)
    expect(tokenList.length).toBeGreaterThan(0)
    expect(tokenList.find(t => t.symbol.toLowerCase() === 'eth')).toBeTruthy()
  })
})