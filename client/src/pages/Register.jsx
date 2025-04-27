import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";

const Register = () => {
  const [gebruikersType, setGebruikersType] = useState("particulier");
  const [inputs, setInputs] = useState({
    userType: "",
    username: "",
    vatNumber: "",
    firstName: "",
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleTypeChange = e => {
    setGebruikersType(e.target.value);
    setInputs(prev => ({...prev, "userType": e.target.value}));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/server/auth/register", inputs);
      alert("Formulier verzonden!");
      navigate("/login");
    } catch (error) {
      setError(error.response.data)
    }
  }
  
  return (
    <div className={styles.registratieContainer}>
      <h2>Registratie</h2>
      <form id={styles.registratieForm} onSubmit={handleSubmit}>
        {/* Gebruikerstype keuze */}
        <label>
          <input
            type="radio"
            name="gebruikersType"
            value="particulier"
            checked={gebruikersType === "particulier"}
            onChange={handleTypeChange}
            required
          />
          Particulier
        </label>
        <label>
          <input
            type="radio"
            name="gebruikersType"
            value="professioneel"
            checked={gebruikersType === "professioneel"}
            onChange={handleTypeChange}
            required
          />
          Professioneel
        </label>

        {/* Voornaam (alleen voor particulier) */}
        {gebruikersType === "particulier" && (
          <div id="voornaamVeld">
            <label htmlFor="voornaam">Voornaam:</label>
            <input type="text" id="voornaam" name="firstName" onChange={handleChange} required />
          </div>
        )}

        {/*Alleen voor professional*/}
        {gebruikersType === "professioneel" && (
          <div id="btwVeld">
            <label htmlFor="btwNummer">BTW-nummer:</label>
            <input type="text" id="btwNummer" name="vatNumber" onChange={handleChange} required />
          </div>
        )}

        {/* Naam */}
        <div>
          <label htmlFor="naam">Naam:</label>
          <input type="text" id="naam" name="name" onChange={handleChange} required />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">E-mailadres:</label>
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>

        {/* Wachtwoord */}
        <div>
          <label htmlFor="wachtwoord">Wachtwoord:</label>
          <input type="password" id="wachtwoord" name="password" onChange={handleChange} required />
        </div>

        <button type="submit">Registreren</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
