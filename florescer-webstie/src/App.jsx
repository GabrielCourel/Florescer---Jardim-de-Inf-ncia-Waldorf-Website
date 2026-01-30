import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Escola from "./pages/Escola.jsx"
import Ensino from "./pages/Ensino.jsx"
import Festas from "./pages/Festas.jsx"
import Contato from "./pages/Contato.jsx"
import { Routes, Route, Navigate } from 'react-router-dom'

function App() 
{
    return (
        <>
            <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/escola' element={<Escola/>}/>
                    <Route path='/ensino' element={<Ensino/>}/>
                    <Route path='/festas' element={<Festas/>}/>
                    <Route path='/contato' element={<Contato/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            <Footer></Footer>
        </>
    )
}

export default App
