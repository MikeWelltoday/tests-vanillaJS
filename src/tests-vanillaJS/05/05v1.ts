export type ManType = {
    name: string
    age: number
}

export type devsType = {
    stack: Array<string>
    firstName: string
    lastName: string
}

// ========================================================================================

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

function dimychTransformator(man: ManType): devsType {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs: Array<devsType> = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew',
        lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander',
        lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov'
    }
]

const dev2: Array<devsType> = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3: Array<devsType> = people.map(item => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: item.name.split(' ')[0],
        lastName: item.name.split(' ')[1]
    }
})


export const D = {
    dev3
}