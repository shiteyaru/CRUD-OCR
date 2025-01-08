export type LoginModel = {
    authenticated: boolean,
    create: Date,
    expiration: Date,
    accessToken: string,
    email: string,
    name: string,
    message: string
}
