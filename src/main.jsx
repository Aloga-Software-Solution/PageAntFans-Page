import './global.css';
import 'boxicons';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CarruselPages from './pages/CarruselPages/CarruselPages';
import About from './pages/AboutUs/About';
import Download from './pages/Downloads/Downloads';
import News from './pages/News/News';
import Subscribers from './pages/Subscribers/Subscribers';
import DownloadApp from './pages/downloadApp/downloadapp';
import JoinUs from './pages/JoinUs/JoinUs';
import Layout from './components/Layout';
import ScrollToTop from './components/Scroll';

const App = () => {
    return (
        <Router
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true
            }}>
            <Layout>
                <ScrollToTop />
                <Routes>
                    {/* Redirección de la raíz a la página inicial del carrusel */}
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    

                    {/* Rutas del carrusel */}
                    <Route path="/home" element={<CarruselPages /> } />
                    <Route path="/queens" element={<CarruselPages />} />
                    <Route path="/fans" element={<CarruselPages />} />
                    <Route path="/partners" element={<CarruselPages />} />

                    {/* Otras páginas de la aplicación */}
                    <Route path="/about" element={<About />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/subscribers" element={<Subscribers />} />
                    <Route path="/download/downloadapp" element={<DownloadApp />} />
                    <Route path="/joinus" element={<JoinUs />} />
                </Routes>
            </Layout>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
