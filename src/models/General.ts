export type IPaginated<T extends unknown> = {
    pagination: {
        pages: number
        page: number
        total: number
        perPage: number
    }
    data: T[]
}

export enum ETimeframe {
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
}
