import {UserType} from './10v1'

function hairdresser(u: UserType, power: number) {
    const copy = {
        ...u
    }
    copy.hair = u.hair / power

    return copy
}


test('test', () => {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const cutUser = hairdresser(user, 2)

    expect(cutUser.hair).toBe(16)

})





















