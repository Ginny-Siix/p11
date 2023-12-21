import React from "react";
import Menu from "../../containers/Menu";
import EventCard from "../../components/EventCard";
import Slider from "../../containers/Slider";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import Form from "../../containers/Form";
import Modal from "../../containers/Modal";
import EventList from "../../containers/Events";
import { useData } from "../../contexts/DataContext";

import "./style.scss";

const Page = () => {
  const { last } = useData();

  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section className="SliderContainer">
          <Slider />
        </section>
        <section className="ServicesContainer">
          <h2 className="Title">Nos services</h2>
          <p>Nous organisons des événements sur mesure partout dans le monde</p>
          <div className="ListContainer">{/* ... Autres services ... */}</div>
        </section>
        <section className="EventsContainer">
          <h2 className="Title">Nos réalisations</h2>
          <EventList />
        </section>
        <section className="PeoplesContainer">
          <h2 className="Title">Notre équipe</h2>
          <p>Une équipe d’experts dédiés à l’organisation de vos événements</p>
          <div className="ListContainer">
            {/* ... Membres de l'équipe ... */}
          </div>
        </section>
        <div className="FormContainer" id="contact">
          <h2 className="Title">Contact</h2>
          <Modal
            Content={
              <div className="ModalMessage--success">
                <div>Message envoyé !</div>
                <p>
                  Merci pour votre message, nous tâcherons de vous répondre dans
                  les plus brefs délais
                </p>
              </div>
            }
          >
            {({ setIsOpened }) => (
              <Form onSuccess={() => setIsOpened(true)} onError={() => null} />
            )}
          </Modal>
        </div>
      </main>
      <footer className="row">
        <div className="col presta">
          <h3>Notre dernière prestation</h3>
          <EventCard
            imageSrc={last?.cover || "la cover n'est pas défini"}
            title={last?.title || "le titre n'est pas défini"} // Assurez-vous de fournir une valeur par défaut si last?.title est 'undefined'
            date={new Date(last?.date)}
            small
            label="boom"
          />
          {}
        </div>
        <div className="col contact">
          <h3>Contactez-nous</h3>
          <address>45 avenue de la République, 75000 Paris</address>
          <div>01 23 45 67 89</div>
          <div>contact@77events.com</div>
          <div>
            <a href="#twitch">
              <Icon name="twitch" />
            </a>
            <a href="#facebook">
              <Icon name="facebook" />
            </a>
            <a href="#twitter">
              <Icon name="twitter" />
            </a>
            <a href="#youtube">
              <Icon name="youtube" />
            </a>
          </div>
        </div>
        <div className="col description">
          <Logo size="large" />
          <p>
            Une agence événementielle propose des prestations de service
            spécialisées dans la conception et l&apos;organisation de divers
            événements tels que des événements festifs, des manifestations
            sportives et culturelles, des événements professionnels
          </p>
        </div>
      </footer>
    </>
  );
};

export default Page;
