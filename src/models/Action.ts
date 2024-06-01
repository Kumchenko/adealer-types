export enum EActionSortByField {
    ID = 'id',
    LOGIN = 'login',
    DATE = 'date',
}

export enum EActionMethod {
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface IAction {
    id: number
    date: Date
    login: string
    method: EActionMethod
    action: string
}

export type IActionsGetQuery = {
    login?: string
    method?: EActionMethod
    page?: string
    perPage?: string
    from?: string
    to?: string
    sortBy?: EActionSortByField
    sortDesc?: boolean
}
