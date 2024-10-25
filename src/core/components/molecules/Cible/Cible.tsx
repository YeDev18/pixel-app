import React from 'react';
import { TargetGroups } from '../../../data/Cible'; // Assurez-vous que le chemin est correct

function Cible() {
  const renderCards = () => {
    return TargetGroups.map((group, index) => (
      <div key={index} className="card mx-4 p-4 border rounded shadow-md">
        <h3 className="font-bold">{group.name}</h3>
        <p>{group.description}</p>
      </div>
    ));
  };

  return (
    <div className="overflow-hidden relative">
      {/* Ligne 1 : Défilement vers la gauche */}
      <div className="flex animate-scroll-left whitespace-nowrap">
      {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()} 
        {/* Répéter les cartes pour un effet de défilement infini */}
      </div>

      {/* Ligne 2 : Défilement vers la droite */}
      <div className="flex animate-scroll-right whitespace-nowrap mt-8">
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()} 
        {/* Répéter les cartes pour un effet de défilement infini */}
      </div>

      {/* Ligne 3 : Défilement vers la gauche */}
      <div className="flex animate-scroll-left whitespace-nowrap mt-8">
      {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()}
        {renderCards()} 
        {/* Répéter les cartes pour un effet de défilement infini */}
      </div>
    </div>
  );
}

export default Cible;
