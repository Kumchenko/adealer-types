export interface IEmployeeLogin {
    login: string
    password: string
}

export interface IEmployeeBlock {
    login: string
    block: boolean
}

export interface IEmployeeAuthorization {
    id: number
    login: string
    accessToken: string
    refreshToken: string
}

export interface IEmployeeTokens {
    accessToken: string
    refreshToken: string
}

export interface IEmployeeData {
    id: number
    login: string
    role: string
    attempts: number
    password: string
}

export interface IEmployeeRead {
    id: number
    login: string
    role: string
    attempts: number
}

export interface IEmployeeAccess {
    accessToken: string
}

export interface IEmployeeRefresh {
    refreshToken: string
}
