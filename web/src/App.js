import React from 'react';
import NavBar from '../src/components/NavBar'
import Home from './components/Home';
import Login from './components/Login'
import Register from "./components/Register";
import CommercantPage from "./views/Commerçants/CommercantPage";
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";

function App() {
    return (
        <Router>
            <NavBar/>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/login"} component={Login}></Route>
            <Route exact path={"/register"} component={Register}></Route>
            <Route exact path={"/shopper"} component={CommercantPage}></Route>
            <Route exact path={"/testlogin"} component={LoginPage}></Route>
            <Route exact path={"/testprofile"} component={ProfilePage}></Route>
        </Router>
    )
}

export default App
