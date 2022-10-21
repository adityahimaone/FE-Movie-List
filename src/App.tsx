import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RoutesPage from './routes';

import { store, persistor } from '@/store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
