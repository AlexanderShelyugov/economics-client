export const randomString = () => Math.random().toString(36).substring(7)

export const randomWarehouse = () => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: randomString(),
    latitude: Math.ceil(Math.random() * 360 - 180),
    longitude: Math.ceil(Math.random() * 180 - 90),
    capacity: Math.ceil(Math.random() * 200)
})

export const randomProductType = () => ({
    id: randomString(),
    name: randomString()
})

export const randomProduct = (type) => ({
    id: Math.ceil(Math.random() * (5000)).toString(),
    name: randomString(),
    weight: Math.ceil(Math.random() * 19),
    type: (type != null ? type.id : randomString())
})

describe('test utils', () => {
    it('works', () => { })
})