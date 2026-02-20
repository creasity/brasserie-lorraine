import React from "react";
import "./UeDisclaimer.css";

export default function UeDisclaimer() {
  return (
    <section className="before-social-section">
      <p className="before-social-intro">
          La Brasserie Lorraine s’inscrit depuis toujours dans l’histoire industrielle de la Martinique, avec un savoir-faire reconnu dans la production de bières et de boissons maltées. Nous sommes attachés à une fabrication locale de qualité, et œuvrons chaque jour à faire vivre cette tradition tout en accompagnant le développement de nouvelles saveurs et la diffusion de nos produits au-delà du territoire.
          Face aux surcoûts liés à l’éloignement géographique et au transport maritime, l’aide au fret UE constitue un appui déterminant. Elle contribue à atténuer les charges liées à l’importation des matières premières indispensables à notre production et facilite l’exportation de nos créations vers le marché européen.
          C’est un véritable coup de pouce pour notre activité : nous pouvons continuer à produire avec passion, renforcer notre compétitivité et valoriser la production martiniquaise sur le marché national.
      </p>
		<div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '600px', margin: '24px auto 0' }}>
		  <img src="/assets/La-fabrication-de-la-biere-_-ingredient-malt-dorge (1).jpg" alt="..." style={{ flex: '1 1 150px', objectFit: 'cover', maxWidth: '100%' }} />
		  <img src="/assets/Photo-chaine-de-prod.jpg" alt="..." style={{ flex: '1 1 150px', objectFit: 'cover', maxWidth: '100%' }} />
		  <img src="/assets/bottles_enhanced_8k.jpg" alt="..." style={{ flex: '1 1 150px', objectFit: 'cover', maxWidth: '100%' }} />
		</div>
      <p>
          Pour la période de janvier 2023 à décembre 2024, ce dispositif représente un montant de 972 258,46€.
           Ce soutien est rendu possible grâce au cofinancement de l’Union européenne et de la Collectivité Territoriale de Martinique, dans le cadre du Programme Opérationnel Martinique 2021-2027, illustrant l’engagement des institutions en faveur du développement économique local.

      </p>

      <div className="before-social-images">
        <img
          src="/assets/BL_-_logo_cofinancement_UE.png"
          alt="BL_-_logo_cofinancement_UE"
        />
        <img
          src="/assets/BL_-_logo_ctm.jpeg"
          alt="BL_-_logo_ctm"
        />
      </div>
    </section>
  );
}
