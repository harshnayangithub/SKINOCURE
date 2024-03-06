import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      navigate('/'); // Redirect to homepage after logout
      // Display a success message
      alert('You have been successfully logged out.');
    }).catch((error) => {
      // An error happened.
      console.error(error);
      // Display an error message
      alert('An error occurred while logging out. Please try again later.');
    });
  };

  const handleDiagnosisClick = () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      // User is logged in, navigate to Diagnosis page
      navigate('/Scan');
    } else {
      // User is not logged in, show a message or redirect to login page
      alert('Please login to access Diagnosis.');
      navigate('/LoginPage');
    }
  };

  const currentUser = firebase.auth().currentUser;

  return (
    <>
      <header className="header" style={{ backgroundColor: '#f8f9fa', padding: '10px 0', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }}>
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-12 d-flex justify-content-center" style={{ alignItems: 'center' }}>
                  <div className="logo">
                    <Link to="/">
                      <img src="newlogo.png" id="myimg" alt="Logo" style={{ maxWidth: '200px' }} />
                    </Link>
                  </div>
                  <div className="mobile-menu-toggle d-lg-none">
                    <button onClick={toggleMobileNav} className="btn btn-mobile-nav-toggle" style={{ marginTop: '10px' }}>
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className={`col-lg-6 col-md-9 col-12 ${isMobileNavOpen ? 'open' : ''}`}>
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu" style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                        <li style={{ marginRight: '8px' }}>
                          <Link to="/" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>
                            <strong>Home</strong>
                          </Link>
                        </li>
                        <li style={{ marginRight: '8px' }}>
                          <Link to="/Doctors" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>
                            <strong>Dermatologists</strong>
                          </Link>
                        </li>
                        <li style={{ marginRight: '8px' }}>
                          <Link to="/Payment" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>
                            <strong>Appointment</strong>
                          </Link>
                        </li>
                        <li style={{ marginRight: '8px', marginTop: '25px', marginLeft: '10px' }}>
                          <button onClick={handleDiagnosisClick} style={{ color: '#333', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>
                            <strong>Diagnosis</strong>
                          </button>
                        </li>
                      </ul>

                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12" style={{ marginTop: '2px' }}>
                  <div className="user-profile">
                    {currentUser ? (
                      <>
                        <img src="user-profile-icon.png" alt="User Profile" style={{ width: '40px', borderRadius: '50%', cursor: 'pointer' }} />
                        <button onClick={handleLogout} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: '#007bff' }}>Logout</button>
                      </>
                    ) : (
                      <Link to="/LoginPage"
                        style={{ color: '#333', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.target.style.color = '#007bff'}
                        onMouseLeave={(e) => e.target.style.color = '#333'}>
                        <strong>Login/Signup</strong>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobileNavOpen && (
          <div className="mobile-nav" style={{ backgroundColor: '#f8f9fa', padding: '5px', textAlign: 'center' }}>
            <ul className="nav" style={{ listStyle: 'none', padding: '0', margin: '0', justifyContent: 'center' }}>
              <li style={{ marginRight: '1px' }}>
                <Link to="/" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>Home</Link>
              </li>
              <li style={{ marginRight: '1px' }}>
                <Link to="/Doctors" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>Dermatologist</Link>
              </li>
              <li style={{ marginRight: '1px' }}>
                <Link to="/Payment" style={{ color: '#333', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#007bff'} onMouseLeave={(e) => e.target.style.color = '#333'}>Appointment</Link>
              </li>
              <li style={{ marginRight: '1px', marginTop: '25px' }}>
                <button onClick={handleDiagnosisClick} style={{ color: '#333', textDecoration: 'none', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Diagnosis</button>
              </li>
            </ul>
          </div>
        )}
      </header>
      <div style={{ paddingTop: '100px' }}>
        {/* Your homepage content goes here */}
      </div>
    </>
  );
}

export default Header;
