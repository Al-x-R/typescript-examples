// Core
// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Other
import { store } from './store/store';

const App: FC = () => (
  <Provider store={store} />
);

export default App;
