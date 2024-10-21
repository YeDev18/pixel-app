export interface EmailProps {
	email?: string;
}

const InputEmail = ({ email }: EmailProps) => {
	return <input type="email" value={email} className=" " />;
};

export default InputEmail;
