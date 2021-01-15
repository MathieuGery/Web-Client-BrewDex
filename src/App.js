import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import {focusHandling} from 'cruip-js-toolkit';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import {ToastContainer} from "react-toastify";
import NotFound from "./pages/NotFound";
import HomeUser from "./pages/HomeUser";
import {useRecoilState} from "recoil";
import connectedState from "./helpers/connected";

function App() {

    const location = useLocation();
    const [connected] = useRecoilState(connectedState);

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
        focusHandling('outline');
    }, [location.pathname]); // triggered on route change

    return (
        <>
            <ToastContainer/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/home">
                    {connected ? (
                        <HomeUser/>
                    ) : (
                        <NotFound/>
                    )}
                </Route>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/reset-password">
                    <ResetPassword/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
