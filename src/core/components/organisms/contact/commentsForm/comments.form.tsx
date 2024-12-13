import Comments from "@/core/components/molecules/contact/comments/comment";
// import FormField from "@/core/components/molecules/contact/form/form";

const CommentForm = () => {
	return (
		<div className=" flex  h-screen flex-row items-start justify-between gap-4 bg-slate-600 max-lg:flex-col">
			<Comments />
			{/* <FormField /> */}
		</div>
	);
};

export default CommentForm;

// flex h-screen items-start justify-between gap-4  max-lg:flex-col-reverse
