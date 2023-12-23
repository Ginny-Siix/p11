// pages/signinPage/SigninPage.jsx
import React, { useState } from "react";
import { TextInput, Button } from "votre-bibliothèque-de-composants"; // Assurez-vous d'importer les composants nécessaires

import "../../assets/style/main.css";

export default function SignIn() {
  // États pour les champs du formulaire
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("mot de passe");
  const [checkBox, setCheckBox] = useState(false);

  // Fonction de gestion de la soumission du formulaire
  const fetchLogIn = (e) => {
    e.preventDefault();
    // Effectuer les actions nécessaires, par exemple, envoyer les données au serveur
    console.log("Login submitted:", { email, password, rememberMe: checkBox });

    // Rediriger vers la page utilisateur après la connexion réussie
    history.push("/user");
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={fetchLogIn}>
          {/* Champ pour l'e-mail */}
          <TextInput
            className="input-wrapper"
            label="E-mail"
            id="email"
            type="text"
            autoComplete="email"
            value={email} // La valeur du champ est liée à l'état 'email'
            onChange={(e) => setEmail(e.target.value)} // Met à jour l'état 'email' lorsqu'il y a un changement dans le champ
          />
          {/* Champ pour le mot de passe */}
          <TextInput
            className="input-wrapper"
            label="Password"
            id="password"
            type="password"
            autoComplete="current-password"
            value={password} // La valeur du champ est liée à l'état 'password'
            onChange={(e) => setPassword(e.target.value)} // Met à jour l'état 'password' lorsqu'il y a un changement dans le champ
          />
          {/* Checkbox pour "Remember me" */}
          <TextInput
            className="input-remember"
            label="Remember me"
            id="remember-me"
            type="checkbox"
            checked={checkBox} // La valeur de la checkbox est liée à l'état 'checkBox'
            onChange={() => setCheckBox(!checkBox)} // Met à jour l'état 'checkBox' lorsqu'il y a un changement dans la checkbox
          />
          {/* Bouton de soumission du formulaire */}
          <Button className="sign-in-button" type="submit">
            Sign In
          </Button>{" "}
        </form>
      </section>
    </main>
  );
}
