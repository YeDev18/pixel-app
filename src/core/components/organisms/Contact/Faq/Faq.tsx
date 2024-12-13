"use client";

import { ContactData } from "@/core/data/contact.data";
// import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAnswer = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="flex h-fit flex-col bg-black p-8 md:flex-row">
			{/* Titre de la FAQ */}
			<div className="mb-8 flex justify-center md:w-2/5">
				<h1 className="text-[52px] ">
					Foire{" "}
					<span className="inline md:block">
						Aux Questions{" "}
						<span className="text-[70px] text-[#DC0000]">.</span>
					</span>
				</h1>
			</div>

			{/* Section FAQ */}
			<div className="w-full space-y-4 md:w-3/5">
				{ContactData.faq.map((item, index) => (
					<div
						key={index}
						className="border-b border-[rgba(255,255,255,0.1)]"
					>
						<div
							className="flex cursor-pointer items-center justify-between py-4"
							onClick={() => toggleAnswer(index)}
						>
							<span className="text-[18px] font-semibold">
								{item.question}
							</span>
							{/* <FontAwesomeIcon
								icon={openIndex === index ? faMinus : faPlus}
								className="ml-auto"
							/> */}
						</div>

						<div
							className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
								openIndex === index
									? "max-h-[500px]"
									: "max-h-0"
							}`}
						>
							<div
								className={`transition-opacity duration-500 ease-in-out ${
									openIndex === index
										? "opacity-100"
										: "opacity-0"
								}`}
							>
								<p className="py-2">{item.answer}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Faq;
