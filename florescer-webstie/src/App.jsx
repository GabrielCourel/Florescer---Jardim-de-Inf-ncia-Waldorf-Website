import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Escola from "./pages/Escola.jsx"
import Ensino from "./pages/Ensino.jsx"
import Festas from "./pages/Festas.jsx"
import Contato from "./pages/Contato.jsx"
import { Routes, Route, Navigate } from 'react-router-dom'

function ScrollToTop()
{
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return;

        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname, hash]);

    return null;
}

function App() 
{
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>

            <ScrollToTop />

            <Navbar></Navbar>

                <main className='flex-1 w-full'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/escola' element={<Escola/>}/>
                        <Route path='/ensino' element={<Ensino/>}/>
                        <Route path='/festas' element={<Festas/>}/>
                        <Route path='/contato' element={<Contato/>}/>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>

            <Footer></Footer>

        </div>
    )
}

export default App
