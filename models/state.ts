import Web3 from "web3";

export interface State {
  provider?: any;
  web3?: Web3;
  contract?: any;
  accounts?: string[];
  account?: string;
  isInitialized?: boolean;
  isLoading?: boolean;
  setState: (key: keyof State, value: any) => void;
  setAllState: (state: State) => void;
}
