import { useState } from "react";
import { Thought } from "../../interfaces/Thought";
import { CgTrashEmpty } from "react-icons/cg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaHeart, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BiShare } from "react-icons/bi";
import { useToast } from "@/hooks/use-toast";
import { deleteThought } from "@/services/thought/ThoughtService";
import { ToastAction } from "../ui/toast";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import AlertBox from "../alert-box/AlertBox";

interface ThoughtCardProps {
    thought: Thought;
    reloadThoughts: (id: string) => void;
}

const ThoughtCard = ({ thought, reloadThoughts }: ThoughtCardProps) => {
    const { toast } = useToast();
    const [user, setUser] = useState("Dany Falk"); //alterar para localstorage futuramente

    const handleDeleteThought = async () => {
        const response = await deleteThought(thought.id);

        if (response && response.status === 200) {
            reloadThoughts(thought.id);
            toast({
                description: "Thought deleted!",
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
        <article className="w-full flex flex-col justify-between bg-slate-200 rounded-sm p-4 gap-2">
            <p>
                <span className="font-medium">Author: </span>
                {thought.author}
            </p>
            <div>
                <p>
                    <span className="font-medium">Saying: </span>
                    {thought.saying}
                </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {user && user === thought.author ? (
                        <>
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Edit"
                            >
                                <HiOutlinePencilAlt size={18} color="#e2e8f0" />
                            </button>
                            <AlertDialog>
                                <AlertDialogTrigger
                                    className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                    title="Delete"
                                >
                                    <CgTrashEmpty size={18} color="#e2e8f0" />
                                </AlertDialogTrigger>
                                <AlertBox
                                    handleAction={handleDeleteThought}
                                    title="Are you sure you want to delete this thought?"
                                    description="Once deleted there is no turning back."
                                />
                            </AlertDialog>
                        </>
                    ) : (
                        <>
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Like"
                            >
                                <FaRegHeart size={18} color="#e2e8f0" />
                                {/* <FaHeart size={18} color="#e2e8f0" /> */}
                                {/* filled heart */}
                            </button>
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Comment"
                            >
                                <VscCommentDiscussion
                                    size={18}
                                    color="#e2e8f0"
                                />
                            </button>
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Re-Post"
                            >
                                <BiShare size={18} color="#e2e8f0" />
                            </button>
                        </>
                    )}
                    <button
                        className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                        title="Share"
                    >
                        <FaRegShareSquare size={18} color="#e2e8f0" />
                    </button>
                </div>
                <p className="text-sm">{thought.created_at}</p>
            </div>
        </article>
    );
};

export default ThoughtCard;
