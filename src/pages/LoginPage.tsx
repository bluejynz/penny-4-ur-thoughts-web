interface LoginPageProps {
    setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
    return <p>Login</p>;
};

export default LoginPage;
