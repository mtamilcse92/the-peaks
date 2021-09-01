import { useState } from "react";
import { useNetworkStatus } from "react-network-status";

const useNetwork = () => {
  const [networkStatus, setNetworkStatus] = useState(true);
  const config = {
    timeout: 5000,
    interval: 1000,
  };

  useNetworkStatus((networkStatusUpdate) => {
    setNetworkStatus(networkStatusUpdate);
  }, config);
  return { networkStatus }
};

export default useNetwork;
