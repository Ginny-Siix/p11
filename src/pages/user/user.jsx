import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetProfile } from "../../redux/reducers/profileSlice";
import { setOnEdition } from "../../redux/reducers/editionMode.js";
import Account from "../../components/Account/Account";
import EditButton from "../../components/EditButton/EditButton";

// Placez toutes les importations en haut du fichier

export default function User() {
  const token = useSelector((state) => state.userAuth.token);
  const profile = useSelector((state) => state.profile);
  const isEditing = useSelector((state) => state.editionMode.isOnEdition);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        dispatch(setGetProfile({ data }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUser();
  }, [token]);

  const handleInputChange = (e) => {
    // Gérez les changements de valeur des champs du formulaire si nécessaire
  };

  return (
    <main className={`main ${isEditing ? "" : "bg-dark"}`}>
      <div className={`header ${isEditing ? "editing-header" : ""}`}>
        {isEditing ? (
          // En mode édition, affichez les champs du formulaire
          <>
            <EditButton />
          </>
        ) : (
          // En mode normal, affichez le message de bienvenue
          <>
            <h1>
              Welcome back
              <br />
              {profile.firstName + " " + profile.lastName + "!"}
            </h1>
            <EditButton /> {/* Bouton toujours affiché */}
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}
