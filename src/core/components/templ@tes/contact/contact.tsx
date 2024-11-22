import CommentForm from "../../organisms/Contact/commentsForm/comments.form";
import Faq from "../../organisms/Contact/Faq/Faq";
import Stat from "../../organisms/Contact/Stat/stat";

const ContactAll = () => {
	return (
		<div className="mb-10 mt-32 space-y-8">
			<CommentForm />
			<Faq />
			<Stat />
		</div>
	);
};

export default ContactAll;
