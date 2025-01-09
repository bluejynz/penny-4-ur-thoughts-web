import ThoughtForm from "./thought-form/ThoughtForm";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-800 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl text-center font-medium text-slate-200">Penny For Your Thoughts</h1>
        <ThoughtForm />
      </main>
    </div>
  );
}

export default App;
