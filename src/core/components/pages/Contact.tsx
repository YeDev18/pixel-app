// import FormatQuote from '../../../app/img/FormatQuote.png';
import { ContactData } from "../../data/contact.data"; // Assurez-vous d'importer vos données
import Faq from "../molecules/Faq/Faq";
import Stat from "../molecules/Stat/stat";
import Team from "../molecules/Team/Team";
import CitationCard from "../molecules/citationContact/CitationCard";
import Form from "../molecules/contactForm/Form";
import ExpandingCard from "../molecules/dontUse/expandingcard/expandingcard";

function Contact() {
	// Sélectionne la première citation pour cet exemple

	const { quotes } = ContactData;
	const quote = quotes[0]; // Choisir la première citation, par exemple

	return (
		<>
			<div className="mt-40 flex h-screen w-full flex-col gap-4 px-8 md:flex-row">
				{/* Citation section */}
				{/* <div className="w-[65%] h-full flex flex-col items-center justify-center rounded-lg border-[rgba(255,255,255,0.1)] border-x relative">
        <div className="absolute top-0 left-0 m-4">
          <img src={FormatQuote} alt="Quote Icon" />
        </div>

        <div className="text-[32px] absolute px-12 items-center justify-center text-center">
          "{quote.text}"
        </div>

        <div className="mt-4 text-lg absolute left-0 bottom-0 text-gray-600 text-center">
          <p>{quote.author}</p>
          <p className="italic">{quote.work}</p>
        </div>

        <Slider />
      </div> */}

				<CitationCard id={1} />

				{/* Formulaire section */}
				<Form />
			</div>

			<Faq />
			<Stat />
			<ExpandingCard />
			<Team />
		</>
	);
}

export default Contact;
