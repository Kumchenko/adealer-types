import { ETimeframe } from './General'

export enum ECallMeFilter {
    All = 'all',
    Created = 'created',
    Checked = 'checked',
}

export enum ECallMeSortByField {
    ID = 'id',
    NAME = 'name',
    TEL = 'tel',
    EMAIL = 'email',
    COST = 'cost',
    CREATED = 'created',
    CHECKED = 'checked',
}

export type ICallMesGetQuery = {
    id?: string
    name?: string
    tel?: string
    page?: string
    perPage?: string
    from?: string
    to?: string
    filter?: ECallMeFilter
    apply?: boolean
    sortBy?: ECallMeSortByField
    sortDesc?: boolean
}

export interface ICallMeCheckParams {
    id: string
}

export interface ICallMe {
    id: number
    name: string
    tel: string
    created: string
    checked: string | null
}

export interface ICallMeRead extends ICallMe {}

export interface ICallMeCreate {
    name: string
    tel: string
}

export interface ICallMeUpdate {
    name?: string
    tel?: string
    checked?: boolean | string | null
}

export interface ICallMeStatistics {
    all: number
    created: number
    checked: number
}

export interface ICallMesGetStatsQuery {
    timeframe: ETimeframe
    to?: string
}
