import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Router from "./Router";
import Header from "./components/Header";
import PersistContextProvider from './context/persistContext';
import ErrorBoundary from "./components/common/ErrorBoundary";
import Footer from "./components/common/Footer";
import setUpAxios from "./utils/axiosSetup";

const queryClient = new QueryClient();

setUpAxios();

function App() {
  
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
