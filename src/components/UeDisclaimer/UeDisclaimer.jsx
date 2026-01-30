import React from "react";
import "./BeforeSocialSection.css";

export default function BeforeSocialSection() {
  return (
    <section className="before-social-section">
      <p className="before-social-intro">
        La Brasserie Lorraine, c’est avant tout un lieu de partage où la cuisine
        traditionnelle rencontre une ambiance chaleureuse et conviviale.
      </p>

      <div className="before-social-images">
        <img
          src="/assets/brasserie-1.jpg"
          alt="Brasserie Lorraine intérieur"
        />
        <img
          src="/assets/brasserie-2.jpg"
          alt="Brasserie Lorraine terrasse"
        />
      </div>

      <p className="before-social-text">
        Située au cœur de la Martinique, la Brasserie Lorraine vous accueille
        toute l’année pour des moments gourmands, entre amis ou en famille.
      </p>
    </section>
  );
}
