
<div align="center">
    <h1><b>CSIS : Crypto Summer Is Coming ...</b></h1>
    <img src="./image/CSIC.png" width="500px"/>
    <br />
    <br />
</div>

<div>
    <span style="font-size:25px"><b>[ Intoduce ]</b></span>
    <ul>
        <li>프로젝트 이름 : Crypto Summer Is Coming...</li>
        <li>프로젝트 목적 : </li>
        <ol>
            <li>dApp 프로젝트 구현.</li>
            <li>Smart Contract 이해.</li>
            <li>ERC-721 기반 CSIC NFT 발급.</li>
            <li>ERC-20 기반 BSUN Token 발급.</li>
            <li>Uniswap을 통한 BSUN Token과 Klaytn 교환.</li>
        </ol>
        <li>프로젝트 구현 :</li>
        <ul>
            <li>Client : React, Typescript, Ethers</li>
            <li>Server : NodeJS, Express, MySQL</li>
            <li>Blockchain : Solidity(ERC-20, ERC-721)</li>
        </ul>
    </ul>
</div>

<div>
    <br />
    <div style="font-size:25px"><b>[ Member ]</b></div>
    <ul>
        <li>팀장 : 황수민 <a href="https://github.com/smhwang0109"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a></li>
        <li>팀원 : 김기쁨 <a href="https://github.com/joykim93"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a></li>
        <li>팀원 : 민성한 <a href="https://github.com/8ugust"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a></li>
    </ul>
    <br />
</div>

<div>
    <hr>
    <div style="font-size:25px"><b>[ Workflow ]</b></div>
    <div>
        <h3><b>1. User가 Minting Page에서 Klaytn으로 NFT(CSIC) 구매.</b></h3>
        <img src="./image/workflow_1.png" width="600px" />
        <br /><br />
    </div>
    <div>
        <h3><b>2. 구매한 NFT(CSIC) 인증.</b></h3>
        <img src="./image/workflow_2_1.png" width="600px" />
        <br /><br />
    </div>
    <div>
        <h3><b>3. Uniswap Transaction 조회 후 BSUN Token 발급.</b></h3>
        <img src="./image/workflow_2_2.png" width="600px" />
        <br /><br />
    </div>
    <div>
        <h3><b>4. Dex에서 BSUN Token과 Klaytn 교환.</b></h3>
        <img src="./image/workflow_3.png" width="600px" />
        <br /><br />
    </div>
    <br />
</div>

<div>
    <hr>
    <div style="font-size:25px"><b>[ Function Description ]</b></div>
    <ul>
        <li><b>Explorer</b></li>
        <ul>
            <li>메타마스크 연동.</li>
            <li>Klaytn 보유량 확인.</li>
            <li>메타마스크 설치 페이지 Redirect.</li>
        </ul><br />
        <li><b>NFT(CSIC)</b></li>
        <ul>
            <li>ERC-721 Solidity 배포 및 CSIC NFT 발급.</li>
            <li>Klaytn 잔액 부족 시 구매 페이지 Redirect.</li>
        </ul><br />
        <li><b>Token(BSUN)</b></li>
        <ul>
            <li>CSIC NFT 보유량 확인.</li>
            <li>Uniswap Transaction 확인 (최신 1,000개).</li>
            <li>Transaction Valid 확인 및 발급량 설정.</li>
            <li>ERC-20 Solidity 배포 및 BSUN Token 발급.</li>
        </ul><br />
        <li><b>Uniswap</b></li>
        <ul>
            <li>BSUN Token 보유량 확인.</li>
            <li>BSUN 및 Klaytn Uniswap 진행.</li>
        </ul>
    </ul>
    <br />
</div>

<div>
    <hr />
    <div style="font-size:25px"><b>[ Screenshot ]</b></div>
    <div>
        <h3><b>■ NFT(CSIC) Minting & Publish To User</b></h3>
        <div align="center">
            <img src="./image/screenshot_1.png" width="300px">
            <img src="./image/screenshot_2.png" width="252px">
        </div>
        <br /><br />
    </dib>
    <div>
        <h3><b>■ Token(BSUN) Minting & Publish To User</b></h3>
        <div align="center">    
            <img src="./image/screenshot_3.png" width="400px">
        </div>
        <div align="center">
            <img src="./image/screenshot_4.png" width="400px">
        </div>
        <br /><br />
    </dib>
</div>
