import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GetNFT from './pages/GetNFT';
import GetToken from './pages/GetToken';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-nft" element={<GetNFT />} />
        <Route path="/get-token" element={<GetToken />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
