import Comments from "@/core/components/molecules/contact/comments/comment";
import FormField from "@/core/components/molecules/contact/form/form";

const CommentForm = () => {
	return (
		<div className=" flex  h-fit flex-row items-start justify-between gap-4 max-lg:flex-col-reverse">
			<Comments />
			<FormField />
		</div>
	);
};

export default CommentForm;

// flex h-screen items-start justify-between gap-4  max-lg:flex-col-reverse
