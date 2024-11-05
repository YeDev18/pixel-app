import Contact from "../../molecules/_all/footer/contact";
import Copyright from "../../molecules/_all/footer/copyright";
import HeadFooter from "../../molecules/_all/footer/head.footer";

const Footer = () => {
	return (
		<footer className="mb-8 mt-16 space-y-8 rounded-2xl bg-blue-900 p-4 lg:p-8 ">
			<Contact />
			<HeadFooter />
			<div className="border border-light-100 opacity-10"></div>
			<Copyright />
		</footer>
	);
};

export default Footer;
