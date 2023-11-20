function catFactory(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, ${this.age} says Meow`);
        }
    }

    for (let info of arr) {
        let [name, age] = info.split(" ");
        let cat = new Cat(name, age)
        cat.meow()
    }
}
catFactory(['Mellow 2', 'Tom 5'])