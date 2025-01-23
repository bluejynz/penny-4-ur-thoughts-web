import ThoughtForm from "@/components/thought-form/ThoughtForm";
import ThoughtsList from "@/components/thoughts-list/ThoughtsList";
import { Thought } from "@/interfaces/Thought";
import { useState } from "react";

const ThoughtPage = () => {
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    return (
        <>
            <ThoughtForm thoughts={thoughts} setThoughts={setThoughts} />
            <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
        </>
    );
};

export default ThoughtPage;
