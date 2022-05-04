import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { config } from 'config';
import { getDividedBalance } from 'utils';
import { useAppSelector } from 'store';
import { connectorsSelector } from 'store/Selectors';
import { getConnections } from './authUtils';
import { useActions } from 'store/useActions';

export const NearLogin: React.FC = () => {
  const { near, walletConnection } = useAppSelector(connectorsSelector);
  const { setConnections } = useActions();
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  const connectUser = async () => {
    await walletConnection?.requestSignIn(
      config.near.contract // contract requesting access
    );
  };

  const signOut = () => {
    walletConnection?.signOut();
    setAccount(null);
  };

  const getBalance = async () => {
    const balance = walletConnection
      ? getDividedBalance((await walletConnection.account().state()).amount)
      : 0;
    setBalance(+balance.toFixed(4));
  };

  useEffect(() => {
    getConnections().then(({ near, walletConnection }) => {
      setConnections({ near, walletConnection });
    });
  }, []);

  useEffect(() => {
    if (walletConnection?.isSignedIn()) {
      setAccount(walletConnection.getAccountId());
      account &&
        near
          ?.account(account)
          .then((acc) => console.log({ near: acc.getAccountDetails() }));
    }
  }, [walletConnection]);

  return (
    <>
      <h1>NEAR</h1>
      <Grid container direction="column">
        {walletConnection?.isSignedIn() ? (
          <>
            <p onClick={getBalance}>{account}</p>
            {balance ? (
              <p>Balance: {balance} NEAR</p>
            ) : (
              <Button onClick={getBalance}>Get balance</Button>
            )}
            <Button onClick={signOut} variant="contained" sx={{ marginTop: 5 }}>
              Signout
            </Button>
          </>
        ) : (
          <Button onClick={connectUser}> Connect Near </Button>
        )}
      </Grid>
    </>
  );
};
