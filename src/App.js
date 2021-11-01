import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddProducts from './pages/AddProducts/AddProducts';
import Banner from './pages/Home/Banner/Banner';
import Delivery from './pages/Home/Delivery/Delivery';
import Details from './pages/Home/Details/Details';
import Footer from './pages/Home/Footer/Footer';

import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Services from './pages/Home/Services/Services';
import LogIn from './pages/LogIn/LogIn';
import ManageOrder from './pages/Order/ManageOrder/ManageOrder';
import MyOrder from './pages/Order/MyOrder/MyOrder';
// import Login from './pages/Ragister/Login/Login';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/banner">
              <Banner></Banner>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/delivery">
              <Delivery></Delivery>
            </Route>
            <Route path="/details/:serviceId">
              <Details></Details>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
