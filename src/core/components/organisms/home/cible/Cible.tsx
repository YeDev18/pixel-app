import CibleCard from '@/core/components/molecules/Home/CibleCard/CibleCard';
import { div } from 'framer-motion/client';
import React, { useMemo } from 'react';

function Cible() {
  const ids = Array.from({ length: 26 }, (_, i) => i + 1);

  // Fonction pour mélanger l'ordre des ids
  const shuffledIds = useMemo(() => {
    const array = [...ids];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }, []);

  return (
 <div className=" space-y-4 sm:space-y-4 md:space-y-4 relative ">

      {/* Ombre à gauche avec effet de fumée */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 md:w-52 bg-gradient-to-r from-[#04374b] via-[#04374b] to-transparent pointer-events-none z-20" />

      {/* Première ligne : défile de gauche à droite */}
      <div className="overflow-hidden relative">
        <div className="inline-flex animate-scroll-right gap-2 sm:gap-4">
          {ids.map((id) => (
            <CibleCard key={id} id={id} />
          ))}
          {ids.map((id) => (
            <CibleCard key={`clone-${id}`} id={id} />
          ))}
        </div>
      </div>

      {/* Deuxième ligne : défile de droite à gauche */}
      <div className="overflow-hidden relative">
        <div className="inline-flex animate-scroll-left gap-2 sm:gap-4">
          {ids.map((id) => (
            <CibleCard key={id} id={id} />
          ))}
          {ids.map((id) => (
            <CibleCard key={`clone-${id}`} id={id} />
          ))}
        </div>
      </div>

      {/* Troisième ligne : défile de gauche à droite, ordre aléatoire */}
      <div className="overflow-hidden relative">
        <div className="inline-flex animate-scroll-right gap-2 sm:gap-4">
          {shuffledIds.map((id) => (
            <CibleCard key={id} id={id} />
          ))}
          {shuffledIds.map((id) => (
            <CibleCard key={`clone-${id}`} id={id} />
          ))}
        </div>
      </div>

      {/* Ombre à droite avec effet de fumée */}
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 md:w-52 bg-gradient-to-l from-[#04374b] via-[#04374b] to-transparent pointer-events-none z-20" />

      {/* Ombre en bas avec effet de fumée */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-28 bg-gradient-to-t from-[#04374b] via-[#04374b] to-transparent pointer-events-none z-20" />
    </div>

   
  );
}

export default Cible;
