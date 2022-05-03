import React from 'react';
import './App.css';
// import { MaterialButton } from 'components/MaterialButton';
// import { config } from 'config';
import { Magic } from 'magic-sdk';
import { NearExtension } from '@magic-ext/near';
import { utils } from 'near-api-js';
import { Button } from '@mui/material';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App() {
  const magic = new Magic('pk_live_CAD2C105D5FA6DE8', {
    extensions: [
      new NearExtension({
        rpcUrl: 'https://rpc.testnet.near.org',
      }),
    ],
  });

  const test = async () => {
    const redirectURI = `${window.location.origin}/callback`;
    try {
      await magic.auth.loginWithMagicLink({
        email: 'andrii.hromadetskyi@cowchain.io',
        redirectURI,
      });
      const user = await magic.user.getMetadata();
      const publicKeyString = await magic.near.getPublicKey();

      const publicKey = utils.PublicKey.fromString(publicKeyString);

      console.log({ user, publicKeyString, publicKey });
    } catch {
      // Handle errors if required!
    }
  };

  return (
    <div className="App">
      <Button onClick={test}>TEST</Button>
    </div>
  );
}

export default App;
