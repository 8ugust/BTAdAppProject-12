import React, { useEffect, useState } from "react";
import { providers, Wallet, utils, Contract, ethers, } from "ethers";
import ERC721 from '../utils/abi/erc721.json';

import CSIC_LOGO from '../assets/temp/temp_CSIC_Logo.png'

const BigNumber = require("bignumber.js");
const smartContract = "0x64100403B2dbDB624a225c44D712086D67f01Ec3";

let isExecuted = false;

const GetNFT = () => {

  // NFT 가격
  const price = 10;

  const [balance, setBalance] = useState("0");
  const [balanceForNFT, setBalanceForNFT] = useState("0");
  const [walletAddress, setWalletAddress] = useState("");

  // 연결된 지갑의 주소
  const getWalletAddress = async () => {
    try {
        const provider = new providers.Web3Provider(window.ethereum); 
        // 메타마스크에 선택된 지갑으로 트랜잭션 서명을 함
        const signer = provider.getSigner(); 
        const walletAddress = await signer.getAddress();

        setWalletAddress(walletAddress);
        getBalance(walletAddress);
        getBalanceForNFT();
    }
    catch (err) {
      alert(err);
    }
  }


  // 연결된 지갑의 잔고 조회
  const getBalance = async (address: string) => {
    try {
        const provider = new providers.Web3Provider(window.ethereum);
        let balance = await provider.getBalance(address);
        let convertedBalance = ethers.utils.formatEther(balance);
        setBalance(convertedBalance);
    }
    catch (err) {
      alert(err);
    }
  }

  // 연결된 지갑의 NFT 보유량 조회
  const getBalanceForNFT = async () => {
    try {
        const provider = new providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); // 메타마스크에 선택된 지갑으로 트랜잭션 서명을 함
        const address = await signer.getAddress();
        const erc721Contract = new ethers.Contract(smartContract, ERC721.abi, signer);
        let result = await erc721Contract.balanceOf(address);

        setBalanceForNFT(result.toString());
    }
    catch (err) {
      alert(err);
    }
  }

  // NFT 민팅
  const mintHandler = async () => {
    try {
        const provider = new providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(); // 메타마스크에 선택된 지갑으로 트랜잭션 서명을 함
        const walletAddress = await signer.getAddress();    
        const erc721Contract = new ethers.Contract(smartContract, ERC721.abi, signer);    

        let tokenURI = "www.naver.com";

        let result = await erc721Contract.mintNFT(tokenURI, {
          value: ethers.utils.parseEther((price).toString())
        });
    }
    catch (err) {
      alert(err);
    }
  }

  const walletConnectHandler = async () => {
    try {
        isExecuted = true;
        if(typeof window.ethereum !== 'undefined') await window.ethereum.send('eth_requestAccounts');
      }
    catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    if(isExecuted === false) walletConnectHandler();
  }, []);

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      {/* <div style={{ fontSize: "40px", fontWeight: "bold"}}>
        Your Balance
      </div>
      <div style={{ fontSize: "30px"}}>
        {Number(balance).toFixed(2)} KLAY | {balanceForNFT} NFT
      </div> */}

      <div style={{ fontSize: "80px", fontWeight: "bold" }}>
        {price} KLAY FOR 1 NFT
      </div>
      

      <div style={{ width: "350px", height: "350px"}}>
        <img style={{width: "100%", height: "100%"}} title="CSIC Logo" src={CSIC_LOGO}/>
      </div>

      {/* <div style={{ fontSize: "40px", fontWeight: "bold" }}>
        10 KLAY For 1 NFT
      </div> */}

      {/* <div 
        style={{ fontSize: "20px", border: "2px solid blue", cursor: "pointer"}}
        onClick={() => mintHandler()}
      >
        MINTING
      </div> */}
      <button
        style={{ border: "none", borderRadius: "20px", backgroundColor: "orange", color: "white", width: "300px", height: "120px", fontSize: "45px", cursor: "pointer"}}
        onClick={() => mintHandler()}
      >
        MINTING
      </button>
    </div>
    </>
  )
};

export default GetNFT;
