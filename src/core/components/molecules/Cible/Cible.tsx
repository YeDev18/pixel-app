// import React from 'react';
// import CibleCard from '../../atoms/CibleCard';

// function CibleCardsContainer() {
//   const ids = Array.from({ length: 26 }, (_, i) => i + 1);

//   return (
//     <div className="bgheader space-y-4 relative">
//       {/* Ombre à gauche */}
//       <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#020a0d] to-transparent pointer-events-none z-20 opacity-90" />
//       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020a0d] to-[#020a0d] pointer-events-none z-10" />

//       {/* Première ligne : défile de gauche à droite */}
//       <div className="overflow-hidden relative">
//         <div className="inline-flex animate-scroll-right gap-4">
//           {ids.map((id) => (
//             <CibleCard key={id} id={id} />
//           ))}
//           {ids.map((id) => (
//             <CibleCard key={`clone-${id}`} id={id} />
//           ))}
//         </div>
//       </div>

//       {/* Deuxième ligne : défile de droite à gauche */}
//       <div className="overflow-hidden relative">
//         <div className="inline-flex animate-scroll-left gap-4">
//           {ids.map((id) => (
//             <CibleCard key={id} id={id} />
//           ))}
//           {ids.map((id) => (
//             <CibleCard key={`clone-${id}`} id={id} />
//           ))}
//         </div>
//       </div>

//       {/* Troisième ligne : défile de gauche à droite */}
//       <div className="overflow-hidden relative">
//         <div className="inline-flex animate-scroll-right gap-4">
//           {ids.map((id) => (
//             <CibleCard key={id} id={id} />
//           ))}
//           {ids.map((id) => (
//             <CibleCard key={`clone-${id}`} id={id} />
//           ))}
//         </div>
//       </div>

//       {/* Ombre à droite */}
//       <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#020a0d] to-transparent pointer-events-none z-20 opacity-90" />
//       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020a0d]  to-[#020a0d] pointer-events-none z-10 " />
//     </div>
//   );
// }

// export default CibleCardsContainer;

import React from 'react';
import CibleCard from '../../atoms/CibleCard';

function CibleCardsContainer() {
  const ids = Array.from({ length: 26 }, (_, i) => i + 1);

  return (
    <div className="bgheader space-y-4 relative">
      {/* Ombre à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-52 bg-gradient-to-r from-[#020a0d] to-transparent pointer-events-none z-20 " />
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020a0d] to-[#020a0d] pointer-events-none z-10 opacity-90" />
      {/* Première ligne : défile de gauche à droite */}
      <div className="overflow-hidden relative">
        <div className="inline-flex animate-scroll-right gap-4">
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
        <div className="inline-flex animate-scroll-left gap-4">
          {ids.map((id) => (
            <CibleCard key={id} id={id} />
          ))}
          {ids.map((id) => (
            <CibleCard key={`clone-${id}`} id={id} />
          ))}
        </div>
      </div>

      {/* Troisième ligne : défile de gauche à droite */}
      <div className="overflow-hidden relative">
        <div className="inline-flex animate-scroll-right gap-4">
          {ids.map((id) => (
            <CibleCard key={id} id={id} />
          ))}
          {ids.map((id) => (
            <CibleCard key={`clone-${id}`} id={id} />
          ))}
        </div>
      </div>

      {/* Ombre à droite */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020a0d]  to-[#020a0d] pointer-events-none z-10 " />
      <div className="absolute right-0 top-0 bottom-0 w-52 bg-gradient-to-l from-[#020a0d] to-transparent pointer-events-none z-10 opacity-100" />
    </div>
  );
}

export default CibleCardsContainer;
