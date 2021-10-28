import React from 'react';

import { AppContextProvider } from './context/AppContext';
import Layout from './components/Layout';
import Quiz from './containers/Quiz';

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <Quiz />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
