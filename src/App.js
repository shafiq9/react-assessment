import React from 'react';
import Navbar from "./components/Navbar";
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/loginForm';
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
      <p>You are </p>
      <h1>Log Out</h1>
      </section>
    </>
  );
};

const Guest = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
     
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
