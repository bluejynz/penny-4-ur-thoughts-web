import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

interface AuthFormProps {
    isLogin: boolean;
}

const AuthForm = ({ isLogin }: AuthFormProps) => {
    const { toast } = useToast();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    // const handleCreateThought = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if (!authorRef.current?.value || !sayingRef.current?.value) return;

    //     const response = await createThought({
    //         author: authorRef.current?.value,
    //         saying: sayingRef.current?.value,
    //     });

    //     if (response && response.data && response.status === 201) {
    //         setThoughts([...thoughts, response.data]);
    //         authorRef.current.value = "";
    //         sayingRef.current.value = "";
    //         toast({
    //             description: "Thought created!",
    //         });
    //     } else {
    //         toast({
    //             variant: "destructive",
    //             title: "Uh oh! Something went wrong.",
    //             description: "There was a problem with your request.",
    //             action: (
    //                 <ToastAction
    //                     altText="Re-load Page"
    //                     onClick={() => window.location.reload()}
    //                 >
    //                     Re-load Page
    //                 </ToastAction>
    //             ),
    //         });
    //     }
    // };

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        isLogin ? handleLogin : handleRegister;
    };

    const handleLogin = async () => {
        console.log("login");
    };

    const handleRegister = async () => {
        console.log("register");
    };

    return (
        <form className="flex flex-col my-6 gap-4" onSubmit={handleSubmitForm}>
            {!isLogin && (
                <div className="flex flex-col gap-1">
                    <label className="text-slate-200 font-medium">
                        Full name
                    </label>
                    <input
                        className="px-4 py-1"
                        type="text"
                        placeholder="Full name"
                        ref={nameRef}
                        required
                    />
                </div>
            )}
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Email</label>
                <input
                    className="px-4 py-1"
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                    required
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-200 font-medium">Password</label>
                <input
                    className="px-4 py-1"
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />
            </div>
            {!isLogin && (
                <div className="flex flex-col gap-1">
                    <label className="text-slate-200 font-medium">
                        Confirm password
                    </label>
                    <input
                        className="px-4 py-1"
                        type="password"
                        placeholder="Confirm password"
                        ref={confirmPasswordRef}
                        required
                    />
                </div>
            )}
            <div className="flex flex-col gap-1">
                <button className="w-auto self-center text-sm text-slate-200 cursor-pointer hover:underline">
                    <p>
                        {isLogin
                            ? "Don't have an account? "
                            : "Already have an account? "}
                        <span className="font-medium">
                            {isLogin ? "Register" : "Login"}
                        </span>
                    </p>
                </button>
                <input
                    className="w-auto self-center py-2 px-6 rounded-md bg-green-400 cursor-pointer"
                    type="submit"
                    value={isLogin ? "Login" : "Register"}
                />
            </div>
        </form>
    );
};

export default AuthForm;
