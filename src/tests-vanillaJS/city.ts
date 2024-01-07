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

let city: CityType = {
    title: 'New York',
    houses: [
        {
            id: 1,
            buildAt: 2012,
            required: false,
            address: {
                number: 100,
                street: {title: 'White street'}
            }
        },
        {
            id: 2,
            buildAt: 2008,
            required: false,
            address: {
                number: 100,
                street: {title: 'Happy street'}
            }
        },
        {
            id: 3,
            buildAt: 2020,
            required: false,
            address: {
                number: 101,
                street: {title: 'Happy street'}
            }
        }
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL',
            address: {
                number: 12,
                street: {title: 'Central Str'}
            },
            budget: 200000,
            staffCount: 200
        },
        {
            type: 'FIRE-STATION',
            address: {
                number: 12,
                street: {title: 'South Str'}
            },
            budget: 500000,
            staffCount: 1000
        }
    ],
    citizensNumber: 1000000
}