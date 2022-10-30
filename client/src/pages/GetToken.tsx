import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import ERC721 from "../utils/abi/erc721.json";

import CSIC_LOGO from "../assets/temp/temp_CSIC_Logo.png";
import { postToken } from "../utils/api";

const smartContract = "0x64100403B2dbDB624a225c44D712086D67f01Ec3";

const GetNFT = () => {
  // const [provider, setProvider] = useState({});
  // const [signer, setSigner] = useState({});
  const [walletAddress, setWalletAddress] = useState("");
  // const [currentBalance, setCurrentBalance] = useState(0);
  // const [chainId, setChainId] = useState(undefined);
  const [isConnected, setIsConnected] = useState(false);
  const [currentBalanceNFT, setCurrentBalanceNFT] = useState(0);

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
    // setSigner(signer);

    return signer;
  };

  // 지갑 정보 조회
  const getWalletData = async (signer: any) => {
    const result = await Promise.all([
      signer.getAddress(),
      signer.getBalance(),
      signer.getChainId(),
    ]);
    setWalletAddress(result[0]);
    // setCurrentBalance(Number(ethers.utils.formatEther(result[1])));
    // setChainId(result[2]);
    const erc721Contract = new ethers.Contract(
      smartContract,
      ERC721.abi,
      signer
    );
    const currentBalanceNFT = await erc721Contract.balanceOf(result[0]);

    setCurrentBalanceNFT(Number(currentBalanceNFT));
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

  // 토큰 발행
  const getTokenHandler = async () => {
    try {
      if (currentBalanceNFT >= 1) {
        const promise = new Promise((resolve, reject) => {
          postToken({ walletAddress: walletAddress })
            .then((res) => {
              const { data } = res;
              let comment = `You got ${data.tokenInfo.rewardAmount} Token!!!`;
              comment += "\nYour Transaction : ";
              data.txList.forEach(
                (element: String) => (comment += "\n" + element)
              );
              alert(comment);
              resolve("Success!");
            })
            .catch((e) => {
              reject(e);
              alert(e);
            });
        });
        promise
          .then((values) => {
            console.log(values);
          })
          .catch((e) => console.log(e));
      }
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
          Your NFT
        </div>
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          {currentBalanceNFT} NFT
        </div>

        <div style={{ fontSize: "15px", marginTop: "20px" }}>
          <span style={{ fontWeight: "bold" }}>1 Tx </span>
          <span>for </span>
          <span style={{ fontWeight: "bold" }}>1 Token </span>
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
          onClick={() => getTokenHandler()}
        >
          GET TOKEN
        </button>
      </div>
    </>
  );
};

export default GetNFT;
