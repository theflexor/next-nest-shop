export declare class LoginUserRequest {
    username: string;
    password: string;
}
export declare class LoginUserResponse {
    user: {
        userId: number;
        username: string;
        password: string;
    };
}
export declare class LogoutUserResponse {
    msg: string;
}
export declare class SignupUserResponse {
    id: number;
    username: string;
    password: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}
export declare class LoginCheckResponse {
    userId: number;
    username: string;
    email: string;
}
