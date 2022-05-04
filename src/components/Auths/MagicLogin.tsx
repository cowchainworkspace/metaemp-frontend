import React, { useCallback, useEffect } from 'react';
import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { NearExtension } from '@magic-ext/near';
import { config } from 'config';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';
import { connectorsSelector } from 'store/Selectors';

export const MagicLogin: React.FC = () => {
  const { near } = useAppSelector(connectorsSelector);
  const navigate = useNavigate();
  const magic = new Magic(config.magicApiKey, {
    extensions: [
      new NearExtension({
        rpcUrl: '',
      }),
      new OAuthExtension(),
    ],
  });

  const login = useCallback(async () => {
    try {
      await magic.auth.loginWithMagicLink({
        email: 'oleh.shutiak@cowchain.io',
      });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then((user) => {
          console.log(user);
          if (user.publicAddress) {
            console.log('fetch magic account');
            near?.account(user.publicAddress).then(console.log);
          }
        });
      } else {
        // magic.oauth.getRedirectResult().then((result) => {
        //   console.log(result);
        // });
      }
    });
  }, []);

  return (
    <Grid container>
      <Button onClick={login}> Connect with Magic </Button>
    </Grid>
  );
};
