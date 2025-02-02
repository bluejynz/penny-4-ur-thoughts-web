import { useState } from "react";
import { Thought } from "../../interfaces/Thought";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BiShare } from "react-icons/bi";
import { useToast } from "@/hooks/use-toast";
import {
    deleteThought,
    updateThought,
} from "@/services/thought/ThoughtService";
import { ToastAction } from "../ui/toast";
import UpdateInput from "../update-input/UpdateInput";
import AlertDialogBox from "../alert-dialog-box/AlertDialogBox";

interface ThoughtCardProps {
    thought: Thought;
    reloadThoughts: (id: string, action: string) => void;
}

const ThoughtCard = ({ thought, reloadThoughts }: ThoughtCardProps) => {
    const { toast } = useToast();
    const user = "Dany Falk"; //alterar para localstorage futuramente
    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteThought = async () => {
        const response = await deleteThought(thought.id);

        if (response && response.status === 200) {
            reloadThoughts(thought.id, "delete");
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

    const handleUpdateThought = async (id: string, saying: string) => {
        if (saying === thought.saying) {
            toast({
                description: "The text has not changed.",
            });
            return;
        }
        const response = await updateThought({ id, saying });

        if (response && response.status === 200) {
            reloadThoughts(thought.id, "update");
            toast({
                description: "Thought updated!",
            });
            setIsEditing(false);
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

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
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
            {isEditing && (
                <div>
                    <p className="font-medium">Edit:</p>
                    <UpdateInput
                        thought={thought}
                        toggleEdit={handleToggleEdit}
                        handleUpdate={handleUpdateThought}
                    />
                </div>
            )}
            <div className="flex justify-between">
                <div className="flex gap-2">
                    {user && user === thought.author ? (
                        <>
                            <button
                                className={`${
                                    isEditing
                                        ? "bg-slate-200 border-2 border-slate-800 cursor-not-allowed"
                                        : "bg-slate-800"
                                }  w-7 h-7 flex items-center justify-center rounded-md`}
                                title="Edit"
                                onClick={handleToggleEdit}
                                disabled={isEditing}
                            >
                                <HiOutlinePencilAlt
                                    size={18}
                                    color={isEditing ? "#1e293b" : "#e2e8f0"}
                                />
                            </button>
                            <AlertDialogBox
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                buttonName="Delete"
                                title="Are you sure you want to delete this thought?"
                                description="Once deleted there is no turning back."
                                handleAction={handleDeleteThought}
                            />
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
