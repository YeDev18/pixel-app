import FormatQuote from "@/app/img/FormatQuote.png";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ContactData } from "../../../data/contact.data"; // Importer les données des citations

function CitationCard({ id }) {
	const { quotes } = ContactData;

	const quote = quotes.find((q) => q.id === id);

	if (!quote) {
		return <div>Citation introuvable</div>;
	}

	return (
		<div className="relative flex size-full flex-col items-center justify-center rounded-lg border-x border-[rgba(255,255,255,0.1)] md:w-[65%]">
			<div className="absolute left-0 top-0 m-4 px-12">
				<img src={FormatQuote} alt="Quote Icon" />
			</div>

			<div className="absolute items-center px-12 text-[32px]">
				"{quote.text}"
			</div>

			<div className="absolute bottom-0 left-0 mt-4 px-12 text-center text-lg text-gray-600">
				<p>{quote.author}</p>
				<p className="italic">{quote.work}</p>
			</div>

			<div className="ml-auto mt-auto flex flex-col items-center px-12">
				<div className="flex size-8 items-center justify-center rounded-full bg-black text-white">
					<FontAwesomeIcon icon={faChevronUp} size="1x" />
				</div>
				<div className="mt-2 flex size-8 items-center justify-center rounded-full bg-black text-white">
					<FontAwesomeIcon icon={faChevronDown} size="1x" />
				</div>
			</div>
		</div>
	);
}

export default CitationCard;
