import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GetNFT from "./pages/GetNFT";
import GetToken from "./pages/GetToken";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/get-nft" />} />
        <Route path="/get-nft" element={<GetNFT />} />
        <Route path="/get-token" element={<GetToken />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
