


class Foo {
    // 属性
    name: string
    city: string
    n: number

    constructor(name: string, n: number) {
        this.name = name
        this.city = '北京'
        this.n = n
    }

    getName() {
        return this.name
    }
}

function customNewObject<T>(constructor: Function, ...args: any[]): T {

    const obj = Object.create(constructor.prototype)
    constructor.apply(obj, args)
    return obj
}

console.log(customNewObject<Foo>(Foo, 'cyt'))