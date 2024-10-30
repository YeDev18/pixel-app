import Contact from "../../molecules/footer/contact";
import Copyright from "../../molecules/footer/copyright";
import HeadFooter from "../../molecules/footer/head.footer";

const Footer = () => {
	return (
		<footer className="my-8 space-y-8 rounded-2xl bg-blue-900 p-4 lg:p-8 ">
			<Contact />
			<HeadFooter />
			<div className="border border-light-100 opacity-10"></div>
			<Copyright />
		</footer>
	);
};

export default Footer;
