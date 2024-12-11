import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logoPageantFans from '../assets/Icons/PegantLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function NavPc() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const dropdownMenuRef = useRef(null);
    const topBarRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1100) {
                dropdownMenuRef.current.style.display = "none";
                topBarRef.current.style.height = "auto";
                topBarRef.current.style.background = "rgba(0, 0, 0, 0.35)";
                menuButtonRef.current.innerHTML = `<box-icon name="menu" color="#ffffff" id="botonmenu" style="width: 42px; height: 42px;"></box-icon>`;
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [isMenuOpen]);

    const toggleMenuStyle = (isOpen) => {
        dropdownMenuRef.current.style.display = isOpen ? "block" : "none";
        topBarRef.current.style.height = isOpen ? "100%" : "auto";
        topBarRef.current.style.background = isOpen ? "rgba(35, 35, 35)" : "rgba(0, 0, 0, 0.35)";
        topBarRef.current.style.animation = isOpen ? "scale-up-top 0.4s linear" : "";
        menuButtonRef.current.innerHTML = isOpen
            ? `<box-icon name="x" color="#ffffff" id="botonx" style="width: 42px; height: 42px;"></box-icon>`
            : `<box-icon name="menu" color="#ffffff" id="botonmenu" style="width: 42px; height: 42px;"></box-icon>`;
    };

    const handleMenuToggle = () => {
        const isOpen = !isMenuOpen;
        toggleMenuStyle(isOpen);
        setMenuOpen(isOpen);
    };

    const closeMenu = () => {
        toggleMenuStyle(false);
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header__top-bar" ref={topBarRef}>
                <div className="header__menu-large">
                    <div className="header__menu-bar">
                        <ul className="header__menu-container">
                            <li className="header__menu-item"><Link className="header__menu-link" data-item="About Us" to="/about">About Us</Link></li>
                            <li className="header__menu-item"><Link className="header__menu-link" data-item="Download" to="/download">Download</Link></li>
                            <li className="header__menu-item"><Link className="header__menu-link" data-item="Subscribers" to="/subscribers">Subscribers</Link></li>
                            <li className="header__menu-item"><Link className="header__menu-link" data-item="News" to="/news">News</Link></li>
                        </ul>
                    </div>
                    <button className="header__menu-button" onClick={handleMenuToggle} ref={menuButtonRef}>
                        <box-icon className="header__icon" name="menu" color="#ffffff" style={{ width: "42px", height: "42px" }}></box-icon>
                    </button>
                    <div className="header__logo-bar">
                        <Link className="header__logo" onClick={closeMenu} to="/"><img src={logoPageantFans} alt="" /></Link>
                    </div>
                    <div className="header__login-frame">
                        <Link to="/joinus">
                            <button className="button__global--red button__global-join">Join Us</button>
                            <button className="button__global--red button__global--icon-join">
                                <FontAwesomeIcon icon={faUserPlus} className="icon__header--user" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="header__dropdown-menu" ref={dropdownMenuRef} id="dropdownMenu" style={{ display: "none" }}>
                    <ul className="header__expanded-menu">
                        <li className="header__expanded-menu-item"><Link onClick={handleMenuToggle} className="header__expanded-menu-link" to="/about">About Us</Link></li>
                        <li className="header__expanded-menu-item"><Link onClick={handleMenuToggle} className="header__expanded-menu-link" to="/download">Download</Link></li>
                        <li className="header__expanded-menu-item"><Link onClick={handleMenuToggle} className="header__expanded-menu-link" to="/subscribers">Subscribers</Link></li>
                        <li className="header__expanded-menu-item"><Link onClick={handleMenuToggle} className="header__expanded-menu-link" to="/news">News</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavPc;
