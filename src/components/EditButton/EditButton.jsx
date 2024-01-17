import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../../redux/reducers/profileSlice";
import { setOnEdition } from "../../redux/reducers/editionMode.js";

export default function EditButton() {
  const token = useSelector((state) => state.userAuth.token);
  const profile = useSelector((state) => state.profile);
  const [newUserName, setNewUserName] = useState(profile.userName);
  const isEditing = useSelector((state) => state.editionMode.isOnEdition);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewUserName(profile.userName);
    return () => {
      dispatch(setOnEdition(false));
    };
  }, [profile.userName]);

  const editUserName = async (e) => {
    e.preventDefault();
    if (!newUserName.trim()) {
      // Gérer le cas où le nouveau nom d'utilisateur est vide
      return;
    }
    try {
      // Effectuer la requête de mise à jour du nom d'utilisateur
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUserName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update username");
      }
      // Mettre à jour le nom d'utilisateur dans le store Redux
      dispatch(setEditProfile(newUserName));
      // Désactiver le mode d'édition
      dispatch(setOnEdition(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="edit-button-container">
      {isEditing && (
        <div className="edit-form-container">
          <h2>Edit user info</h2>
          <div className="inline-form">
            <label htmlFor="newUserName">User name:</label>
            <input
              type="text"
              id="newUserName"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="inline-form">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              value={profile.firstName}
              disabled
            />
          </div>
          <div className="inline-form">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              className="inline-form--input"
              value={profile.lastName}
              disabled
            />
          </div>
          <div className="buttons-container">
            <button
              type="submit"
              className="save-button"
              onClick={editUserName}
            >
              Save
            </button>
            <button
              className="cancel-button"
              onClick={() => dispatch(setOnEdition(false))}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {!isEditing && (
        <button
          className="edit-button"
          onClick={() => dispatch(setOnEdition(true))}
        >
          Edit User Info
        </button>
      )}
    </div>
  );
}
