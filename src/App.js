import './App.css';
import { Route, Routes } from 'react-router';

import Sidebar from '../src/Components/SideBar/SideBar'; 
import Footer from '../src/Components/Footer/Footer';
import { Home } from '../src/Pages/HomePage/HomePage';
import UpdateProduct from './Pages/ProductUpdate/ProductUpdate';
import ProductDetail from './Pages/ProductList/ProductDetails/ProductDetails';
import ProductList from './Pages/ProductList/ProductList';
import ProductCreate from './Pages/ProductCreate/ProductCreate';
import Contact from './Components/Contact/Contact';
import LogIn from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import UserList from './Pages/UserList/UserList';
import UserDetail from './Pages/UserList/UserDetail';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <div className="main-content"> 
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/signUp' exact element={<SignUp />} />
          <Route path='/logIn' exact element={<LogIn />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/productCreate' exact element={<ProductCreate />} />
          <Route path='/productList' exact element={<ProductList />} />
          <Route path="/product/:id" exact element={<ProductDetail />} />
          <Route path="/product/:id/update" exact element={<UpdateProduct />} />
          <Route path="/userList" exact element={<UserList />} />
          <Route path="/user/:id" exact element={<UserDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
