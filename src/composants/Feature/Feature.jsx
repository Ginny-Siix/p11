export default function Feature({ logo, altText, title, description }) {
  return (
    <article className="feature">
      <img src={logo} alt={altText} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p>{description}</p>
    </article>
  );
}
