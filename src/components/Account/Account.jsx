import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

export default function Account({ title, amount, description }) {
  const isButtonClicked = useSelector((state) => state.editionMode.isOnEdition);

  return (
    <section className={`account ${isButtonClicked ? "clicked" : ""}`}>
      <div className="account-content-wrapper">
        <h3 className={`account-title ${isButtonClicked ? "white-text" : ""}`}>
          {title}
        </h3>
        <p className={`account-amount ${isButtonClicked ? "white-text" : ""}`}>
          {amount}
        </p>
        <p
          className={`account-amount-description ${
            isButtonClicked ? "white-text" : ""
          }`}
        >
          {description}
        </p>
      </div>
      <div className="account-content-wrapper cta">
        {isButtonClicked ? (
          // En mode édition, utilisez le composant FontAwesomeIcon avec faChevronRight
          <FontAwesomeIcon
            icon={faChevronRight}
            className="arrow-icon custom-icon"
            style={{ color: "white", fontSize: "4rem" }}
          />
        ) : (
          // Sinon, affichez le bouton "View transactions"
          <Button className="transaction-button">View transactions</Button>
        )}
      </div>
    </section>
  );
}
