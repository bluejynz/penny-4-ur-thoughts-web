import { useState } from "react";
import { Thought } from "../../interfaces/Thought";
import { CgTrashEmpty } from "react-icons/cg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaHeart, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BiShare } from "react-icons/bi";

interface ThoughtCardProps {
    thought: Thought;
}

const ThoughtCard = ({ thought }: ThoughtCardProps) => {
    const [user, setUser] = useState("Dany Falk"); //alterar para localstorage futuramente

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
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Delete"
                            >
                                <CgTrashEmpty size={18} color="#e2e8f0" />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="bg-slate-800 w-7 h-7 flex items-center justify-center rounded-md"
                                title="Like"
                            >
                                <FaRegHeart size={18} color="#e2e8f0" />
                                {/* <FaHeart size={18} color="#e2e8f0" /> */}
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
