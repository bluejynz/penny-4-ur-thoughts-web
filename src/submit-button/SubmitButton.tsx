interface SubmitButtonProps {
  text?: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return <button className="px-4 bg-green-400">{text ? text : "Submit"}</button>;
};

export default SubmitButton;
