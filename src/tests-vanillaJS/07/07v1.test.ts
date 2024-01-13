type manType = {
    name: string
    age: number
    lesson: Array<{ title: string }>
}

let man: manType

beforeEach(() => {
    man = {
        name: 'Dimych',
        age: 32,
        lesson: [{title: '1'}, {title: '2'}]
    }
})


test('', () => {

    let {name, age, lesson} = man

    expect(name).toBe('Dimych')
    expect(age).toBe(32)
    expect(lesson.length).toBe(2)

})