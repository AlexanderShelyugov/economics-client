export const randomString = () => Math.random().toString(36).substring(7)

export const randomWarehouse = () => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: randomString(),
    latitude: Math.ceil(Math.random() * 360 - 180),
    longitude: Math.ceil(Math.random() * 180 - 90),
    capacity: Math.ceil(Math.random() * 200)
})

describe('test utils', () => {
    it('works', () => { })
})