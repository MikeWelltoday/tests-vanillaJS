test('test', () => {

    type UserType = {
        name: string
        age: number
    }

    function increaseAge(item: UserType) {
        item.age++
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)


    expect(user.age).toBe(33)

})