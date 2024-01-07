import {CityType, HousesType, GovernmentBuildingsType} from '../city'

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(item => item.address.street.title !== street)
}

export function getHousesOnTheStreet(houses: HousesType[], street: string) {
    return houses.filter(item => item.address.street.title === street)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: GovernmentBuildingsType[], number: number) {
    return buildings.filter(item => item.staffCount > number)
}

