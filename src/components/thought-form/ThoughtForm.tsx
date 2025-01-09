import { useState } from "react";
import SubmitButton from "../submit-button/SubmitButton";
import { createThought } from "../../services/thought/ThoughtService";

const ThoughtForm = () => {
    const [author, setAuthor] = useState("");
    const [saying, setSaying] = useState("");

    const handleCreateThought = (e: React.FormEvent) => {
        createThought({ author, saying });
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.target.value);
    };

    const handleSayingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSaying(e.target.value);
    };

    return (
        <form className="flex flex-col my-6 gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Author</label>
                <input
                    className="px-4 py-1"
                    type="text"
                    placeholder="Author name"
                    onChange={handleAuthorChange}
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Saying</label>
                <textarea
                    className="px-4 py-1 text-slate-800 resize-none"
                    placeholder="What are you thinking about?"
                    maxLength={256}
                    onChange={handleSayingChange}
                    required
                />
            </div>
            <SubmitButton
                text="Publish Thought"
                handleSubmit={handleCreateThought}
            />
        </form>
    );
};

export default ThoughtForm;
