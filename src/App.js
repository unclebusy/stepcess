import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
