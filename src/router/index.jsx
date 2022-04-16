import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "../pages/Main/Layout";
import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import User from "../pages/Main/User";
import Shop from "../pages/Main/Shop";
import City from "../pages/City"
import Search from "../pages/Search";
import BottomNav from "../components/BottomNav";
import Details from "../pages/Details";
import Login from "../pages/Login";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='*'
                    element={
                        <Layout>
                            <BottomNav />
                            <Routes>
                                {/* component->element {ele} ->{<ele/>}*/}
                                <Route exact='true' path='*' element={<Home />}></Route>
                                <Route path='/service' element={<LifeService />}></Route>
                                <Route path='/user' element={<User />}></Route>
                                <Route path='/shop' element={<Shop />}></Route>

                            </Routes>
                        </Layout>
                    } />
                <Route path='/city' element={<City />}></Route>
                <Route path='/search/:keywords' element={<Search />}></Route>
                <Route path='/details/:id' element={<Details />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>

        </Router >
    )
}

export default AppRouter