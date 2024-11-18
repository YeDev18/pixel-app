import ArrowUp from "@/core/components/atoms/icons/arrow.up";
import Quote from "@/core/components/atoms/icons/quote";
import Avatar from "@/core/components/atoms/icons/user";

import { CommmentsData } from "@/core/data/comments.data";

const Comments = () => {
	return (
		<>
			<div className="relative h-fit w-full ">
				<div className="absolute bottom-14 right-14 flex flex-col space-y-4 text-2xl font-semibold text-light-100">
					<button className=" cursor-pointer rounded-full border p-2">
						<ArrowUp />
					</button>
					<button className="rotate-180 cursor-pointer  rounded-full border p-2 ">
						<ArrowUp />
					</button>
				</div>
				{CommmentsData.map((comment) => {
					if (comment.id === 4) {
						return (
							<div
								className="w-full text-light-100"
								key={comment.id}
							>
								<div className="flex h-[45rem] max-h-[48rem] w-full  flex-col justify-between rounded-3xl bg-blue-800 p-8  lg:w-full">
									<Quote />
									<p className="text-xl/relaxed font-medium lg:text-2xl/relaxed">
										{comment.text}
									</p>
									<div className="flex space-x-4">
										<div className="text-5xl">
											<Avatar />
										</div>
										<div className="">
											<h1 className="text-xl font-bold">
												{comment.author}
											</h1>
											<h1 className="text-sm opacity-75">
												{comment.work}
											</h1>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</>
	);
};

export default Comments;
