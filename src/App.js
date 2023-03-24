import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCampaigns from './pages/AllCampaigns';
import NotFound from './pages/NotFound';
import EBoardMembers from './pages/EBoardMembers';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/our-team" element={<EBoardMembers />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
