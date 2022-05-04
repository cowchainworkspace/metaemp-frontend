import {
  connect,
  ConnectConfig,
  keyStores,
  Near,
  WalletConnection,
} from 'near-api-js';

export const getConnections = async (): Promise<{
  near: Near;
  walletConnection: WalletConnection;
}> => {
  //eslint-disable-next-line
  //@ts-ignore
  const config: ConnectConfig = {
    networkId: 'testnet',
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: 'https://rpc.testnet.near.org',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
  };

  const near = await connect(config);
  //eslint-disable-next-line
  //@ts-ignore
  const walletConnection = new WalletConnection(near);

  return { near, walletConnection };
};
