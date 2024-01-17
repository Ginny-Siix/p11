import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogOut } from "../../redux/reducers/userAuthSlice";
import { resetProfile } from "../../redux/reducers/profileSlice";
import logo from "../../assets/img/argentBankLogo.png";

export default function Header() {
  const token = useSelector((state) => state.userAuth.token);
  const profile = useSelector((state) => state.profile);
  const isEditing = useSelector((state) => state.editionMode.isOnEdition); // Ajout de la variable isEditing
  const dispatch = useDispatch();

  return (
    <header className={isEditing ? "edit-mode-header" : ""}>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className={`div-items ${isEditing ? "edit-mode" : ""}`}>
          {token && (
            <Link
              className={`main-nav-item ${isEditing ? "edit-mode" : ""}`}
              to="./user"
            >
              {profile.userName}
            </Link>
          )}
          <Link className={`main-nav-item ${isEditing ? "edit-mode" : ""}`}>
            <i
              className={`fa fa-user-circle ${isEditing ? "edit-mode" : ""}`}
            ></i>
          </Link>
          <Link
            to="#"
            className={`main-nav-item ${isEditing ? "edit-mode" : ""}`}
          >
            <i
              className={`fa fa-cog edit-mode-roue ${
                isEditing ? "edit-mode" : ""
              }`}
            ></i>
          </Link>
          <Link
            to="#"
            className={`main-nav-item ${isEditing ? "edit-mode" : ""}`}
            to={token ? "./" : "./sign-in/"}
            onClick={() => {
              if (token) {
                dispatch(setLogOut({}));
                dispatch(resetProfile());
              }
            }}
          >
            {token ? " Sign Out" : " Sign In"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
