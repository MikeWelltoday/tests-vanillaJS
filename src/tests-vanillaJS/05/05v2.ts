import {GovernmentBuildingsType, HousesType} from '../city'

function getStreetsTitlesOfGovernmentBuildings(governmentBuildings: GovernmentBuildingsType[]) {
    return governmentBuildings.map(item => item.address.street.title)
}

function getStreetsTitlesOfHouses(houses: HousesType[]): Array<string> {
    return houses.map(item => item.address.street.title)
}

function createMessages(houses: HousesType[]): Array<string> {
    return houses.map(item => `Hello guys from ${item.address.street.title}`)
}

export const D = {
    getStreetsTitlesOfGovernmentBuildings,
    getStreetsTitlesOfHouses,
    createMessages
}