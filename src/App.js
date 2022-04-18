import React from 'react';
import Navbar from "./components/Navbar";
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/loginForm';
import LogOut from './components/logOut';
import GuestPage from './components/GuestPage';
import {NavDropdown} from 'react-bootstrap';
import {Routes,Route} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <p>Welcome to </p>
      <h1>React Assessment</h1>
      </section>
    </>
  );
};

const Registration = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">

        <div>
          <RegistrationForm />
        </div>
      </section>
    </>
  );
};

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">

      <div>
        <LoginForm />
      </div>
      </section>
    </>
  );
};

const Logout = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">

      <div>
        <LogOut />
      </div>
      </section>
    </>
  );
};

const Guest = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <GuestPage />
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration/*" element={<Registration />} />
        <Route path="login/*" element={<Login />} />
        <Route path="logout/*" element={<Logout />} />
        <Route path="guest/*" element={<Guest />} />
      </Routes>
    </>
  );
};

export default App;
