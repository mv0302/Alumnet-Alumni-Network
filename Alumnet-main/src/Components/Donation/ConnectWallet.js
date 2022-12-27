import React from "react";
import Navbar from "../Navbar/Navbar";
import { NetworkErrorMessage } from "./NetworkErrorMessage";
import "./ConnectWallet.css";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 text-center">
            {/* Metamask network should be set to Localhost:8545. */}
            {networkError && (
              <NetworkErrorMessage
                message={networkError}
                dismiss={dismiss}
              />
            )}
          </div>
          <div className="connect">
            <h1>Please connect to your wallet.</h1>
            <button
              className="btn10"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
