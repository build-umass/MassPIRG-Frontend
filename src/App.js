import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllCampaigns from './pages/AllCampaigns';
import NotFound from './pages/NotFound';
import EBoardMembers from './pages/EBoardMembers';
import AddMemberForm from './pages/AddMemberForm';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Campaign from './pages/Campaign';
import Campaign2 from './pages/Campaign2';
import Campaign3 from './pages/Campaign3';

import { RequireAuth } from 'react-auth-kit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditMemberForm from './pages/EditMemberForm';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<AllCampaigns />} />
        <Route path="/our-team" element={<EBoardMembers />} />
        <Route path="/our-team/new" element={
          < RequireAuth loginPath={'/login'}>
            <AddMemberForm />
          </RequireAuth>
        } />
        <Route path="/our-team/edit/:id" element={
          < RequireAuth loginPath={'/login'}>
            <EditMemberForm />
          </RequireAuth>
        } />
        <Route path="/admin/register" element={
          < RequireAuth loginPath={'/login'}>
            <RegisterPage />
          </RequireAuth>
        } />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/campaign1" element={<Campaign />} />
        <Route path="/campaign2" element={<Campaign2 />} />
        <Route path="/campaign3" element={<Campaign3 />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </Layout>
  );
}

export default App;
