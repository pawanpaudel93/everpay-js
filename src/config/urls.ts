export const getEverpayHost = (debug?: boolean): string => {
  return debug === true ? 'https://api-kovan.everpay.io' : 'https://api.everpay.io'
}