import { Thought } from "@/interfaces/Thought";
import { useRef, useState } from "react";
import { FcCancel } from "react-icons/fc";
import AlertDialogBox from "../alert-dialog-box/AlertDialogBox";

interface UpdateInputProps {
    thought: Thought;
    toggleEdit: () => void;
    handleUpdate: (id: string, saying: string) => void;
}

function UpdateInput({ thought, toggleEdit, handleUpdate }: UpdateInputProps) {
    const [inputText, setInputText] = useState(thought.saying);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputTextChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInputText(e.target.value);

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        <div className="flex justify-between bg-slate-300 px-4 py-2 rounded-sm gap-2">
            <textarea
                className="focus:outline-none bg-transparent w-full resize-none"
                maxLength={256}
                rows={1}
                value={inputText}
                ref={textareaRef}
                onChange={handleInputTextChange}
            />
            <AlertDialogBox
                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                buttonName="Edit"
                title="Are you sure you want to edit this thought?"
                description="Once edited you won't have history."
                handleAction={() => handleUpdate(thought.id, inputText)}
            />
            <button
                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                title="Cancel"
                onClick={toggleEdit}
            >
                <FcCancel size={18} color="#e2e8f0" />
            </button>
        </div>
    );
}

export default UpdateInput;
