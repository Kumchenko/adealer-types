import { IEmployeeData } from './Employee'
import { ETimeframe } from './General'
import { EStatus, IOperation } from './Operation'
import { IService } from './Service'

export enum EOrderFilter {
    All = 'ALL',
    Created = 'CREATED',
    Process = 'INPROCESS',
    Done = 'DONE',
}

export enum EOrderSortByField {
    ID = 'id',
    Name = 'name',
    Surname = 'surname',
    Tel = 'tel',
    Email = 'email',
    Cost = 'cost',
    Created = 'created',
}

export type IOrdersGetQuery = {
    id?: string
    name?: string
    surname?: string
    tel?: string
    email?: string
    page?: string
    perPage?: string
    from?: string
    to?: string
    modelId?: string
    componentId?: string
    qualityId?: string
    apply?: boolean
    filter?: EOrderFilter
    sortBy?: EOrderSortByField
    sortDesc?: boolean
}

export interface IOrderCheckParams {
    id: string
}

export interface IOrderGetQuery {
    tel?: string
}

export interface IOrder {
    id: number
    serviceId: number
    name: string
    surname: string
    tel: string
    email: string
    cost: number
    created: Date
}

export interface IOrderRead extends IOrder {
    service: IService
    operations: IOperation[]
}

export interface IOrderCreate {
    name: string
    surname: string
    tel: string
    email: string
    modelId: string
    componentId: string
    qualityId: string
}

export interface IOrderUpdate {
    name?: string
    surname?: string
    tel?: string
    email?: string
    modelId?: string
    componentId?: string
    qualityId?: string
    cost?: string
    status?: EStatus
}

export interface IOrderStatistics {
    all: number
    created: number
    processing: number
    done: number
    model: string
    component: string
    counts: Array<{
        date: string
        orders: number
    }>
}

export interface IOrdersGetStatsQuery {
    timeframe?: ETimeframe
    to?: string
}
