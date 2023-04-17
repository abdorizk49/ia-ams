import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageAMS from './pages/HomePageAMS';
import LoginPageAMS from './pages/LoginPageAMS';
import NavbarAMS from './components/NavbarAMS';
import RegisterPageAMS from './pages/RegisterPageAMS';
import AdminPage from './pages/AdminPage';
import Accounts from './components/Accounts';
import TransactionPage from './pages/TransactionPage';
import ManagesPage from './pages/ManagesPage';
import SellerPage from './pages/SellerPage';
import EditAuction from './components/EditAuction';
import AddAuction from './components/AddAuction';
// import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <NavbarAMS />
      <Routes>
        <Route path='/' element={<HomePageAMS />}></Route>
        <Route path='login' element={<LoginPageAMS />}></Route>
        <Route path='register' element={<RegisterPageAMS />}></Route>
        <Route path='admin' element={<Outlet />}>
          <Route path='' element={<AdminPage />}></Route>
          <Route path='accounts' element={<Accounts />}></Route>
          <Route path='transactions' element={<TransactionPage />} ></Route>
          <Route path='manages' element={<ManagesPage />} ></Route>
        </Route>
        <Route path='seller' element={<Outlet />}>
          <Route path='' element={<SellerPage />}></Route>
          <Route path='edit/:auctionId' element={<EditAuction />}></Route>
          <Route path='addAuction' element={<AddAuction />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;