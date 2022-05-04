import React from 'react';
import { Buffer } from 'buffer';
import { Auth } from 'views/Auth';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
global.Buffer = Buffer;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Auth />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
