import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import ERC721 from "../utils/abi/erc721.json";

import CSIC_LOGO from "../assets/temp/temp_CSIC_Logo.png";

const smartContract = "0x64100403B2dbDB624a225c44D712086D67f01Ec3";

const GetNFT = () => {
  // NFT 가격
  const price = 1;

  // const [provider, setProvider] = useState({});
  const [signer, setSigner] = useState({});
  // const [walletAddress, setWalletAddress] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);
  // const [chainId, setChainId] = useState(undefined);
  const [isConnected, setIsConnected] = useState(false);

  // MetaMask 데이터 조회
  const getMetamaskData = useCallback(async () => {
    const _provider = await getProvider();
    const _signer = await getSigner(_provider);
    await getWalletData(_signer);
  }, []);

  // provider
  const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    // setProvider(provider);

    return provider;
  };

  // signer
  const getSigner = async (provider: any) => {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer);

    return signer;
  };

  // 지갑 정보 조회
  const getWalletData = async (signer: any) => {
    const result = await Promise.all([
      signer.getAddress(),
      signer.getBalance(),
      signer.getChainId(),
    ]);
    // setWalletAddress(result[0]);
    setCurrentBalance(Number(ethers.utils.formatEther(result[1])));
    // setChainId(result[2]);
  };

  // 지갑 연결
  const connectWallet = useCallback(async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await getMetamaskData();

        setIsConnected(true);
      } else {
        alert("please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  }, [getMetamaskData]);

  // NFT 민팅
  const mintHandler = async (_signer: any) => {
    try {
      const erc721Contract = new ethers.Contract(
        smartContract,
        ERC721.abi,
        _signer
      );

      const tokenURI = "www.naver.com";

      await erc721Contract.mintNFT(tokenURI, {
        value: ethers.utils.parseEther(price.toString()),
      });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (isConnected === false) {
      connectWallet();
    }
  }, [isConnected, connectWallet]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          Your Balance
        </div>
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          {currentBalance.toFixed(2)} KLAY
        </div>

        <div style={{ fontSize: "15px", marginTop: "20px" }}>
          <span style={{ fontWeight: "bold" }}>{price} KLAY </span>
          <span>for </span>
          <span style={{ fontWeight: "bold" }}>1 NFT </span>
          <span>(Excluding gas fees)</span>
        </div>

        <div style={{ width: "350px", height: "350px", marginTop: "20px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            title="CSIC Logo"
            src={CSIC_LOGO}
            alt="CSIC Logo"
          />
        </div>

        <button
          style={{
            border: "none",
            borderRadius: "10px",
            backgroundColor: "orange",
            color: "white",
            fontSize: "30px",
            cursor: "pointer",
            marginTop: "20px",
            padding: "20px",
          }}
          onClick={() => mintHandler(signer)}
        >
          MINTING
        </button>
      </div>
    </>
  );
};

export default GetNFT;
