import React from 'react';
import '../design/Pricings.css';

export default function Pricings() {
  return (
    <section id="pricings" className="pricings">
            <h2>Tarifs</h2>
            <div className="pricing-container">
                <div className="pricing">
                    <h3>Standard</h3>
                    <p>Hébergement économique avec toutes les fonctions dont vous avez besoin pour vous lancer.</p>
                    <h2>3€ / mois</h2>
                </div>
                <div className="pricing">
                    <h3>Plus</h3>
                    <p>Deux fois plus de stockage et des ressources supplémentaires pour des sites Web professionnels.</p>
                    <h2>1€ / mois</h2>
                </div>
                <div className="pricing">
                    <h3>Premium</h3>
                    <p>Plus de puissance et de stockage pour vos sites Web de grande envergure.</p>
                    <h2>8€ / mois</h2>
                </div>
                <div className="pricing">
                    <h3>Ultimate</h3>
                    <p>Des performances maximales pour de nombreux projets Web et des boutiques en ligne à trafic élevé.</p>
                    <h2>13€ / mois</h2>
                </div>
            </div>
        </section>
  );
}
