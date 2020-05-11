export const randomString = () => Math.random().toString(36).substring(7)

const randomNumber = (span, min = 0) => Math.ceil(Math.random() * span - min)
const randomId = () => randomNumber(5000).toString()

export const randomWarehouse = () => ({
    id: randomId(),
    name: randomString(),
    latitude: randomNumber(360, 180),
    longitude: randomNumber(180, 90),
    capacity: randomNumber(200)
})

export const randomProductType = () => ({
    id: randomId(),
    name: randomString()
})

export const randomProduct = (type) => ({
    id: randomId(),
    name: randomString(),
    weight: randomNumber(19),
    type: (type != null ? type.id : randomId())
})

describe('test utils', () => {
    it('works', () => { })
})