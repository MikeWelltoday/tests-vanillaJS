import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from './04v2'
import {CityType} from '../city'

let city: CityType

beforeEach(() => {

    city = {
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

})

test.skip('Houses should be destroyed', () => {

    demolishHousesOnTheStreet(city, 'Happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})

test.skip('List of houses street titles', () => {

    let happyHouses = getHousesOnTheStreet(city.houses, 'Happy street')
    let whiteHouses = getHousesOnTheStreet(city.houses, 'White street')

    expect(happyHouses.length).toBe(2)
    expect(whiteHouses.length).toBe(1)
})

test.skip('Buildings with correct staff count', () => {

    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')

})