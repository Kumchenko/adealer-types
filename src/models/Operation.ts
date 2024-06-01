export enum EStatus {
    DIAGNOSED = 'DIAGNOSED',
    INPROCESS = 'INPROCESS',
    DONE = 'DONE',
    ISSUED = 'ISSUED',
    RETURNED = 'RETURNED',
}

export interface IOperation {
    id: number
    dateTime: Date
    status: EStatus
    orderId: number
    employeeId: number
    employee: {
        id: number
        login: string
    }
}
