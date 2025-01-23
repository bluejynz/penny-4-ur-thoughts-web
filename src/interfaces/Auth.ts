interface RegisterUser {
    name: string;
    email: string;
    password: string;
}

interface Login {
    email: string;
    password: string;
}

interface LoginResponse {
    user: {
        id: string;
        name: string;
        email: string;
        createdAt: string;
        updatedAt: string;
    };
    token: string;
}

export type { RegisterUser, Login, LoginResponse };
