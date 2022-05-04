import BigNumber from 'bignumber.js';

export const getDividedBalance = (balance: string): BigNumber => {
  return new BigNumber(balance).div(10 ** 24);
};
