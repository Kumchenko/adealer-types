export interface IServicesGetQuery {
    modelId?: string
    componentId?: string
    qualityId?: string
}

export interface IService {
    id: number
    modelId: string
    componentId: string
    qualityId: string
    cost: number
}
