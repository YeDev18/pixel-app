import CardValue from "@/core/components/molecules/Home/values/cardValue";

function Values() {
	return (
		<div className="  relative flex items-center justify-center">
			<div className="card_ombre absolute inset-1/2 -z-10 h-4 -translate-x-1/2 bg-black"></div>
			<div className="card_wrap grid grid-cols-1 place-content-center justify-center gap-4 max-md:w-screen md:grid-cols-2">
				<CardValue />
			</div>
		</div>
	);
}

export default Values;
