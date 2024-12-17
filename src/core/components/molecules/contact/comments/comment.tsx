"use client";
import ArrowUp from "@/core/components/atoms/icons/arrow.up";
import Quote from "@/core/components/atoms/icons/quote";
import Avatar from "@/core/components/atoms/icons/user";

import { CommmentsData } from "@/core/data/comments.data";

import { useState } from "react";

const Comments = () => {
	const [commentIndex, setCommentIndex] = useState(1);
	const nextIndex = () => {
		if (commentIndex === CommmentsData.length) return;
		setCommentIndex((prev) => prev + 1);
	};
	const prevIndex = () => {
		if (commentIndex === 1) return;
		setCommentIndex((prev) => prev - 1);
	};
	return (
		<div className="relative h-[30rem] w-full lg:h-[45rem] ">
			<div className="absolute bottom-14 right-4 flex flex-col space-y-4 text-2xl font-semibold text-light-100">
				<button
					onClick={() => prevIndex}
					className=" cursor-pointer rounded-full border p-2"
				>
					<ArrowUp />
				</button>
				<button
					onClick={() => nextIndex}
					className="rotate-180 cursor-pointer  rounded-full border  p-2 "
				>
					<ArrowUp className="" />
				</button>
			</div>
			{CommmentsData.map((comment) => {
				if (comment.id === commentIndex) {
					return (
						<div
							className="h-full  text-light-100 "
							key={comment.id}
						>
							<div className="flex h-full flex-col  justify-between rounded-3xl bg-blue-800 p-8 lg:w-full">
								<Quote color="#DC0000" />
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
	);
};

export default Comments;
