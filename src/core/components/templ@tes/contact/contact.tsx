import CommentForm from "../../organisms/Contact/commentsForm/comments.form";
import Faq from "../../organisms/Contact/Faq/Faq";
import Stat from "../../organisms/Contact/Stat/stat";

const ContactAll = () => {
	return (
		<div className="mt-32 space-y-8 mb-10">
			<CommentForm />
			<Faq/>
			<Stat/>
		</div>
	);
};

export default ContactAll;
