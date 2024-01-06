export type HousesType = {
    id: number
    buildAt: number
    required: boolean
    address: { number: number, street: { title: string } }
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    address: { number: number, street: { title: string } }
    budget: number
    staffCount: number
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}