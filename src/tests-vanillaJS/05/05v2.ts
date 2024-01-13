import {GovernmentBuildingsType, HousesType} from '../city'

function getStreetsTitlesOfGovernmentBuildings(governmentBuildings: GovernmentBuildingsType[]) {
    return governmentBuildings.map(item => item.address.street.title)
}

function getStreetsTitlesOfHouses(houses: HousesType[]): Array<string> {
    return houses.map(item => item.address.street.title)
}

function createMessages(houses: HousesType[]): Array<string> {

    function callBackFnk(item: HousesType) {
        return `Hello guys from ${item.address.street.title}`
    }

    // функция callBackFnk не вызывается
    // мы отдали ее внутрь map, и там уже она будет вызвана
    return houses.map(callBackFnk)
}

export const D = {
    getStreetsTitlesOfGovernmentBuildings,
    getStreetsTitlesOfHouses,
    createMessages
}