export interface LoginResponse {
    token: string;
    email: string;
    name: string;
    roles: string[];
}