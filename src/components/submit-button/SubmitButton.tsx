interface SubmitButtonProps {
    text?: string;
    handleSubmit: (e: React.FormEvent) => void;
}

const SubmitButton = ({ text, handleSubmit }: SubmitButtonProps) => {
    return (
        <button
            className="w-auto self-center py-2 px-6 rounded-md bg-green-400"
            onClick={handleSubmit}
        >
            {text ? text : "Submit"}
        </button>
    );
};

export default SubmitButton;
