import { useState } from "react";
import ThoughtForm from "./components/thought-form/ThoughtForm";
import ThoughtsList from "./components/thoughts-list/ThoughtsList";
import { Toaster } from "./components/ui/toaster";
import { Thought } from "./interfaces/Thought";

function App() {
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    return (
        <div className="w-full min-h-screen bg-slate-800 flex justify-center px-4">
            <main className="my-10 w-full md:max-w-2xl">
                <h1 className="text-4xl text-center font-medium text-slate-200">
                    Penny For Your Thoughts
                </h1>
                <ThoughtForm thoughts={thoughts} setThoughts={setThoughts} />
                <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
                <Toaster />
            </main>
        </div>
    );
}

export default App;
