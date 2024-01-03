import { Notify } from "@/components/notification";
import detectEthereumProvider from "@metamask/detect-provider";
import { useCallback, useEffect } from "react";
import Web3 from "web3";
import { useMuyiEthStore } from "./useStore";

export const useWeb3 = () => {
  const state = useMuyiEthStore((state) => state);
  const connectToMetamask = async () => {
    if (state.provider) {
      try {
        console.log("aaaaa")
       const account =  await state.provider?.request({ method: "eth_requestAccounts" });
       state.setAllState({
        ...state,
        account
      });
      } catch (error) {
        Notify(
          "Cannot connect to Metamask, try to reload your browser please.",
          false
        );
      }
    }
  };
  const loadMetamask = useCallback(async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
      const web3 = new Web3(provider as any);
      state.setAllState({
        ...state,
        provider,
        web3,
        contract: null,
        isInitialized: true,
        isLoading: false,
      });
    } else {
      state.setAllState({
        ...state,
        isInitialized: true,
        isLoading: false,
      });
    }
  }, []);
  useEffect(() => {
    loadMetamask();
  }, []);

  return { loadMetamask, ...state, connectToMetamask };
};
