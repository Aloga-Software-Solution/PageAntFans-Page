import './global.css';
import 'boxicons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import About from './pages/AboutUs/About';
import Download from './pages/Downloads/Downloads';
import Fans from './pages/Fans/Fans';
import Home from './pages/Home/Home';
import Opening from './pages/Opening/Opening';
import Layout from './components/Layout';
import News from './pages/News/News';
import Partners from './pages/Partners/Partners';
import Subscribers from './pages/Subscribers/Subscribers';
import DownloadApp from './pages/downloadApp/downloadapp';
import JoinUs from './pages/JoinUs/JoinUs';

const App = () => {
    return (
        <Router
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true
            }}>
            <Layout>
                <Routes>
                    {/* <Route path="/" element={<Layout />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="opening" element={<Opening />} />
                    <Route path="fans" element={<Fans />} />
                    <Route path="about" element={<About />} />
                    <Route path="download" element={<Download />} />
                    <Route path="news" element={<News />} />
                    <Route path="partners" element={<Partners />} />
                    <Route path="subscribers" element={<Subscribers />} />
                    <Route path="download/downloadapp" element={<DownloadApp />} />
                    <Route path="joinus" element={<JoinUs />} />
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
