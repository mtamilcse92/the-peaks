import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css';
import Router from './Router';
import Header from './components/Header';
import Wrapper from './components/common/Wrapper';
import ErrorBoundary from './components/common/ErrorBoundary';
import setUpAxios from './utils/axiosSetup';

const queryClient = new QueryClient()

setUpAxios()

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Header />
          <Router />
        </Wrapper>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
