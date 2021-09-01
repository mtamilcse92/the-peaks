import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Router from "./Router";
import Header from "./components/Header";
import PersistContextProvider from './context/persistContext';
import ErrorBoundary from "./components/common/ErrorBoundary";
import Footer from "./components/common/Footer";
import setUpAxios from "./utils/axiosSetup";
import useNetwork from './hooks/network';

const queryClient = new QueryClient();

setUpAxios();

function App() {
  const { networkStatus } = useNetwork()

  React.useEffect(() => {
    if(networkStatus) {
      queryClient.invalidateQueries();
    }
  }, [networkStatus]);
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
      <PersistContextProvider>
        <Router header={<Header />} footer={<Footer />} />
      </PersistContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
