import { useRef } from "react";
import { createThought } from "../../services/thought/ThoughtService";
import { Thought } from "@/interfaces/Thought";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

interface ThoughtFormProps {
    thoughts: Thought[];
    setThoughts: (thoughts: Thought[]) => void;
}

const ThoughtForm = ({ thoughts, setThoughts }: ThoughtFormProps) => {
    const { toast } = useToast();
    const authorRef = useRef<HTMLInputElement>(null);
    const sayingRef = useRef<HTMLTextAreaElement>(null);

    const handleCreateThought = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!authorRef.current?.value || !sayingRef.current?.value) return;

        const response = await createThought({
            author: authorRef.current?.value,
            saying: sayingRef.current?.value,
        });

        if (response && response.data && response.status === 201) {
            setThoughts([...thoughts, response.data]);
            authorRef.current.value = "";
            sayingRef.current.value = "";
            toast({
                description: "Thought created!",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: (
                    <ToastAction
                        altText="Re-load Page"
                        onClick={() => window.location.reload()}
                    >
                        Re-load Page
                    </ToastAction>
                ),
            });
        }
    };

    return (
        <form
            className="flex flex-col my-6 gap-4"
            onSubmit={handleCreateThought}
        >
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Author</label>
                <input
                    className="px-4 py-1"
                    type="text"
                    placeholder="Author name"
                    ref={authorRef}
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Saying</label>
                <textarea
                    className="px-4 py-1 text-slate-800 resize-none"
                    placeholder="What are you thinking about?"
                    maxLength={256}
                    ref={sayingRef}
                    required
                />
            </div>
            <input
                className="w-auto self-center py-2 px-6 rounded-md bg-green-400 cursor-pointer"
                type="submit"
                value="Publish Thought"
            />
        </form>
    );
};

export default ThoughtForm;
