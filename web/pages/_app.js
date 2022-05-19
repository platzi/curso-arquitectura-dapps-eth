import "../styles/globals.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function MyApp({ Component, pageProps }) {
  const [walletAccount, setWalletAccount] = useState("");

  const checkIfMetaMaskIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Check if Metamask is installed.");
    } else {
      console.log("Check if Metamask is installed.");
    }
  };

  useEffect(() => {
    checkIfMetaMaskIsConnected();
  }, []);

  return (
    <div>
      <main>
        <nav className="border-b p-6">
          <p className="text-4xl font-bold">Platzi Eaters</p>
          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-4 text-pink-500">Inicio</a>
            </Link>
            <Link href="/add-dish">
              <a className="mr-6 text-pink-500">Agregar platillos</a>
            </Link>
            <Link href="/my-dishes">
              <a className="mr-6 text-pink-500">Mis platillos</a>
            </Link>
          </div>
        </nav>
      </main>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
