import { useState } from "react";
import { Toaster } from "./components/ui/toaster";
import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import ThoughtPage from "./pages/ThoughtPage";
import LoginPage from "./pages/LoginPage";

function App() {
    const [isAuth, setIsAuth] = useState<boolean>(
        !!localStorage.getItem("authToken")
    );

    const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
        children,
    }) => {
        return isAuth ? children : <Navigate to="/login" />;
    };

    return (
        <div className="w-full min-h-screen bg-slate-800 flex justify-center px-4">
            <main className="my-10 w-full md:max-w-2xl">
                <h1 className="text-4xl text-center font-medium text-slate-200">
                    Penny For Your Thoughts
                </h1>

                <Toaster />
                <Router basename="/penny-4-ur-thoughts-web">
                    <Routes>
                        <Route
                            path="/login"
                            element={<LoginPage setAuth={setIsAuth} />}
                        />
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <ThoughtPage />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
