import CardValue from "@/core/components/molecules/home/values/cardValue";

function Values() {
	return (
		<div className=" flex items-center justify-center">
			<div className=" grid w-fit grid-cols-2 place-content-center justify-center gap-4 p-4">
				<CardValue />
			</div>
		</div>
	);
}

export default Values;
