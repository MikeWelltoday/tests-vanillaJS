import {dev3, devsType} from './05v1'

beforeEach(() => {
    const devToTest: Array<devsType> = [...dev3]
})

test('Should return devs', () => {

    const sdfsdfsdf: Array<devsType> = [...dev3]

    expect(sdfsdfsdf.length).toBe(3)
    expect(sdfsdfsdf[0].stack[0]).toBe('css, html')
    expect(sdfsdfsdf[0].firstName).toBe('Andrew')
    expect(sdfsdfsdf[0].lastName).toBe('Ivanov')

})