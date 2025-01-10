import { useEffect, useState } from "react";
import { Thought } from "../../interfaces/Thought";
import ThoughtCard from "../thought-card/ThoughtCard";
import { getAllThoughts } from "../../services/thought/ThoughtService";

const ThoughtsList = () => {
    const [thoughts, setThoughts] = useState<Thought[]>();

    useEffect(() => {
        handleLoadAllThoughts();
    }, []);

    const handleLoadAllThoughts = async () => {
        const response = await getAllThoughts();
        setThoughts(response.data);
    };

    // const mockThoughts = [
    //     {
    //         id: "677ee83ecb277875960ed921",
    //         author: "Dany Falk",
    //         saying: "Penso, logo sofro.",
    //         created_at: "2025-01-08T21:03:58.003Z",
    //         updated_at: "2025-01-08T21:03:58.003Z",
    //     },
    //     {
    //         id: "677fd1b86ac9265ce34cd1e8",
    //         author: "Dany Falk",
    //         saying: "Tudo passa.",
    //         created_at: "2025-01-09T13:40:08.490Z",
    //         updated_at: "2025-01-09T13:40:08.490Z",
    //     },
    //     {
    //         id: "677ffb806363710c05585760",
    //         author: "Dany Falk",
    //         saying: "Alterando a frase",
    //         created_at: "2025-01-09T16:38:24.965Z",
    //         updated_at: "2025-01-09T16:50:18.446Z",
    //     },
    //     {
    //         id: "677ffc09f0b1d9da4d12d8s4",
    //         author: "Mahatma Gandhi",
    //         saying: "Be the change you wish to see in the world.",
    //         created_at: "2025-01-09T16:40:40.900Z",
    //         updated_at: "2025-01-09T16:52:00.607Z",
    //     },
    // ];

    // useEffect(() => {
    //     setThoughts(mockThoughts);
    // }, []);

    return (
        <section className="flex flex-col gap-2">
            {thoughts &&
                thoughts.map((thought) => (
                    <ThoughtCard key={thought.id} thought={thought} reloadThoughts={handleLoadAllThoughts} />
                ))}
        </section>
    );
};

export default ThoughtsList;
