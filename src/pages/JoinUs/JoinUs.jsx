import './JoinUs.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import imgLaptopGirl1 from '../../assets/Images/LaptopGirl.gif';

function JoinUs() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted!");  
        event.target.submit();  
    };

    const navigate = useNavigate();  
    const handleBack = () => {
        navigate(-1);  
    };

    return (
        <section className="joinus">
            <div className="joinus__form">
                <div className="joinus__header">
                    <button onClick={handleBack} className="joinus__header-link">
                    <FontAwesomeIcon icon={faChevronLeft} className="joinus__header-arrow" style={{ color: "#000000" }} />
                    </button>
                    <h1 className="joinus__title">COMING SOON!</h1>
                </div>
                <div className="joinus__form-content joinus__form-content--hover">
                    <img src={imgLaptopGirl1} alt="this slowpoke moves" className="joinus__form-image" />
                    <form action="https://formsubmit.co/thombrodeur@gmail.com" method="POST" onSubmit={handleSubmit} className="joinus__form-fields">
                        <h3 className="joinus__form-title">Join our community!</h3>
                        <p className="joinus__form-description">
                            Exclusive content, community, and commerce with your favorite queens from around the world. Right here. Right now!
                        </p>
                        <label className="joinus__form-label" htmlFor="nameInput">
                            Name <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <input type="text" name="Name" id="nameInput" required className="joinus__form-input" />
                        <label className="joinus__form-label" htmlFor="emailInput">
                            Email <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <input type="email" name="Email" id="emailInput" required className="joinus__form-input" />
                        <label className="joinus__form-label" htmlFor="typeSelect">
                            Tell Us Who You Are <samp className="joinus__form-required" title="Required">*</samp>
                        </label>
                        <select className="joinus__form-select" name="Type of lead" id="typeSelect" required>
                            <option value="">Choose one</option>
                            <option value="Queen">Queen</option>
                            <option value="Fan">Fan</option>
                            <option value="Partner">Partner</option>
                        </select>
                        <label className="joinus__form-label" htmlFor="phoneInput">
                            Phone number <samp className="joinus__form-required" title="Optional">*</samp>
                        </label>
                        <input type="text" name="Phone-Number" id="phoneInput" required className="joinus__form-input" />
                        <p className="joinus__form-required-text">* Required fields</p>
                        <button className="joinus__form-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default JoinUs;

