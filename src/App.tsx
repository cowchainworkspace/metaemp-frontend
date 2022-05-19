import React from 'react';
import { Buffer } from 'buffer';
import { Auth } from 'views/Auth';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Explore } from 'components/Explore/Explore';
import './App.scss';

global.Buffer = Buffer;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Auth />
          <Explore />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
