import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar, Sidebar, Footer} from './components'
import {About, Cart, Checkout, Error, Home, Products, SingleProduct} from "./pages";

function App() {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Routes>

                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
                <Route
                    path="/cart"
                    element={<Cart/>}
                />
                <Route
                    path="/products"
                    element={<Products/>}
                />
                <Route
                    path="/products/:id"
                    element={<SingleProduct/>}
                />
                <Route
                    path="/checkout"
                    element={<Checkout/>}
                />
                <Route
                    path="*"
                    element={<Error/>}
                />


            </Routes>
            <Footer/>
        </>

    )
}

export default App
