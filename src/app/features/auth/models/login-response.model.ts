export interface LoginResponse {
    token: string;
    id: string;
    email: string;
    name: string;
    roles: string[];
}