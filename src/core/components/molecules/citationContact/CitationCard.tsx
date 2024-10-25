import React from 'react';
import FormatQuote from '@/app/img/FormatQuote.png';
import { ContactData } from '../../../data/contact.data'; // Importer les données des citations
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CitationCard({ id }) {
  const { quotes } = ContactData;

  const quote = quotes.find((q) => q.id === id);

  if (!quote) {
    return <div>Citation introuvable</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center rounded-lg border-[rgba(255,255,255,0.1)] border-x relative md:w-[65%]">
      <div className="absolute px-12 top-0 left-0 m-4">
        <img src={FormatQuote} alt="Quote Icon" />
      </div>

      <div className="text-[32px] px-12 absolute items-center">
        "{quote.text}"
      </div>

      <div className="mt-4 text-lg absolute px-12 left-0 bottom-0 text-gray-600 text-center">
        <p>{quote.author}</p>
        <p className="italic">{quote.work}</p>
      </div>

      <div className="flex flex-col items-center px-12 mt-auto ml-auto">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          <FontAwesomeIcon icon={faChevronUp} size="1x" />
        </div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white mt-2">
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </div>
      </div>
    </div>
  );
}

export default CitationCard;
