import {ManType} from './05v1'

let people: ManType[] = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18}
    ]
})


test.skip('Should get array of greeting messages', () => {

    const messages: string[] = people.map(item => `Hello ${item.name.split(' ')[0]}`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew')
    expect(messages[1]).toBe('Hello Alexander')
    expect(messages[2]).toBe('Hello Dmitry')

})