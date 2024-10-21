export interface TextProps {
	text?: string;
}

const InputText = ({ text }: TextProps) => {
	return <input type="text" value={text} className="" />;
};

export default InputText;
