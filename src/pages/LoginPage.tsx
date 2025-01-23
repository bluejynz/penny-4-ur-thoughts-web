import AuthForm from "@/components/auth-form/AuthForm";

interface LoginPageProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
    return <AuthForm isLogin={false} />;
};

export default LoginPage;
