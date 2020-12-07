export interface LoginResponse {
    jwt : string;
    expiresAt: Date;
    username: string;
}