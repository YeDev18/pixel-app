import Faq from "../../organisms/Contact/Faq/Faq";
import Stat from "../../organisms/Contact/Stat/stat";
import CommentForm from "../../organisms/contact/commentsForm/comments.form";

const ContactAll = () => {
	return (
		<div className="">
			<CommentForm />
			<Faq />
			<Stat />
		</div>
	);
};

export default ContactAll;
