import React, { useState, useEffect } from 'react';
import { ContactData } from '@/core/data/contact.data'; // Assurez-vous que le chemin est correct

// Définir les types des données
interface StatData {
  Team: string;
  project: string;
  Happy: string;
}

const Stat: React.FC = () => {
  // Récupérer les statistiques avec typage
  const stats: StatData = ContactData.stat[0];

  // Déclarer les états avec typage
  const [teamCount, setTeamCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [happyCount, setHappyCount] = useState<number>(0);

  // Fonction d'incrémentation
  const incrementCount = (
    setCount: React.Dispatch<React.SetStateAction<number>>, 
    target: number, 
    step: number = 20, 
    duration: number = 1000
  ) => {
    const increment = target / (duration / step);
    let count = 0;
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      setCount(Math.floor(count)); // Arrondir à l'entier inférieur
    }, step);
  };

  // Utiliser useEffect pour lancer l'incrémentation après le montage
  useEffect(() => {
    incrementCount(setTeamCount, parseInt(stats.Team), 20, 1000);
    incrementCount(setProjectCount, parseInt(stats.project), 20, 1000);
    incrementCount(setHappyCount, parseInt(stats.Happy), 20, 1000);
  }, [stats]);

  return (
    <div className="h-auto mt-[180px] mb-8 w-full flex justify-center items-center">
      <div className="w-full md:w-[60%] h-full rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Team Stat */}
        <div className="w-full sm:w-full md:w-1/3 flex flex-col items-center justify-center border-b border-t md:border-b md:border-r border-[rgba(255,255,255,0.1)] p-4 min-h-[250px]">
          <h2 className="text-[52px] font-[400] font-bold">{teamCount}+</h2>
          <p className="text-lg text-gray-500">Membres dans l'équipe</p>
        </div>
        {/* Project Stat */}
        <div className="w-full sm:w-full md:w-1/3 flex flex-col items-center justify-center border-b md:border-b md:border-r border-t border-[rgba(255,255,255,0.1)] p-4 min-h-[250px]">
          <h2 className="text-[52px] font-[400] font-bold">{projectCount}+</h2>
          <p className="text-lg text-gray-500">Projets terminés</p>
        </div>
        {/* Happy Clients Stat */}
        <div className="w-full sm:w-full md:w-1/3 flex flex-col items-center justify-center border-b border-t border-[rgba(255,255,255,0.1)] p-4 min-h-[250px]">
          <h2 className="text-[52px] font-[400] font-bold">{happyCount}+</h2>
          <p className="text-lg text-gray-500">Clients satisfaits</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
