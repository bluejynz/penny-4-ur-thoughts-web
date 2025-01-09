import SubmitButton from "../submit-button/SubmitButton";

const ThoughtForm = () => {
  return (
    <form className="flex flex-col my-6 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-slate-200 font-medium">Author</label>
        <input className="px-4 py-1" type="text" placeholder="Author name" required />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-slate-200 font-medium">Saying</label>
        <textarea
          className="px-4 py-1 text-slate-800 resize-none"
          placeholder="What are you thinking about?"
          maxLength={256}
          required
        />
      </div>
      <SubmitButton text="Publish Thought" />
    </form>
  );
};

export default ThoughtForm;
