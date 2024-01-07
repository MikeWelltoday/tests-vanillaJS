import {CityType} from '../city'
import {D} from './05v2'

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

test.skip('Streets titles list of government buildings', () => {

    let streetNames = D.getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe('Central Str')
    expect(streetNames[1]).toBe('South Str')

})

test.skip('Streets titles list', () => {

    let streets = D.getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('Happy street')

})

test('Create greeting messages for streets', () => {

    let messages = D.createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
})